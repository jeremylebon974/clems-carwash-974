import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: '#D4111E', dark: '#A50E18' },
        blue: { DEFAULT: '#1AA8D8', dark: '#1280A5' },
        ink: { DEFAULT: '#05080B', 2: '#0A0F14', 3: '#0F161E' },
        steel: '#1C2530',
        mist: '#8FA3B0',
        fog: '#C8D8E2',
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', 'sans-serif'],
        condensed: ['var(--font-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
