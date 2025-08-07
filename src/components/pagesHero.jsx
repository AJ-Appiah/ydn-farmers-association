import AboutHeroImage from "../assets/images/about-hero.jpg";
import { Link } from "react-router-dom";

const PagesHero = ({ pageName, pageTitle, pageRoute }) => {
  return (
    <section
      className="text-white flex flex-col items-center pb-[52px] pt-[67px] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${AboutHeroImage})` }}
    >
      <h1 className="mb-2 roboto-slab--700 uppercase">{pageTitle} </h1>

      <ul className="flex gap-x-1 text-white text-[12px] font-semibold">
        <li className="pr-[3px]">
          <Link to={pageRoute}>HOME </Link>
        </li>
        <li className="uppercase">
          <span className="px-1">/ </span>
          {pageName}
        </li>
      </ul>
    </section>
  );
};

export default PagesHero;
