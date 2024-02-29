const services = [
  {
    plan: "Standard plan",
    price: "50",
    timeframe: "hour",
    item: "Wire-Framing",
  },
  {
    plan: "Installments",
    price: "10",
    timeframe: "week",
    item: "Figma Design",
  },
  {
    plan: "Installments",
    price: "10",
    timeframe: "week",
    item: "Figma Design",
  },
  {
    plan: "Installments",
    price: "10",
    timeframe: "week",
    item: "Figma Design",
  },
  {
    plan: "Installments",
    price: "10",
    timeframe: "week",
    item: "Figma Design",
  },
];

const ServicesCard = () => {
  return (
    <div class="grid grid-cols-4 gap-16">
      {services.map((service, i) => (
        <ServiceCardItem key={i} {...service} />
      ))}
    </div>
  );
};

const ServiceCardItem = ({ plan, price, item, timeframe }) => {
  return (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <h5 className="mb-3 text-lg font-medium text-gray-500 dark:text-gray-400">
          {plan}
        </h5>
        <div className="tex,t-gray-900 flex items-baseline dark:text-white">
          <span className="text-xl font-semibold">$</span>
          <span className="text-3xl font-bold tracking-tight">{price}</span>
          <span className="ms-1 text-base font-normal text-gray-500 dark:text-gray-400">
            /{timeframe}
          </span>
        </div>
        <ul role="list" className="my-5 space-y-3 text-sm">
          <li className="flex items-center space-x-2">
            <svg
              className="h-3 w-3 flex-shrink-0 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="ms-2 text-sm font-normal leading-tight text-gray-500 dark:text-gray-400">
              {item}
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
        >
          Choose plan
        </button>
      </div>
    </>
  );
};

export default ServicesCard;
