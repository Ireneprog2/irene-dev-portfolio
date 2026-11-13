import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#080914",
        panel: "#171A32",
        mist: "#A5A6BD",
        glow: "#51D9F4",
        violet: "#9874FF",
        blue: "#527DFF",
      },
      boxShadow: {
        glow: "0 0 40px rgba(81, 217, 244, 0.25)",
      },
      backgroundImage: {
        cosmic: "radial-gradient(circle at top, rgba(152,116,255,0.24), transparent 30%), radial-gradient(circle at 80% 10%, rgba(82,125,255,0.22), transparent 25%), linear-gradient(135deg, #080914, #111326 35%, #171A32)"
      }
    }
  },
  plugins: [],
};

export default config;
