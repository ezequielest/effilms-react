import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./ranking-pints.scss";
import RewardsModal from "./rewards-modal/rewards-modal";
import PointsRulesModal from "./points-view-modal/pointsViewModal";
import EmployeeHistoryModal from "./employee-history-modal/employee-history-modal";

// Si ya tenés estos tipos definidos en otro archivo, podés importar esos tipos.
type EmployeePoints = {
  id: string;
  name: string;
  annual_points: number;
  available_points: number;
};

type Reward = {
  id: string;
  name: string;
  description: string;
  points_cost: number;
};

type RankedEmployee = {
  employee: EmployeePoints;
  rank: number;
};

type EmployeeDeliveryStreak = {
  employee_id: string;
  current_streak: number;
  total_on_time: number;
};

export default function Ranking() {
  const [employees, setEmployees] = useState<EmployeePoints[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const [rewardsOpen, setRewardsOpen] = useState(false);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [rewardsLoading, setRewardsLoading] = useState(false);
  const [pointsRulesOpen, setPointsRulesOpen] = useState(false);
  const [deliveryStreaks, setDeliveryStreaks] = useState<Record<string, EmployeeDeliveryStreak>>(
    {}
  );
  const [historyEmployee, setHistoryEmployee] = useState<EmployeePoints | null>(null);

  const loadRanking = useCallback(async () => {
    setError("");

    const { data, error } = await supabase.rpc("get_public_employee_points");

    if (error) {
      setError("No pudimos cargar el ranking. Intentá nuevamente.");
      setLoading(false);
      return;
    }

    const ranking = ((data ?? []) as EmployeePoints[]).sort(
      (a, b) =>
        Number(b.annual_points) - Number(a.annual_points) || a.name.localeCompare(b.name, "es")
    );

    setEmployees(ranking);
    setLastUpdated(new Date());
    setLoading(false);

    const { data: streakData, error: streakError } = await supabase.rpc(
      "get_public_employee_delivery_streaks"
    );

    if (!streakError) {
      const streakMap: Record<string, EmployeeDeliveryStreak> = {};

      (streakData ?? []).forEach((item: EmployeeDeliveryStreak) => {
        const streak = item as EmployeeDeliveryStreak;
        streakMap[streak.employee_id] = streak;
      });

      setDeliveryStreaks(streakMap);
    } else {
      console.error("Error cargando las rachas:", streakError);
    }
  }, []);

  useEffect(() => {
    void loadRanking();

    const interval = window.setInterval(() => {
      void loadRanking();
    }, 60000);

    return () => window.clearInterval(interval);
  }, [loadRanking]);

  // Calculamos las posiciones compartidas cuando hay empate.
  // Ejemplo: 150, 150, 100, 80, 80, 60 → puestos 1, 1, 3, 4, 4, 6.
  const rankedEmployees: RankedEmployee[] = [];
  let currentRank = 0;

  employees.forEach((employee, index) => {
    const previous = employees[index - 1];

    if (index === 0 || Number(employee.annual_points) !== Number(previous.annual_points)) {
      currentRank = index + 1;
    }

    rankedEmployees.push({
      employee,
      rank: currentRank,
    });
  });

  // Incluye a todos los empleados empatados en los tres primeros puestos.
  const podiumEmployees = rankedEmployees.filter((item) => item.rank <= 3);

  // Orden visual: segundo, primero y tercero.
  const podiumOrder = [
    ...podiumEmployees.filter((item) => item.rank === 2),
    ...podiumEmployees.filter((item) => item.rank === 1),
    ...podiumEmployees.filter((item) => item.rank === 3),
  ];

  // La tabla muestra los puestos reales, sin reiniciar la numeración.
  const rest = rankedEmployees.filter((item) => item.rank > 3);

  const formatPoints = (points: number) => new Intl.NumberFormat("es-AR").format(Number(points));

  const getRankLabel = (rank: number) => {
    if (rank === 1) return "PRIMER PUESTO";
    if (rank === 2) return "SEGUNDO PUESTO";
    if (rank === 3) return "TERCER PUESTO";
    return `${rank}° PUESTO`;
  };

  const loadRewards = useCallback(async () => {
    setRewardsLoading(true);

    const { data, error } = await supabase
      .from("rewards")
      .select("id, name, description, points_cost")
      .eq("active", true)
      .order("points_cost", { ascending: true });

    if (error) {
      console.error("Error cargando premios:", error);
      setRewards([]);
    } else {
      setRewards((data ?? []) as Reward[]);
    }

    setRewardsLoading(false);
  }, []);

  const openRewards = () => {
    setRewardsOpen(true);
    void loadRewards();
  };

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
          <h1>
            El ranking<span>.</span>
          </h1>
          <p className="points-eyebrow">Que sea épico</p>
          <span> Objetivos semanale próximamente</span>
        </section>

        {error && (
          <div className="points-error" role="alert">
            <span>{error}</span>
            <button
              onClick={() => {
                setLoading(true);
                void loadRanking();
              }}
            >
              Reintentar
            </button>
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
            {podiumOrder.length > 0 && (
              <section className="points-podium-section">
                <div className="points-section-heading">
                  <span>TOP {podiumEmployees.length}</span>
                </div>

                <div className="points-podium">
                  {podiumOrder.map(({ employee, rank }) => (
                    <article className={`points-podium-card rank-${rank}`} key={employee.id}>
                      <div className="points-rank-number">{String(rank).padStart(2, "0")}</div>

                      <div className="points-avatar" aria-hidden="true">
                        {employee.name.trim().charAt(0).toUpperCase()}
                      </div>

                      <h3>{employee.name}</h3>

                      <div className="points-score">
                        <div className="points-annual">
                          {formatPoints(employee.annual_points)} pts
                        </div>
                        <div className="points-available">
                          Disponibles: {formatPoints(employee.available_points)} pts
                        </div>
                      </div>

                      <div className="points-streak">
                        🔥 Racha: {deliveryStreaks[employee.id]?.current_streak ?? 0}{" "}
                        {(deliveryStreaks[employee.id]?.current_streak ?? 0) === 1
                          ? "entrega"
                          : "entregas"}{" "}
                        en plazo
                      </div>

                      {/*<div className="points-streak-total">
                        Total en plazo:{" "}
                        {deliveryStreaks[employee.id]?.total_on_time ?? 0}
                      </div>*/}

                      <div className="points-rank-label">{getRankLabel(rank)}</div>

                      <button
                        type="button"
                        className="points-history-button"
                        onClick={() => setHistoryEmployee(employee)}
                      >
                        Ver historial
                      </button>
                    </article>
                  ))}
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
                  {rest.map(({ employee, rank }) => (
                    <article className="points-row" key={employee.id}>
                      <span className="points-row-rank">{String(rank).padStart(2, "0")}</span>
                      <span className="points-row-avatar" aria-hidden="true">
                        {employee.name.trim().charAt(0).toUpperCase()}
                      </span>
                      <span className="points-row-name">{employee.name}</span>
                      <span className="points-row-score">
                        {formatPoints(employee.annual_points)}
                        <span> pts</span>
                      </span>
                      <div className="points-streak">
                        🔥 Racha: {deliveryStreaks[employee.id]?.current_streak ?? 0}{" "}
                        {(deliveryStreaks[employee.id]?.current_streak ?? 0) === 1
                          ? "entrega"
                          : "entregas"}{" "}
                        en plazo
                      </div>
                      <div className="points-streak-total">
                        Total en plazo: {deliveryStreaks[employee.id]?.total_on_time ?? 0}
                      </div>
                      <div className="points-available">
                        Disponibles: {formatPoints(employee.available_points)} pts
                      </div>
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

            <div className="actions-buttons-container">
              <div className="points-rewards-action">
                <button onClick={openRewards}>✦ Ver premios disponibles</button>
              </div>
              <div className="points-rewards-action">
                <button onClick={() => setPointsRulesOpen(true)}>ⓘ Cómo se suman los puntos</button>
              </div>
            </div>
          </>
        )}

        <footer className="points-footer">
          <span>EFFILMS © {new Date().getFullYear()}</span>
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

      <RewardsModal
        open={rewardsOpen}
        rewards={rewards}
        loading={rewardsLoading}
        onClose={() => setRewardsOpen(false)}
      />
      <PointsRulesModal open={pointsRulesOpen} onClose={() => setPointsRulesOpen(false)} />

      <EmployeeHistoryModal
        open={historyEmployee !== null}
        employeeId={historyEmployee?.id ?? ""}
        employeeName={historyEmployee?.name ?? ""}
        onClose={() => setHistoryEmployee(null)}
      />
    </main>
  );
}
