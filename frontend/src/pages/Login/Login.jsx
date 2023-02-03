import "./Login.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { UseCurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Login({ admin = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const { setCurrentUser } = UseCurrentUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Tu dois écrire un email et un mot de passe");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
          {
            email,
            password,
          },
          { withCredentials: true }
        )

        .then(({ data }) => {
          setCurrentUser(data);
          if (admin && data.isAdmin) {
            navigate("/admin/themes");
          } else {
            navigate("/accueil");
          }
        })

        .catch((err) => {
          console.error(err);
        });
    }
  };

  const unsign = (e) => {
    e.preventDefault();
    navigate("/accueil");
  };

  return (
    <main className="container bg-stone-900 h-screen" id="login">
      <h1
        className={
          admin ? "lignebleu lignebleuAdmin" : "lignebleu text-red-700"
        }
      >
        Remix-It
      </h1>
      <h2 className="connect">Connectez-vous</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email" className="email">
          <input
            type="email"
            id="email"
            autoComplete="email"
            required
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label htmlFor="password" className="password">
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            required
            placeholder="Mot de passe"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button
          className={admin ? "login loginAdmin" : "login border-red-700"}
          type="submit"
        >
          Connexion
        </button>
      </form>
      {!admin && (
        <>
          <div>
            <p className="login-para">Pas de compte ? </p>
            <NavLink to="/Register">Inscrivez vous</NavLink>
          </div>
          <section>
            <button type="button" className="invité" onClick={unsign}>
              Continuer en tant qu'invité
            </button>
          </section>
        </>
      )}
    </main>
  );
}
