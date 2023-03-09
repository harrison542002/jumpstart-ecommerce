import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getCartItems } from "./services/ProductAPI";

function App() {
  const [cartItem, setCartItem] = useState<any>([]);
  const COOKIE = new Cookies();
  useEffect(() => {
    const isAllowed = COOKIE.get("isAllowed");
    if (isAllowed === "true") {
      getCartItems()
        .then((res) => {
          console.log(res.data);
          setCartItem(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes cartItems={cartItem} setCartItem={setCartItem} />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
