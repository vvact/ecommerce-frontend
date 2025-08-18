/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],  // headings
        body: ['Inter', 'sans-serif'],       // paragraphs
        button: ['Montserrat', 'sans-serif'], // buttons
      },
      fontSize: {
        'h1': ['4rem', { lineHeight: '1.2' }],
        'h2': ['3rem', { lineHeight: '1.25' }],
        'h3': ['2.25rem', { lineHeight: '1.3' }],
        'h4': ['1.875rem', { lineHeight: '1.35' }],
        'h5': ['1.5rem', { lineHeight: '1.4' }],
        'h6': ['1.25rem', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      colors: {
        brand: {
          black: '#111111',
          gray: '#6b7280',
        },
      },
      borderRadius: {
        btn: '0.5rem',
      },
    },
  },
  plugins: [],
};
