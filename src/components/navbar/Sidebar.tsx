import AdminNav from "./AdminNav";
import BrandNav from "./BrandNav";

type Props = {
  role: string;
};

const Sidebar = ({ role }: Props) => {
  return (
    <div className="border h-full p-3">
      {role === "admin" && <AdminNav />}
      {role === "brand" && <BrandNav />}
    </div>
  );
};

export default Sidebar;
