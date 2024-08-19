/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // Add any other paths that might contain Tailwind CSS classes
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#38b2ac', // Define the teal color
        },
      },
    },
  },
  plugins: [],
};
