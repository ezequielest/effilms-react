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
      { name: "Revision de guión", points: "+5" },
      { name: "Edición", points: "+10" },
      { name: "Edición en plazo establecido", points: "+10 adicional" },
      { name: "Filmación", points: "+20" },
      { name: "Team Leader", points: "+10" },
    ],
  },
  {
    name: "ESTÁNDAR",
    description: "Incluye un punto adicional por dron cuando corresponde.",
    roles: [
      { name: "Revision de guión", points: "+5" },
      { name: "Edición", points: "+20" },
      { name: "Edición en plazo establecido", points: "+10 adicional" },
      { name: "Filmación", points: "+30" },
      { name: "Dron adicional a Filmación", points: "+10" },
      { name: "Team Leader", points: "+20" },
    ],
  },
  {
    name: "PREMIUM",
    description: "Producciones con roles específicos de cámara.",
    roles: [
      { name: "Creación de guión", points: "+20" },
      { name: "Edición", points: "+30" },
      { name: "Edición en plazo establecido", points: "+15 adicionales" },
      { name: "Cámara principal (filma al cliente/host)", points: "+30" },
      { name: "Segunda cámara (filma la propiedad)", points: "+20" },
      { name: "Piloto de dron", points: "+10" },
      { name: "Asistente (si no hay segunda cámara)", points: "+10" },
      { name: "Team Leader", points: "+30" },
    ],
  },
{
  name: "EXTRAS",
  description: "¿Querés sumar puntos en tu tiempo libre?",
  roles: [
    { name: "Publicar foto en red social", points: "+2" },
    { name: "Publicar un video", points: "+3" },
    { name: "Publicar encuesta / pregunta", points: "+4" },
    { name: "Editar reel", points: "+5" },
    { name: "Grabar reel en equipo", points: "+10" },
    { name: "Historia hablando a cámara", points: "+15" },
    { name: "Grabar reel", points: "+15" },
    { name: "Enseñar habilidad nueva", points: "+25" },
    { name: "Conseguir una racha de 3 entregas en plazo", points: "+20" },
    { name: "Completar un desafío mensual opcional", points: "+10" },
    { name: "Sumar cliente nuevo INICIAL", points: "+500" },
    { name: "Sumar cliente nuevo ESTANDAR", points: "+1000" },
    { name: "Sumar cliente nuevo PREMIUM", points: "+2000" },

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

        <aside className="points-rules-note streak">
            <strong>🔥 Rachas de entregas en plazo</strong>
            <span>La constancia también suma. Cada vez que realizás una entrega en plazo, tu racha aumenta y demuestra tu compromiso con el equipo y la calidad del trabajo.</span>
            <ul>
                <li>Entregas consecutivas en plazo:** cada entrega realizada dentro del plazo acordado suma 1 a tu racha.</li>
                <li>Bono por constancia:** al alcanzar 3 entregas consecutivas en plazo, recibís una bonificación de **+15 puntos**.</li>
                <li>¿Una entrega fuera de plazo?** Tu racha vuelve a cero y podés empezar a construirla nuevamente con tu próxima entrega en plazo.</li>
            </ul>
          </aside>

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
