import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import Nav from "./Components/Common/Nav";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/events" element={<Events />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
