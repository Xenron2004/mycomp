/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        infiniteScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        infiniteScrollReverse: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infiniteScroll 15s linear infinite',
        'infinite-scroll-reverse': 'infiniteScrollReverse 15s linear infinite',
      },
  
    
      colors: {
        primary: "#006FF9",
        dark: {
          DEFAULT: "#0d0d12",
          60: "rgba(13, 13, 18, 0.6)", // 60% opacity
        },
        mainBodytext: "#666D80",
        bodyBlue: "#056CF2",
        bgCard: "#1B1A20"
      },
      fontFamily: {
        inter: ['InterDisplay', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
