import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  if (mode === 'demo') {
    return {
      base: '/view-transition-highlight/',
      build: {
        outDir: 'dist-demo'
      }
    }
  }

  return {
    plugins: [
      dts({ 
        rollupTypes: true,
        tsconfigPath: './tsconfig.json'
      })
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/utils/Highlighter.ts'),
        name: 'ViewTransitionHighlight',
        fileName: 'view-transition-highlight',
      },
      rollupOptions: {
        // Ensure external dependencies are not bundled into your library
        external: [], 
        output: {
          globals: {}
        }
      }
    }
  }
})
