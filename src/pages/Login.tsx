import Google from "../assets/google-icon.svg";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
type Props = {};

const Login = (props: Props) => {
  return (
    <div className="lg:grid grid-cols-2">
      <div className="flex justify-center mt-16">
        <div>
          <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
          <p className="text-center mt-3 font-light">
            Let's Continue Your Luruxy Shopping Experience!
          </p>
          <div className="mt-10">
            <input
              type="email"
              className="border-b-2 block w-full mb-5 py-4 px-3 outline-none
              active:shadow-lg active:shadow-purple-500 focus:shadow-purple-500 focus:shadow-lg rounded-lg"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="border-b-2 block w-full mb-5 py-4 px-3 outline-none
              active:shadow-lg active:shadow-purple-500 focus:shadow-purple-500 focus:shadow-lg rounded-lg"
              placeholder="Password"
            />
          </div>
          <div className="mt-10">
            <button
              className="text-center w-full rounded-full bg-purple-500 text-white py-5
            text-xl font-bold hover:bg-purple-600 shadow-md shadow-purple-300
            hover:-translate-y-3 transition-all delay-75 duration-700"
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
            <button
              className="flex p-3 rounded-full bg-white w-full hover:bg-slate-100
            shadow-lg"
            >
              <img src={Google} alt="google" className="w-10" />
              <div className="flex flex-col justify-center w-full">
                <p className="text-center font-bold">Log In With Google</p>
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
                  Log In With Facebook
                </p>
              </div>
            </button>
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
    </div>
  );
};

export default Login;
