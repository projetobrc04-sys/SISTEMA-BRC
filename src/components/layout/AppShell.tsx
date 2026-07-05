import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

export default function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app-shell">
      <Sidebar />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main className="app-main">
        <Header onMenuClick={() => setMobileOpen(true)} />
        <div className="content-wrap">
          <div className="page-motion" key={location.pathname}>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
