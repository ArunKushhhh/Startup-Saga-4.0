import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import VideoBg from "../../public/videos/bg.mp4";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <video src={VideoBg} loop muted autoPlay id="current-video" className="h-screen lg:w-full lg:h-auto object-cover object-center" />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-8 z-40 text-blue-75">
          <b>SAGA</b>
        </h1>

        <div className="absolute left-2 top-0 z-40 size-full">
          <div className="mt-32 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              <b>startup</b>
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-8 text-black">
        <b>SAGA</b>
      </h1>
    </div>
  );
};

export default Hero;
