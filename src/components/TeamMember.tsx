type Props = {
  img: any;
  name: string;
  position: string;
};

const TeamMember = (props: Props) => {
  const { img, name, position } = props;
  return (
    <div className="p-10">
      <div className="shadow-lg shadow-orange-400 rounded-lg hover:-translate-y-3 transition-all delay-75 duration-700">
        <img src={img} alt={name} className="rounded-t-lg" />
        <div className="bg-orange-500 rounded-b-lg text-white px-5 py-3">
          <p className="font-bold">{position}</p>
          <p className="font-bold text-3xl">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
