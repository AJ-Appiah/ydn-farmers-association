import React from "react";
import OurStoryImage from "../../../assets/images/our-story-image.jpg";
import SectionHeaders from "../../../components/sectionHeaders";
import { IoChevronForwardSharp } from "react-icons/io5";

const OurStory = () => {
  return (
    <section className=" w-full ">
      <div className="container">
        <article className="flex gap-8 items-center">
          <div className="flex-[60%] min-w-0 pl-6">
            <SectionHeaders subTitle="since est. 2005" title="Our history" />

            <p className="text-[#8e8e8d] text-[14px] leading-[26px]">
              For many years, farmers, especially small-scale holders have
              suffered silently under unfavourable national agricultural
              policies that threaten their livelihoods and dignity. The
              situation became worst after the Ghana structural adjustment and
              economic recovery programme. This is one of the factors that
              informed the formation of the PFAG in 2005 as a group of small
              scale farmers that have come together to take their destiny into
              their own hands; empower themselves to advocate for change in the
              policies and practices that perpetuate their poverty and hinder
              their progress towards achieving food and income security. Today,
              PFAG consists of individual farmers and farmer groups, as well as,
              value chain actors numbering over 1,000,055 and 1,962 farmers
              Based Organisations (FBOs). Membership is spread across all the
              ten regions of Ghana.
              <br />
              The Association was registered with the Registrar General
              Department in August 2008 as a not for profit organization and
              with the Department of Social Welfare as a Non-Governmental
              Organisation, (NGO).
            </p>

            <div className="flex mt-12">
              <IoChevronForwardSharp
                color="#8e8e8d"
                size={12}
                className="mr-28"
              />
              <IoChevronForwardSharp color="#8e8e8d" size={12} />
            </div>
          </div>

          <div className="flex-[40%] ">
            <img src={OurStoryImage} alt="" />

            <header className="mt-11 mb-5">
              <h2 className="text-lg roboto-slab--700 relative uppercase font-bold text-[var(--color-heading)] ">
                <span className="relative pr-2.5 ">
                  our vision
                  <div className="w-12 h-0.5 bg-[#99c802] absolute -right-11 top-4"></div>
                </span>
              </h2>
            </header>
            <p className="text-[#8e8e8d] text-base">
              Our vision is to provide a life of dignity for the peasant
              farmers.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurStory;
