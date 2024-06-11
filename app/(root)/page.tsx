import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="">
        <h1 className="text-5xl font-extrabold text-slate-900">
          Make <br />
          remote work
        </h1>
        <p className="text-sm font-medium text-gray-700">
          Get your team in sync, no matter your location.
          <br /> Stremline processes, create team rituals, and <br />
          watch productivity soar.
        </p>
        <Button>Learn More</Button>
        <div className="flex gap-5 mt-5">
          <Image src="/client-databiz.svg" alt="" height={50} width={50} />
          <Image src="/client-audiophile.svg" alt="" height={50} width={50} />
          <Image src="/client-maker.svg" alt="" height={50} width={50} />
          <Image src="/client-meet.svg" alt="" height={50} width={50} />
        </div>
      </div>
      <div className="">
        <Image
          src="/image-hero-desktop.png"
          alt="desktop image"
          height={400}
          width={500}
        />
      </div>
    </main>
  );
};

export default Home;
