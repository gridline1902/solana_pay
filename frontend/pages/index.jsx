import HowItWorksCard from "../components/landing-page/how-it-works-card";
import Link from 'next/link';
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
          <div className="dark:bg-neutral-800 relative">
            
            <img
              src="https://unblast.com/wp-content/uploads/2021/09/Working-Man-Illustration-1536x1152.jpg"
              alt="Picture"
              className="max-w-3xl rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <h1 className="text-3xl font-extrabold">
                Welcome to the future of freelance payments
              </h1>
              <div className="mt-4 text-sm font-normal">
                SolanaPay is a decentralized payment platform that integrates
                with your Solana wallet. Paying freelancers has never been
                easier.
              </div>
            </div>
          </div>
          <div className="mt-4 max-w-xl">
            <h1 className="text-4xl">Why choose NovaPay?</h1>
          </div>

          <div className="mt-4 max-w-xl">
            <h1 className="text-sm">
              We believe in a future where everyone has control over their own
              money. That's why we built SolanaPay on Solana, a fast, secure,
              and scalable blockchain.
            </h1>
          </div>

          <div className="mt-6 max-w-xl">
            <h1 className="text-2xl">How it works</h1>
          </div>

          <div className="mt-6 grid max-w-3xl grid-cols-5 gap-4">
            <HowItWorksCard />
          </div>
          <div className="mt-6 max-w-xl">
            <h1 className="text-2xl">Freelancer transaction list</h1>
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
            <div className="w-full flex justify-around">
              <div>Terms of service</div>
              <div>Privacy User</div>
            </div>
          </div>
          <div className="mt-8 flex w-full items-center justify-center space-x-8 h-96">
            <button><FiTwitter /></button>
            <button><FaWhatsapp /></button>
            <button><FaInstagram /></button>
          </div>
            <div className="mt-4 flex w-full justify-center">&copy;2023 NovaPay</div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
