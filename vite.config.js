/** @type {import('vite').UserConfig} */
export default {
  publicDir: 'public',
  clearScreen: false,
  build: {
    outDir: './dist/assets',
    assetsDir: '',
    rollupOptions: {
      input: ['./src/_scripts/_main.js', './src/_styles/_main.css'],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
};
