import { useMemo, useState } from "react";
import TransactionDetailModal from "./TransactionDetailModal";
import TransactionItem from "./TransactionItem";

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

  return (
    <div>
      <div className="bg-gray-200 px-9 pb-4 pt-10">
        <p className="max-w-3xl px-10 text-3xl font-medium uppercase text-gray-600 xl:px-0">
          Transactions
        </p>
        <p className="max-w-3xl px-10 text-sm font-normal text-gray-600 xl:px-0">
          Latest transactions from your connected wallets.
        </p>
      </div>  
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {connected ? (
          <>
            <div className="overflow-x-auto pt-8">
              <table className="w-full border divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map(({ id, to, amount, description, transactionDate }) => (
                    <TransactionItem
                      key={id}
                      id={id}
                      to={to}
                      description={description}
                      transactionDate={transactionDate}
                      amount={amount}
                      toggleTransactionDetailModal={toggleTransactionDetailModal}
                    />
                  ))}
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
            <p className="text-2xl font-medium text-gray-600">Please connect your wallet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsList;
