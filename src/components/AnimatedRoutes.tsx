import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Nav from "./Nav";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

import OAuthRedirect from "../pages/OAuthRedirect";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import ProtectedRoute from "./security/ProtectedRoute";
import Cart from "../pages/Cart";
import ConfirmOrder from "../pages/ConfirmOrder";
import AddShippingAddress from "./AddShippingAddress";
import PaymentMethods from "../pages/PaymentMethods";
import CreditPay from "./payments/CreditPay";
import CashOnDeliver from "./payments/CashOnDeliver";
import KBZPay from "./payments/KBZPay";
import ThankYou from "../pages/ThankYou";
import AdminDashboard from "./admin/AdminDashboard";
import DataSummary from "./admin/DataSummary";
import AddBrand from "./admin/AddBrand";
import BrandLists from "./admin/BrandLists";
import Users from "./admin/Users";
type Props = {
  cartItems: any;
  setCartItem: any;
};

const AnimatedRoutes = ({ cartItems, setCartItem }: Props) => {
  const location = useLocation();
  const cookies = new Cookies();
  const [isAllowed, setAllowed] = useState(cookies.get("isAllowed") === "true");

  useEffect(() => {
    setAllowed(cookies.get("isAllowed") === "true");
  }, [location]);
  return (
    <AnimatePresence>
      <Nav cartItems={cartItems} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/products" element={<ProductList />}></Route>

        <Route path="/" element={<ProtectedRoute isAllowed={isAllowed} />}>
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
          <Route
            path="/product/:id"
            element={
              <ProductDetail setCartItem={setCartItem} cartItems={cartItems} />
            }
          ></Route>
        </Route>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DataSummary />}></Route>
          {["/admin/add-brand", "/admin/edit-brand/:id"].map((path) => (
            <Route path={path} key={path} element={<AddBrand />}></Route>
          ))}

          <Route path="/admin/manage-brand" element={<BrandLists />}></Route>
          <Route path="/admin/manage-user" element={<Users />}></Route>
        </Route>

        <Route path="/oauth" element={<OAuthRedirect />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
