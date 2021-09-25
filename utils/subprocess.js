'use strict'

const path = require('path')
const execa = require('execa')

const defaults = {
    preferLocal: true,
    localDir: '',
}

async function initialize() {
    defaults.localDir = await checkOutput('npm', ['bin'], {
        preferLocal: false,
        cwd: path.dirname(__dirname),
    })
}

async function checkOutput(file, args, options) {
    const finalOptions = Object.assign({}, defaults, options)

    const result = await execa(file, args, finalOptions)

    return result.stdout
}

module.exports = {
    initialize,
    checkOutput,
}
