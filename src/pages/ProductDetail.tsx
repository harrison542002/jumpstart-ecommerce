import {
  faCartPlus,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactImageMagnify from "react-image-magnify";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import Loading from "../components/Loading";
import SuggestedItems from "../components/SuggestedItems";
import { addItem, getProduct } from "../services/ProductAPI";
import CartNotifiy from "./CartNotifiy";

type Props = {
  setCartItem: any;
  cartItems: any;
};

const ProductDetail = ({ setCartItem, cartItems }: Props) => {
  const cookies = new Cookies();
  const [product, setProduct] = useState<any>(null);
  const [images, setImages] = useState<any>(null);
  const [image, setImage] = useState<any>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const refs = useRef<any>([]);
  refs.current = [];
  const { id } = useParams();
  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res.data);
        setImages(res.data.productImages);
        setImage(res.data.productImages[0].img);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onClickImage = (image: any, i: any) => {
    setImage(image);
    refs.current[i].classList.add("border-orange-500");
    console.log(refs.current[i].classList);

    for (let j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("border-orange-500");
      }
    }
  };
  const addRefs = (el: any) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  const addToCart = (e: any, id: any) => {
    addItem(id)
      .then((res) => {
        setIsVisible(!isVisible);
        setTimeout(() => setIsVisible(false), 1800);
        setCartItem(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      {product != null ? (
        <div className="mt-5">
          <CartNotifiy isVisible={isVisible} />
          <div className="lg:grid grid-cols-2">
            <div className="grid grid-cols-9 p-10">
              <div className="mx-3">
                {images?.length > 0 ? (
                  images.map((img: any, index: any) => (
                    <div className="h-10">
                      <img
                        src={img.img}
                        alt={product.itemName + index}
                        className="border my-5 rounded-lg hover:border-2 w-full h-full"
                        onClick={(e) => onClickImage(img.img, index)}
                        ref={addRefs}
                      />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="col-span-8">
                <div className="h-full">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: product.itemName,
                        isFluidWidth: true,
                        src: image,
                        srcSet: images,
                      },
                      largeImage: {
                        src: image,
                        width: 1200,
                        height: 1800,
                      },
                      enlargedImageContainerDimensions: {
                        width: "200%",
                        height: "100%",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="p-10">
              <h1 className="text-4xl font-extrabold tracking-wider">
                {product.itemName}
              </h1>
              <div className="mt-10 text-lg">
                <div className="grid grid-cols-2">
                  <p className="font-semibold text-xl">Brand</p>
                  <p>{product.brand.brandName}</p>
                </div>
                <div className="grid grid-cols-2 mt-4">
                  <p className="font-semibold text-xl">Category</p>
                  <p>{product.category}</p>
                </div>
                <div className="grid grid-cols-2 mt-4">
                  <p className="font-semibold text-xl">Made In</p>
                  <p>{product.madeIn}</p>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-4xl font-semibold">About item</h1>
                <p className="text-justify font-light">{product.description}</p>
              </div>
              <div className="mt-5">
                {cookies.get("isAllowed") === "true" ? (
                  <>
                    <button
                      className={
                        "bg-orange-500 p-3 rounded-lg shadow-sm font-bold text-white"
                      }
                      onClick={(e) => addToCart(e, product.pid)}
                      disabled={cartItems.find(
                        (item) => item.product.pid === product.pid
                      )}
                    >
                      {cartItems.find(
                        (item) => item.product.pid === product.pid
                      ) ? (
                        "Item Had Been Already Added To Cart"
                      ) : (
                        <>
                          Add To Cart <FontAwesomeIcon icon={faCartPlus} />
                        </>
                      )}
                    </button>
                    <button className="bg-purple-500 p-3 rounded-lg shadow-sm font-bold text-white ml-5">
                      Buy Now <FontAwesomeIcon icon={faMoneyBillTransfer} />
                    </button>
                  </>
                ) : (
                  <Link
                    to={"/register"}
                    className="bg-orange-500 p-3 rounded-lg shadow-sm font-bold text-white"
                  >
                    Sign Up To Purchase
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <SuggestedItems
              category={product.category}
              currentId={product.pid}
            />
          </div>
        </div>
      ) : (
        <div className="p-52">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
