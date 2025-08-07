import React from "react";
import PagesHero from "../../components/pagesHero";
import NewsCard from "./components/newsCard";
import SectionHeaders from "../../components/sectionHeaders";

const NewsPage = () => {
  return (
    <div className="bg-[#F5F5F5] -mb-12 pb-10">
      <PagesHero pageName="News" pageTitle="news - YDN farmers association" />

      <section className="pt-20 ">
        <div className="container">
          <SectionHeaders subTitle="straight from source" title="our news" />

          <ul className="grid grid-cols-3 gap-y-9">
            <li>
              <NewsCard
                dayOfMonth="26"
                month="May"
                newsHeading="YDN launches AVID II project to amplify farmers voices in Ghana"
                newsSummary="The Peasant Farmers Association of Ghana (PFAG) has officially launched a new initiative titled “Strengthening Farmers’ Voices to ..."
              />
            </li>
            <li>
              <NewsCard
                dayOfMonth="26"
                month="May"
                newsHeading="YDN launches AVID II project to amplify farmers voices in Ghana"
                newsSummary="The Peasant Farmers Association of Ghana (PFAG) has officially launched a new initiative titled “Strengthening Farmers’ Voices to ..."
              />
            </li>
            <li>
              <NewsCard
                dayOfMonth="26"
                month="May"
                newsHeading="YDN launches AVID II project to amplify farmers voices in Ghana"
                newsSummary="The Peasant Farmers Association of Ghana (PFAG) has officially launched a new initiative titled “Strengthening Farmers’ Voices to ..."
              />
            </li>
            <li>
              <NewsCard
                dayOfMonth="26"
                month="May"
                newsHeading="YDN launches AVID II project to amplify farmers voices in Ghana"
                newsSummary="The Peasant Farmers Association of Ghana (PFAG) has officially launched a new initiative titled “Strengthening Farmers’ Voices to ..."
              />
            </li>
            <li>
              <NewsCard
                dayOfMonth="26"
                month="May"
                newsHeading="YDN launches AVID II project to amplify farmers voices in Ghana"
                newsSummary="The Peasant Farmers Association of Ghana (PFAG) has officially launched a new initiative titled “Strengthening Farmers’ Voices to ..."
              />
            </li>
            <li>
              <NewsCard
                dayOfMonth="26"
                month="May"
                newsHeading="YDN launches AVID II project to amplify farmers voices in Ghana"
                newsSummary="The Peasant Farmers Association of Ghana (PFAG) has officially launched a new initiative titled “Strengthening Farmers’ Voices to ..."
              />
            </li>
            <li>
              <NewsCard
                dayOfMonth="26"
                month="May"
                newsHeading="YDN launches AVID II project to amplify farmers voices in Ghana"
                newsSummary="The Peasant Farmers Association of Ghana (PFAG) has officially launched a new initiative titled “Strengthening Farmers’ Voices to ..."
              />
            </li>
            <li>
              <NewsCard
                dayOfMonth="26"
                month="May"
                newsHeading="YDN launches AVID II project to amplify farmers voices in Ghana"
                newsSummary="The Peasant Farmers Association of Ghana (PFAG) has officially launched a new initiative titled “Strengthening Farmers’ Voices to ..."
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
