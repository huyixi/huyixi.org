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
        },
        'pre': {
          'border': '1px solid #ddd',
          'border-radius': '4px',
          'background': '#EEE !important',
          'padding': '0.5em',
        },
        'pre code': {
          'font-size': '12px',
          'white-space': 'pre-wrap',
          'overflow-wrap': 'break-word',
        }
      }
    })
  ],
  shortcuts: []
})
