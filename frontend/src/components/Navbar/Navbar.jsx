import { Outlet } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <header className="h-[20vh] bg-red-600 ">
        <nav>
          <h1>Zartek</h1>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
