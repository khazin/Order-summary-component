module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        redhatSans: [
        'Red Hat Display',
        'sans-serif'
        ]
      },
      fontWeight: {
        sm: '500',
        md: '700',
        lg: '900'
      },
      colors: {
        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',
        veryPaleBblue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)'
      },
      screens: {
        tablet: '786px',
        desktop: '1366px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
