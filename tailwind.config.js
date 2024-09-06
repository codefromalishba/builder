/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        demo: "#05cd99",
      },
      spacing: {
        container: "32px 80px 85px",
        tabcontainer: "25px 25px 85px",
        mcontainer: "20px 20px 85px",
      },
      padding: {
        btn: "10px 15px",
        sbtn: "5px",
        header: "24px 15px",
        bussinessbox: "55px 25px",
        helpPlaning: "80px 25px",
        mhelpplaning: "40px 15px",
      },
      fontSize: {
        h1: "42px",
        h2: "40px",
        p: "17px",
      },
      borderRadius: {
        8: "10px",
        7: "5px",
      },
      margin: {
        img: "0 115px",
      },
      boxShadow: {
        box: "0px 1px 2px 0px #1018280D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
