const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const atImport = require('postcss-import')
const customProperties = require('postcss-custom-properties')
const cssnano = require('cssnano')

const DEBUG = process.env.NODE_ENV !== 'production'

const plugins = [
    atImport,
    customProperties,
    autoprefixer,
]

if (!DEBUG) {
    plugins.push(
        cssnano({
            zindex: false,
        })
    )
}

module.exports = {
    plugins,
}
