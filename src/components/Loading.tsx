import ReactLoading from "react-loading";
type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="justify-center flex h-full">
      <div className="flex flex-col justify-center">
        <ReactLoading
          type={"spokes"}
          color={"#A855F9"}
          height={50}
          width={50}
        />
      </div>
    </div>
  );
};

export default Loading;
