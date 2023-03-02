import { BrowserRouter, Router, Routes } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
