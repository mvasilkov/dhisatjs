'use strict'

const defaults = {
    bypass: false,
}

class TerserOptions {
    constructor(options) {
        this.options = Object.assign({}, defaults, options)
    }
}

module.exports = {
    TerserOptions,
}
