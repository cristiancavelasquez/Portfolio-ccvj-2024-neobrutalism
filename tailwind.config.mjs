import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cabin Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "background-beige": "#f9f5f2",
        "yellow-decoration": "#f7cb45",
        "blue-decoration": "#91a8ed",
        "pink-decoration": "#ea4c89",
        "green-decoration": "#22a094",
        "orange-decoration": "#ff7d59",
        "text-primary": "#282825",
        "text-secondary": "#52514E",
      },
      boxShadow: {
        'buttonShadow': '3px 3px 0px 0px #282825',
        'buttonShadowHover': '5px 5px 0px 0px #282825',
      }
    },
  },
  plugins: [],
};
