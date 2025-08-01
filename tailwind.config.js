/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 自定义半透明背景色
        "nav-bg": "#faf9f750",
        // 也可以使用CSS变量方式
        "nav-blur": "rgb(250 249 247 / 0.31)", // 等同于#faf9f750
      },
    },
  },
  plugins: [],
}
