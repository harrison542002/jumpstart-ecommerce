import {
  faBuilding,
  faListCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {};

const BrandNav = (props: Props) => {
  return (
    <>
      <div className="p-5 text-lg font-bold">
        <Link to={"/brand"}>
          <FontAwesomeIcon icon={faBuilding} className="mx-2" />
          Brand Profile
        </Link>
      </div>
      <div className="p-5 text-lg font-bold">
        <Link to={"/brand/add-product"}>
          <FontAwesomeIcon icon={faPlus} className="mx-2" />
          Add Product
        </Link>
      </div>
      <div className="p-5 text-lg font-bold">
        <Link to={"/brand/product-list"}>
          <FontAwesomeIcon icon={faListCheck} className="mx-2" />
          Posted Products
        </Link>
      </div>
    </>
  );
};

export default BrandNav;
