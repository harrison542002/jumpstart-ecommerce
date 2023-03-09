import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

type Props = {
  isVisible: boolean;
};

const CartNotifiy = (props: Props) => {
  let { isVisible } = props;
  return (
    <>
      {isVisible && (
        <>
          <div className="absolute w-full flex justify-center z-50">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0,
                transition: { delay: 1, duration: 1 },
              }}
              className="p-5 rounded-lg text-green-500 border-2 border-green-100 shadow-sm shadow-green-500 bg-white"
            >
              Product has been added to Cart{" "}
              <FontAwesomeIcon icon={faCheckCircle} />
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default CartNotifiy;
