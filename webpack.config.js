const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css 확장자로 끝나는 모든 파일
        use: ["style-loader", "css-loader"], // css-loader를 적용한다
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist/', // file-loader와 동일
          name: '[name].[ext]?[hash]', // file-loader와 동일
          limit: 10000 //10kb
        }
      }
    ],
  },
}
