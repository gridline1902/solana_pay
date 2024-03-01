import {
  ClockIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "../../utils/classNames";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { truncate } from "../../utils/string";
import{useRouter} from "next/router"
require("@solana/wallet-adapter-react-ui/styles.css");

const NavMenu = ({ connected, publicKey }) => {
  const menus = [
    {
      icon: ClockIcon,
      item: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: WrenchScrewdriverIcon,
      item: "Services - (beta)",
      path: "/services",
    },
  ];

  return (
    <nav className="flex flex-1 items-center justify-center">
      <ul className="flex flex-col space-y-10">
        {menus.map((menu, i) => (
          <>
            <NavMenuItem
              key={i}
              {...menu}
            />
          </>
        ))}
        <li>
          <WalletMultiButton
            className="phantom-button"
            startIcon={
              <UserCircleIcon
                style={{ height: 24, width: 24}}
              />
            }
          >
            <span className="text-sm font-semibold">
              {connected ? truncate(publicKey.toString()) : "Connect Wallet"}
            </span>
          </WalletMultiButton>
        </li>
      </ul>
    </nav>
  );
};

const NavMenuItem = ({ icon, item, path }) => {
  const {pathname, push} = useRouter()
  const current = pathname === path
  const Icon = icon
  return (
    <li
      onClick={() => {
        push(path)
      }}
      className={classNames(
        "flex cursor-pointer space-x-3 transition-all hover:text-[#194b38]",
        current ? "text-[#15ec3c]" :  "text-white",
        "font-semibold"
      )}
    >
      <Icon className="h-6 w-6 " />
      <span>{item}</span>
    </li>
  );
};

export default NavMenu;
