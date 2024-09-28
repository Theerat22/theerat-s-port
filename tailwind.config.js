/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Add your app directory paths
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add any other directories that contain Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
