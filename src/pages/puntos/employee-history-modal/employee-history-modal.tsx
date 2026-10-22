import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import "./employee-history-modal.scss";

type HistoryEntry = {
  id: number;
  points: number;
  reason: string;
  created_at: string;
  transaction_year: number;
  type: string;
};

type Props = {
  open: boolean;
  employeeId: string;
  employeeName: string;
  onClose: () => void;
  admin?: boolean;
};

export default function EmployeeHistoryModal({
  open,
  employeeId,
  employeeName,
  onClose,
  admin = false,
}: Props) {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState(String(currentYear));
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open || !employeeId) return;

    let cancelled = false;

    async function loadHistory() {
      setLoading(true);
      setError("");

      const rpcName = admin ? "get_admin_employee_history" : "get_public_employee_history";

      const { data, error: rpcError } = await supabase.rpc(rpcName, {
        p_employee_id: employeeId,
        p_year: year === "all" ? null : Number(year),
      });

      if (cancelled) return;

      if (rpcError) {
        setEntries([]);
        setError("No pudimos cargar el historial. Intentá nuevamente.");
      } else {
        setEntries((data ?? []) as HistoryEntry[]);
      }

      setLoading(false);
    }

    void loadHistory();

    return () => {
      cancelled = true;
    };
  }, [open, employeeId, year, admin]);

  useEffect(() => {
    if (open) {
      setYear(String(currentYear));
    }
  }, [open, currentYear]);

  if (!open) return null;

  const formatPoints = (points: number) => new Intl.NumberFormat("es-AR").format(points);

  const formatDate = (date: string) =>
    new Date(date).toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const movementLabel = (type: string) => {
    const labels: Record<string, string> = {
      earned: "Puntos ganados",
      redeemed: "Canje",
      adjustment_annual: "Ajuste anual",
      adjustment_available: "Ajuste de disponibles",
      adjustment_both: "Ajuste general",
    };

    return labels[type] ?? type.replaceAll("_", " ");
  };

  return (
    <div
      className="employee-history-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="employee-history-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="employee-history-title"
      >
        <header className="employee-history-header">
          <div>
            <span className="employee-history-eyebrow">HISTORIAL DE PUNTOS</span>
            <h2 id="employee-history-title" className="employee-history-title">
              {employeeName}
            </h2>
          </div>

          <button
            type="button"
            className="employee-history-close"
            onClick={onClose}
            aria-label="Cerrar historial"
          >
            ×
          </button>
        </header>

        <div className="employee-history-toolbar">
          <label>
            Año
            <select value={year} onChange={(event) => setYear(event.target.value)}>
              <option value="all">Todos los años</option>
              {Array.from({ length: 2 }, (_, index) => currentYear - index).map((itemYear) => (
                <option key={itemYear} value={String(itemYear)}>
                  {itemYear}
                </option>
              ))}
            </select>
          </label>

          {!loading && !error && (
            <span className="employee-history-count">{entries.length} movimientos</span>
          )}
        </div>

        {loading ? (
          <div className="employee-history-state">Cargando movimientos...</div>
        ) : error ? (
          <div className="employee-history-error" role="alert">
            {error}
            <button type="button" onClick={() => setYear((previous) => previous)}>
              Volver a consultar
            </button>
          </div>
        ) : entries.length === 0 ? (
          <div className="employee-history-state">
            No hay movimientos para el período seleccionado.
          </div>
        ) : (
          <div className="employee-history-list">
            {entries.map((entry) => (
              <article className="employee-history-item" key={entry.id}>
                <div className="employee-history-item-main">
                  <strong>{movementLabel(entry.type)}</strong>
                  <p>{entry.reason}</p>
                  <time dateTime={entry.created_at}>{formatDate(entry.created_at)}</time>
                </div>

                <strong
                  className={`employee-history-points ${
                    entry.points > 0
                      ? "employee-history-points--positive"
                      : entry.points < 0
                        ? "employee-history-points--negative"
                        : ""
                  }`}
                >
                  {entry.points > 0 ? "+" : ""}
                  {formatPoints(entry.points)} pts
                </strong>
              </article>
            ))}
          </div>
        )}

        <footer className="employee-history-footer">
          <button type="button" className="employee-history-done" onClick={onClose}>
            Cerrar
          </button>
        </footer>
      </section>
    </div>
  );
}
