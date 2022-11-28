/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          /* '0%': { transform: 'translateX(-100%)' }, */
          /* '100%': { transform: 'translateX(0px)' }, */
          '0%': { transform: 'translateX(-100%)', opacity: '0%' },
          '90%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0px)', opacity: '100%' },
        },
      },
      animation: {
        'slide-0': 'slide 2s ease-in-out',
        'slide-1': 'slide 2s ease-in-out .2s',
        'slide-2': 'slide 2s ease-in-out .4s',
        'slide-0-fast': 'slide 0.3s ease-in-out',
        'slide-1-fast': 'slide 0.3s ease-in-out .05s',
        'slide-2-fast': 'slide 0.3s ease-in-out .1s',
      },
      colors: {
        "background-color": "var(--background-color)",
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
      'nord': {
        0: '#2E3440',
        1: '#3B4252',
        2: '#434C5E',
        3: '#4C566A',
        4: '#D8DEE9',
        5: '#E5E9F0',
        6: '#ECEFF4',
        7: '#8FBCBB',
        8: '#88C0D0',
        9: '#81A1C1',
        10: '#5E81AC',
        11: '#BF616A',
        12: '#D08770',
        13: '#EBCB8B',
        14: '#A3BE8C',
        15: '#B48EAD',
      },
    },
    },
  },
  plugins: [],
}
