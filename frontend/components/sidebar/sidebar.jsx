import { useState } from 'react'
import Profile from "../header/Profile";
import NavMenu from "../header/NavMenu";
import Action from "../header/Action";
import NewTransactionModal from "../transaction/NewTransactionModal";
import { useWallet } from '@solana/wallet-adapter-react'
import { useCashApp } from '../../hooks/cashapp'

export const SideBar = () => {
  const { connected, publicKey } = useWallet();
  const [transactionQRModalOpen, setTransactionQRModalOpen] = useState(false);
  const [qrCode, setQrCode] = useState(false);

  const {
    avatar,
    userAddress,
    doTransaction,
    setNewTransactionModalOpen,
    newTransactionModalOpen,
  } = useCashApp();
  return (
    <header className="flex flex-col dark:bg-[#3e1f24] p-12 md:w-[250px]">
      <Profile
        avatar={avatar}
        userAddress={userAddress}
        connected={connected}
      />
      {/* <TransactionQRModal modalOpen={transactionQRModalOpen} setModalOpen={setTransactionQRModalOpen} userAddress={userAddress} setQrCode={setQrCode} myKey={publicKey} /> */}

      <NavMenu connected={connected} publicKey={publicKey} />

      <Action setModalOpen={setNewTransactionModalOpen} buttonText={"New Transaction"}/>
      <NewTransactionModal
        modalOpen={newTransactionModalOpen}
        setModalOpen={setNewTransactionModalOpen}
        addTransaction={doTransaction}
      />
    </header>
  );
};
