const path = require('path'); // import module from node path. (CommonJS  - node code writing pattern).

module.exports = {
  mode: 'development', // to make the code minimized put instead of "developer", put "production".
  entry: './src/index.js', //input file
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'), // dirname is a node variable which is the current directory. This method will allow us to access the directories regardless of the operating system. 
    filename: 'bundle.js' // it's a totally different file from our scripts, it's a combination of our scripts.
  },
  module: {
    rules: [ // Is an array with objects inside. These objects contain rules for each technology. if it had css or image, there would be more rules. 
      {
        exclude: /node_modules/, //what will webpack delete
        test: /\.js$/, //which file will be parsed to form the bundle
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
	      }
		   }
			]
	  },
  devtool: 'source-map' // Does a mapping of the bundle in case of an error in it, this same error is identified in our code. 
};