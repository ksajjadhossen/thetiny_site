import { Outlet } from "react-router-dom";

import Navbar from "../components/shared/navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}
