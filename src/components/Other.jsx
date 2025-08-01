"use client";

import { useLanguage } from "@/utils/LanguageContext";

const Other = () => {
  const { language } = useLanguage();
  return <div className="h-200">Other</div>;
};

export default Other;   