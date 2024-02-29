import { useCashApp } from "../../hooks/cashapp";
import Action from "../header/Action";
import GumaTransactionProcessModal from "../transaction/services/GumaTransactionProcessModal";

const services = [
  {
    plan: "Guma Valley",
    items: ["Pay Water Bill"],
    address: "38TJVyCibbmqw4FhX5XTnrHFBzXGjKBwNCRGkciLZtW6",
    placeholder: "Please enter your Account Number"
  },
  {
    plan: "Insurance",
    items: ["Pay Car Insurance", "Pay House Insurance"],
    address: "38TJVyCibbmqw4FhX5XTnrHFBzXGjKBwNCRGkciLZtW6",
    placeholder: "Please enter your SLICO account Number"
  }
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

const ServiceCardItem = ({ plan, items, address, placeholder }) => {
  const { setNewTransactionModalOpen, newTransactionModalOpen, doTransaction } =
    useCashApp();
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-[#3e1f24] sm:p-6">
      <h5 className="mb-3 text-lg font-medium text-gray-500 dark:text-gray-50">
        {plan}
      </h5>
      <div className="tex,t-gray-900 flex items-baseline dark:text-white">
        {/* <span className="text-xl font-semibold">$</span> */}
        {/* <span className="text-3xl font-bold tracking-tight">{price}</span> */}
        {/* <span className="ms-1 text-base font-normal text-gray-500 dark:text-gray-400">
            {timeframe}
          </span> */}
      </div>
      <div className="flex h-[200px] flex-col justify-between">
        <ul role="list" className="my-5 space-y-3 text-sm">
          {items.map((item, i) => (
            <li className="flex items-center space-x-2" key={i}>
              <svg
                className="h-3 w-3 flex-shrink-0 text-[#ddc490] dark:text-[#ddc490]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span
                className="ms-2 text-sm font-normal leading-tight text-gray-500 dark:text-gray-300"
                key={i}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="w-full">
          {" "}
          {/* No need to add margin-top */}
          <Action
            setModalOpen={setNewTransactionModalOpen}
            buttonText={"Pay"}
          />
        </div>
      </div>
      <GumaTransactionProcessModal
        defaultReceiver={address}
        modalOpen={newTransactionModalOpen}
        setModalOpen={setNewTransactionModalOpen}
        addTransaction={doTransaction}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ServicesCard;
