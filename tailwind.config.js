/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34d399",
          neutral: "#1f2937",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
