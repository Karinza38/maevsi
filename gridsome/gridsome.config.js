// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: './src/assets/maevsi.svg',
  siteDescription: 'A manager for user supported events.',
  siteName: 'maevsi',
  siteUrl: 'https://maev.si',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    }
  ]
}
