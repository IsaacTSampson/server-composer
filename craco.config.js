const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@consts": path.resolve(__dirname, "src/consts/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@test": path.resolve(__dirname, "src/test/"),
      "@providers": path.resolve(__dirname, "src/providers/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
  jest: {
    configure: (jestConfig) => {
      jestConfig.moduleNameMapper = {
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@consts/(.*)$": "<rootDir>/src/consts/$1",
        "^@test/(.*)$": "<rootDir>/src/test/$1",
        "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^@providers/(.*)$": "<rootDir>/src/providers/$1",
        "^@utils/(.*)$": "<rootDir>/src/utils/$1",
      };
      return jestConfig;
    },
  },
};
