var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin  = require("html-webpack-plugin");

module.exports = {
  // TODO: include or not to include?
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  //   'underscore': 'underscore'
  // },
  entry: path.join(__dirname, "./src/index.js"),
  output: {      
    path: path.join(__dirname, './dist'),      
    filename: 'MyDatePicker.js',      
    library: 'MyDatePicker',      
    libraryTarget: 'umd',      
    publicPath: '/dist/',      
    umdNamedDefine: true  
}, 
resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
},
  module: {
    rules:[
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'},
       // First Rule
      {
        test: /\.js$|jsx/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true,
              presets: ['@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin( "./dist/StoryUI.css" , { allChunks: true } ),
    new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
      })//,
    //new webpack.NoErrorsPlugin()
  ],
    externals: {      
        // Don't bundle react or react-dom      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    } 
};