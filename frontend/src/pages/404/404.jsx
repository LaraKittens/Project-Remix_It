import "./404.scss";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="">
      <header>
        <div className="h-screen flex justify-center items-center flex-col bg-black">
          <h1 className="text-2xl text-white">404 NOT FOUND</h1>
          <NavLink to="/accueil" className="underline m-8 decoration-red-500">
            <h2 className="text-5xl text-red-500  "> Return to Home ^^</h2>
          </NavLink>
          <h3 className="text-2xl text-gray-700 ">
            music wasn't here , you can CLICK IN THIS BIG RED TEXT{" "}
          </h3>
        </div>
      </header>
    </main>
  );
}
