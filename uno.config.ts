import { defineConfig } from 'unocss'
import { handler } from '@unocss/preset-mini/utils'

export default defineConfig({
  rules: [
    [
      /^bg-gradient-(?:repeating-)?linear-(.+)$/,
      ([, s]) => ({
        'background-image': `linear-gradient${handler.bracket(s)}`,
      }),
    ],
  ],
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:bg-[#020c14] dark:text-white',
    afterGradient: 'content-[""] block mt-1 h-1 w-[128px] bg-gradient-linear-[(90deg,_#efada3_0%,_#ff674d_40%,_#2f2a95_100%)]',
  },
  theme: {
    colors: {
      primary: '#2f2a95',
      coral: '#ff674d',
      rose: '#efada3',
      darkPrimary: '#020c14',
      grayLighter: '#1e2831'
    },
    boxShadow: {
      '2xl': '0 20px 25px -5px rgb(86 90 102 / 0.1), 0 8px 10px -6px rgb(86 90 102 / 0.1)'
    }
  }
  // ...
})