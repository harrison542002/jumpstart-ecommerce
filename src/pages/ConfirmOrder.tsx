import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddShippingAddress from "../components/AddShippingAddress";
import Loading from "../components/Loading";
import ShippingList from "../components/ShippingList";
import { getShippingAddresses } from "../services/ProductAPI";

type Props = {};

const ConfirmOrder = (props: Props) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shippingAddresses, setShippingAddresses] = useState<any>([]);
  useEffect(() => {
    getShippingAddresses()
      .then((res) => {
        setShippingAddresses(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-96 flex flex-col justify-center">
          <Loading />
        </div>
      ) : (
        <>
          {shippingAddresses.length <= 0 ? (
            <AddShippingAddress />
          ) : (
            <ShippingList addresses={shippingAddresses} id={id} />
          )}
        </>
      )}
    </div>
  );
};

export default ConfirmOrder;
