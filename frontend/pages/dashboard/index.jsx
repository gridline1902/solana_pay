import TransactionsList from "../../components/transaction/TransactionsList";
import Layout from "../../components/layout/layout";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCashApp } from "../../hooks/cashapp";
import MainScreenHeader from "../../components/header/main-screen-header";

const Dashboard = () => {
  const { transactions } = useCashApp();

  const { connected } = useWallet();
  return (
    <Layout>
      <MainScreenHeader
        heading={"Transactions"}
        subHeading={"List of all transaction"}
      />
      <TransactionsList connected={connected} transactions={transactions} />
    </Layout>
  );
};

export default Dashboard;
