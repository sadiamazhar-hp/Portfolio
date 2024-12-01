/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this according to your file structure
  ],
  theme: {
    extend: {
      'fontSize':
      {
        'custom-size':'11px',
      },
      'height':
      {
        'lineheight':'12rem',
        'heighted':'4rem'
      },
      'boxShadow': {
            'sh': 'rgba(255,255,255, 0.2) 0px 15px 50px 3px;',
            'sh-light': 'rgba(255,255,255, 0.3) 0px 15px 50px 3px;', // Example of a lighter shadow
            'black':'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'
        }
    },
  },
  plugins: [],
}
