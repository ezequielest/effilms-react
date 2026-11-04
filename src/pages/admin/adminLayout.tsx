
import type { ReactNode } from "react";
import AdminSidebar, { type AdminSection } from "./adminSidebar";
import "./admin.scss";

type AdminLayoutProps = {
  activeSection: AdminSection;
  onNavigate: (section: AdminSection) => void;
  email?: string;
  onLogout: () => void;
  children: ReactNode;
};

export default function AdminLayout({
  activeSection,
  onNavigate,
  email,
  onLogout,
  children,
}: AdminLayoutProps) {
  return (
    <main className="admin-shell">
      <AdminSidebar
        activeSection={activeSection}
        onNavigate={onNavigate}
        email={email}
        onLogout={onLogout}
      />

      <section className="admin-main">
        <header className="admin-topbar">
          <span>EFFILMS / ADMINISTRACIÓN</span>
          <span className="admin-status">
            <span className="admin-status-dot" />
            Panel de gestión
          </span>
        </header>

        <div className="admin-content">{children}</div>
      </section>
    </main>
  );
}
