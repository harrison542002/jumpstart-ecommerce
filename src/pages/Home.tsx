import Shopping from "../assets/shopping.jpg";
import { motion } from "framer-motion";
import Kitchen from "../assets/kitchen.jpg";
import Clothing from "../assets/clothing.jpg";
import Dog from "../assets/dog.jpg";
import Electronic from "../assets/electronic.jpg";
import Food from "../assets/food.jpg";
import Jewellery from "../assets/jewellery.jpg";
import ProductCategory from "../components/ProductCategory";
type Props = {};

const Home = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 1.5 } }}
      exit={{ opacity: 0, transition: { delay: 0.05, duration: 1 } }}
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="px-8">
            <p className="text-5xl uppercase font-bold text-purple-500 hover:tracking-wide transition-all duration-700">
              Start Shopping
            </p>
            <p className="text-xl py-8 font-semibold text-justify lg:pr-32">
              Jumpstart provides tons of Accessories for your daily. All product
              are validated and authentic based by original brand.
            </p>
            <button
              className="text-xl bg-orange-500 p-3 rounded-lg shadow-lg font-bold text-white hover:bg-orange-600
            hover:-translate-y-3 transition-all delay-75 duration-700 mb-10 lg:mb-0"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:rounded-bl-lg">
          <img
            src={Shopping}
            alt="Jumpstart Shopping"
            className="lg:rounded-bl-lg"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="lg:grid grid-cols-3">
          <ProductCategory img={Kitchen} category="Kitchen Equipments" />
          <ProductCategory img={Dog} category="Pet Accessories" />
          <ProductCategory img={Clothing} category="Clothing" />
          <ProductCategory img={Electronic} category="Electronic" />
          <ProductCategory img={Food} category="Foods" />
          <ProductCategory img={Jewellery} category="Jewellery" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
