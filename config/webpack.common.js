const paths = require('./paths');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // SCSS
    paths.assets + '/styles/index.scss',
    // JS
    paths.src + '/index.tsx',
  ],

  resolve: {
    alias: {
      src: paths.src,
      app: paths.src,
    },
  },
  plugins: [
    //new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
      {
        from: paths.static,
        to: ''        
      },
    ]}
    ),

    new HtmlWebpackPlugin({      
      template: paths.assets + '/index.html',
    }),
  ],
  resolve: {
    extensions:[".tsx",".ts",".js",".json"],
  },

  module: {
    rules: [
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },          
        ],        
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      // Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
        },
      },

      // Images
      {
        test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
        type: 'asset/resource'
      },
    ],
  },
};
