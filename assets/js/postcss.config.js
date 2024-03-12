const themeDir = __dirname + '/../../';
//const themeDir = __dirname;
module.exports = {    
    plugins: [   
        require('postcss-import')({
            path: [themeDir]
            }), 
        require('tailwindcss')(themeDir + 'assets/js/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        }),
    ]
}
