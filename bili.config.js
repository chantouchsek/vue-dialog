module.exports = {
  babel: {
    minimal: true
  },
  output: {
    moduleName: '@chantouchsek/vue-dialog'
  },
  plugins: {
    vue: true
  },
  externals: ['vue'],
  globals: {
    vue: 'Vue'
  }
}
