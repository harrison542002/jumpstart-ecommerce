import { Navigate, Outlet, Route } from "react-router-dom";
import Cart from "../../pages/Cart";
import ConfirmOrder from "../../pages/ConfirmOrder";
import AddShippingAddress from "../AddShippingAddress";
import PaymentMethods from "../../pages/PaymentMethods";
import CreditPay from "../payments/CreditPay";
import CashOnDeliver from "../payments/CashOnDeliver";
import KBZPay from "../payments/KBZPay";
import ThankYou from "../../pages/ThankYou";

type Props = {
  isAllowed: boolean;
};

const ProtectedRoute = ({ isAllowed }: Props) => {
  return <>{isAllowed ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default ProtectedRoute;
