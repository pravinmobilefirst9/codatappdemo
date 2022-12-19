import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import SoftwareButton from "../components/Accounting/SoftwareButton";

const Accounting = () => {
  return (
    <div className="bg-slate-50 lg:w-screen lg:h-screen p-5 md:p-10">
      <div className="text-2xl xl:text-4xl font-bold">Account Reconciliation</div>
      <div>powered by CODAT</div>
      <div className="flex items-center justify-between">
        <div className="mt-32 md:ml-28 flex items-center justify-center max-w-[1000px] lg:justify-start">
          <SoftwareButton />
        </div>
        <div className="mt-32 mr-28 hidden md:flex items-center justify-center lg:justify-start">
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_w51pcehl.json"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
