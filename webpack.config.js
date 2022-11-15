// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/index.js', // entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'petgram - Tu app de fotos de mascotas',
      shortname: 'Petgram 🐕‍🦺',
      description: 'con Petgram puedes encontrar fotos de animales domesticos',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#fff',
      theme_color: '#b1a',
      prefer_related_applications: true,
      icons: [
        // {
        //   src: path.resolve('src/assets/icon.png'),
        //   size: '144x144',
        //   sizes: [96, 128, 144, 192, 256, 384, 512],
        //   type: "image/png",
        //   purpose: 'any maskable',
        //   destination: path.join('Icons'),
        //   ios: true,
        // },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '144x144',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '192x192',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '256x256',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '384x384',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '512x512',
          purpose: 'any maskable',
          type: 'image/png'
        },
      ]
    }),
    new CleanWebpackPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://res.cloudinary.com|images.unsplash.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server-joel-suarez-86194ed31-joelsuarez1101.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'ipi'
          }
        },
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    watchFiles: path.join(__dirname, './**'),
    open: true
  }
}
