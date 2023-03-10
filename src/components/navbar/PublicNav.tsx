import Logo from "../../assets/js.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleDown,
  faCartShopping,
  faEllipsisVertical,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

type Props = { cartItems: any };

const PublicNav = ({ cartItems }: Props) => {
  const cookies = new Cookies();
  const location = useLocation();
  const [open, setOpen] = useState<Boolean>(false);
  const [isAllowed, setAllowed] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<boolean>(false);
  useEffect(() => {
    const isAllowed = cookies.get("isAllowed");
    setAllowed(isAllowed === "true");
  }, [location]);
  function openLists() {
    setOpen(!open);
  }

  const logout = () => {
    cookies.remove("isAllowed");
    cookies.remove("token");
  };
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
            <>
              <div className="flex">
                <Link
                  to={"/cart"}
                  className="lg:flex flex-col justify-center rounded-lg"
                  replace={true}
                >
                  <div className="text-2xl hover:text-purple-700">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                  {cartItems.length > 0 && (
                    <div className="absolute bg-red-500 w-4 h-4 rounded-full ml-5 mb-5 text-xs text-center text-white font-bold">
                      {cartItems.length}
                    </div>
                  )}
                </Link>
                <div className="mx-5 flex justify-center flex-col hover:text-purple-700 ">
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faEllipsisVertical}
                    onClick={(e) => setPopUp(!popUp)}
                  />
                </div>
                {popUp && (
                  <div className="absolute top-24 p-4 text-center border-2 border-gray-100 bg-white text-black z-50 font-bold rounded-lg">
                    <Link
                      to={"/login"}
                      onClick={() => logout()}
                      className="hover:text-gray-800"
                    >
                      Log Out <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </Link>
                  </div>
                )}
              </div>
            </>
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
          <div className="p-2">
            <Link
              to={"/products?category=" + "Electronic"}
              className="font-bold text-lg mt-1"
              reloadDocument
            >
              Electronics
            </Link>
          </div>
          <div className="p-2">
            <Link
              to={"/products?category=" + "Pet Accessories"}
              className="font-bold text-lg mt-1"
              reloadDocument
            >
              Pet Accessories
            </Link>
          </div>
          <div className="p-2">
            <Link
              to={"/products?category=" + "Clothing"}
              className="font-bold text-lg mt-1"
              reloadDocument
            >
              Clothings
            </Link>{" "}
          </div>
          <div className="p-2">
            <Link
              to={"/products?category=" + "Foods"}
              reloadDocument
              className="font-bold text-lg mt-1"
            >
              Foods
            </Link>{" "}
          </div>
          <div className="p-2">
            <Link
              to={"/products?category=" + "Kitchen Equipment"}
              reloadDocument
              className="font-bold text-lg mt-1"
            >
              Kitchen Equipments
            </Link>{" "}
          </div>
          <div className="p-2">
            <Link
              to={"/products?category=" + "Jewellery"}
              reloadDocument
              className="font-bold text-lg mt-1"
            >
              Jewelleries
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicNav;
