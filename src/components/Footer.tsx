import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 bg-black text-white mt-5">
        <div className="p-10">
          <h1 className="text-lg font-bold mb-3">Additional Info</h1>
          <Link to={"/about"} className="hover:text-gray-400 block">
            About Us
          </Link>
          <Link to={"/contact"} className="hover:text-gray-400 block">
            Contact Us
          </Link>
          <Link to={"/terms"} className="hover:text-gray-400">
            Terms and Conditions
          </Link>
        </div>
        <div className="p-10">
          <h1 className="text-lg font-bold mb-3">Connect With Us</h1>
          <div className="text-4xl space-x-5">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-700" />
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" />
            <FontAwesomeIcon icon={faInstagram} className="text-pink-300" />
          </div>
        </div>
      </div>
      <div className="p-10 bg-black">
        <h1 className="text-center text-gray-600">
          Copyrights all deserved by Jumpstart
          {"  "}
          <FontAwesomeIcon icon={faCopyright} />
        </h1>
      </div>
    </div>
  );
};

export default Footer;
