import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
type Props = {};

const AnimatedRoutes = (props: Props) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
