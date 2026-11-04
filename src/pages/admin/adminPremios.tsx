
import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";


type Reward = {
  id: string;
  name: string;
  description: string;
  points_cost: number;
  active: boolean;
  created_at?: string;
  updated_at?: string;
};

type RewardForm = {
  name: string;
  description: string;
  points_cost: string;
};

const emptyForm: RewardForm = {
  name: "",
  description: "",
  points_cost: "50",
};

export default function AdminPremios() {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<RewardForm>(emptyForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showInactive, setShowInactive] = useState(true);

  const loadRewards = useCallback(async () => {
    setLoading(true);
    setError("");

    const { data, error: queryError } = await supabase
      .from("rewards")
      .select(
        "id, name, description, points_cost, active, created_at, updated_at"
      )
      .order("active", { ascending: false })
      .order("points_cost", { ascending: true })
      .order("name", { ascending: true });

    if (queryError) {
      setError(`No se pudieron cargar los regalos: ${queryError.message}`);
      setRewards([]);
    } else {
      setRewards((data ?? []) as Reward[]);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    void loadRewards();
  }, [loadRewards]);

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function startEditing(reward: Reward) {
    setEditingId(reward.id);
    setForm({
      name: reward.name,
      description: reward.description ?? "",
      points_cost: String(reward.points_cost),
    });
    setMessage("");
    setError("");

    document
      .getElementById("reward-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");

    const name = form.name.trim();
    const description = form.description.trim();
    const pointsCost = Number(form.points_cost);

    if (!name) {
      setError("Ingresá el nombre del regalo.");
      return;
    }

    if (
      !form.points_cost.trim() ||
      !Number.isSafeInteger(pointsCost) ||
      pointsCost <= 0
    ) {
      setError("El costo debe ser un número entero mayor que cero.");
      return;
    }

    setSaving(true);

    try {
      const result = editingId
        ? await supabase.rpc("update_reward", {
            p_reward_id: editingId,
            p_name: name,
            p_description: description,
            p_points_cost: pointsCost,
          })
        : await supabase.rpc("create_reward", {
            p_name: name,
            p_description: description,
            p_points_cost: pointsCost,
          });

      if (result.error) {
        throw result.error;
      }

      setMessage(
        editingId
          ? "El regalo se actualizó correctamente."
          : "El regalo se creó correctamente."
      );

      resetForm();
      await loadRewards();
    } catch (err) {
      const details =
        err instanceof Error ? err.message : "Error desconocido";
      setError(`No se pudo guardar el regalo: ${details}`);
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(reward: Reward) {
    const nextActive = !reward.active;

    const confirmation = nextActive
      ? `¿Querés activar "${reward.name}"? Aparecerá en la página pública.`
      : `¿Querés desactivar "${reward.name}"? Dejará de aparecer en la página pública.`;

    if (!window.confirm(confirmation)) return;

    setMessage("");
    setError("");
    setSaving(true);

    try {
      const { error: rpcError } = await supabase.rpc("set_reward_active", {
        p_reward_id: reward.id,
        p_active: nextActive,
      });

      if (rpcError) throw rpcError;

      setMessage(
        nextActive
          ? "El regalo se activó correctamente."
          : "El regalo se desactivó correctamente."
      );

      await loadRewards();
    } catch (err) {
      const details =
        err instanceof Error ? err.message : "Error desconocido";
      setError(`No se pudo cambiar el estado: ${details}`);
    } finally {
      setSaving(false);
    }
  }

  const visibleRewards = rewards.filter(
    (reward) => showInactive || reward.active
  );

  const activeCount = rewards.filter((reward) => reward.active).length;
  const inactiveCount = rewards.length - activeCount;

  return (
    <section className="rewards-admin">
      <header className="rewards-admin__header">
        <div>
          <h1>Administrar premios</h1>
          <p>
            Creá y actualizá los regalos disponibles para canjear con puntos.
          </p>
        </div>

        <button
          type="button"
          className="rewards-admin__primary"
          onClick={() => {
            resetForm();
            setMessage("");
            setError("");
            document
              .getElementById("reward-form")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          disabled={saving}
        >
          + Nuevo regalo
        </button>
      </header>

      <div className="rewards-admin__stats">
        <article className="rewards-admin__stat">
          <span>Regalos totales</span>
          <strong>{rewards.length}</strong>
        </article>

        <article className="rewards-admin__stat">
          <span>Activos</span>
          <strong>{activeCount}</strong>
        </article>

        <article className="rewards-admin__stat">
          <span>Inactivos</span>
          <strong>{inactiveCount}</strong>
        </article>
      </div>

      <section
        className="rewards-admin__panel"
        id="reward-form"
      >
        <div className="rewards-admin__panel-heading">
          <h2>{editingId ? "Editar regalo" : "Crear nuevo regalo"}</h2>
          {editingId && (
            <button
              type="button"
              className="rewards-admin__text-button"
              onClick={resetForm}
              disabled={saving}
            >
              Cancelar edición
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="rewards-admin__form">
          <label>
            Nombre del regalo *
            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              placeholder="Ej.: 2 entradas para el cine"
              maxLength={120}
              required
              disabled={saving}
            />
          </label>

          <label>
            Descripción
            <textarea
              value={form.description}
              onChange={(event) =>
                setForm({ ...form, description: event.target.value })
              }
              placeholder="Contá brevemente en qué consiste el regalo."
              rows={3}
              maxLength={1000}
              disabled={saving}
            />
          </label>

          <label>
            Costo en puntos *
            <input
              type="number"
              value={form.points_cost}
              onChange={(event) =>
                setForm({ ...form, points_cost: event.target.value })
              }
              min={1}
              step={1}
              required
              disabled={saving}
            />
          </label>

          <div className="rewards-admin__form-actions">
            <button
              type="submit"
              className="rewards-admin__primary"
              disabled={saving}
            >
              {saving
                ? "Guardando..."
                : editingId
                  ? "Guardar cambios"
                  : "Crear regalo"}
            </button>

            <button
              type="button"
              className="rewards-admin__secondary"
              onClick={resetForm}
              disabled={saving}
            >
              Limpiar
            </button>
          </div>
        </form>
      </section>

      {message && (
        <div className="rewards-admin__message" role="status">
          {message}
        </div>
      )}

      {error && (
        <div className="rewards-admin__error" role="alert">
          {error}
        </div>
      )}

      <section className="rewards-admin__panel">
        <div className="rewards-admin__panel-heading">
          <div>
            <h2>Regalos registrados</h2>
            <p>{visibleRewards.length} regalos en la lista</p>
          </div>

          <label className="rewards-admin__filter">
            <input
              type="checkbox"
              checked={showInactive}
              onChange={(event) => setShowInactive(event.target.checked)}
            />
            Mostrar inactivos
          </label>
        </div>

        {loading ? (
          <p className="rewards-admin__empty">Cargando regalos...</p>
        ) : visibleRewards.length === 0 ? (
          <p className="rewards-admin__empty">
            No hay regalos para mostrar.
          </p>
        ) : (
          <div className="rewards-admin__list">
            {visibleRewards.map((reward) => (
              <article
                className="rewards-admin__reward"
                key={reward.id}
              >
                <div className="rewards-admin__reward-info">
                  <div className="rewards-admin__reward-title">
                    <h3>{reward.name}</h3>
                    <span
                      className={`rewards-admin__status ${
                        reward.active
                          ? "rewards-admin__status--active"
                          : "rewards-admin__status--inactive"
                      }`}
                    >
                      {reward.active ? "Activo" : "Inactivo"}
                    </span>
                  </div>

                  <p className="rewards-admin__description">
                    {reward.description || "Sin descripción."}
                  </p>

                  <strong className="rewards-admin__cost">
                    {reward.points_cost} puntos
                  </strong>
                </div>

                <div className="rewards-admin__actions">
                  <button
                    type="button"
                    className="rewards-admin__secondary"
                    onClick={() => startEditing(reward)}
                    disabled={saving}
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className={
                      reward.active
                        ? "rewards-admin__danger"
                        : "rewards-admin__primary"
                    }
                    onClick={() => void toggleActive(reward)}
                    disabled={saving}
                  >
                    {reward.active ? "Desactivar" : "Activar"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
