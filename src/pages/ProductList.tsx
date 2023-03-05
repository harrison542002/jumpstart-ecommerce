import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import { getProducts } from "../services/ProductAPI";

type Props = {};

const ProductList = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [products, setProducts] = useState<any>(undefined);
  const category = searchParams.get("category");
  useEffect(() => {
    if (page === null && category === null) {
      getProducts(null, null)
        .then((res) => {
          const { products, totalPages } = res.data;
          setProducts(products);
          console.log(products);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  return (
    <div className="grid lg:grid-cols-5">
      <div className="filterting">
        <div className="p-5">
          <h1 className="text-xl font-bold">Brand</h1>
          <div className="mt-3 grid grid-cols-2">
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Asus</p>
            </div>

            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Apple</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Vivo</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Hp</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold">Category</h1>
          <div className="mt-3 grid grid-cols-2">
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Clothing</p>
            </div>

            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Electronic</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Foods</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Jewellery</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Kitchen Equipment</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">Pet Accessories</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold">Price</h1>
          <div className="mt-3">
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">$ 25 - 50</p>
            </div>

            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">$ 60 - 100</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">$ 101 - 200</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 w-4 h-4" />
              <p className="inline font-light">$ 200 and above</p>
            </div>
          </div>
        </div>
      </div>
      {products === undefined ? (
        <div className="col-span-4">
          <Loading />
        </div>
      ) : (
        <div className="col-span-4 mt-5 px-2">
          <div className="grid grid-cols-3 gap-5">
            {products.map((product: any) => (
              <>
                <div>
                  <img
                    src={product.productImages[0].img}
                    alt={product.itemName}
                    className="shadow-sm h-56 rounded-lg"
                  />
                  <div className="p-5">
                    <h1 className="text-xl font-bold pb-1 text-purple-500 hover:text-purple-700 hover:underline">
                      {product.itemName}
                    </h1>
                    <p className="font-light text-start text-sm">
                      {product.brand.brandName}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
