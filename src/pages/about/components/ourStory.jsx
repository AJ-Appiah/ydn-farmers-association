import React from "react";
import OurStoryImage from "../../../assets/images/our-story-image.jpg";

const OurStory = () => {
  return (
    <section className=" w-full ">
      <div className="container">
        <article className="flex gap-8 items-center">
          <div className="flex-1 min-w-0">
            <p>Since Est. 2005</p>
            <h1>
              <span className="text-2xl text-[#242424] font-bold">
                OUR HISTORY
              </span>
            </h1>
            <p className="text-[#8e8e8d] text-base">
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
          </div>

          <div className="flex-1">
            <img src={OurStoryImage} alt="" />
            <h2 className="mt-11 mb-5"> Our vision </h2>
            <p>
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
