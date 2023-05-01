const path = require("path");

const nextConfig = {
  publicRuntimeConfig: {
    GITHUB_LOGIN: process.env.GITHUB_LOGIN,
    GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  },
};

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
