import { Link } from "react-router-dom";
import JoinedMovementCard from "../common/JoinedMovementCard";

const myMovementData = [
  {
    id: 1,
    title: "Design Team",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
    time: "20d ago",
    comments: 400,
    shares: 270,
    img: "https://i.ibb.co.com/YwpLrT7/movement-img.png",
  },
  ,
  {
    id: 2,
    title: "Design Team",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
    time: "20d ago",
    comments: 400,
    shares: 270,
    img: "https://i.ibb.co.com/YwpLrT7/movement-img.png",
  },
  {
    id: 3,
    title: "Design Team",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
    time: "20d ago",
    comments: 400,
    shares: 270,
    img: "https://i.ibb.co.com/YwpLrT7/movement-img.png",
  },
  {
    id: 4,
    title: "Design Team",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
    time: "20d ago",
    comments: 400,
    shares: 270,
    img: "https://i.ibb.co.com/YwpLrT7/movement-img.png",
  },
  {
    id: 5,
    title: "Design Team",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
    time: "20d ago",
    comments: 400,
    shares: 270,
    img: "https://i.ibb.co.com/YwpLrT7/movement-img.png",
  },
];

const MyMovement = () => {
  return (
    <div className="p-4 rounded-[8px] bg-white">
      {/* title  */}
      <div className="flex items-center justify-between">
        <p className="text-[18px] text-themeBlack font-semibold custom-2xl:text-[17px]">
          Joined Movement
        </p>
        <Link
          to={"/"}
          className="inline-block text-primaryColor custom-2xl:text-sm"
        >
          See all
        </Link>
      </div>
      <div>
        {myMovementData.map((item) => (
          <div key={item?.id} className="mt-4">
            <JoinedMovementCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMovement;
