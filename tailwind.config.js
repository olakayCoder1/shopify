/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './src/**/*.{js,jsx,ts,tsx}',
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        olakay: {
          secondary: '#161d31',
          primary: '#12a2e9',
          outline: '#6768f7',
          
        },
        shopify: {
          primary: '#ea4c89',
          outline: '#c1c2bd',
          
        },
      }),
      fontFamily:{
        merriweather:[ 'Merriweather', 'serif'],
        merri:[ 'Wix Madefor Display', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

