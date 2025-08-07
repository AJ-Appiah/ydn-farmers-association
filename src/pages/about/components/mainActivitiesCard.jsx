const MainActivitiesCard = () => {
  return (
    <div className="flex items-center w-[400px] box-border">
      <div className="bg-[#7FA409] p-7 rounded-full border-4 border-white mr-3 self-start"></div>

      <div className="pl-4">
        <h3 className="uppercase roboto-slab--700 text-base my-2.5">
          Information and Knowledge management
        </h3>
        <div className="">
          <p className="text-sm text-[#8e8e8d] leading-6 ">
            The association facilitates and promotes collective action by small
            holder farmers to enhance their efforts to lobby and advocate for
            sound agricultural, social and economic policies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainActivitiesCard;
