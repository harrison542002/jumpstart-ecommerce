import {
  faCreditCard,
  faDollar,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
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
      if(id != undefined){
        getMultipleProducts(encodeURIComponent(id)).then((res) => {
          console.log(res.data);
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
            <button className="p-3 w-1/3 border-2 font-bold hover:bg-slate-50">
              Credit Card <FontAwesomeIcon icon={faCreditCard} />
            </button>
            <button className="p-3 w-1/3 border-2 font-bold hover:bg-slate-50">
              Cash On Delivery <FontAwesomeIcon icon={faDollar} />
            </button>
            <button className="p-3 w-1/3 border-2 font-bold hover:bg-slate-50">
              KBZ Pay
            </button>
          </div>
          <div className="border-2 w-full">
            <Outlet />
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default PaymentMethods;
