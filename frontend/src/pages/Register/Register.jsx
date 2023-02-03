import { useState } from "react";
import "./Register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleRegister = (e) => {
    if (
      e.target.className === "overlay" ||
      e.target.className === "close-register" ||
      e.target.className === "btn-register" ||
      e.target.className === "form" ||
      e.key === "Enter"
    ) {
      setRegister(!register);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Tu dois écrire un nom, un email et un mot de passe");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`,
          {
            name,
            email,
            password,
          },
          { withCredentials: true }
        )

        .then(() => {
          toggleRegister(e);
          navigate("/");
        })

        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="register bg-stone-900">
      <div className="register-content">
        <h2 className="nouveau-compte">Nouveau compte</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="name">
            <input
              type="name"
              id="name"
              autoComplete="name"
              required
              placeholder="Nom / Prénom"
              value={name}
              onChange={handleChangeName}
            />
          </label>
          <label htmlFor="email" className="email1">
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
          <label htmlFor="password" className="password1">
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
          <button type="submit" className="sign-up">
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}
