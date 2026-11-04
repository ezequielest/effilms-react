
import { useEffect } from "react";
import "./rewards-modal.scss";

export type Reward = {
  id: string;
  name: string;
  description: string;
  points_cost: number;
};

type RewardsModalProps = {
  open: boolean;
  rewards: Reward[];
  loading?: boolean;
  onClose: () => void;
};

const formatPoints = (points: number) =>
  new Intl.NumberFormat("es-AR").format(points);

export default function RewardsModal({
  open,
  rewards,
  loading = false,
  onClose,
}: RewardsModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="rewards-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="rewards-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rewards-title"
      >
        <header className="rewards-modal-header">
          <div>
            <p className="rewards-eyebrow">RECOMPENSAS</p>
            <h2 id="rewards-title">Premios disponibles<span>.</span></h2>
            <p>Canjeá tus puntos por recompensas.</p>
          </div>

          <div
            className="rewards-close"
            onClick={onClose}
            aria-label="Cerrar premios"
          >
            <span>
 ×
            </span>
           
          </div>
        </header>

        {loading ? (
          <p className="rewards-message">Cargando premios...</p>
        ) : rewards.length === 0 ? (
          <p className="rewards-message">
            Por ahora no hay premios disponibles.
          </p>
        ) : (
          <div className="rewards-list">
            {rewards.map((reward) => (
              <article className="rewards-item" key={reward.id}>
                <div className="rewards-icon" aria-hidden="true">
                  ✦
                </div>

                <div className="rewards-info">
                  <h3>{reward.name}</h3>
                  {reward.description && <p>{reward.description}</p>}
                </div>

                <div className="rewards-cost">
                  <strong>{formatPoints(reward.points_cost)}</strong>
                  <span>puntos</span>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="rewards-footnote">
          Los canjes descuentan puntos disponibles, no tu ranking anual.
        </p>

        <button className="rewards-understood" onClick={onClose}>
          Entendido
        </button>
      </section>
    </div>
  );
}
