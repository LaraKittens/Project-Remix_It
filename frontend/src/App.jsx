import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/Accueil" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
