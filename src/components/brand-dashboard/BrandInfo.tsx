import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import BrandImg from "../../assets/img.png";
import { editBrand, uploadBrandImg } from "../../services/AdminAPI";
import { getBrandInfo } from "../../services/ProductAPI";
import Loading from "../Loading";

type Props = {};

const BrandInfo = (props: Props) => {
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [brandEmail, setEmail] = useState("");
  const [brandName, setName] = useState("");
  const [imageFile, setImageFile] = useState<any>(null);
  const [img, setImg] = useState<any>(BrandImg);
  const imgRef = useRef<null | HTMLImageElement>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState<any>("");

  useEffect(() => {
    getBrandInfo()
      .then((res) => {
        const BRAND = res.data;
        setDescription(BRAND.description);
        setContact(BRAND.contact);
        setPassword(BRAND.password);
        setEmail(BRAND.brandEmail);
        setName(BRAND.brandName);
        setImg(BRAND.img);
        setImageFile(BRAND.img);
        setId(BRAND.bid);
      })
      .catch((error) => {
        console.error();
      });
  }, []);
  const previewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setImageFile(e.target.files[0]);
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };
  const createNewBrand = (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (
      description.length <= 0 ||
      contact.length <= 0 ||
      password.length <= 0 ||
      brandEmail.length <= 0 ||
      brandName.length <= 0 ||
      imageFile === null
    ) {
      setError("Please fill in all required data for brand");
      setLoading(false);
      return;
    }
    setError("");
    editBrand(description, contact, password, brandEmail, brandName, id)
      .then((res) => {
        if (typeof imageFile != "string") {
          uploadBrandImg(res.data.bid, imageFile)
            .then((res) => {
              console.log(res.data);
              setSuccess("Brand information has been successfully edited!");
              setLoading(false);
            })
            .catch((error) => console.error(error));
        }
        setSuccess("Brand information has been successfully edited!");
        setLoading(false);
      })
      .catch((error) => console.error(error));
    return;
  };
  return (
    <div className="w-full">
      <p className="text-center text-3xl font-bold">Brand Info</p>
      <div className="grid grid-cols-2 mt-5 lg:mx-40">
        <div className="flex justify-center m-3 p-3">
          <div>
            <label
              htmlFor="brandName"
              className="block text-lg font-semibold mt-2"
            >
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              className="p-3 rounded-md shadow-md bg-slate-100"
              placeholder="Name of brand"
              value={brandName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center m-3 p-3">
          <div>
            <label
              htmlFor="brandEmail"
              className="block text-lg font-semibold mt-2"
            >
              Brand Email Address
            </label>
            <input
              type="text"
              name="brandEmail"
              className="p-3 rounded-md shadow-md bg-slate-100"
              placeholder="Email of brand"
              value={brandEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center m-3 p-3">
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold mt-2"
            >
              Password For Organization
            </label>
            <input
              type="password"
              name="password"
              className="p-3 rounded-md shadow-md bg-slate-100"
              placeholder="Password of brand"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center m-3 p-3">
          <div>
            <label
              htmlFor="contact"
              className="block text-lg font-semibold mt-2"
            >
              Organization Contact Info
            </label>
            <input
              type="text"
              name="contact"
              className="p-3 rounded-md shadow-md bg-slate-100"
              placeholder="Contact of brand"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>
        <div className="mx-10 p-3 col-span-2 w-full">
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-semibold mt-2"
            >
              Organization Description
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
        <div className="flex justify-center mx-10 my-3 p-3">
          <div className="w-full">
            <img
              src={img}
              alt="brand"
              className="w-32 block shadow"
              ref={imgRef}
            />
            <div className="mt-3">
              <label
                htmlFor="file"
                className="cursor-pointer block p-2 bg-orange-500 rounded-lg text-white font-bold shadow-md"
              >
                Upload Image
              </label>
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file"
              onChange={(e) => previewImage(e)}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 mx-52">
        <p className="my-3 text-red-500 font-bold text-lg">{error}</p>
        <p className="my-3 text-green-500 font-bold text-lg">
          {success.length > 0 && (
            <>
              {success} <FontAwesomeIcon icon={faCheck} />
            </>
          )}
        </p>
        {isLoading && (
          <div className="m-5">
            <Loading />
          </div>
        )}

        <button
          className="bg-orange-500 p-3 text-white font-bold w-full text-lg rounded-lg"
          type="submit"
          disabled={isLoading}
          onClick={(e) => createNewBrand(e)}
        >
          {"Edit Brand Info"}
        </button>
      </div>
    </div>
  );
};

export default BrandInfo;
