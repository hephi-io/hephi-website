import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import GetNotified from "./components/get-notified";
import ContactNow from "./components/contact-now";

export default function Home() {
  return (
    <main className="pb-32">
      <header className="h-[100px] w-full sticky top-0 flex items-center justify-between">
        <nav className="w-[90%] mx-auto">
          <Image src={Logo} alt="logo" />

          {/* <div className="w-[60px] h-8 border border-white rounded-3xl flex items-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div> */}
        </nav>
      </header>

      <div className="bg-[#1B1B1C] w-[90%] max-w-[725px] mx-auto p-6 rounded-2xl mt-32">
        <div className="flex items-center bg-[#242425] h-[52px] rounded-xl mb-10 px-1">
          <div className="w-1/2 border border-[#373738] bg-[#2D2D2E] h-[44px] flex items-center justify-center rounded-lg font-medium">
            Get Notified
          </div>

          <div className="w-1/2 flex items-center justify-center font-medium">
            Contact Now
          </div>
        </div>

        <GetNotified />

        {/* <ContactNow /> */}
      </div>

      <footer className="fixed bottom-0 h-[70px] w-full">
        <div className="w-[90%] mx-auto flex justify-between text-sm text-[#A8A8A8]">
          <span>©2024 Hephi</span>
          <span>Privacy policy</span>
        </div>
      </footer>
    </main>
  );
}
