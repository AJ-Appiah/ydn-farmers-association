import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

const DedicatedTeamCard = ({
  memberImage,
  teamMemberName,
  positionOfMember,
}) => {
  return (
    <div className="flex flex-col items-center pb-8 relative group">
      <div className="members-section--container relative ">
        <img
          src={memberImage}
          alt="An image of a member of the YDN Association Dedicated Team"
          className="w-full"
        />
        <div className="members-section--overlay">
          <div className="flex justify-center">
            <div className="circle-icon items-center flex gap-3 ">
              <li>
                <Link>
                  <TiSocialFacebook
                    size={25}
                    color="#fff"
                    className="circle-icon bg-[#272C0F] rounded-full flex justify-center text-center leading-7 -ml-1  "
                    style={{
                      opacity: 0,
                      transform: "translateY(-100%)",
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <FaTwitter
                    size={25}
                    color="#fff"
                    className="circle-icon justify-center flex bg-[#272C0F] rounded-full k text-center leading-7 -ml-1 p-1"
                    style={{
                      opacity: 0,
                      transform: "translateY(-100%)",
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <AiFillInstagram
                    size={25}
                    color="#fff"
                    className="circle-icon bg-[#272C0F] rounded-full flex justify-center  text-center leading-7 -ml-1 p-1"
                    style={{
                      opacity: 0,
                      transform: "translateY(-100%)",
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <TiSocialLinkedin
                    size={25}
                    color="#fff"
                    className="circle-icon bg-[#272C0F] rounded-full flex justify-center p-0.5 text-center leading-7 -ml-1"
                    style={{
                      opacity: 0,
                      transform: "translateY(-100%)",
                    }}
                  />
                </Link>
              </li>
            </div>
          </div>
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

export default DedicatedTeamCard;
