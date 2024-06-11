import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-5 gap-5 md:mt-5">
      <div className="flex flex-col mb-10 md:mb-0 md:ml-5 lg:ml-[140px] md:mr-[25px]">
        <Image
          src="/image-hero-mobile.png"
          alt="Mobile view"
          height={300}
          width={500}
          objectFit="cover"
          className="block sm:hidden"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 mt-1">
          Make <br />
          remote work
        </h1>
        <p className="text-base md:text-lg font-medium text-gray-700 mb-6">
          Get your team in sync, no matter your location.
          <br /> Streamline processes, create team rituals, and <br />
          watch productivity soar.
        </p>
        <Button className="mt-5 hover:bg-white hover:text-black hover:border w-[200px] rounded-md">
          Learn More
        </Button>
        <div className="flex gap-5 mt-10 md:mt-[50px] lg:mt-[100px] justify-center md:justify-start">
          <Image
            src="/client-databiz.svg"
            alt="Databiz logo"
            height={50}
            width={50}
            objectFit="cover"
          />
          <Image
            src="/client-audiophile.svg"
            alt="Audiophile logo"
            height={50}
            width={50}
            objectFit="cover"
          />
          <Image
            src="/client-maker.svg"
            alt="Maker logo"
            height={50}
            width={50}
            objectFit="cover"
          />
          <Image
            src="/client-meet.svg"
            alt="Meet logo"
            height={50}
            width={50}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-shrink-0 mt-3 md:mt-0 lg:mr-[90px] md:mr-[25px]">
        <Image
          src="/image-hero-desktop.png"
          alt="Desktop image"
          height={500}
          width={500}
          objectFit="cover"
          className="rounded-lg shadow-lg sm:block hidden"
        />
      </div>
    </main>
  );
};

export default Home;
