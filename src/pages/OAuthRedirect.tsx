import { Navigate, useSearchParams } from "react-router-dom";
import Cookies from "universal-cookie";

type Props = {};

const OAuthRedirect = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const error = searchParams.get("error");
  const cookies = new Cookies();
  cookies.set("token", token);
  cookies.set("isAllowed", "true");
  return (
    <>
      {error ? (
        <Navigate to={"/login?error?" + error} />
      ) : (
        <Navigate to={"/products"} />
      )}
    </>
  );
};

export default OAuthRedirect;
