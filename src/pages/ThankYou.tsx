import { faCartShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ThankYou = (props: Props) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="p-10 text-center m-10 border-4 border-orange-500 rounded-lg">
          <p className="text-lg font-light">Regards, Jumpstart</p>
          <p className="text-4xl font-bold my-10">Thank You For Shopping!</p>
          <p className="text-sm font-light">
            Order has been placed successfully
          </p>
          <p className="text-sm font-light">
            Delivery is in process ....... <FontAwesomeIcon icon={faTruck} />
          </p>
          <div className="mt-5">
            <Link
              to={"/products"}
              className="p-3 block text-white font-bold bg-purple-500 rounded-md shadow-sm shadow-orange-100"
            >
              Continue Shopping <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
