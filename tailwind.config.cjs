/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'roboto': ['Roboto Condensed', 'sans-serif'],
        'cnn-s-light': ['cnn-s-light', 'sans-serif'],
        'cnn-s-medium': ['cnn-s-medium', 'sans-serif'],
        'cnn-s-bold': ['cnn-s-bold', 'sans-serif'],
        'cnn-sd-thin': ['cnn-sd-thin', 'sans-serif'],
        'cnn-sd-light': ['cnn-sd-light', 'sans-serif'],
        'cnn-sd-regular': ['cnn-sd-regular', 'sans-serif'],
        'cnn-sd-bold': ['cnn-sd-bold', 'sans-serif'],
        'cnn-sd-black': ['cnn-sd-black', 'sans-serif'],
        'cnn-sc-light': ['cnn-sc-light', 'sans-serif'],
        'cnn-sc-regular': ['cnn-sc-regular', 'sans-serif'],
        'cnn-sc-medium': ['cnn-sc-medium', 'sans-serif'],
        'cnn-sc-bold': ['cnn-sc-bold', 'sans-serif']
      },
      animation: {
        alarm: 'alarm 1.5s ease-in-out infinite',
        liveIn: 'liveIn 1s ease 1 forwards',
        liveOut: 'liveOut 1s ease 1 forwards',
        liveInMobile: 'liveInMobile 1s ease 1 forwards',
        liveOutMobile: 'liveOutMobile 1s ease 1 forwards',
      },
      keyframes: {
        alarm: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        liveIn: {
          '0%': { height: '0px'},
          '100%': { height: '508px'}
        },
        liveOut: {
          '0%': { height: '508px'},
          '100%': { height: '0px'}
        },
        liveInMobile: {
          '0%': { height: '0px'},
          '100%': { height: '685px'}
        },
        liveOutMobile: {
          '0%': { height: '685px'},
          '100%': { height: '0px'}
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}
