"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaGooglePlay, FaAppStore, FaGlobe } from "react-icons/fa"; // Import icons

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsAnimating(true); // Trigger animation after the component is mounted
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Grid Background */}
      <div
        className="grid grid-cols-4 gap-0 min-h-screen"
        style={{ gridTemplateRows: "repeat(auto-fill, minmax(100px, 1fr))" }}
      >
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className={`border-r border-b border-[#9e9e9e] ${index % 4 === 3 ? "border-r-0" : ""} ${
              index >= 96 ? "border-b-0" : ""
            } aspect-square`}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-start -mt-10 top-[20vh] ${
          isAnimating ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
        }`}
      >
        <h1
          className="text-[7vw] sm:text-[10vw] md:text-[7vw] font-bold leading-none tracking-wider text-transparent mt-8 ml-10 text-left"
          style={{
            WebkitTextStroke: "2px var(--stroke-color)",
            textStroke: "2px var(--stroke-color)",
          }}
        >
          <p className="font-claven">
            EXPLORE THE <br />
            RACE WITHIN <br />
            <div className="ml-52 sm:ml-28 lg:ml-12">YOU!</div>
          </p>
        </h1>
      </div>

      {/* Buttons */}
      <div
        className={`absolute inset-x-0 flex items-center justify-center space-x-40 sm:space-y-0 sm:space-x-2 lg:space-x-40 mt-[40vh] ${
          isAnimating ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
        }`}
        style={{ top: "40vh", height: "30vh" }}
      >
        <button
          className="bg-red-600 text-black dark:text-white px-6 py-2 flex items-center space-x-2  hover:bg-[#e4e4e4] hover:text-black hover:border-black border-2"
          style={{
            clipPath:
              "polygon(10% 0%, 99% 0%, 100% 70%, 100% 70%, 90% 100%, 1% 100%, 0% 30%)",
            borderRadius: "5px",
            border: "1px solid red",
          }}
          onClick={() => router.push("/page1")}
        >
          <FaGooglePlay size={20} />
          <span>Play Store</span>
        </button>
        <button
          className="bg-red-600 text-black dark:text-white px-6 py-2 flex items-center space-x-2 hover:bg-[#e4e4e4] hover:text-black hover:border-black border-2"
          style={{
            clipPath:
              "polygon(10% 0%, 99% 0%, 100% 70%, 100% 70%, 90% 100%, 1% 100%, 0% 30%)",
            borderRadius: "5px",
            border: "1px solid red",
          }}
          onClick={() => router.push("/page2")}
        >
          <FaAppStore size={20} />
          <span>App Store</span>
        </button>
        <button
          className="bg-red-600 text-black dark:text-white px-6 py-2 flex items-center space-x-2 hover:bg-[#e4e4e4] hover:text-black hover:border-black border-2"
          style={{
            clipPath:
              "polygon(10% 0%, 99% 0%, 100% 70%, 100% 70%, 90% 100%, 1% 100%, 0% 30%)",
            borderRadius: "5px",
            border: "1px solid red",
          }}
          onClick={() => router.push("/page3")}
        >
          <FaGlobe size={20} />
          <span>Web App</span>
        </button>

        

      </div>

      <div className="  flex justify-center mb-160 sm:my-16">
          <video
            className="w-full md:w-4/5 lg:w-3/4 h-auto border rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            src="/assets/earth.mp4"
          />
        </div>
      
        
        <h1
          className="text-[23vw] sm:ml-4 sm:text-[22vw] md:text-[16vw] font-bold leading-none tracking-wider text-black dark:text-white mt-30"
          style={{
            WebkitTextStroke: "1px #1a1a1a",
            textStroke: "1px #1a1a1a",
          }}
        >
          <div className="font-claven ">V Y R A</div>
        </h1>
     
    </div>
  );
}
