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
          'color': '#333',
          'white-space': 'pre-wrap',
          'overflow-wrap': 'break-word',
        },
        'ul li::before': {
          'color': 'rgb(129 140 248)',
          'font-weight': 'bold',
          'display': 'inline-block',
          'width': '1em',
          'margin-left': '-1em', 
        },
        'p img': {
          'margin': '0 auto',
          'border': '1px solid #eee',
          'border-radius': '8px',
          'box-shadow': '0 2px 4px #efefef',
        }
      }
    })
  ],
  shortcuts: []
})
