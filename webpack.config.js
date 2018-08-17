const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //ponto de entrada. O processo começará aqui e todas as importações a partir deste arquivo
    entry: './src/index.js',
    output: {
        //caminho do arquivo "compilado"
        path: path.join(__dirname, '/dist'),
        //nome do arquivo
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                //irá verificar todos os arquivos que terminem com .js
                test: /\.js$/,
                //ignora a pasta node_modules
                exclude: /node_modules/,
                use: {
                    //utiliza o compilador babel
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}