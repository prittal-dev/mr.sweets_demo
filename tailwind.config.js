/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FDFBF7',
          200: '#F7F3EB',
          300: '#EFE8DA',
          400: '#E5DAC6',
        },
        chocolate: {
          950: '#110C0A',
          900: '#18110F',
          800: '#231815',
          700: '#362823',
          600: '#4F3A34',
        },
        mrsweet: {
          red: '#C8102E',
          darkred: '#9B0B21',
          gold: '#D4AF37',
          amber: '#E5A93C',
          lightgold: '#F4E5B8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(35, 24, 21, 0.08)',
        'floating': '0 20px 40px -15px rgba(35, 24, 21, 0.12)',
        'glow': '0 0 25px rgba(200, 16, 46, 0.18)',
      }
    },
  },
  plugins: [],
}
