const webpack = require("webpack");
const config = require("./config/config");

console.log(config[process.env.APP_VUE_ENV]);

module.exports = {
  transpileDependencies: ["uview-ui", "@dcloudio/uni-ui", "luch-request"],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": config[process.env.VUE_APP_ENV],
      }),
    ],
  },
};
