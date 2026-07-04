import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

export default function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main className="app-main">
        <Header onMenuClick={() => setMobileOpen(true)} />
        <div className="content-wrap">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
