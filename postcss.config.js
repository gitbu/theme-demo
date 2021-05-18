const defaultTheme = require('./src/theme/cssvar/default');

const postcssCustompProperties = require("postcss-custom-properties");

module.exports = {
  plugins: [
    postcssCustompProperties({
      importFrom: {
        customProperties: defaultTheme,
      },
    }),
  ],
};
