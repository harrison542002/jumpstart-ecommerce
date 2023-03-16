import {
  faLightbulb,
  faListCheck,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {};

const AdminNav = (props: Props) => {
  return (
    <>
      <div className="p-5 text-lg font-bold">
        <Link to={"/admin"}>
          <FontAwesomeIcon icon={faLightbulb} className="mx-2" />
          Data Summary
        </Link>
      </div>
      <div className="p-5 text-lg font-bold">
        <Link to={"/admin/add-brand"}>
          <FontAwesomeIcon icon={faPlus} className="mx-2" />
          Add New Brand
        </Link>
      </div>
      <div className="p-5 text-lg font-bold">
        <Link to={"/admin/manage-brand"}>
          <FontAwesomeIcon icon={faListCheck} className="mx-2" />
          Manage Brands
        </Link>
      </div>
      <div className="p-5 text-lg font-bold">
        <Link to={"/admin/manage-user"}>
          <FontAwesomeIcon icon={faUsers} className="mx-2" />
          Manage Users
        </Link>
      </div>
    </>
  );
};

export default AdminNav;
