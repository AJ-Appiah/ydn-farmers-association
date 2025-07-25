import React from "react";

const SectionHeaders = ({ subTitle, title }) => {
  return (
    <>
      <header>
        <p className="text-base text-[var(--color-ydn-green)] italic">
          {subTitle}
        </p>

        <h2 className="text-2xl roboto-slab relative uppercase font-bold text-[var(--color-heading)] ">
          <span className="relative pr-2.5 ">
            {title}
            <div className="w-12 h-0.5 bg-[#99c802] absolute -right-11 top-6"></div>
          </span>
        </h2>
      </header>
    </>
  );
};

export default SectionHeaders;
