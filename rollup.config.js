import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    format: 'es',
    outDir: '.'
  },
  plugins: [typescript({ typescript: require('typescript') })]
}
