import { ChildProcessWithoutNullStreams, spawn } from 'child_process'
import { sync } from 'fast-glob'
import { createReadStream, createWriteStream, existsSync, mkdirSync } from 'fs'
import { IEnogweWebpackPlugin } from 'global'
import { runCLI } from 'jest'
import path from 'path'
import webpack from 'webpack'

/**
 * Apply our actions
 *
 * @param {Compiler} compiler
 *
 * @return {void}
 */
function apply(this: IEnogweWebpackPlugin, compiler: webpack.Compiler): void {
  compiler.hooks.afterEnvironment.tap(this.hook, this.copy)
  compiler.hooks.watchRun.tapPromise(this.hook, this.run)
  compiler.hooks.thisCompilation.tap(this.hook, this.tap)
}

/**
 * Webpack Copy
 *
 */
function copy() {
  try {
    const reactstrap = path.resolve(__dirname, './assets/js/reactstrap.min.js')
    const reactstrapExists = existsSync(reactstrap)
    if (!reactstrapExists) {
      const reactstrapDist = path.resolve(__dirname, 'node_modules/reactstrap/dist/reactstrap.min.js')
      const reactstrapDistExists = existsSync(reactstrapDist)
      if (reactstrapDistExists) {
        const assetsDir = path.resolve(__dirname, './assets')
        const assetsDirExists = existsSync(assetsDir)
        if (!assetsDirExists) {
          mkdirSync(assetsDir)
          mkdirSync(`${assetsDir}/js`)
        }
        createReadStream(reactstrapDist).pipe(createWriteStream(reactstrap))
          .once('open', () => console.info('copying reactstrap...'))
          .on('end', () => console.info('copied reactstrap'))
      } else {
        throw new Error('you need to run `npm install reactstrap`.')
      }
    } else {
      throw new Error('reactstrap exists')
    }
  } catch (error) {
    console.info(error.message)
  }
}

/**
 * run Jest
 *
 * @param {(webpack.Compiler & { watchFileSystem: any })} compiler
 * @returns {Promise<any>}
 */
async function run(compiler: webpack.Compiler | any): Promise<any | void> {
  return new Promise(async (resolve) => {
    const changed = compiler.watchFileSystem.watcher.mtimes
    const changedFiles = Object.keys(changed)
    const hasChange = Boolean(changedFiles.length)
    const jsChange = hasChange && changedFiles.every(file => /(\.(js|jsx|ts|tsx))$/i.test(file))
    const phpChange = hasChange && changedFiles.every(file => /\.php$/i.test(file))
    if (jsChange) { await runCLI({ json: false } as any, [process.cwd()]) }
    if (phpChange) {
      await composerDumpAutoload()
        .then((dumpProcess: ChildProcessWithoutNullStreams) => dumpProcess.kill())
        .then(runPhpUnit).then((testProcess: ChildProcessWithoutNullStreams) => testProcess.kill())
    }
    return resolve()
  })
}

/**
 * tap compilation
 * watch all php files and test  folder files
 *
 * @param {webpack.Compilation} compilation
 *
 * @return {void}
 */
function tap(this: IEnogweWebpackPlugin, compilation: webpack.compilation.Compilation): void {
  const files = [...sync(['*.php', 'lib/**'], { deep: true }), ...sync('tests/**', { deep: true, ignore: ['**/*.snap'] })] as string[]
  return compilation.hooks.optimize.tap(this.hook, () => files.map((file) => (compilation as any).compilationDependencies.add(file)))
}

/**
 * Run Php Unit Tests
 *
 * @returns {Promise<ChildProcessWithoutNullStreams>} the child process spawned from php unit
 */
function runPhpUnit(): Promise<ChildProcessWithoutNullStreams> {
  return new Promise((resolve, reject) => {
    const covDir = './coverage/php'
    const args = ['--bootstrap', './vendor/autoload.php', '--coverage-html', covDir, '--testdox', './tests/php']
    const test = spawn('vendor/bin/phpunit', args)
    test.stdout.on('data', data => console.info(data.toString()))
    test.stdout.on('end', resolve.bind(null, test))
    test.stdout.on('error', reject.bind(null, test))
  })
}

/**
 * Dump Autoload
 *
 * @returns {Promise<ChildProcessWithoutNullStreams>}
 */
function composerDumpAutoload(): Promise<ChildProcessWithoutNullStreams> {
  return new Promise((resolve, reject) => {
    const dump = spawn('composer', ['dump-autoload'])
    dump.stdout.on('data', data => console.info(data.toString()))
    dump.stdout.on('end', resolve.bind(null, dump))
    dump.stdout.on('error', reject.bind(null, dump))
  })
}

/**
 * Enogwe Webpack Plugin
 * wepack 4.3+
 *
 * @export
 * @class JestPack
 */
export default function EnogweWebpackPlugin(this: IEnogweWebpackPlugin) {
  this.hook = 'EnogwePackPlugin'
  this.copy = copy.bind(this)
  this.run = run.bind(this)
  this.tap = tap.bind(this)
  this.apply = apply.bind(this)
}
