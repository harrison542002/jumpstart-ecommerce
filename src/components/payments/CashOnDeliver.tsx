import {
  faMoneyBill,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { addOrder } from "../../services/ProductAPI";
import PaymentStatus from "../../utils/PaymentStatus";
import PaymentTypes from "../../utils/PaymentType";
import Loading from "../Loading";

type Props = {
  setCartItem: any;
};

const CashOnDeliver = ({ setCartItem }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams<any>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const deli = searchParams.get("deli");
  const submitTransition = (e) => {
    setLoading(true);
    addOrder(PaymentStatus.unpaid, PaymentTypes.COD, id, deli)
      .then((res) => {
        setCartItem([]);
        navigate("/thank-you");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  return (
    <>
      {isLoading ? (
        <div className="h-52">
          <Loading />
        </div>
      ) : (
        <div className="flex justify-center flex-col">
          <div className="p-10">
            <p className="text-2xl text-center font-bold">
              Submit Order <FontAwesomeIcon icon={faMoneyBill} />
            </p>
            <p className="text-center font-light text-sm my-1">
              The payment will be paid after the product has arrived at home.
              Delivered staff will contact with provided phone number. Please
              double check the contact number and address for explicity!
            </p>
            <div className="p-10 flex justify-center">
              <button
                onClick={(e) => submitTransition(e)}
                className="bg-orange-500 p-3 text-white font-semibold rounded-lg shadow-md shadow-orange-200 hover:-translate-y-4 transition-all delay-75 duration-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CashOnDeliver;
