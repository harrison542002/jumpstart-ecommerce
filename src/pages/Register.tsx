import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Google from "../assets/google-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { signUp } from "../services/Auth";
import Cookies from "universal-cookie";

type Props = {};

const Register = (props: Props) => {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>(
    "Please Fill In All Required Data To Continue"
  );
  const [isError, setIsError] = useState<boolean>(false);

  const onSignUp = (event: React.FormEvent<HTMLButtonElement>) => {
    setIsError(false);
    if (
      firstName.length <= 0 ||
      lastName.length <= 0 ||
      email.length <= 0 ||
      password.length <= 0
    ) {
      setIsError(true);
      return;
    }
    signUp(firstName, lastName, email, password)
      .then((res) => {
        const token = res.data.accessToken;
        cookie.set("token", token);
        cookie.set("isAllowed", true);
        navigate("/products");
      })
      .catch((error) => {
        setError(error.response.data.message);
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
      <div className="lg:block hidden bg-gradient-to-r from-purple-500 to-indigo-500 mx-5 rounded-md shadow-xl">
        <div className="flex flex-col justify-center h-full">
          <p className="text-center tracking-wide text-white text-2xl font-light">
            Already Created An Account ?
          </p>
          <p className="text-center tracking-wide text-white text-3xl font-extrabold mt-5">
            Continue Your Journey with Jumpstart
          </p>
          <div className="flex justify-center mt-5">
            <Link
              to={"/login"}
              className="text-xl bg-orange-500 p-3 rounded-lg shadow-lg font-bold text-white hover:bg-orange-600
        hover:-translate-y-3 transition-all delay-75 duration-700 mb-10 lg:mb-0"
            >
              Log In Now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Start Purchasing Today!
          </h1>
          <p className="text-center mt-3 font-light">
            Create an Account To start the shoppping{" "}
            <FontAwesomeIcon icon={faCartShopping} />
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
              type="text"
              className="border-b-2 block w-full mb-5 py-4 px-3 outline-none
          active:shadow-lg active:shadow-purple-500 focus:shadow-purple-500 focus:shadow-lg rounded-lg"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              className="border-b-2 block w-full mb-5 py-4 px-3 outline-none
          active:shadow-lg active:shadow-purple-500 focus:shadow-purple-500 focus:shadow-lg rounded-lg"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              type="email"
              className="border-b-2 block w-full mb-5 py-4 px-3 outline-none
          active:shadow-lg active:shadow-purple-500 focus:shadow-purple-500 focus:shadow-lg rounded-lg"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="border-b-2 block w-full mb-5 py-4 px-3 outline-none
          active:shadow-lg active:shadow-purple-500 focus:shadow-purple-500 focus:shadow-lg rounded-lg"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mt-10">
            <button
              className="text-center w-full rounded-full bg-purple-500 text-white py-5
        text-xl font-bold hover:bg-purple-600 shadow-md shadow-purple-300
        hover:-translate-y-3 transition-all delay-75 duration-700"
              onClick={(e) => onSignUp(e)}
            >
              Sign Up
            </button>
          </div>
          <div className="grid grid-cols-3 mt-10">
            <hr />
            <p className="text-center -mt-3 font-bold">Or</p>
            <hr />
          </div>
          <div className="py-4">
            <button
              className="flex p-3 rounded-full bg-white w-full hover:bg-slate-100
        shadow-lg"
            >
              <img src={Google} alt="google" className="w-10" />
              <div className="flex flex-col justify-center w-full">
                <p className="text-center font-bold">Sign Up With Google</p>
              </div>
            </button>
            <button
              className="flex p-3 rounded-full bg-white w-full hover:bg-slate-100 mt-5
        shadow-lg"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-5xl text-blue-600"
              />
              <div className="flex flex-col justify-center w-full">
                <p className="text-center font-bold text-blue-600">
                  Sign Up With Facebook
                </p>
              </div>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
