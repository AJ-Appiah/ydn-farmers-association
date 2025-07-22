import React from "react";
import OurAimImage from "../../../assets/images/our-aim-image.jpg";

const AimSubsection = () => {
  return (
    <section className="bg-ydn-dark text-white">
      <div className="container">
        <div className=" ">
          <div className="flex gap-8">
            <div className="basis-[90%] grow-1">
              <h3 className="mb-4 uppercase">
                Strengthening advocacy capacity of the marginalised
              </h3>
              <p className="mb-2.5">
                <em>
                  At the core of the Association’s work is the power of voice we
                  give to the silent majority and advocate for poverty reduction
                  among rural small holder men and women farmers at local,
                  national and international levels. At the national level, PFAG
                  has developed effective working relationships with various
                  parliamentary select committees and key ministries with an
                  objective of influencing government policies through evidence
                  based farmers’ feedback mechanism. In addition to that, PFAG
                  has strengthened the advocacy capacity of the community farmer
                  based organisations, especially women groups to spearhead the
                  demand for alternative policies.
                </em>
              </p>

              <div className="mt-10">
                <h3>DONORS</h3>
                <ul className="flex mt-7">
                  <div>
                    <li>FAO</li>
                    <li>IBP</li>
                    <li>OSIWA</li>
                    <li>TRUST AFRICA</li>
                  </div>
                  <div>
                    <li>JAFOWA</li>
                    <li>OXFAM IN GHANA</li>
                    <li>SNV</li>
                    <li>BUSAC</li>
                  </div>
                </ul>
              </div>
            </div>

            <div>
              <div className="grow-1 basis-[10%] shrink-0 bg-center ">
                <img
                  src={OurAimImage}
                  alt=""
                  className=" align-middle overflow-clip "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AimSubsection;
