/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia'],
      },
      colors: {
        // Calm Blue palette (default)
        primary: '#2C5F7C',
        secondary: '#4A90A4',
        accent: '#7FB3D5',
        background: '#F5F7F9',
        text: '#2D3748',

        // Additional color palettes can be configured here
        'warm-earth': {
          primary: '#6B5B4F',
          secondary: '#8C7B6B',
          accent: '#A89985',
          background: '#F9F7F4',
          text: '#3A3530',
        },
        'soft-sage': {
          primary: '#5A7A6B',
          secondary: '#7B9A89',
          accent: '#A4C3B2',
          background: '#F6F8F7',
          text: '#2F4538',
        },
        'professional-slate': {
          primary: '#4A5568',
          secondary: '#718096',
          accent: '#A0AEC0',
          background: '#F7FAFC',
          text: '#2D3748',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}