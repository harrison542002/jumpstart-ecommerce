import Google from "../assets/google-icon.svg";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { login } from "../services/Auth";
import Cookies from "universal-cookie";
import OAuthURL from "../utils/OAuthURL";
type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState<string>(searchParams.get("error") || "");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>(
    "Please Fill In All Required Data To Continue"
  );
  const [isError, setIsError] = useState<boolean>(false);
  const onLogin = (event: React.FormEvent<HTMLButtonElement>) => {
    setIsError(false);
    if (email.length <= 0 || password.length <= 0) {
      setIsError(true);
      return;
    }
    login(email, password)
      .then((res) => {
        const token = res.data.accessToken;
        cookie.set("token", token);
        cookie.set("isAllowed", true);
        navigate("/products");
        navigate(0);
      })
      .catch((error) => {
        setError("Please Provide Correct Credentials!");
        setIsError(true);
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 1.5 } }}
      exit={{ opacity: 0, transition: { delay: 0.05, duration: 1 } }}
      className="lg:grid grid-cols-2"
    >
      <div className="flex justify-center mt-16">
        <div>
          <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
          <p className="text-center mt-3 font-light">
            Let's Continue Your Luruxy Shopping Experience!
          </p>
          <div className="mt-10">
            {isError ? (
              <h1 className="text-xl font-light text-center text-red-500">
                {error}
              </h1>
            ) : (
              <></>
            )}
            <input
              type="email"
              className="border-b-2 block w-full mb-5 py-4 px-3 outline-none
              active:shadow-lg active:shadow-purple-500 focus:shadow-purple-500 focus:shadow-lg rounded-lg"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="border-b-2 block w-full mb-5 py-4 px-3 outline-none
              active:shadow-lg active:shadow-purple-500 focus:shadow-purple-500 focus:shadow-lg rounded-lg"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-10">
            <button
              className="text-center w-full rounded-full bg-purple-500 text-white py-5
            text-xl font-bold hover:bg-purple-600 shadow-md shadow-purple-300
            hover:-translate-y-3 transition-all delay-75 duration-700"
              onClick={(e) => onLogin(e)}
            >
              Login
            </button>
          </div>
          <div className="grid grid-cols-3 mt-10">
            <hr />
            <p className="text-center -mt-3">Or</p>
            <hr />
          </div>
          <div className="py-4">
            <a
              href={OAuthURL.google}
              className="flex p-3 rounded-full bg-white w-full hover:bg-slate-100
            shadow-lg"
            >
              <img src={Google} alt="google" className="w-10" />
              <div className="flex flex-col justify-center w-full">
                <p className="text-center font-bold">Log In With Google</p>
              </div>
            </a>
            <a
              href={OAuthURL.facebook}
              className="flex p-3 rounded-full bg-white w-full hover:bg-slate-100 mt-5
            shadow-lg"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-5xl text-blue-600"
              />
              <div className="flex flex-col justify-center w-full">
                <p className="text-center font-bold text-blue-600">
                  Log In With Facebook
                </p>
              </div>
            </a>
            <div></div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden bg-gradient-to-r from-purple-500 to-indigo-500 mx-5 rounded-md shadow-xl">
        <div className="flex flex-col justify-center h-full">
          <p className="text-center tracking-wide text-white text-2xl font-light">
            Not A Member Of Jumpstart ?
          </p>
          <p className="text-center tracking-wide text-white text-3xl font-extrabold mt-5">
            Get Started With Jumpstart
          </p>
          <div className="flex justify-center mt-5">
            <Link
              to={"/register"}
              className="text-xl bg-orange-500 p-3 rounded-lg shadow-lg font-bold text-white hover:bg-orange-600
            hover:-translate-y-3 transition-all delay-75 duration-700 mb-10 lg:mb-0"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
