import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Nav from "./Nav";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
type Props = {
  cartItems: any;
  setCartItem: any;
};

const AnimatedRoutes = ({ cartItems, setCartItem }: Props) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Nav cartItems={cartItems} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route
          path="/product/:id"
          element={
            <ProductDetail setCartItem={setCartItem} cartItems={cartItems} />
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
