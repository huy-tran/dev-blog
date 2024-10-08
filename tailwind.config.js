import typography from '@tailwindcss/typography'

export default {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        black: '#12151E',
        primary: '#e64833',
        secondary: '#244856',
        accent: '#90aeae'
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      }
    },
  },
  plugins: [
    typography,
  ],
  important: true
}
