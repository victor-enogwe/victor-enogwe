const path = require('path')
const { sync } = require('fast-glob')
const { createReadStream, createWriteStream, existsSync, mkdirSync } = require('fs')
const { runCLI } = require('jest')
const { spawn } = require('child_process')

/**
 * Apply our actions
 *
 * @param {Compiler} compiler
 *
 * @return {void}
 */
function apply(compiler) {
    compiler.hooks.afterEnvironment.tap(this.hook, this.copy)
    compiler.hooks.watchRun.tapPromise(this.hook, this.run)
    compiler.hooks.thisCompilation.tap(this.hook, this.tap)
}

function copy() {
   try {
        const reactstrap = path.resolve(__dirname, './assets/js/reactstrap.min.js')
        const reactstrapExists = existsSync(reactstrap)
        if (!reactstrapExists) {
            const reactstrapDist = path.resolve(__dirname, 'node_modules/reactstrap/dist/reactstrap.min.js');
            const reactstrapDistExists = existsSync(reactstrapDist)
            if (reactstrapDistExists) {
                const assetsDir = path.resolve(__dirname, './assets')
                const assetsDirExists = existsSync(assetsDir)
                if (!assetsDirExists) {
                    mkdirSync(assetsDir)
                    mkdirSync(`${assetsDir}/js`)
                }
                createReadStream(reactstrapDist).pipe(createWriteStream(reactstrap))
                    .once('open',  () => console.info('copying reactstrap...'))
                    .on('end', () => console.info('copied reactstrap'))
            } else {
                throw new Error('you need to run `npm install reactstrap`.')
            }
        }  else {
            throw new Error('reactstrap exists')
        }
   } catch (error)  {
       console.log(error.message)
   }
}

/**
 *  run Jest
 *
 * @param {compilation.Compilation} compiler
 * @param {Function} callback
 *
 * @return {Promise<any>}
 */
function run (compiler) {
    return new Promise((resolve) => {
        const changed = compiler.watchFileSystem.watcher.mtimes;
        const changedFiles  = Object.keys(changed);
        const hasChange = Boolean(changedFiles.length)
        const jsChange = hasChange && changedFiles.every(file => /(\.(js|jsx|ts|tsx))$/i.test(file))
        const phpChange = hasChange && changedFiles.every(file => /\.php$/i.test(file))
        if (jsChange) return runCLI({ json: false }, [process.cwd()]).then(resolve)
        if (phpChange) return runPhpUnit().then(test => test.kill()).then(resolve)
        return resolve()
    })
}

/**
 * tap compilation
 * watch all php files and test  folder files
 *
 * @param {webbpack.Compilation} compilation
 *
 * @return {void}
 */
function tap(compilation) {
    const phpFiles = sync(['*.php', 'lib/**'], { deep: true })
    const testFiles = sync('tests/**', { deep: true, ignore: ['**/*.snap'] })
    const files = phpFiles.concat(testFiles)
    return compilation.hooks.optimize.tap(this.hook, () => files.map(file => compilation.compilationDependencies.add(file)))
}

function runPhpUnit() {
    return new Promise((resolve, reject) => {
        const covDir = 'coverage/php'
        const args = ['--bootstrap', 'vendor/autoload.php', '--coverage-html', covDir, '--testdox', 'tests/php']
        const test = spawn('vendor/bin/phpunit', args)
        test.stdout.on('data', data => console.log(data.toString()))
        test.stdout.on('end', () => resolve(test))
    })
}

/**
 * Enogwe Webpack Plugin
 * wepack 4+
 *
 * @export
 * @class JestPack
 */

function EnogwePackPlugin() {
    this.hook = 'EnogwePackPlugin'
    this.apply = apply.bind(this)
    this.copy = copy.bind(this)
    this.run = run.bind(this)
    this.tap = tap.bind(this)
}

module.exports = EnogwePackPlugin
