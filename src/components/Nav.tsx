import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavStatus from "../utils/NavStatus";
import FormNav from "./navbar/FormNav";
import PublicNav from "./navbar/PublicNav";

type Props = {};
const Nav = (props: Props) => {
  const location = useLocation();
  const [status, setStatus] = useState<any>(NavStatus.Public);
  useEffect(() => {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    ) {
      setStatus(NavStatus.LoginOrRegister);
    }
  }, [location]);
  return (
    <>
      {status === NavStatus.Public && <PublicNav />}
      {status === NavStatus.LoginOrRegister && <FormNav />}
    </>
  );
};

export default Nav;
