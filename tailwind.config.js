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
          primary: "#ef4444",
          neutral: "#1f2937",
          "base-100": "#f5f5f4",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
