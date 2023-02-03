import "./Profil.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UseCurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Historic() {
  const [history, setHistory] = useState([]);
  const { user } = UseCurrentUserContext();
  const navigate = useNavigate();

  const getHistory = async () => {
    try {
      console.warn(user.id);
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/musicHistories/three/${
          user.id
        }`,
        { withCredentials: true }
      );
      setHistory(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  if (!user.id) {
    navigate("/");
  } else {
    return (
      <main className="h-[90vh] bg-stone-900">
        <section className="historic  flex flex-col justify-center items-center w-screen">
          <div className="personalData  bg-stone-900">
            {user.id && (
              <section className="coord flex p-4 text-red-800 justify-around w-screen">
                <p>Nom : {user.name}</p>
                <p> | </p>
                <p>Mail : {user.email}</p>
              </section>
            )}
          </div>
          {history.map((histoRaw) => {
            return (
              <div key={histoRaw.id} className="flex p-2  ">
                <p className="text-white"> {histoRaw.ancient_url}</p>
                <p className="text-white"> {histoRaw.new_url}</p>
                <p className="text-white"> {histoRaw.date}</p>
              </div>
            );
          })}
          <NavLink to="/history" className=" text-blue-500 ">
            Voir plus...
          </NavLink>
        </section>
      </main>
    );
  }
}
