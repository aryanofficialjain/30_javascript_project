/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-color': '#0076CE',
      },
      textColor: {
        'custom-color': '#0076CE',
      },
      backgroundColor: {
        'custom-color': '#0076CE',
      },
    },
  },
  plugins: [],
}

