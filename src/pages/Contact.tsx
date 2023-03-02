import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faComment,
  faLocation,
  faLocationArrow,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import ContactUs from "../assets/contact.jpg";
type Props = {};

const Contact = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 1.5 } }}
      exit={{ opacity: 0, transition: { delay: 0.05, duration: 1 } }}
    >
      <div className="lg:grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="px-8">
            <p className="text-5xl uppercase font-bold text-purple-500 hover:tracking-wide transition-all duration-700">
              Reach To Us
            </p>
            <div className="text-xl py-8 font-semibold text-justify lg:pr-32 grid grid-cols-2">
              <div>
                <p className="mb-3">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email
                </p>
                <p className="mb-3">
                  <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon> Contact
                  Number
                </p>
                <p className="mb-3">
                  <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>{" "}
                  Location
                </p>
              </div>
              <div>
                <p className="mb-3">contact@jumpstart.com</p>
                <p className="mb-3">+95 123452345</p>
                <p className="mb-3">Mandalay, Myanmar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={ContactUs} className="lg:rounded-bl-lg" />
        </div>
      </div>
      <div className="lg:grid grid-cols-2">
        <div className="lg:-mt-20 border-2 border-purple-500 rounded-lg mx-3 text-purple-500">
          <h1 className="text-center my-5 text-2xl font-bold">
            Leave Valuable Feedback Here <FontAwesomeIcon icon={faComment} />
          </h1>
          <div className="flex justify-center mb-5">
            <div>
              <p className="text-lg font-bold mb-2">First Name</p>
              <input
                type="text"
                placeholder="Your First Name"
                className="w-96 px-3 py-5 outline-none border-2 border-purple-500 shadow-md shadow-purple-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <div>
              <p className="text-lg font-bold mb-2">Last Name</p>
              <input
                type="text"
                placeholder="Your Last Name"
                className="w-96 px-3 py-5 outline-none border-2 border-purple-500 shadow-md shadow-purple-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <div>
              <p className="text-lg font-bold mb-2">Email</p>
              <input
                type="email"
                placeholder="example@ex.com"
                className="w-96 px-3 py-5 outline-none border-2 border-purple-500 shadow-md shadow-purple-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <div>
              <p className="text-lg font-bold mb-2">Feedback</p>
              <textarea
                placeholder="Your Feedback Here ..."
                className="w-96 px-3 py-5 outline-none border-2 border-purple-500 shadow-md shadow-purple-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <button
              className=" bg-orange-500 p-5 text-lg text-white rounded-lg font-bold shadow-md shadow-orange-300
            hover:-translate-y-3 transition-all delay-75 duration-700"
            >
              Submit Feedback
            </button>
          </div>
        </div>
        <div className="mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118427.17686112912!2d96.00578301134905!3d21.940345062633288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d23f0d27411%3A0x24146be01e4e5646!2sMandalay!5e0!3m2!1sen!2smm!4v1677747381502!5m2!1sen!2smm"
            loading="lazy"
            className="w-full mt-3 mr-5 lg:rounded-l-lg rounded-lg h-full"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
