import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/ProductAPI";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  currentId: any;
  category: any;
};

const SuggestedItems = (props: Props) => {
  const { currentId, category } = props;
  const [products, setProducts] = useState<any>(null);
  useEffect(() => {
    getProducts(null, category, null, null, null, null)
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const itemList = useRef<any>(null);
  const scroll = (direction: string) => {
    if (direction === "left") {
      itemList!.current!.scrollLeft += 200;
      console.log(itemList.current.scrollLeft);
    }
    if (direction === "right") {
      itemList!.current!.scrollLeft -= 200;
      console.log(itemList.current.scrollLeft);
    }
  };
  return (
    <div className="flex px-10">
      <div
        className="text-2xl p-5 flex flex-col justify-center"
        onClick={() => scroll("left")}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div
        className="flex overflow-x-hidden overflow-y-hidden w-full text-5xl"
        ref={itemList}
      >
        {products != null ? (
          products.map((product: any) =>
            product.pid === currentId ? (
              <></>
            ) : (
              <Link
                to={"/product/" + product.pid}
                className="block mx-5 border-2 border-gray-50 shadow-sm rounded-lg"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { delay: 0.05, duration: 1 },
                  }}
                >
                  <img
                    src={product.productImages[0].img}
                    alt={product.itemName}
                    className="shadow-sm h-56 rounded-lg"
                  />
                </motion.div>

                <div className="p-5">
                  <h1 className="text-xl font-bold pb-1 text-purple-500 hover:text-purple-700 hover:underline">
                    {product.itemName}
                  </h1>
                  <p className="font-light text-start text-sm">
                    {product.brand.brandName}
                  </p>
                </div>
              </Link>
            )
          )
        ) : (
          <></>
        )}
      </div>
      <div
        className="text-2xl p-5 flex flex-col justify-center"
        onClick={() => scroll("right")}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};

export default SuggestedItems;
