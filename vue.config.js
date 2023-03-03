const { defineConfig } = require('@vue/cli-service');
const data = require('./data/data.json');

module.exports = defineConfig({
  //define title as profile name in json
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = data.profile.name;
        return args;
      })
  }
});
