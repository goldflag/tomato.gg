const path = require("path");

module.exports = {
    webpack: function (config, env) {
        config.resolve = {
            alias: {
                Ads: path.resolve(__dirname, "src/ads/"),
                Assets: path.resolve(__dirname, "src/assets/"),
                Components: path.resolve(__dirname, "src/components/"),
                Context: path.resolve(__dirname, "src/context/"),
                CSS: path.resolve(__dirname, "src/css/"),
                Data: path.resolve(__dirname, "src/data/"),
                Functions: path.resolve(__dirname, "src/functions/"),
                Material: path.resolve(__dirname, "src/material/"),
            },
        };

        return config;
    },
};
