import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'
import buble from '@rollup/plugin-buble'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/build.js',
    format: 'umd',
    name: 'VueProgressBar',
    sourcemap: true,
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    nodeResolve({
      browser: true,
      extensions: ['.vue', '.js', '.json'],
    }), // tells Rollup how to find date-fns in node_modules
    json(),
    commonjs(), // converts date-fns to ES modules
    babel({
      babelHelpers: 'external',
      exclude: 'node_modules/**'
    }),
    buble(),
    production && terser(), // minify, but only in production
  ],
}
