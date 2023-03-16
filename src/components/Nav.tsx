import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import NavStatus from "../utils/NavStatus";
import FormNav from "./navbar/FormNav";
import PublicNav from "./navbar/PublicNav";
import UserNav from "./navbar/UserNav";

type Props = {
  cartItems: any;
};
const Nav = ({ cartItems }: Props) => {
  const location = useLocation();
  const [status, setStatus] = useState<any>(NavStatus.Public);
  useEffect(() => {
    const cookie = new Cookies();
    const roles = decodeURIComponent(cookie.get("roles")).split(",");
    const brand = cookie.get("isBrand");
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    ) {
      setStatus(NavStatus.LoginOrRegister);
    } else if (roles.includes("ROLE_ADMIN")) {
      setStatus(NavStatus.ADMIN);
    } else if (brand === "true") {
      setStatus(NavStatus.BRAND);
    } else {
      setStatus(NavStatus.Public);
    }
  }, [location]);
  return (
    <>
      {status === NavStatus.Public && <PublicNav cartItems={cartItems} />}
      {status === NavStatus.LoginOrRegister && <FormNav />}
      {status === NavStatus.ADMIN && <UserNav />}
      {status === NavStatus.BRAND && <UserNav />}
    </>
  );
};

export default Nav;
