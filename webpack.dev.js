const path = require('path');

module.exports = {
    mode: 'development', // set the mode to production to optimize for performance
    entry: './src/phil.ts', // specify the entry point for your application
    target: 'node', // target the Node.js environment
    output: {
        path: path.resolve(__dirname, 'alfred-workflow/bin'), // specify the output directory
        filename: 'phil.js', // specify the output file name
    },
    resolve: {
        extensions: ['.ts', '.js'], // specify the file extensions to resolve
        modules: [path.resolve(__dirname, 'node_modules')], // specify the path to node_modules folder
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // specify the file types to apply the loader to
                use: 'ts-loader', // specify the loader to use
                //exclude: /node_modules/, // specify any files to exclude from the loader
            },
        ],
    },
};
