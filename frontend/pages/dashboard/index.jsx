import TransactionsList from "../../components/transaction/TransactionsList";
import Layout from "../../components/layout/layout";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCashApp } from "../../hooks/cashapp";

const Dashboard = () => {
  const { transactions } = useCashApp();

  const { connected } = useWallet();
  return (
    <Layout>
      <TransactionsList connected={connected} transactions={transactions} />
    </Layout>
  );
};

export default Dashboard;
