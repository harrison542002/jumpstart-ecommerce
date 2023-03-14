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
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    ) {
      setStatus(NavStatus.LoginOrRegister);
    } else if (roles.includes("ROLE_ADMIN")) {
      setStatus(NavStatus.ADMIN);
    } else {
      setStatus(NavStatus.Public);
    }
  }, [location]);
  return (
    <>
      {status === NavStatus.Public && <PublicNav cartItems={cartItems} />}
      {status === NavStatus.LoginOrRegister && <FormNav />}
      {status === NavStatus.ADMIN && <UserNav />}
    </>
  );
};

export default Nav;
