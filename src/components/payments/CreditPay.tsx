import { faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";
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

const CreditPay = ({ setCartItem }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams<any>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const deli = searchParams.get("deli");
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const submitTransition = (e) => {
    setLoading(true);
    if (
      cardNumber.length <= 0 ||
      name.length <= 0 ||
      expirationDate.length <= 0 ||
      cvv.length <= 0
    ) {
      setError("Please fill in all required Data!");
      setLoading(false);
      return;
    }
    if (id != undefined) {
      addOrder(
        PaymentStatus.paid,
        PaymentTypes.CREDIT,
        encodeURIComponent(id),
        deli
      )
        .then((res) => {
          setCartItem([]);
          navigate("/thank-you");
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="h-52">
          <Loading />
        </div>
      ) : (
        <div className="p-5">
          <div className="grid grid-cols-2">
            <div>
              <label htmlFor="name" className="my-2 block font-semibold">
                Card Number
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="border-2 block p-3 rounded-sm shadow-md"
              />
            </div>
            <div className="space-x-6 text-5xl flex justify-end">
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faCcMastercard} />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-5">
            <div>
              <label htmlFor="name" className="my-2 block font-semibold">
                Name on card
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 block p-3 rounded-sm shadow-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-5">
            <div>
              <label htmlFor="name" className="my-2 block font-semibold">
                Expiration Date
              </label>
              <input
                type="date"
                name="name"
                id="name"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className="border-2 block p-3 rounded-sm shadow-md"
              />
            </div>
            <div>
              <label htmlFor="name" className="my-2 block font-semibold">
                CVV
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setCvv(e.target.value)}
                className="border-2 block p-3 rounded-sm shadow-md"
                value={cvv}
              />
            </div>
          </div>
          <div className="my-2">
            <p className="text-red-500 font-bold">{error}</p>
          </div>
          <div className="mt-5">
            <button
              onClick={(e) => submitTransition(e)}
              className="p-3 bg-orange-500 rounded-md shadow-sm text-white font-bold"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreditPay;
