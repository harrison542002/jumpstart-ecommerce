import { faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const CreditPay = (props: Props) => {
  return (
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
            className="border-2 block p-3 rounded-sm shadow-md"
          />
        </div>
      </div>
      <div className="mt-5">
        <button className="p-3 bg-orange-500 rounded-md shadow-sm text-white font-bold">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CreditPay;
