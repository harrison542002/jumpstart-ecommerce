import { Link } from "react-router-dom";

type Props = {
  shippingAddress: any;
  id: any;
};

const DeliverAddress = ({ shippingAddress, id }: Props) => {
  return (
    <>
      <div className="my-8 border-2 p-8 rounded-lg shadow-md border-purple-500">
        <div>
          <p className="text-center text-xl font-bold">Deliver To</p>
        </div>
        <div className="my-3">
          <div className="grid grid-cols-2">
            <p className="font-bold">Your Full Name</p>
            <p>{shippingAddress.fullName}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-bold">Address</p>
            <p>{shippingAddress.addressDetail}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-bold">City</p>
            <p>{shippingAddress.city}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-bold">Region</p>
            <p>{shippingAddress.region}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-bold">Phone Number</p>
            <p>{shippingAddress.phone}</p>
          </div>
          <div className="w-full my-3 bg-purple-500 p-3 text-center text-white rounded-lg mt-4 font-bold">
            <Link to={"/confirm-order/" + id}>Change Shipping Address</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliverAddress;
