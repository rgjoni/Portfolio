/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily :{
      'mono': ['SFMono-Regular'],
      sans: ['Open Sans', 'sans-serif'],
      'cormorant-garamond': ['Cormorant Garamond', 'serif'],
    }
  },
  plugins: [],
}

