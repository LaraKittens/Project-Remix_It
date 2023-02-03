import "./Historic.scss";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Historic() {
  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/musicHistories`,
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
  return (
    <main className="bg-stone-900 h-screen p-16">
      <section className="historic  flex flex-col justify-center items-center w-screen">
        <div className="personalData  bg-stone-900" />
        {console.warn(history)}
        {history.map((histoRaw) => {
          return (
            <div key={histoRaw.id} className="flex p-2  ">
              <p className="text-white"> " {histoRaw.ancient_url} </p>
              <p className="text-white">" | "</p>
              <p className="text-white"> {histoRaw.new_url}</p>
              <p className="text-white">" | "</p>
              <p className="text-white"> {histoRaw.date} "</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
