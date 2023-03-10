import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { deleteFromCart, getCartItems } from "../services/ProductAPI";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

type Props = {
  setCartItem: any;
};

const Cart = ({ setCartItem }: Props) => {
  const [orderProduct, setOrderProduct] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selected, setSelected] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [toDeleteId, setToDeleteId] = useState<any>(null);
  const navigate = useNavigate();

  const handleClickOpen = (e, id) => {
    setToDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRemove = () => {
    setOpen(false);
    setCartItems(cartItems.filter((item) => item.product.pid != toDeleteId));
    setCartItem(cartItems.filter((item) => item.product.pid != toDeleteId));
    deleteFromCart(toDeleteId)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCartItems()
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  const selectProduct = (e, product) => {
    if (!e.target.checked) {
      setOrderProduct(orderProduct.filter((item) => item.pid !== product.pid));
      return;
    }
    orderProduct.find((item) => item.pid === product.pid) ? (
      <></>
    ) : (
      setOrderProduct([...orderProduct, product])
    );
  };
  const selectAll = (e) => {
    setSelected(e.target.checked);
    if (!e.target.checked) {
      setOrderProduct([]);
      return;
    }
    const product = cartItems.reduce(
      (newProduct, current) => [...newProduct, current.product],
      []
    );
    setOrderProduct(product);
  };
  const confirmOrder = (e) => {
    let allId;
    orderProduct.forEach((product, index) => {
      if (index === 0) {
        allId = product.pid;
        return;
      }
      allId += "+" + product.pid;
    });
    allId = encodeURIComponent(allId);
    navigate("/confirm-order/" + allId);
  };
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-3 py-5 px-10 text-lg">
          <div>
            <input
              className="w-4 h-4"
              type="checkbox"
              name="all"
              id="all"
              onChange={(e) => selectAll(e)}
            />
            <label className="ml-5" htmlFor="all">
              Select All
            </label>
          </div>
          <hr className="my-5" />
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div className="flex my-5">
                  <div className="flex w-3/4">
                    <input
                      className="w-4 h-4 mr-5"
                      type="checkbox"
                      name={item.product.itemName}
                      id={item.product.pid}
                      onChange={(e) => selectProduct(e, item.product)}
                    />
                    <div className="mx-5 w-40">
                      <img
                        className="max-h-28 max-w-28"
                        src={item.product.productImages[0].img}
                        alt={item.product.itemName}
                      />
                    </div>
                    <div className="w-60">
                      <Link
                        to={"/product/" + item.product.pid}
                        className="text-xl font-bold my-2 hover:underline hover:text-gray-800"
                      >
                        {item.product.itemName}
                      </Link>
                      <p className="text-xs font-light mb-4">
                        {item.product.brand.brandName}
                      </p>
                      <p className="text-orange-500 font-bold">
                        {" "}
                        $ {item.product.price}
                      </p>
                    </div>
                  </div>

                  <div className="w-1/4 flex justify-end">
                    <button
                      id={item.product.pid}
                      onClick={(e) => handleClickOpen(e, item.product.pid)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="cursor-pointer text-red-500"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="my-10 text-center text-purple-500 text-lg font-semibold">
                No Product In Cart!{" "}
                <Link to={"/products"} className="text-orange-500 underline">
                  Shop Now
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="col-span-2">
          <div className="my-3 p-2">
            <p className="text-xl text-center font-bold">Order Summary</p>
            <hr className="my-5" />
            <div>
              {orderProduct.length > 0 ? (
                <>
                  <div className="grid grid-cols-3 font-semibold">
                    <p>Product Name</p>
                    <p>Brand</p>
                    <p>Price in $</p>
                  </div>
                  <div className="my-5">
                    {orderProduct.map((product) => (
                      <div className="grid grid-cols-3 my-2">
                        <p>{product.itemName}</p>
                        <p>{product.brand.brandName}</p>
                        <p>{product.price}</p>
                      </div>
                    ))}
                  </div>
                  <hr className="my-5" />
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 grid grid-cols-2">
                      <p></p>
                      <p className="font-bold text-orange-500">Total Cost</p>
                    </div>
                    <div className="text-orange-500 font-bold">
                      {orderProduct.reduce(
                        (accumulator, current) => accumulator + current.price,
                        0
                      )}
                    </div>
                  </div>
                  <button
                    className="w-full my-5 p-3 text-center bg-purple-500 text-white font-bold rounded-full
                  hover:shadow-sm hover:shadow-purple-300 transition-all duration-700 hover:-translate-y-2"
                    onClick={(e) => confirmOrder(e)}
                  >
                    Confirm Order
                  </button>
                </>
              ) : (
                <>
                  <div className="p-10">
                    <p className="text-purple-500 text-lg text-center font-semibold">
                      No Product In Order!
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              Are You Sure To Remove this item from cart?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleRemove} className="text-red-500">
              Remove
            </Button>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Cart;
