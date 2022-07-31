module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic'
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-syntax-jsx',
        'babel-plugin-transform-vite-meta-env'
    ]
}