const path = require("path");

module.exports = {
    webpack: function (config, env) {
        config.resolve = {
            alias: {
                Src: path.resolve(__dirname, "src/"),
                Ads: path.resolve(__dirname, "src/ads/"),
                Assets: path.resolve(__dirname, "src/assets/"),
                Components: path.resolve(__dirname, "src/components/"),
                Context: path.resolve(__dirname, "src/context/"),
                CSS: path.resolve(__dirname, "src/css/"),
                Data: path.resolve(__dirname, "src/data/"),
                Functions: path.resolve(__dirname, "src/functions/"),
                Material: path.resolve(__dirname, "src/material/"),
                Styling: path.resolve(__dirname, "src/styling/"),
            },
        };

        return config;
    },
};
