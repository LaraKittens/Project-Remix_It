import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Register from "./pages/Register/Register";
import LoginForm from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/404/404";
import Profil from "./pages/Profil/Profil";
import Historic from "./pages/Historic/Historic";
import Music from "./pages/Music/Music";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/" element={<Navbar />}>
          <Route exact path="/accueil" element={<Home />} />
          <Route exact path="/profil" element={<Profil />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/history" element={<Historic />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
