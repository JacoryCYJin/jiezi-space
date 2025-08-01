"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useLanguage } from "@/utils/LanguageContext";
import { heroTextConfig } from "@/constants";

const Hero = () => {
  const { language } = useLanguage();
  const currentHeroText = heroTextConfig[language];
  
  useGSAP(() => {
    const titleSplite = new SplitText(".hero-title", {
      type: "words",
    });

    gsap.from(titleSplite.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.05,
    });
  }, [currentHeroText.heroTitle]);

  return (
    <div className="h-[calc(100vh-3.75rem)] flex justify-center items-center">
        <div className="hero-title text-primary text-4xl font-bold ">{currentHeroText.heroTitle}</div>
    </div>
  );
};
export default Hero;
