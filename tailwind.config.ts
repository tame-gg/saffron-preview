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
        saffron: {
          DEFAULT: '#D4A437',
          light: '#E8C068',
          dark: '#B8892B',
        },
        cream: {
          DEFAULT: '#FAF6EE',
          dark: '#F0E8D8',
        },
        pomegranate: {
          DEFAULT: '#8B1A2B',
          dark: '#6B1220',
          light: '#A52535',
        },
        charcoal: {
          DEFAULT: '#1A1614',
          light: '#2D2826',
          medium: '#4A4542',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        farsi: ['"Amiri"', '"Noto Naskh Arabic"', '"Traditional Arabic"', 'serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
