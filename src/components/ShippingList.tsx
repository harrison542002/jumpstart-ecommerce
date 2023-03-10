import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {
  addresses: any;
  id: any;
};

const ShippingList = ({ addresses, id }: Props) => {
  return (
    <div className="mx-40 my-10">
      <div className="p-5">
        <Link
          to={"/add-shipping/" + id}
          className="bg-orange-500 text-white p-3 my-5 font-bold rounded-lg hover:bg-orange-600"
        >
          Add New Address <FontAwesomeIcon icon={faPlus} />
        </Link>
        {addresses.map((shippingAddress) => (
          <div className="grid grid-cols-3 border shadow-md rounded-md my-5">
            <div className="p-5">
              <p className="text-lg">{shippingAddress.addressDetail}</p>
              <p className="text-sm">{shippingAddress.region}</p>
              <p className="text-xs">{shippingAddress.type}</p>
            </div>
            <div className="p-5">
              <p className="text-lg">{shippingAddress.fullName}</p>
              <p>{shippingAddress.phone}</p>
            </div>
            <div className="p-5 flex flex-col justify-center">
              <Link
                to={"/payment/" + id + "?deli=" + shippingAddress.sid}
                className="bg-purple-500 p-3 text-white font-bold rounded-md
              hover:bg-purple-600 text-center"
              >
                Choose
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingList;
