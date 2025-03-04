import type { Config } from "tailwindcss";
import styleguide from "./styleguidePlugin";

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@yext/search-ui-react/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "300px" },
      },
      fontFamily: {
        primary: "'Arial','Helvetica','sans-serif','system'",
        secondary: "'Arial','Helvetica','sans-serif','system'",
        gotham: ["Gotham", "sans-serif"],
        oldStandard: ["Old Standard", "sans-serif"],
      },
      fontSize: {
        sm: ["14px", "22px"],
        base: ["16px", "24px"],
        lg: ["18px", "24px"],
      },
      colors: {
        "brand-primary": "#095587",
        "brand-secondary": "#f4d34c",
        "brand-gray": {
          100: "#F7F7F7",
          200: "#EDEDED",
          300: "#CCC",
          400: "#767676",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      boxShadow: {
        "brand-shadow": "0 -1px 0 0 #CCC inset",
      },
    },
  },
  plugins: [styleguide],
} as Config;
