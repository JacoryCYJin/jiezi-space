/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 自定义间距
      spacing: {
        '15': '3.75rem',  // 60px，用于导航栏高度
        '50': '12.5rem',  // 200px，用于导航栏左右间距
      },
    },
  },
  plugins: [],
}
