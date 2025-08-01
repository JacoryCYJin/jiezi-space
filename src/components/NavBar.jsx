"use client";

import gsap from "gsap";
import { navBarConfig, heroTextConfig, languages } from "@/constants";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/utils/LanguageContext";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const { language, switchLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.to("nav", {
      backgroundColor: "#faf9f750",
      backdropFilter: "blur(10px)",
      duration: 1,
      ease: "power2.inOut",
    });
  });

  const currentNavBar = navBarConfig[language];
  const currentHeroText = heroTextConfig[language];

  return (
    <nav className="flex h-15 justify-between items-center px-50 fixed top-0 left-0 right-0 z-50">
      <div className="text-2xl font-bold">{currentHeroText.siteName}</div>
      <div className="flex gap-10 items-center">
        {currentNavBar.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:opacity-70 transition-opacity"
          >
            {item.name}
          </Link>
        ))}

        {/* 语言切换下拉菜单 */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            {languages.find((lang) => lang.code === language)?.flag}
            <svg
              className={`w-4 h-4 transition-transform ${
                showLanguageMenu ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showLanguageMenu && (
            <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 min-w-32">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    switchLanguage(lang.code);
                    setShowLanguageMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${
                    language === lang.code ? "bg-gray-100 dark:bg-gray-700" : ""
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
