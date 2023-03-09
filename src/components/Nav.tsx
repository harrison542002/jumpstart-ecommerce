import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavStatus from "../utils/NavStatus";
import FormNav from "./navbar/FormNav";
import PublicNav from "./navbar/PublicNav";

type Props = {
  cartItems: any;
};
const Nav = ({ cartItems }: Props) => {
  const location = useLocation();
  const [status, setStatus] = useState<any>(NavStatus.Public);
  useEffect(() => {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    ) {
      setStatus(NavStatus.LoginOrRegister);
    } else {
      setStatus(NavStatus.Public);
    }
  }, [location]);
  return (
    <>
      {status === NavStatus.Public && <PublicNav cartItems={cartItems} />}
      {status === NavStatus.LoginOrRegister && <FormNav />}
    </>
  );
};

export default Nav;
