import Logo from "../../assets/js.png";

type Props = {};

const FormNav = (props: Props) => {
  return (
    <>
      <div className=" firefox:bg-opacity-30 text-lg lg:grid-cols-3">
        <div className="flex justify-start">
          <img src={Logo} alt="Jumpstart" className="w-16 h-16" />
          <div className="flex flex-col justify-center">
            <p className="text-3xl tracking-wide italic font-bold text-purple-500">
              Jumpstart
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormNav;
