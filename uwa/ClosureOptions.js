'use strict'

const defaults = {
    bypass: false,
}

class ClosureOptions {
    constructor(options) {
        this.options = Object.assign({}, defaults, options)
    }
}

module.exports = {
    ClosureOptions,
}
