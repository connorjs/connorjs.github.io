export default {
  "*.{css,md}": `prettier -w`,
  "*.{html,js,json}": [`eslint -f pretty --fix`, `prettier -w`],
};
