"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <div className="col-span-7 place-self-center text-center sm:text-left mb-8 sm:mb-0">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
             {'CARACAL'} 
            </span>
            <br />
            <TypeAnimation
              sequence={["$CRC", 1000, '', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> 
            {'Hello! "Caracal" is a memecoin designed to kick off a brand-new'}
            {'adventure in the crypto world. Known as the best friend of Doge,'}
            {'Caracal aims to provide users with a unique experience in a fun and'}
            {'friendly atmosphere. Standing out as a digital asset aspiring to'}
            {'grow with its community, Caracal invites you to an astonishing '}
            {'journey.' }
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Buy
            </button>
            <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Dexscreener
              </span>
            </button>
          </div>
        </div>
        <div className="relative">
          {/* Sadece web görünümü için: */}
          <div className="hidden sm:block relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
  <Image
    src="/images/coin-image-v1.png"
    alt="coin image v1"
    className="object-cover object-center w-full h-full"
    layout="fill"
  />
</div>
          {/* Web mobil görünümü hariç diğer tüm durumlar için: */}
          <div className="sm:hidden">
            {/* Buraya başka bir içerik veya boş bir içerik ekleyebilirsiniz. */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
