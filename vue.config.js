const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.BASE_URL,
  'transpileDependencies': [],
  pwa: {
    name: 'PharmaTrack',
    themeColor: '#FEB802',
    manifestOptions: {
      short_name: 'PharmaTrack',
      description: '',
      theme_color: '#FEB802',
      background_color: '#FDFCF8',
      display: 'standalone',
      orientation: 'portrait',
      start_url: process.env.BASE_URL
    },
    workboxOptions: {
      exclude: [
        /index\.html$/,
        /web\.config$/
      ]
    }
  }
});
