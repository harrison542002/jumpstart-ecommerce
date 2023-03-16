import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getBrandProducts } from "../../services/AdminAPI";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {};

const BrandProducts = (props: Props) => {
  const [products, setProduct] = useState<any>([]);
  const [toDeleteId, setToDeleteId] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    getBrandProducts()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClickOpen = (e, id) => {
    setToDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRemove = () => {
    setOpen(false);
    setProduct(products.filter((product) => product.pid != toDeleteId));
    deleteProduct(toDeleteId)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };
  return (
    <div className="w-full">
      <p className="text-center text-3xl font-bold">Manage Posted Product</p>
      <div className="flex justify-center mt-5 mx-10">
        <table className="border-collapse border border-slate-500">
          <thead>
            <tr className="text-lg font-bold text-purple-500">
              <td className="p-3 border border-slate-500 bg-slate-100">
                S.No.
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Item Name
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Category
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Price in $
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Images
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((product: any, index) => (
                <tr>
                  <td className="p-3 border border-slate-500">{index + 1}</td>
                  <td className="p-3 border border-slate-500 ">
                    {product.itemName}
                  </td>
                  <td className="p-3 border border-slate-500">
                    {product.category}
                  </td>
                  <td className="p-3 border border-slate-500">
                    {product.price}
                  </td>
                  <td className="p-3 border border-slate-500">
                    <div>
                      <img
                        src={product.productImages[0].img}
                        alt={product.itemName}
                        className="h-20"
                      />
                      <div className="flex justify-end">
                        <p
                          className="-mt-5 text-right bg-red-500 text-white px-1 rounded-full z-50
                        text-xs"
                        >
                          {product.productImages.length}+
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border border-slate-500">
                    <div className="flex flex-col justify-center">
                      <Link
                        to={"/brand/edit-product/" + product.pid}
                        className="p-3 bg-slate-500 text-white rounded-lg w-20 my-3
                        text-center"
                      >
                        Edit
                      </Link>
                      <button
                        className="p-3 bg-red-500 text-white rounded-lg w-20 my-3
                        text-center"
                        onClick={(e) => handleClickOpen(e, product.pid)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
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
    </div>
  );
};

export default BrandProducts;
