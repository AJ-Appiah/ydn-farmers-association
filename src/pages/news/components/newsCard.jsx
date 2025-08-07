import { Link } from "react-router-dom";
import NewsImage from "../../../assets/images/news-image.jpeg";

const NewsCard = ({
  authorName,
  newsHeading,
  newsSummary,
  month,
  dayOfMonth,
  imageForPost,
}) => {
  return (
    <div className="px-4 ">
      <div className="relative">
        <img src={imageForPost || NewsImage} alt="Image for news Post" />

        <div className="bg-ydn-green text-white px-3 py-1 flex flex-col items-center absolute bottom-0 right-0 pt-serif-italic--500">
          <p className="pt-serif-regular-italic text-[25px]"> {dayOfMonth}</p>
          <span className="text-sm">{month}</span>
        </div>
      </div>

      <div
        className="flex text-[#898989]
    text-[13px] border-b-[#E1E1E1] border-b-1 mb-8 py-2 pl-10"
      >
        <p className="border-r-1 border-r-[#E1E1E1] pr-3">
          By: {"YDN Admin" || authorName}
        </p>
        <p className="px-3">Read More</p>
      </div>

      <Link className="text-[#242424] hover:text-[#98BC24] text-base font-bold leading-7">
        {newsHeading}
      </Link>
      <p className="mt-4 text-[15px] text-[#898989] font-medium">
        {newsSummary}
      </p>
    </div>
  );
};

export default NewsCard;
