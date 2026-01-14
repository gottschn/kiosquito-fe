/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f1ff',
          200: '#b8e4ff',
          300: '#84d2ff',
          400: '#45b7ff',
          500: '#1e96ff',
          600: '#1473e6',
          700: '#135ac0',
          800: '#154a96',
          900: '#173e78',
        },
        accent: {
          100: '#fff7e1',
          200: '#ffe8ad',
          300: '#ffd166',
        },
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
