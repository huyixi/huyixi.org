import { defineConfig, presetUno, presetAttributify, presetTypography } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({}),
    presetTypography({
      cssExtend: {
        blockquote: {
          "border-left": "2px solid #ccc",
          "padding-left": "0.5rem",
          "font-style": "none",
        },
        pre: {
          border: "1px solid #ddd",
          "border-radius": "4px",
          background: "#EEE !important",
          padding: "0.5em",
        },
        "pre code": {
          "font-size": "12px",
          color: "#333",
          "white-space": "pre-wrap",
          "overflow-wrap": "break-word",
        },
        "ul li::before": {
          color: "#ccc",
          "font-weight": "bold",
          display: "inline-block",
          width: "1em",
          "margin-left": "-1em",
        },
        "p img": {
          margin: "0 auto",
          border: "1px solid #eee",
          "border-radius": "8px",
          "box-shadow": "0 2px 4px #efefef",
        },
        'a': {
          'text-decoration': 'none',
          'white-space': 'nowrap',
          'color': '#121314',
          'position': 'relative',
        },
        "a:after": {
          "content": "''",
          "position": "absolute",
          "z-index": "-1",
          "top": "80%",
          "left": "-0.1em",
          "right": "-0.1em",
          "bottom": "0",
          "transition": "top 200ms cubic-bezier(0, 0.8, 0.13, 1)",
          "background-color": "rgba(129, 140, 248, 0.5)"
        },
        "a:hover:after": {
          "top": "0%"
        }
      },
    }),
  ],
  shortcuts: [],
});
