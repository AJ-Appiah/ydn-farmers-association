import { FaCircle } from "react-icons/fa";

const MemberCard = ({ memberImage, teamMemberName, positionOfMember }) => {
  return (
    <div className="flex flex-col items-center pb-8 relative group">
      <div className="members-section--container relative ">
        <img
          src={memberImage}
          alt="An image of a member of the YDN Association Team"
          className="w-full"
        />
        <div className="members-section--overlay">
          <ul className="flex justify-center">
            <li className="circle-icon ">
              <FaCircle
                size={30}
                className="circle-icon"
                style={{
                  opacity: 0,
                  transform: "translateY(-100%)",
                }}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white text-center py-3 px-2 -mt-5 z-20">
        <p className="roboto-slab--700">{teamMemberName}</p>
        <p className="text-[#969595] uppercase roboto-slab text-[13px]">
          {positionOfMember}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
