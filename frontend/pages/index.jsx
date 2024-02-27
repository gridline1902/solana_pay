import HowItWorksCard from "../components/landing-page/how-it-works-card";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const LandingPage = () => {
  return (
    <>
      <nav className="relative flex items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <div className="ml-4">
            <img
              src="https://pbs.twimg.com/profile_images/1754920855363002368/g-7jnBuI.jpg"
              alt="Logo"
              className="h-8 w-auto rounded-full "
            />
          </div>
          <h1 className="text-2xl font-bold">NovaPay</h1>
        </div>

        <div className="flex items-center px-4">
          {/* Get Started Button */}
          <Link href="/dashboard">
            <button className="rounded-full bg-[#019863] py-2 px-4 font-bold text-white hover:bg-[#194b38]">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Picture */}
      <div className="my-8 flex items-start justify-center">
        <div className="flex flex-col items-start">
          <div className="relative dark:bg-neutral-800">
            <img
              src="/landingPage/landingPageIllustration.jpg"
              alt="Picture"
              className="bg-dark max-w-3xl rounded border p-1 dark:border-neutral-700 dark:bg-neutral-800"
            />
            {/* <div className="absolute inset-0 flex flex-col justify-center px-8">
              <h1 className="text-3xl font-extrabold">
                Welcome to the future of freelance payments
              </h1>
              <div className="mt-4 text-sm font-normal">
                SolanaPay is a decentralized payment platform that integrates
                with your Solana wallet. Paying freelancers has never been
                easier.
              </div>
            </div> */}
          </div>
          <div className="mt-8 max-w-xl">
            <h1 className="text-4xl font-black">Why choose NovaPay?</h1>
          </div>

          <div className="mt-4 max-w-3xl tracking-wider leading-loose">
            <h1 className="text-m">
              Welcome to NovaPay, where you're in charge of your earnings. Our
              platform is built on Solana, a fast, secure, and scalable
              blockchain, empowering freelancers like you to take control of
              your finances. With NovaPay, you have the freedom to track and
              manage your payments seamlessly. Say goodbye to waiting for checks
              to arrive or worrying about payment delays. Our innovative
              platform ensures that your hard-earned money reaches you quickly
              and securely. Join the future of finance with NovaPay on Solana.
              Experience the convenience and reliability of blockchain
              technology while enjoying the flexibility and autonomy you deserve
              as a freelancer. Start managing your payments with NovaPay today
              and unlock the full potential of your freelance career.
            </h1>
          </div>

          <div className="mt-6 max-w-xl">
            <h1 className="text-2xl font-semibold">How it works</h1>
          </div>

          <div className="mt-6 grid max-w-3xl grid-cols-5 gap-4">
            <HowItWorksCard />
          </div>
          <div className="mt-6 max-w-xl">
            <h1 className="text-2xl font-semibold">Freelancer transaction list</h1>
          </div>

          <div className="relative mt-6 w-full overflow-x-auto">
            <table className="w-full border text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    January 9, 2024
                  </th>
                  <td className="px-6 py-4">For Chicken Town</td>
                  <td className="px-6 py-4">0.003 SOL</td>
                </tr>
                <tr className="border-b bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    February 19, 2024
                  </th>
                  <td className="px-6 py-4">For Website Design</td>
                  <td className="px-6 py-4">0.5 SOL</td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    March 10, 2023
                  </th>
                  <td className="px-6 py-4">For Website Maintenance</td>
                  <td className="px-6 py-4">10 SOL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex w-full justify-center">
            <div className="flex w-full justify-around">
              <div>Terms of service</div>
              <div>Privacy User</div>
            </div>
          </div>
          <div className="mt-8 flex h-5 w-full items-center justify-center space-x-8">
            <button>
              <FiTwitter />
            </button>
            <button>
              <FaWhatsapp />
            </button>
            <button>
              <FaInstagram />
            </button>
          </div>
          <div className="mt-4 flex w-full justify-center">
            &copy;2023 NovaPay
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
