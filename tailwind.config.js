const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#001B39",
        "secondary-bg": "#14304E",
        "primary-text": "#03FF9A",
        "secondary-text": "#B5B5B5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        seesaw: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        seesaw: "seesaw 2s ease-in-out infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ephesis: ["Ephesis", "cursive"],
        montserrat: ["Montserrat Underline", "sans-serif"],
        montez: ["Montez", "cursive"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
}
