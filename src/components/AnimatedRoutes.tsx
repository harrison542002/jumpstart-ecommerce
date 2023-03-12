import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Nav from "./Nav";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import ConfirmOrder from "../pages/ConfirmOrder";
import AddShippingAddress from "./AddShippingAddress";
import PaymentMethods from "../pages/PaymentMethods";
import CreditPay from "./payments/CreditPay";
import CashOnDeliver from "./payments/CashOnDeliver";
import KBZPay from "./payments/KBZPay";
import ThankYou from "../pages/ThankYou";
import OAuthRedirect from "../pages/OAuthRedirect";
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
        <Route
          path="/cart"
          element={<Cart setCartItem={setCartItem} />}
        ></Route>
        <Route path="/confirm-order/:id" element={<ConfirmOrder />}></Route>
        <Route
          path="/add-shipping/:id"
          element={<AddShippingAddress />}
        ></Route>
        <Route path="/payment/:id" element={<PaymentMethods />}>
          <Route
            index
            element={<CreditPay setCartItem={setCartItem} />}
          ></Route>
          <Route
            path="/payment/:id/cod"
            element={<CashOnDeliver setCartItem={setCartItem} />}
          ></Route>
          <Route
            path="/payment/:id/kbz"
            element={<KBZPay setCartItem={setCartItem} />}
          ></Route>
        </Route>
        <Route path="/thank-you" element={<ThankYou />}></Route>
        <Route path="/oauth" element={<OAuthRedirect />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
