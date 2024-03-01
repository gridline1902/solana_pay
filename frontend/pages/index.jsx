import HowItWorksCard from "../components/landing-page/how-it-works-card";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

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
      <div className="my-8 flex flex-col overflow-hidden px-4 lg:flex-row">
        <div className="my-8 flex h-screen flex-col">
          <img
            src="/landingPage/landingPageIllustration.jpg"
            alt="Picture"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-screen flex-col place-content-center justify-center lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl font-black">Why choose NovaPay?</h1>
          <p className="mt-4 text-justify leading-loose tracking-wider text-gray-500">
            Welcome to <em>NovaPay</em>, where you're in charge of your
            earnings. <br />
            Our platform is built on Solana, a fast, secure, and scalable
            blockchain, empowering freelancers like you to take control of your
            finances. <br />
            With NovaPay, you have the freedom to track and manage your payments
            seamlessly. Say goodbye to waiting for checks to arrive or worrying
            about payment delays. Our innovative platform ensures that your
            hard-earned money reaches you quickly and securely. <br />
            Join the future of finance with NovaPay on Solana. Experience the
            convenience and reliability of blockchain technology while enjoying
            the flexibility and autonomy you deserve as a freelancer. <br />
            Start managing your payments with NovaPay today and unlock the full
            potential of your freelance career.
          </p>
        </div>
        
      </div>
      <div className="mt-6 grid w-full grid-cols-1 gap-4 lg:grid-cols-5 px-20">
          <HowItWorksCard />
      </div>
      <div className="mt-8 flex w-full justify-center">
        <div className="flex w-full justify-evenly">
          <div>Terms of service</div>
          <div>Privacy User</div>
        </div>
      </div>
      <div className="flex justify-center py-8">&copy; 2024 NovaPay</div>
    </>
  );
};
export default LandingPage;
