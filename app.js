'use strict'

const { initialize, checkOutput } = require('./utils/subprocess')

async function run() {
    await initialize()

    await version()
}

async function version() {
    const pkg = require('./package.json')
    console.log(`Dhisat JS ${pkg.version}`)

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
