import { useState, useEffect } from "react";
import { useCashApp } from "../../../hooks/cashapp";
import Modal from "../../Modal";

const GumaTransactionProcessModal = ({
  modalOpen,
  setModalOpen,
  addTransaction,
  defaultReceiver,
  placeholder
}) => {
  const { amount, setAmount } = useCashApp();

  // not clean
  const [receiver, setReceiver] = useState(defaultReceiver || "");
    const [gumaAccountNumber, setGumaAccountNumber] = useState("");

  useEffect(() => {
    setReceiver(defaultReceiver || "");
  }, [defaultReceiver]);

  const onAmountInput = (e) => {
    e.preventDefault();
    const newAmount = e.target.value;

    setAmount(newAmount);

    const input = document.querySelector("input#amount");
    input.style.width = newAmount.length + "ch";
  };

  const onPay = async () => {
    await addTransaction({ amount, receiver });
    setAmount(0);
    setModalOpen(false);
  };

  const isReceiverDisabled = defaultReceiver !== undefined;

  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="relative flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center justify-center text-center text-7xl font-semibold text-[#00d54f]">
          <input
            className="w-12 outline-none"
            id="amount"
            name="amount"
            type="number"
            value={amount}
            onChange={onAmountInput}
            min={0}
          />
          <label htmlFor="amount">SOL</label>
        </div>
        <div className="flex w-full flex-col space-y-2">
          <div className="flex rounded-lg border border-gray-200 p-4">
            <label className="text-gray-300" htmlFor="receiver">
              To:
            </label>
            <input
              className="w-full pl-2 font-medium text-gray-600 placeholder-gray-300 outline-none"
              id="receiver"
              name="receiver"
              type="text"
              placeholder={placeholder}
              value={receiver}
              onChange={(e) =>
                !isReceiverDisabled && setReceiver(e.target.value)
              }
              disabled={isReceiverDisabled} // Disable input if default receiver is provided
            />
          </div>
          <div className="flex rounded-lg border border-gray-200 p-4">
            <label className="text-gray-300" htmlFor="account">
              Account
            </label>
            <input
              className="w-full pl-2 font-medium text-gray-600 placeholder-gray-300 outline-none"
              id="account"
              name="account"
              type="text"
              placeholder={placeholder}
              value={gumaAccountNumber}
              onChange={(e) => {
                const inputValue = e.target.value;
                inputValue.length <= 6 ? setGumaAccountNumber(inputValue) : null;
              }}
            />
          </div>
          <div className="flex w-full space-x-1">
          <button
            onClick={onPay}
            className="w-full rounded-lg bg-[#00d54f] py-3 px-12 text-white hover:bg-opacity-70"
          >
            Pay
          </button>
        </div>
        </div>
      </div>
    </Modal>
  );
};

export default GumaTransactionProcessModal;
