import { Outlet, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import {
  BsFillBookmarksFill,
  BsPenFill,
  BsFillBookmarkStarFill,
} from "react-icons/bs";
import "./Navbar.scss";
import { UseCurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Navbar() {
  const { user } = UseCurrentUserContext();
  return (
    <>
      <header className="h-[10vh] bg-red-600 ">
        <nav className="h-full flex justify-around items-center">
          {user.id ? (
            <NavLink to="/profil" className="navbar-item">
              <AiFillHome className="IconColorFixed" />
              <p>Profil</p>
            </NavLink>
          ) : (
            <NavLink to="/" className="navbar-item">
              <AiFillHome className="IconColorFixed" />
              <p>Login</p>
            </NavLink>
          )}
          <NavLink to="/accueil" className="navbar-item">
            <ImBooks className="IconColorDynamic" />
            <p>Accueil</p>
          </NavLink>
          <NavLink to="/music" className="navbar-item">
            <BsFillBookmarksFill className="IconColorDynamic" />
            <p>Music</p>
          </NavLink>

          <NavLink to="/history" className="navbar-item">
            <BsFillBookmarkStarFill className="IconColorDynamic" />
            <p>Historque</p>
          </NavLink>
          <NavLink to="/register" className="navbar-item">
            <BsPenFill className="IconColorDynamic" />
            <p>Register</p>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
