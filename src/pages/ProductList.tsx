import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import { getBrands, getProducts } from "../services/ProductAPI";
import { motion } from "framer-motion";
import FilteringGroup from "../components/FilteringGroup";
import FilteringWithPrice from "../components/FilteringWithPrice";

type Props = {};

const ProductList = (props: Props) => {
  const [brandList, setBrandList] = useState([]);
  const CATEGORYLIST = [
    "Clothing",
    "Electronic",
    "Foods",
    "Jewellery",
    "Kitchen Equipment",
    "Pet Accessories",
  ];
  const PRICELIST = ["25,50", "60,100", "101,200", "200"];
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const page: any | null = searchParams.get("page") || null;
  const [products, setProducts] = useState<any>(undefined);
  const [category, setCategory] = useState<string | null>(
    searchParams.get("category") || null
  );
  const [brand, setBrand] = useState<string | null>(
    searchParams.get("brand") || null
  );
  const [lowPrice, setLowPrice] = useState<string | null>(
    searchParams.get("lowPrice") || null
  );
  const [highPrice, setHighPrice] = useState<string | null>(
    searchParams.get("highPrice") || null
  );
  const [fixedPrice, setFixedPrice] = useState<string | null>(
    searchParams.get("fixedPrice") || null
  );
  const [totalPages, setTotalPages] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    getBrands().then((res) => {
      const BrandName = res.data.map((brand) => brand.brandName);
      setBrandList(BrandName);
      console.log(res.data);
    });
    getProducts(page, category, brand, lowPrice, highPrice, fixedPrice)
      .then((res) => {
        const { products, totalPages } = res.data;
        setProducts(products);
        setTotalPages(totalPages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category, brand, lowPrice, highPrice, fixedPrice]);
  return (
    <div className="grid lg:grid-cols-5">
      <div className="filterting">
        <div className="p-5">
          <h1 className="text-xl font-bold">Brand</h1>
          <div className="mt-3 grid grid-cols-2">
            <FilteringGroup
              type={brand}
              setType={setBrand}
              values={brandList}
            />
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold">Category</h1>
          <div className="mt-3 grid grid-cols-2">
            <FilteringGroup
              type={category}
              setType={setCategory}
              values={CATEGORYLIST}
            />
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold">Price</h1>
          <div className="mt-3">
            <FilteringWithPrice
              highPrice={highPrice}
              lowPrice={lowPrice}
              setHighPrice={setHighPrice}
              setLowPrice={setLowPrice}
              value={PRICELIST}
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="col-span-4">
          <Loading />
        </div>
      ) : products === undefined ? (
        <div className="flex flex-col justify-center col-span-4 ">
          <p className="text-4xl text-center text-purple-500 font-extrabold">
            Sorry, No Product Was Found With This Category!
          </p>
          <p className="text-xl text-center text-purple-500 font-light mt-1">
            Please Filter With Other Attributes...
          </p>
        </div>
      ) : (
        <div className="col-span-4 mt-5 px-2">
          <div className="grid grid-cols-3 gap-5">
            {products.map((product: any) => (
              <>
                <Link to={"/product/" + product.pid}>
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
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
