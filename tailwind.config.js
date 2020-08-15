/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      colors: {
        primary: '#00AFF5',
        primaryDark: '#0075A3',
        success: '#5CD85A',
        successDark: '#2DB62B',
        danger: '#FF5A5F',
      },
      boxShadow: {
        primary:
          '0 10px 15px -3px rgba(0, 175, 245, 0.1), 0 4px 6px -2px rgba(0, 175, 245, 0.06);',
        primaryDark:
          '0 10px 15px -3px rgba(0, 117, 163, 0.1), 0 4px 6px -2px rgba(0, 117, 163, 0.06);',
        success:
          '0 10px 15px -3px rgba(92, 216, 90, 0.1), 0 4px 6px -2px rgba(92, 216, 90, 0.06);',
        successDark:
          '0 10px 15px -3px rgba(45, 182, 43, 0.1), 0 4px 6px -2px rgba(45, 182, 43, 0.06);',
        danger:
          '0 10px 15px -3px rgba(255, 90, 95, 0.1), 0 4px 6px -2px rgba(255, 90, 95, 0.06);',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
