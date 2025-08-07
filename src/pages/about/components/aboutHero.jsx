import React from "react";
import AboutHeroImage from "../../../assets/images/about-hero.jpg";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section
      className="text-white flex flex-col items-center pb-[52px] pt-[67px] bg-center bg-no-repeat bg-cover h-[40vh]"
      style={{ backgroundImage: `url(${AboutHeroImage})` }}
    >
      <h1 className="mb-2 font-bold">ABOUT US </h1>

      <ul className="flex gap-x-1 text-white">
        <li className="pr-[3px]">
          <Link to="/">HOME </Link>
        </li>
        <li>/ ABOUT US</li>
      </ul>
    </section>
  );
};

export default AboutHero;
