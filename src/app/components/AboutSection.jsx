"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

{/*const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>emre</li>
        <li>emre</li>
        <li>kral</li>
        <li>kral</li>
        <li>yazilim</li>
        <li>yazilim</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>deneme 1 2 3 4</li>
        <li>1234 deneme</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>bababaaaabababa</li>
        <li>alooooo</li>
      </ul>
    ),
  },
]; */}

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/coin-image-v2.png"
          width={10000}
          height={10000}
          style={{ marginBottom: "20px" }}
          alt="Caracal Coin Logo"
        />
        
        <div className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold relative">
          <div className="hover-container border border-purple-700 rounded-md p-11">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">
              {'What is Caracal Coin?'}
            </h2>
            <p className="text-base lg:text-lg mt-4">
              {'New generation community-driven Meme İnscriptions. We are Caracal'}
              {'Fam. We will go to the moon. İnscriptions Better than coins. THERE IS NO'}
              {'SCAM OR RUG. Join our adventure.'}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/coin-image-v3.png"
          width={1000}
          height={1000}
          alt="Caracal Coin Logo"
        />
      </div>

      <style jsx>{`
        .hover-container {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .hover-container:hover {
          transform: translate3d(0, -15px, 0); 
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); 
          z-index: 1; 
        }
      `}</style>


    </section>
  );
};

export default AboutSection;
