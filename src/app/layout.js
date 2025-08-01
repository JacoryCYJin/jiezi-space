import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/ScrollTrigger";
import NavBar from "@/components/NavBar";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

// gasp 插件不会自动激活，需要手动注册
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <NavBar />
          {/* 在这里添加上边距，这样所有页面都不会被导航栏遮挡 */}
          <main className="pt-15">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
