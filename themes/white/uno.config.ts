import { defineConfig, presetUno, presetAttributify, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
    }),
    presetTypography({
      cssExtend: {
        'blockquote': {
          'border-left': '2px solid #ccc',
          'padding-left': '0.5rem',
          'font-style': 'none',
        }
      }
    })
  ],
  shortcuts: []
})
