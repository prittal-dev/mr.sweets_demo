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
          200: '#FAF6EE',
          300: '#F5EFE3',
          400: '#EFE8DA',
          500: '#E5DAC6',
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
          burgundy: '#8B001D',
          deepburgundy: '#7B0D1E',
          darkestburgundy: '#5A0614',
          gold: '#D4AF37',
          amber: '#E5A93C',
          yellow: '#FFC72C',
          lightgold: '#F4E5B8',
          cream: '#FFFDF9',
          warmcream: '#FAF6EE',
          charcoal: '#18110F',
          heading: '#111827',
          green: '#15803D',
          freshgreen: '#16A34A',
          lightgreen: '#DCFCE7',
        }
      },
      fontFamily: {
        sans: ['Fredoka', 'Plus Jakarta Sans', 'sans-serif'],
        outfit: ['Fredoka', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        serif: ['Fredoka', 'serif'],
        playfair: ['Fredoka', 'serif'],
        jakarta: ['Fredoka', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
        'pill': '9999px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(35, 24, 21, 0.08)',
        'floating': '0 20px 40px -15px rgba(35, 24, 21, 0.12)',
        'glow': '0 0 25px rgba(200, 16, 46, 0.18)',
        'glow-gold': '0 0 25px rgba(255, 199, 44, 0.28)',
        'pill-active': '0 2px 10px rgba(139, 0, 29, 0.10)',
      }
    },
  },
  plugins: [],
}
