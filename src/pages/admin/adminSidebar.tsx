
type AdminSection = "points" | "rewards";

type AdminSidebarProps = {
  activeSection: AdminSection;
  onNavigate: (section: AdminSection) => void;
  email?: string;
  onLogout: () => void;
};

export default function AdminSidebar({
  activeSection,
  onNavigate,
  email,
  onLogout,
}: AdminSidebarProps) {
  return (
    <aside className="admin-sidebar">
      <a href="/" className="admin-sidebar-brand">
        <span className="admin-brand-mark">EF</span>
        <span>POINTS <small>ADMIN</small></span>
      </a>

      <p className="admin-sidebar-label">GESTIÓN</p>

      <nav className="admin-sidebar-nav" aria-label="Administración">
        <button
          type="button"
          className={`admin-nav-item ${
            activeSection === "points" ? "active" : ""
          }`}
          onClick={() => onNavigate("points")}
          aria-current={activeSection === "points" ? "page" : undefined}
        >
          <span className="admin-nav-icon">◎</span>
          <span>Administrar puntos</span>
        </button>

        <button
          type="button"
          className={`admin-nav-item ${
            activeSection === "rewards" ? "active" : ""
          }`}
          onClick={() => onNavigate("rewards")}
          aria-current={activeSection === "rewards" ? "page" : undefined}
        >
          <span className="admin-nav-icon">◇</span>
          <span>Administrar premios</span>
        </button>
      </nav>

      <div className="admin-sidebar-bottom">
        {email && <p className="admin-sidebar-email">{email}</p>}

        <button
          type="button"
          className="admin-logout"
          onClick={onLogout}
        >
          <span>↪</span> Cerrar sesión
        </button>
      </div>
    </aside>
  );
}

export type { AdminSection };
