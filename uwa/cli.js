'use strict'

const { Command } = require('commander')

const pkg = require('../package.json')

function getOptions() {
    const program = new Command()

    program.version(`uwa ${pkg.version}`)

    program.option('--all-versions', 'show versions of principal dependencies')

    program.parse(process.argv)

    return program.opts()
}

module.exports = {
    getOptions,
}
