import { Outlet } from "react-router-dom";

import Navbar from "../components/shared/navbar";
import Footer from "../components/shared/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
