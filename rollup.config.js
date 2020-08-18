import { terser } from 'rollup-plugin-terser'
import size from 'rollup-plugin-size'
import externalDeps from 'rollup-plugin-peer-deps-external'
import replace from '@rollup/plugin-replace'
import babel from "@rollup/plugin-babel";


const external = ['react', 'styled-components']

const globals = {
  react: "React",
  'styled-components': 'styled'
  // classnames: "classNames"
};

export default  [
  {
    input: 'src/index.js',
    output: {
      name: 'NectarGUI',
      file: 'dist/nectar-gui.development.js',
      format: 'umd',
      sourcemap: true,
      globals,
    },
    external,
    plugins: [
      replace({ 'process.env.NODE_ENV': `"development"`, delimiters: ['', ''] }),
      babel(),
      externalDeps(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      name: 'NectarGUI',
      file: 'dist/nectar-gui.production.min.js',
      format: 'umd',
      sourcemap: true,
      globals,
    },
    external,
    plugins: [
      replace({ 'process.env.NODE_ENV': `"production"`, delimiters: ['', ''] }),
      babel(),
      externalDeps(),
      terser(),
      size({
        writeFile: false,
      }),
    ],
  },
]
