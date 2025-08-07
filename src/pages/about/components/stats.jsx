import AnimatedCounter from "./animatedCounter";

const statistics = [
  { id: 1, value: "1500", name: "Membership" },
  { id: 2, value: "1962", name: "Farmer Based Organisations" },
  { id: 3, value: "45%", name: "Female Farmers", suffix: "%" },
  { id: 4, value: "55%", name: "Male Farmers", suffix: "%" },
];

const Stats = () => {
  return (
    <section>
      <div className="">
        <div className="tagline-img">
          <div className="flex gap-16 justify-center w-full">
            {statistics.map((item, index) => (
              <div
                key={item.id || index}
                className="flex-1 max-w-[200px] min-w-0 "
              >
                <h3 className="text-5xl uppercase pt-serif-bold text-white relative z-[2]">
                  <span className="relative pr-2.5 ">
                    <AnimatedCounter value={item.value} duration={2000} />
                    <div className="w-12 h-1 bg-[#99c802] absolute -right-11 bottom-3"></div>
                  </span>
                </h3>
                <p className="text-white uppercase text-sm leading-6 relative pl-2 z-[2] mt-2">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
