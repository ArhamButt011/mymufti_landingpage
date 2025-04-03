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
        primary: '#78827F', // Example primary color
        secondary: {
          DEFAULT: '#38B89A', // Your secondary color
          light: '#5CD6B5', // Lighter shade
          dark: '#2A8E75', // Darker shade
        },
      },
    },
  },
  plugins: [],
};
