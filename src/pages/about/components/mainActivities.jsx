import React from "react";
import SectionHeaders from "../../../components/sectionHeaders";
import MainActivitiesCard from "./mainActivitiesCard";
import MainActivitiesImage from "../../../assets/images/our-story-image.jpg";

const MainActivities = () => {
  return (
    <section className="bg-[#F5F4F4] py-28 pr-15">
      <div className="container flex gap-x-12 ">
        <div className="flex-2/6">
          <img src={MainActivitiesImage} alt="" />
        </div>
        <div>
          <SectionHeaders
            title="our main activities include"
            subTitle="We Are Best In Our Field"
          />

          <div className="flex-2/3">
            <div className="grid grid-cols-2 gap-8">
              <MainActivitiesCard />
              <MainActivitiesCard />
              <MainActivitiesCard />
              <MainActivitiesCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainActivities;
