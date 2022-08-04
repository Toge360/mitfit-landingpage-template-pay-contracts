const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // https://www.npmjs.com/package/copy-webpack-plugin

module.exports = {
  // webpack config-setting
  mode: 'development', // development/production
  entry:  {
    main: path.resolve(__dirname, 'src/app.js'),
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].bundle.js', // we can use [contenthash] as name for unique buildnames
    assetModuleFilename: '[name][ext]', // keep original name instead hash
    clean: true,

  },

  devtool: 'inline-source-map', // tracks, where all the content comes from. Good for debugging

  devServer: {
    //contentBase: path.resolve(__dirname, 'dist'),
    port: 5001, // default 8080
    open: true, // launch the browser
    hot: true, // hot reload
    static: true, // war mal watchContentBase -> https://github.com/webpack/webpack-dev-server/blob/master/migration-v4.md
  },

  // loaders
  // loader tell webpack whats to to with specific file-types.
  // webpack only knows js and json by default
  module: {
    rules: [ // babel stuff is a rule too

      //css
      // ! without MiniCssExtractPlugin
      /* {
        test: /\.css$/, use: ['style-loader', 'css-loader'] // has to be in this order. reading from right to left
        // css-loader: looks for the file, turns it into a module and gives it over to the js
        // style-loader: takes it and injected it into the html file
      }, */
      // ! with MiniCssExtractPlugin
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },


      // sass scss
      // ! without MiniCssExtractPlugin
      /* {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ], // has to be in this order. reading from right to left
      }, */

      // ! with MiniCssExtractPlugin
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },

      // images
      {
        test: /\.(svg|ico|png|webp|jpg|jpeg|png|gif)$/, type: 'asset/resource' // webpack5 build-in loader
      },
      // js for babel
      {
        // turning js files (that are not in node_modules) into es5 code
        test: /\.js$/,
        exclude: /node_modules/,
        use:  {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

    ]
  },

  // plugins
  plugins: [new HtmlWebpackPlugin({
    // creates anhtml file into dist folder
    // it uses src/temp.html as template
    title: "template-babel-bulma",
    filename: "index.html",
    template: path.resolve(__dirname, 'src/temp.html'),
  }),
  new MiniCssExtractPlugin({
    filename: 'static/css/[name].bundle.css'
  }),
  new CopyPlugin({
    // Copies individual files or entire directories, which already exist, to the build directory. 
    // https://www.npmjs.com/package/copy-webpack-plugin
    patterns: [
      { from: path.resolve(__dirname, 'src/media'), to: path.resolve(__dirname, 'dist/media') },
    ],
  }),]
}