import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./ranking-pints.scss";

type EmployeePoints = {
  id: string;
  name: string;
  points: number;
};

export default function Ranking() {
  const [employees, setEmployees] = useState<EmployeePoints[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadRanking = useCallback(async () => {
    setError("");

    const { data, error } = await supabase.rpc("get_public_employee_points");

    if (error) {
      setError("No pudimos cargar el ranking. Intentá nuevamente.");
      setLoading(false);
      return;
    }

    const ranking = (data ?? []) as EmployeePoints[];

    ranking.sort(
      (a, b) => Number(b.points) - Number(a.points) || a.name.localeCompare(b.name, "es")
    );

    setEmployees(ranking);
    setLastUpdated(new Date());
    setLoading(false);
  }, []);

  useEffect(() => {
    void loadRanking();

    const interval = window.setInterval(() => {
      void loadRanking();
    }, 60000);

    return () => window.clearInterval(interval);
  }, [loadRanking]);

  const podium = employees.slice(0, 3);
  const rest = employees.slice(3);

  const podiumOrder = [
    { employee: podium[1], rank: 2 },
    { employee: podium[0], rank: 1 },
    { employee: podium[2], rank: 3 },
  ].filter((item) => item.employee);

  const formatPoints = (points: number) => new Intl.NumberFormat("es-AR").format(Number(points));

  return (
    <main className="points-page">
      <div className="points-container">
        <header className="points-header">
          <a href="/" className="points-brand" aria-label="Ir al inicio">
            <span className="points-brand-mark">EF</span>
            <span>POINTS</span>
          </a>

          <div className="points-live">
            <span className="points-live-dot" />
            CLASIFICACIÓN EN VIVO
          </div>
        </header>

        <section className="points-intro">
          <p className="points-eyebrow">RECONOCIMIENTO AL DESEMPEÑO</p>
          <h1>
            El ranking<span>.</span>
          </h1>
          <p className="points-subtitle">Reconocemos el trabajo bien hecho.</p>
        </section>

        {error && (
          <div className="points-error" role="alert">
            <span>{error}</span>
            <button onClick={() => void loadRanking()}>Reintentar</button>
          </div>
        )}

        {loading ? (
          <div className="points-loading">
            <span className="points-spinner" />
            Cargando clasificación...
          </div>
        ) : employees.length === 0 && !error ? (
          <div className="points-empty">
            <span className="points-empty-symbol">—</span>
            <h2>El ranking empieza acá.</h2>
            <p>Cuando haya empleados activos, aparecerán en esta sección.</p>
          </div>
        ) : (
          <>
            {podium.length > 0 && (
              <section className="points-podium-section">
                <div className="points-section-heading">
                  <span>TOP {podium.length}</span>
                </div>

                <div className="points-podium">
                  {podiumOrder.map(({ employee, rank }) => {
                    if (!employee) return null;

                    return (
                      <article className={`points-podium-card rank-${rank}`} key={employee.id}>
                        <div className="points-rank-number">{String(rank).padStart(2, "0")}</div>

                        <div className="points-avatar" aria-hidden="true">
                          {employee.name.trim().charAt(0).toUpperCase()}
                        </div>

                        <h3>{employee.name}</h3>

                        <div className="points-score">
                          {formatPoints(employee.points)}
                          <span> pts</span>
                        </div>

                        <div className="points-rank-label">
                          {rank === 1
                            ? "PRIMER PUESTO"
                            : rank === 2
                              ? "SEGUNDO PUESTO"
                              : "TERCER PUESTO"}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {rest.length > 0 && (
              <section className="points-table-section">
                <div className="points-section-heading">
                  <h2>Tabla general</h2>
                  <span>{employees.length} EMPLEADOS</span>
                </div>

                <div className="points-table">
                  {rest.map((employee, index) => (
                    <article className="points-row" key={employee.id}>
                      <span className="points-row-rank">{String(index + 4).padStart(2, "0")}</span>

                      <span className="points-row-avatar" aria-hidden="true">
                        {employee.name.trim().charAt(0).toUpperCase()}
                      </span>

                      <span className="points-row-name">{employee.name}</span>

                      <span className="points-row-score">
                        {formatPoints(employee.points)}
                        <span> pts</span>
                      </span>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <div className="points-bottom">
              <p>Los puntajes reflejan los movimientos registrados.</p>

              <button
                className="points-refresh"
                onClick={() => {
                  setLoading(true);
                  void loadRanking();
                }}
                disabled={loading}
              >
                ↻ Actualizar ranking
              </button>
            </div>
          </>
        )}

        <footer className="points-footer">
          <span>PUNTOS © {new Date().getFullYear()}</span>
          <span>
            {lastUpdated
              ? `ACTUALIZADO ${lastUpdated.toLocaleTimeString("es-AR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`
              : "SISTEMA DE RECONOCIMIENTO"}
          </span>
        </footer>
      </div>
    </main>
  );
}
