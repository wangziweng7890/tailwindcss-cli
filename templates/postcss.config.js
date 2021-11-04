module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({
      autoprefixer: true,
      importFrom: [
        () => {
          return {
            customProperties: {
              '--color-primary-1': '#F0F6FF',
              '--color-primary-2': '#D1E2FF',
              '--color-primary-3': '#A8C5FF',
              '--color-primary-4': '#80A6FF',
              '--color-primary-5': '#5784FF',
              '--color-primary-6': '#2C5CF7',
              '--color-primary-7': '#1B40D1',
              '--color-primary-8': '#0E28AB',
              '--color-primary-9': '#041585',
              '--color-primary-10': '#020B5E'
            }
          };
        }
      ]
    })
  ]
};
