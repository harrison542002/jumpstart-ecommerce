import { useEffect, useState } from "react";
import countryList from "../../utils/CountryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";
import {
  editProduct,
  postProduct,
  uploadProductImages,
} from "../../services/AdminAPI";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../services/ProductAPI";

type Props = {};

const AddProduct = (props: Props) => {
  const { id } = useParams();
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [madeIn, setMadeIn] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setLoading] = useState(false);
  const CATEGORYLIST = [
    "Clothing",
    "Electronic",
    "Foods",
    "Jewellery",
    "Kitchen Equipment",
    "Pet Accessories",
  ];
  const [productImages, setProductImages] = useState<any>({});
  const [imageCount, setImageCount] = useState<any>([]);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProduct(id)
        .then((res) => {
          const product = res.data;
          setDescription(product.description);
          setCategory(product.category);
          setItemName(product.itemName);
          setMadeIn(product.madeIn);
          setPrice(product.price);
          const images: any = [];
          product.productImages.forEach((image, index) => {
            const imageString = "imageFile" + index;
            const currentImage = {
              [imageString]: (
                <>
                  <div>
                    <img
                      src={image.img}
                      className="w-32 block shadow h-28"
                      id={"image" + index}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id={"imageFile" + index}
                      onChange={(e) =>
                        previewImage(
                          e,
                          document.getElementById("image" + index)
                        )
                      }
                    />
                  </div>
                </>
              ),
            };
            images.push(currentImage);
          });
          setImageCount(images);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const previewImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    imageRef: any
  ) => {
    if (e.target.files != null) {
      imageRef.src = URL.createObjectURL(e.target.files[0]);
      const id = imageRef.id;
      const images = {
        ...productImages,
      };
      images[id] = e.target.files[0];
      setProductImages(images);
    }
  };
  const deleteImage = (index) => {
    setImageCount([...imageCount]);
    setProductImages({ ...productImages });
    console.log(productImages);
  };
  const addImage = (e) => {
    if (imageCount.length < 5) {
      const index = "imageFile" + imageCount.length;
      const imageFile = {
        [index]: (
          <>
            <div>
              <div className="flex justify-end text-red-500 -mb-4 z-50">
                <FontAwesomeIcon
                  icon={faSquareMinus}
                  className="z-50"
                  onClick={(e) => deleteImage(index)}
                />
              </div>
              <img
                src={""}
                className="w-32 block shadow h-28"
                id={"image" + imageCount.length}
              />
              <label
                className="bg-gray-300 text-black p-2 block mt-2 rounded-md shadow-md text-sm"
                htmlFor={"imageFile" + imageCount.length}
                onClick={(e) => addImage(e)}
              >
                Change
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id={"imageFile" + imageCount.length}
                onChange={(e) =>
                  previewImage(
                    e,
                    document.getElementById("image" + imageCount.length)
                  )
                }
              />
            </div>
          </>
        ),
      };
      setImageCount([...imageCount, imageFile]);
      setFileName("imageFile" + imageCount.length);
    }
  };
  const postProducts = async (e) => {
    setLoading(true);
    if (
      description.length <= 0 ||
      itemName.length <= 0 ||
      price.length <= 0 ||
      category.length <= 0 ||
      madeIn.length <= 0 ||
      imageCount.length === 0
    ) {
      setError("Please fill in all required data for brand");
      setLoading(false);
      return;
    }
    if (id) {
      editProduct(itemName, description, price, category, madeIn, id)
        .then((res) => {
          console.log(res.data);
          navigate("/brand/product-list");
        })
        .catch((error) => console.error(error));
      setLoading(false);
      return;
    }
    await postProduct(itemName, description, price, category, madeIn)
      .then((res) => {
        for (const property in productImages) {
          uploadProductImages(productImages[property], res.data.pid);
        }
        setTimeout(() => {
          setLoading(false);
          navigate("/brand/product-list");
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  return (
    <div className="w-full">
      {isLoading ? (
        <div className="m-5">
          <Loading />
        </div>
      ) : (
        <>
          <p className="text-center text-3xl font-bold">
            {id != null ? "Edit Product" : "Add New Product"}
          </p>
          <div className="grid grid-cols-2 mt-5 lg:mx-40">
            <div className="flex justify-center m-3 p-3">
              <div>
                <label
                  htmlFor="itemName"
                  className="block text-lg font-semibold mt-2"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  name="itemName"
                  className="p-3 rounded-md shadow-md bg-slate-100"
                  placeholder="Name of item"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center m-3 p-3">
              <div>
                <label
                  htmlFor="price"
                  className="block text-lg font-semibold mt-2"
                >
                  Insert Price In Dollar
                </label>

                <input
                  type="number"
                  name="price"
                  className="p-3 rounded-md shadow-md bg-slate-100"
                  placeholder="Price of item"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center m-3 p-3">
              <div>
                <label
                  htmlFor="price"
                  className="block text-lg font-semibold mt-2"
                >
                  Category
                </label>
                <select
                  name="cars"
                  id="cars"
                  className="p-3 rounded-md shadow-md bg-slate-100 w-52"
                  value={category}
                  onChange={(e) => {
                    console.log(e.target.value);

                    setCategory(e.target.value);
                  }}
                >
                  {CATEGORYLIST.map((value) => (
                    <option value={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center m-3 p-3">
              <div>
                <label
                  htmlFor="price"
                  className="block text-lg font-semibold mt-2"
                >
                  Made In
                </label>
                <select
                  name="cars"
                  id="cars"
                  className="p-3 rounded-md shadow-md bg-slate-100 w-52"
                  value={madeIn}
                  onChange={(e) => setMadeIn(e.target.value)}
                >
                  {countryList.map((value) => (
                    <option value={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center m-3 p-3">
              <div>
                <label
                  htmlFor="price"
                  className="block text-lg font-semibold mt-2"
                >
                  About Item
                </label>
                <textarea
                  name="description"
                  className="p-3 rounded-md shadow-md bg-slate-100 w-full h-40"
                  placeholder="Description of brand"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div></div>
            <div className="col-span-2 flex space-x-4 mx-16">
              {imageCount.map((element, index) => element["imageFile" + index])}
            </div>
            <div className="flex justify-center mx-12 my-3 p-3">
              <div className="w-full">
                <div className="mt-3">
                  {id == null && imageCount.length < 5 && (
                    <label
                      className="bg-purple-500 text-white p-3 rounded-md shadow-md font-bold"
                      htmlFor={fileName}
                      onClick={(e) => addImage(e)}
                    >
                      Add Image
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mx-52">
            <p className="my-3 text-red-500 font-bold text-lg">{error}</p>
            <button
              className="bg-orange-500 p-3 text-white font-bold w-full text-lg rounded-lg"
              type="submit"
              onClick={(e) => postProducts(e)}
            >
              {id != null ? "Edit Product" : "Create Product"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddProduct;
