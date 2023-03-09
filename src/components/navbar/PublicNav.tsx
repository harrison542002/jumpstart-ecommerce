import Logo from "../../assets/js.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

type Props = {};

const PublicNav = (props: Props) => {
  const cookies = new Cookies();
  const location = useLocation();
  const [open, setOpen] = useState<Boolean>(false);
  const [isAllowed, setAllowed] = useState<boolean>(false);
  useEffect(() => {
    const isAllowed = cookies.get("isAllowed");
    setAllowed(isAllowed === "true");
  }, [location]);
  function openLists() {
    setOpen(!open);
  }
  return (
    <>
      <div
        className="z-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30
border-b border-gray-200 firefox:bg-opacity-30 text-lg shadow-md grid lg:grid-cols-3"
      >
        <div className="flex justify-around">
          <img src={Logo} alt="Jumpstart" className="w-24 h-24" />
          <div className="flex flex-col justify-center">
            <div className="rounded-lg flex shadow-md border-purple-500 border-2">
              <div className="p-3 rounded-l-lg bg-white">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="fa-lg
              text-purple-500"
                />
              </div>
              <input
                type="text"
                name="query"
                id="query"
                className="p-2 rounded-r-lg bg-none"
                placeholder="Search Product Here ..."
              />
            </div>
          </div>
        </div>
        <div className="lg:flex justify-around lg:space-x-20 col-span-2 text-purple-500">
          <div className="lg:flex flex-col justify-center font-bold">
            <div className="lg:flex justify-between lg:space-x-8">
              <Link to={"/"} className="hover:text-purple-700">
                Jumpstart
              </Link>
              <div
                className="flex lg:justify-between lg:space-x-2 hover:text-purple-700"
                onClick={() => openLists()}
              >
                <p className="">Products</p>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="social-icon icon fa-brands fa-facebook-square fa-lg mt-1"
                />
              </div>
            </div>
          </div>
          {isAllowed ? (
            <Link
              to={"/login"}
              className="lg:flex flex-col justify-center rounded-lg"
              replace={true}
            >
              <div className="text-2xl">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="lg:flex flex-col justify-center rounded-lg"
              replace={true}
            >
              <div
                className="bg-purple-500 py-3 px-4 text-white rounded-lg font-bold
        hover:bg-purple-700 shadow-md"
              >
                Login
              </div>
            </Link>
          )}
        </div>
      </div>
      <div
        className="absolute lg:right-72 lg:w-1/2 z-50 bg-white rounded-md shadow-sm border-2 border-gray-100
    p-3"
        hidden={!open}
      >
        <div className="grid grid-cols-3 text-black">
          <div>
            <Link to={"/products"} className="font-bold text-lg mt-1">
              Electronics
            </Link>
            <ul className="text-sm text-purple-500">
              <li>Asus</li>
              <li>HP</li>
              <li>Dell</li>
              <li>Apple</li>
              <li>One Plus</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg mt-1">Pet Accessories</p>
            <ul className="text-sm">
              <li>Asus</li>
              <li>HP</li>
              <li>Dell</li>
              <li>Apple</li>
              <li>One Plus</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg mt-1">Clothings</p>{" "}
          </div>
          <div>
            <p className="font-bold text-lg mt-1">Foods</p>{" "}
          </div>
          <div>
            <p className="font-bold text-lg mt-1">Kitchen Equipments</p>{" "}
          </div>
          <div>
            <p className="font-bold text-lg mt-1">Jewelleries</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicNav;
