import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Code from "../../assets/qrcode.png";
import { addOrder } from "../../services/ProductAPI";
import PaymentStatus from "../../utils/PaymentStatus";
import PaymentTypes from "../../utils/PaymentType";
import Loading from "../Loading";
type Props = {
  setCartItem: any;
};

const KBZPay = ({ setCartItem }: Props) => {
  const [transition, setTransition] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams<any>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const deli = searchParams.get("deli");
  const submitTransition = (e) => {
    setLoading(true);
    if (transition.length <= 0) {
      setError("Please input transition number");
      setLoading(false);
      return;
    }
    if (id != undefined) {
      addOrder(
        PaymentStatus.paid,
        PaymentTypes.KBZ,
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
        <div className="flex justify-center flex-col">
          <div className="p-10">
            <div className="grid grid-cols-2">
              <div className="w-52">
                <img src={Code} alt="kbzpay" />
              </div>
              <div>
                <p className="text-lg font-bold">
                  Please Scan the QR Code to Pay
                </p>
                <div className="mt-3 font-light">
                  <p>Step 1 : Open KBZPay APP</p>
                  <p>Step 2 : Click on "Scan QR Code"</p>
                  <p>Step 3 : Enter PIN Number and Amount</p>
                  <p>Step 4 : Click on Pay and copy Transaction Number</p>
                  <p>
                    Step 5 : Paste the Transaction Number in below inbox and
                    click on submit
                  </p>
                </div>
                <div className="mt-5">
                  <p>Enter Transition Number :</p>
                  <input
                    type="text"
                    className="p-3 border-2 shadow-sm w-full rounded-md mt-2 block border-gray-500"
                    placeholder="XXXXXXXXXXXXX"
                    value={transition}
                    onChange={(e) => setTransition(e.target.value)}
                  />
                  <p className="text-red-500 font-bold">{error}</p>
                </div>
                <div className="mt-5">
                  <button
                    className="rounded-md bg-orange-500 text-white font-bold p-3"
                    onClick={(e) => submitTransition(e)}
                  >
                    Submit Transition
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KBZPay;
