#!/usr/bin/env node
'use strict'

const { getOptions } = require('./uwa/cli')
const { initialize, checkOutput } = require('./uwa/subprocess')
const pkg = require('./package.json')

async function run() {
    const options = getOptions()

    await initialize()

    if (options.allVersions) {
        await version()
        return
    }
}

async function version() {
    console.log(`uwa ${pkg.version}`)

    for (let app of [
        'google-closure-compiler',
        'roadroller',
        'rollup',
        'terser',
    ]) {
        console.log('---')
        console.log(await checkOutput(app, ['--version']))
    }
}

if (require.main === module) {
    run()
}
