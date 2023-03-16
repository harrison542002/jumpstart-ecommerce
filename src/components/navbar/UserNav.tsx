import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/js.png";
import Cookies from "universal-cookie";
import {
  faArrowRightFromBracket,
  faEllipsisVertical,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBrandInfo } from "../../services/ProductAPI";

type Props = {};

const UserNav = (props: Props) => {
  const cookies = new Cookies();
  const [popUp, setPopUp] = useState<boolean>(false);
  const [isBrand, setIsBrand] = useState<boolean>(
    cookies.get("isBrand") === "true"
  );
  const [brand, setBrand] = useState<any>(null);

  useEffect(() => {
    if (isBrand) {
      getBrandInfo()
        .then((res) => {
          setBrand(res.data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const logout = () => {
    cookies.remove("isAllowed");
    cookies.remove("token");
    cookies.remove("roles");
    cookies.remove("isBrand");
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
        <div
          className="lg:flex justify-end w-full lg:space-x-20 col-span-2 text-purple-500
        p-10"
        >
          <div className="lg:flex flex-col justify-center font-bold">
            <div className="lg:flex lg:space-x-3">
              <Avatar
                src={isBrand ? (brand != null ? brand.img : "") : ""}
              ></Avatar>
              <div className="mx-5 flex justify-center flex-col text-gray-500">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faEllipsisVertical}
                  onClick={(e) => setPopUp(!popUp)}
                />
              </div>
            </div>
            {popUp && (
              <div className="absolute w-40 right-5 top-24 p-4 text-center border-2 border-gray-100 bg-white text-black z-50 font-bold rounded-lg">
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
        </div>
      </div>
    </>
  );
};

export default UserNav;
