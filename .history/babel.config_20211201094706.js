/*
 * @Author: Dalegac
 * @Date: 2021-11-17 17:11:11
 * @LastEditTime: 2021-11-17 17:35:09
 * @LastEditors: Dalegac
 * @Description: Just say something
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset", "@vue/babel-preset-jsx"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
