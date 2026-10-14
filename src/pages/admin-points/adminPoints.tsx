import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabase";

type Employee = {
  id: string;
  name: string;
  active: boolean;
};

export default function AdminPuntos() {
  const [user, setUser] = useState<User | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeeId, setEmployeeId] = useState("");
  const [points, setPoints] = useState("1");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [operation, setOperation] = useState<"add" | "subtract">("add");

  useEffect(() => {
    let mounted = true;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setUser(session?.user ?? null);
        setCheckingSession(false);
      }
    });

    supabase.auth.getSession().then(({ data, error }) => {
      if (!mounted) return;

      if (error) setError(error.message);
      setUser(data.session?.user ?? null);
      setCheckingSession(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      setEmployees([]);
      setEmployeeId("");
      return;
    }

    let cancelled = false;

    async function loadEmployees() {
      setError("");

      const { data, error } = await supabase.rpc("get_admin_employees");

      if (cancelled) return;

      if (error) {
        setError(`No se pudieron cargar los empleados: ${error.message}`);
        return;
      }

      const activeEmployees = (data ?? []).filter((employee: Employee) => employee.active);

      setEmployees(activeEmployees);
      setEmployeeId((current) =>
        activeEmployees.some((employee: Employee) => employee.id === current)
          ? current
          : (activeEmployees[0]?.id ?? "")
      );
    }

    loadEmployees();

    return () => {
      cancelled = true;
    };
  }, [user]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(`No se pudo iniciar sesión: ${error.message}`);

    setLoading(false);
  }

  async function handleAddPoints(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    const parsedPoints = Number(points);

    if (!Number.isSafeInteger(parsedPoints) || parsedPoints <= 0) {
      setError("Ingresá una cantidad de puntos entera mayor que cero.");
      setLoading(false);
      return;
    }

    if (!employeeId) {
      setError("Seleccioná un empleado.");
      setLoading(false);
      return;
    }

    if (!reason.trim()) {
      setError("Indicá el motivo del movimiento.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.rpc("add_points", {
      p_employee_id: employeeId,
      p_points: operation === "subtract" ? -parsedPoints : parsedPoints,
      p_reason: reason.trim(),
    });

    if (error) {
      setError(`No se pudieron registrar los puntos: ${error.message}`);
    } else {
      const employee = employees.find((item) => item.id === employeeId);
      setMessage(
        `Se registraron ${parsedPoints} punto(s) para ${employee?.name ?? "el empleado"}.`
      );
      setPoints("1");
      setReason("");
    }

    setLoading(false);
  }

  async function handleLogout() {
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signOut();

    if (error) setError(`No se pudo cerrar sesión: ${error.message}`);
  }

  if (checkingSession) {
    return <main className="container py-5">Verificando sesión...</main>;
  }

  return (
    <main className="container py-5" style={{ maxWidth: 720 }}>
      <h1 className="mb-4">Administración de puntos</h1>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {message && (
        <div className="alert alert-success" role="status">
          {message}
        </div>
      )}

      {!user ? (
        <section className="card">
          <div className="card-body">
            <h2 className="h4 mb-3">Iniciar sesión</h2>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="username"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Ingresando..." : "Iniciar sesión"}
              </button>
            </form>
          </div>
        </section>
      ) : (
        <section className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center gap-3 mb-4">
              <div>
                <h2 className="h4 mb-1">Registrar puntos</h2>
                <small className="text-muted">{user.email}</small>
              </div>

              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>

            <form onSubmit={handleAddPoints}>
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                  Empleado
                </label>
                <select
                  id="employee"
                  className="form-select"
                  value={employeeId}
                  onChange={(event) => setEmployeeId(event.target.value)}
                  required
                  disabled={employees.length === 0}
                >
                  {employees.length === 0 && <option value="">No hay empleados activos</option>}
                  {employees.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="points" className="form-label">
                  Cantidad de puntos
                </label>
                <input
                  id="points"
                  type="number"
                  className="form-control"
                  min="1"
                  step="1"
                  value={points}
                  onChange={(event) => setPoints(event.target.value)}
                  required
                />
                <div className="form-text">Para restar puntos, elegí la opción de abajo.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="operation" className="form-label">
                  Operación
                </label>
                <select
                  id="operation"
                  className="form-select"
                  value={operation}
                  onChange={(event) => setOperation(event.target.value as "add" | "subtract")}
                >
                  <option value="add">Sumar puntos</option>
                  <option value="subtract">Restar puntos</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="reason" className="form-label">
                  Motivo
                </label>
                <textarea
                  id="reason"
                  className="form-control"
                  rows={3}
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
                  placeholder="Ej.: completó una tarea del equipo"
                  maxLength={500}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading || employees.length === 0}
              >
                {loading ? "Guardando..." : "Registrar movimiento"}
              </button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}
