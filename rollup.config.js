import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: [
    'react',
    'react-dom',
    'styled-components',
    'react-animations',
    "@material-ui/lab"
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      globals: { 'react': 'React', 'styled-components': 'styled' },
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      globals: { 'react': 'React', 'styled-components': 'styled' },
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType']
      }
    })
  ]
}