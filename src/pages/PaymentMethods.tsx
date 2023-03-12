import {
  faCreditCard,
  faDollar,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import DeliverAddress from "../components/DeliverAddress";
import {
  getMultipleProducts,
  getShippingAddress,
} from "../services/ProductAPI";

type Props = {};

const PaymentMethods = (props: Props) => {
  const { id } = useParams<any>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [shippingAddress, setShippingAddresses] = useState<any>(null);
  const [products, setProducts] = useState<any>([]);
  const deli = searchParams.get("deli");
  useEffect(() => {
    getShippingAddress(deli).then((res) => {
      console.log(res.data);
      setShippingAddresses(res.data);
      if (id != undefined) {
        getMultipleProducts(encodeURIComponent(id)).then((res) => {
          setProducts(res.data);
        });
      }
    });
  }, []);
  return (
    <div className="p-10">
      <p className="text-3xl font-bold text-center">
        Choose Payment Method <FontAwesomeIcon icon={faMoneyCheck} />
      </p>
      <div className="grid grid-cols-5">
        <div className="col-span-3 p-5">
          <div className="flex w-full my-3">
            <Link
              to={`/payment/${id}?deli=${deli}`}
              className="p-3 w-1/3 border-2 font-bold hover:bg-slate-50"
            >
              Credit Card <FontAwesomeIcon icon={faCreditCard} />
            </Link>
            <Link
              to={`/payment/${id}/cod?deli=${deli}`}
              className="p-3 w-1/3 border-2 font-bold hover:bg-slate-50"
            >
              Cash On Delivery <FontAwesomeIcon icon={faDollar} />
            </Link>
            <Link
              to={`/payment/${id}/kbz?deli=${deli}`}
              className="p-3 w-1/3 border-2 font-bold hover:bg-slate-50"
            >
              KBZ Pay
            </Link>
          </div>
          <div className="border-2 w-full">
            <Outlet />
          </div>
        </div>
        <div className="col-span-2 p-10">
          <div>
            <p className="text-center text-xl font-bold">Summary</p>
          </div>
          <hr className="my-2" />
          <div className="font-bold grid grid-cols-3 my-5">
            <p>Product</p>
            <p>Brand</p>
            <p>Price in $</p>
          </div>
          {products.length > 0 &&
            products.map((product) => (
              <div className="grid grid-cols-3 my-3">
                <p>{product.itemName}</p>
                <p>{product.brand.brandName}</p>
                <p>{product.price}</p>
              </div>
            ))}
          <hr className="my-2" />
          <div className="grid grid-cols-3">
            <div></div>
            <div className="font-bold">Total Cost</div>
            <p className="font-semibold">
              {products.reduce(
                (accumulator, current) => accumulator + current.price,
                0
              )}
            </p>
          </div>
          {shippingAddress != null && (
            <>
              <DeliverAddress shippingAddress={shippingAddress} id={id} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
