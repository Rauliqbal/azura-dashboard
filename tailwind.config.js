/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          md: "920px",
          lg: "1024px",
          xl: "1060px",
          '1440px': "1280px",
        }
      },
    },
    plugins: [],
  }
}
