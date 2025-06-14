/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
            primary: '#030014',
            secondary: '#151312',
            light: {
                100: '#D6C6FF',
                200: '#A8B5D8',
                300: '#9CA4AB'
            },
            dark: {
                100: '#221F3D',
                200: '#0F0D23',
            },
            accent: '#AB8BFF'
        }
    },
  },
  plugins: [],
}
