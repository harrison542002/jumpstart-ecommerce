import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postShippingAddress } from "../services/ProductAPI";

type Props = {};

const AddShippingAddress = (props: Props) => {
  const { id } = useParams();
  const [fullName, setFullName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const onConfirm = (e) => {
    if (
      fullName.length <= 0 ||
      type.length <= 0 ||
      phone.length <= 0 ||
      addressDetail.length <= 0 ||
      region.length <= 0 ||
      city.length <= 0
    ) {
      setError("Please Fill In All Required Fields!");
      return;
    }
    postShippingAddress(fullName, type, phone, addressDetail, region, city)
      .then((res) => {
        navigate("/confirm-order/" + id);
        navigate(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="p-10">
      <p className="text-3xl font-bold text-center">Add New Shipping Address</p>
      {error.length > 0 && (
        <p className="my-5 text-xl text-center font-light text-red-500">
          {error}
        </p>
      )}
      <div className="flex justify-center">
        <div className="mt-3 lg:grid grid-cols-2">
          <div className="text-lg my-5 px-5">
            <label htmlFor="name" className="my-2 block font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border-2 block p-3 rounded-sm shadow-md"
            />
          </div>
          <div className="text-lg my-5 px-5">
            <label htmlFor="phone" className="my-2 block font-semibold">
              Contact Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              placeholder="+95 XXXXXXXX"
              onChange={(e) => setPhone(e.target.value)}
              className="border-2 block p-3 rounded-sm shadow-md"
            />
          </div>
          <div className="text-lg my-5 px-5">
            <label htmlFor="city" className="my-2 block font-semibold">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Eg. Mandalay"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border-2 block p-3 rounded-sm shadow-md"
            />
          </div>
          <div className="text-lg my-5 px-5">
            <label htmlFor="region" className="my-2 block font-semibold">
              Region
            </label>
            <input
              type="text"
              name="region"
              id="region"
              placeholder="Eg. Chanmyartharzi"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="border-2 block p-3 rounded-sm shadow-md"
            />
          </div>
          <div className="text-lg my-5 px-5">
            <label htmlFor="addressDetail" className="my-2 block font-semibold">
              Address Detail
            </label>
            <textarea
              name="addressDetail"
              id="addressDetail"
              value={addressDetail}
              placeholder="Street Name and State in Detail"
              onChange={(e) => setAddressDetail(e.target.value)}
              className="border-2 block p-3 rounded-sm shadow-md"
            />
          </div>
          <div className="text-lg my-5 px-5">
            <label htmlFor="type" className="my-2 block font-semibold">
              Location Type
            </label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border-2 block p-3 rounded-sm shadow-md
              bg-white"
            >
              <option value="Home">Home</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <div className="text-lg my-5 px-5">
            <button
              className="p-3 bg-purple-500 text-white rounded-sm font-bold shadow-md shadow-purple-300
            hover:bg-purple-600"
              onClick={(e) => onConfirm(e)}
            >
              Confirm Delivery Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShippingAddress;
