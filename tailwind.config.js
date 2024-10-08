/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  rules: {
    "@next/next/no-img-element": "off",
  },
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
        footerbg: "#6060607d",
        btnbg: "linear-gradient(116deg,#02e9f9,#0ff57b 99.07%)",
      },
      spacing: {
        container: "32px 80px 85px",
        tabcontainer: "25px 25px 85px",
        mcontainer: "20px 20px 85px",
      },
      padding: {
        btn: "10px 15px",
        sbtn: "5px",
        header: "24px 20px",
        bussinessbox: "55px 25px",
        helpPlaning: "80px 20px",
        mhelpplaning: "40px 15px",
        dreambuilder: "0px 86px 0px 0px",
        aiuse: "0px 0px 0px 100px",
        deploy1: "0px 0px 100px 0px",
        deploy3: "0px 0px 135px 0px",
        deploy2: "0px 0px 0px 57px",
        pdeploy: "100px 20px",
      },
      fontSize: {
        val: "120px",
        h1: "42px",
        h2: "40px",
        p: "17px",
        pai: "14px",
      },
      borderRadius: {
        8: "10px",
        7: "5px",
        6: "50%",
      },
      margin: {
        img: "0 115px",
      },
      boxShadow: {
        box: "0px 1px 2px 0px #1018280D",
      },
      plugins: [
        function ({ addUtilities }) {
          const newUtilities = {
            ".text-stroke": {
              "-webkit-text-stroke": "1.2px #000",
            },
          };
          addUtilities(newUtilities, ["responsive", "hover"]);
        },
      ],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
