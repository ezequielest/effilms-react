import { useEffect } from "react";
import "./points-view.scss";

type PointsRulesModalProps = {
  open: boolean;
  onClose: () => void;
};

const pointLevels = [
  {
    name: "INICIAL",
    description: "Funciones y puntajes del nivel inicial.",
    roles: [
      { name: "Edición", points: "+1" },
      { name: "Edición en plazo establecido", points: "+1 adicional" },
      { name: "Filmación", points: "+2" },
      { name: "Team Leader", points: "+1" },
    ],
  },
  {
    name: "ESTÁNDAR",
    description: "Incluye un punto adicional por dron cuando corresponde.",
    roles: [
      { name: "Edición", points: "+2" },
      { name: "Edición en plazo establecido", points: "+1 adicional" },
      { name: "Filmación", points: "+3" },
      { name: "Dron adicional a Filmación", points: "+1" },
      { name: "Team Leader", points: "+2" },
    ],
  },
  {
    name: "PREMIUM",
    description: "Producciones con roles específicos de cámara.",
    roles: [
      { name: "Edición", points: "+4" },
      { name: "Edición en plazo establecido", points: "+2 adicionales" },
      { name: "Cámara principal (filma al cliente/host)", points: "+3" },
      { name: "Segunda cámara (filma la propiedad)", points: "+2" },
      { name: "Piloto de dron", points: "+1" },
      { name: "Asistente (si no hay segunda cámara)", points: "+1" },
      { name: "Team Leader", points: "+3" },
    ],
  },
];

export default function PointsRulesModal({
  open,
  onClose,
}: PointsRulesModalProps) {
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
      className="points-rules-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="points-rules-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="points-rules-title"
      >
        <header className="points-rules-header">
          <div>
            <p className="points-rules-eyebrow">SISTEMA DE PUNTOS</p>
            <h2 id="points-rules-title">
              <span>¿</span>Cómo se suman los puntos<span>?</span>
            </h2>
            <p>Conocé los puntajes correspondientes a cada función.</p>
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

        <div className="points-rules-content">
          <div className="points-rules-intro">
            <h3>¿Cómo funciona?</h3>
            <p>
              Cada función realizada durante un rodaje suma puntos según el
              nivel de servicio. Si la edición se entrega dentro del plazo
              acordado, se agrega la bonificación correspondiente.
            </p>
            <p>
              Una misma persona puede cumplir varias funciones. El equipo
              responsable evalúa las tareas realizadas y determina el total
              de puntos que se registra.
            </p>
          </div>

          <div className="points-rules-levels">
            {pointLevels.map((level) => (
              <article className="points-rules-level" key={level.name}>
                <div className="points-rules-level-heading">
                  <h3>{level.name}</h3>
                  <p>{level.description}</p>
                </div>

                <div className="points-rules-list">
                  {level.roles.map((role) => (
                    <div className="points-rules-row" key={role.name}>
                      <span>{role.name}</span>
                      <strong>{role.points}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="points-rules-note">
            <strong>A tener en cuenta</strong>
            <ul>
              <li>
                La bonificación por entrega en plazo se suma a los puntos de
                Edición; no los reemplaza.
              </li>
              <li>
                Los puntos se asignan por las funciones que realmente se
                realizaron, no por todos los roles disponibles del nivel.
              </li>
              <li>
                En Premium, el rol de Asistente se contempla cuando no hay
                segunda cámara.
              </li>
              <li>
                El dron no es habitual en todos los rodajes. Cuando se asigna
                un piloto, se contabiliza su función según las reglas del
                equipo.
              </li>
            </ul>
          </aside>
        </div>

        <button
          className="points-rules-understood"
          onClick={onClose}
          type="button"
        >
          Entendido
        </button>
      </section>
    </div>
  );
}
