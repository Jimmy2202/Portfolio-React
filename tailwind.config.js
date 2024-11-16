/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(40px)" },
        },
        left_right: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(50vw)" },
        },
      },
      screens: {
        "max-sm2": { raw: "(max-width: 1032px)" },
        "max-hm": { raw: "(max-height: 1400px)" },
        "max-sm": { raw: "(max-width: 600px)" },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        left_right: "left_right 3s ease-in-out forwards",
        pulse_custom: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin_custom: "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
