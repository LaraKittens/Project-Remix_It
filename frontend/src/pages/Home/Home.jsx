import { UseCurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Home.scss";

export default function Home() {
  const { user } = UseCurrentUserContext();
  return (
    <main className="">
      <header>
        <div className="personalData  bg-stone-900">
          {user.id && (
            <section className="coord flex p-4 text-red-800 justify-around">
              <p>Nom : {user.name}</p>
              <p> | </p>
              <p>Mail : {user.email}</p>
            </section>
          )}
        </div>
      </header>
      <div className=" bg-stone-900  h-screen flex justify-center p-12">
        <section className="">
          <h1 className="text-red-700 text-5xl"> Remix-It</h1>
          <h1 className="text-red-700 text-3xl p-8 m-8"> Description:</h1>
          <p className="text-white text-5xl ">
            {" "}
            Vous avez envie de nouveauté en gardant la fraicheur de vos musiques
            , Remix-It est là pour ça{" "}
          </p>
        </section>
      </div>
    </main>
  );
}
