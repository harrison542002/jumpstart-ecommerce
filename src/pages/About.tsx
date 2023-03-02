import { motion } from "framer-motion";
import Header from "../assets/bman.png";
import Panda from "../assets/panda.png";
import Amazon from "../assets/amazon.png";
import Grab from "../assets/Grab-Logo.png";
import TeamMember from "../components/TeamMember";
import Developer from "../assets/me.jpg";
import HRManager from "../assets/smilegirl.jpg";
import SeniorAdvisor from "../assets/smileboy.jpg";
import DigitalMarketer from "../assets/chinesegirl.jpg";
import UIDesigner from "../assets/boy.jpg";
import UXDesigner from "../assets/girl.jpg";

type Props = {};

const About = (props: Props) => {
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
              Head Of Jumpstart
            </p>
            <p className="text-xl py-8 font-semibold text-justify lg:pr-32">
              Aung Thiha Tun, CEO of Jumpstart, is specialized in computer
              science degree. He had always dreamt about a online e-commerce to
              sell multiple types of products. With Jumpstart, he believed all
              quality products can be delivered to all regions around Myanmar.
            </p>
            <a
              className="text-xl bg-orange-500 p-3 rounded-lg shadow-lg font-bold text-white hover:bg-orange-600
            hover:-translate-y-3 transition-all delay-75 duration-700"
              href="#team"
            >
              Get To Know More Team Members
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={Header} className="w-96 mt-5" />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-5xl text-center uppercase font-bold text-purple-500 hover:tracking-wide transition-all duration-700">
          Golen Partners
        </p>
        <div className="flex justify-center mt-10">
          <div className="lg:grid grid-cols-3">
            <div className="">
              <img src={Amazon} alt="amazon" className="w-56" />
            </div>

            <div className="">
              <img src={Grab} alt="grab" className="w-56" />
            </div>
            <div className="">
              <img src={Panda} alt="panda" className="w-40" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20" id="team">
        <p className="text-5xl text-center uppercase font-bold text-orange-500 hover:tracking-wide transition-all duration-700">
          Meet Our Team
        </p>
        <div className="mt-10 lg:grid grid-cols-3">
          <TeamMember
            img={Developer}
            name="Aung Thiha Tun"
            position="Software Developer"
          />
          <TeamMember
            img={HRManager}
            name="Win Pa Pa Yee"
            position="HR Manager"
          />
          <TeamMember
            img={SeniorAdvisor}
            name="Tun Tun Aye"
            position="Senior Advisor"
          />
          <TeamMember
            img={DigitalMarketer}
            name="Lucas Wen"
            position="Digital Marketer"
          />
          <TeamMember
            img={UIDesigner}
            name="Monica Forge"
            position="UI Designer"
          />
          <TeamMember
            img={UXDesigner}
            name="Hoya Justin"
            position="UX Designer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
