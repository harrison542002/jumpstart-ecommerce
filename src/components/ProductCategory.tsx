import { motion } from "framer-motion";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  img: any;
  category: string;
};

const ProductCategory = (props: Props) => {
  const { img, category } = props;
  return (
    <motion.div
      className="p-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.05, duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div
        className=" shadow-lg shadow-purple-500 rounded-lg hover:tracking-wide
     "
      >
        <img src={img} alt="" className="rounded-t-lg" />
        <div className="py-5 bg-purple-500 rounded-b-lg text-white">
          <p className="text-xl text-center font-bold transition-all duration-700">
            {category}
            {"    "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="text-2xl"
            ></FontAwesomeIcon>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCategory;
