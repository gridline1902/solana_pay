import { useMemo, useState } from "react";
import TransactionDetailModal from "./TransactionDetailModal";
import TransactionItem from "./TransactionItem";
import MainScreenHeader from "../header/main-screen-header";

const TransactionsList = ({ connected, transactions }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTransactionID, setCurrentTransactionID] = useState(null);
  const currentTransaction = useMemo(
    () =>
      transactions.find(
        (transaction) => transaction.id === currentTransactionID
      ),
    [currentTransactionID, transactions]
  );

  const toggleTransactionDetailModal = (value, transactionID) => {
    setCurrentTransactionID(transactionID);
    setModalOpen(value);
  };

  const header = [
    {
      heading: "Transactions",
      subHeading: "List of all transactions",
    },
  ];
  return (
    <div>
      {
        header.map((item, index) => (
          <MainScreenHeader key={index} {...item} />
        ))
      }
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {connected ? (
          <>
            <div className="overflow-x-auto pt-8">
              <table className="w-full divide-y divide-gray-200 border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Transaction Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-[#A39E94]">
                  {transactions.map(
                    ({ id, to, amount, description, transactionDate }) => (
                      <TransactionItem
                        key={id}
                        id={id}
                        to={to}
                        description={description}
                        transactionDate={transactionDate}
                        amount={amount}
                        toggleTransactionDetailModal={
                          toggleTransactionDetailModal
                        }
                      />
                    )
                  )}
                </tbody>
              </table>
            </div>
            <TransactionDetailModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              currentTransaction={currentTransaction}
            />
          </>
        ) : (
          <div className="flex items-center justify-center pt-20">
            <p className="text-2xl font-medium text-gray-600">
              Please connect your wallet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsList;
