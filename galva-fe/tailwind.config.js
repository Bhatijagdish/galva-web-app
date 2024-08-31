/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '5': '5',
      },
      
      colors: {
        white: "#fff",
        black: "#000",
        darkslategray: "#494949",
        mediumpurple: "rgba(195, 159, 255, 0.5)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        
        gray: {
          "100": "rgba(255, 255, 255, 0.25)",
          "200": "rgba(0, 0, 0, 0)",
          "300": "rgba(255, 255, 255, 0.5)",
          "400": "rgba(255, 255, 255, 0.75)",
          "500": "rgba(255, 255, 255, 0.3)",
          "600": "rgba(255, 255, 255, 0.2)",
        },
        gainsboro: "rgba(217, 217, 217, 0)",
      },
      spacing: {},
      fontFamily: {
        'jura': ['Jura', 'sans-serif'],
        "inria-sans": "'Inria Sans'",
        helvetica: "Helvetica",
        inter: "Inter",
        jura: "Jura",
        "yaldevi-colombo-extralight": "'Yaldevi Colombo ExtraLight'",
      },
      borderRadius: {
        mini: "15px",
        "6xl": "25px",
        xl: "20px",
        "31xl": "50px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      lgi: "1.188rem",
      xl: "1.25rem",
      base: "1rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "10xl": "1.813rem",
      "35xl": "3.375rem",
      "24xl": "2.688rem",
      "12xl": "1.938rem",
      inherit: "inherit",
    },
    screens: {
     
      mq1900: {
        raw: "screen and (max-width: 1900px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
   
  },
  corePlugins: {
    preflight: false,
  },
};

