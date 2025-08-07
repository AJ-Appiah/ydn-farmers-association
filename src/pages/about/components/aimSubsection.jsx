import React from "react";
import OurAimImage from "../../../assets/images/our-aim-image.jpg";
import { FaRegHandPointRight } from "react-icons/fa";

const donorNames = [
  "FAO",
  "IBP",
  "OSIWA",
  "TRUST AFRICA",
  "JAFOWA",
  "OXFAM IN GHANA",
  "SNV",
  "BUSAC",
];

const AimSubsection = () => {
  return (
    <section className="bg-ydn-dark text-white">
      <div className="flex gap-8 ">
        <div className="flex-[80%] pt-[75px] pb-16 pl-16 ">
          <h3 className="mb-4 uppercase roboto-slab--700 text-2xl text-[var(--color-ydn-yellow)]">
            Strengthening advocacy capacity of the marginalised
          </h3>
          <p className="mb-2.5">
            <em>
              At the core of the Association’s work is the power of voice we
              give to the silent majority and advocate for poverty reduction
              among rural small holder men and women farmers at local, national
              and international levels. At the national level, PFAG has
              developed effective working relationships with various
              parliamentary select committees and key ministries with an
              objective of influencing government policies through evidence
              based farmers’ feedback mechanism. In addition to that, PFAG has
              strengthened the advocacy capacity of the community farmer based
              organisations, especially women groups to spearhead the demand for
              alternative policies.
            </em>
          </p>

          <div className="mt-10">
            <h3 className="text-2xl">DONORS</h3>
            <ul className="flex gap-x-10 mt-7 text-[var(--color-ydn-yellow)]">
              <div>
                {donorNames.slice(0, 4).map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-x-3.5 mb-4"
                    >
                      <FaRegHandPointRight />
                      {item}
                    </li>
                  );
                })}
              </div>
              <div>
                {donorNames.slice(4).map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-x-3.5 mb-4"
                    >
                      <FaRegHandPointRight />
                      {item}
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex-[20%] flex h-full">
            <img src={OurAimImage} alt="" className="h-11/12 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AimSubsection;
