const MainScreenHeader = ({ heading, subHeading }) => {
  return (
    <div className="bg-[#ddc490] px-9 pb-4 pt-10">
      <p className="max-w-3xl px-10 text-3xl font-medium uppercase text-gray-600 xl:px-0">
        {heading}
      </p>
      <p className="max-w-3xl px-10 text-sm font-normal text-gray-600 xl:px-0">
        {subHeading}
      </p>
    </div>
  );
};

export default MainScreenHeader;
