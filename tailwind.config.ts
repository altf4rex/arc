import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C47F3F", //#e4baa0 //#9E5959 // FFCC70
        primaryHover: "#8F7464",
        main: "#FFF",
        secondary: "#000000",
        bgImg: "#F9F9F9",
        mainBg: "#272727",
      }
    },
  },
  plugins: [],
}
export default config
