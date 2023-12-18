import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Material Vue",
  description: "Material vue library docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' }
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Installation', link: '/get-started'},
          { text: 'Setup project', link: '/setup-project'}
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Buttons', link: '/components/buttons'},
          { text: 'Dialogs', link: '/components/dialogs'},
          { text: 'Radio', link: '/components/radio-buttons'}
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Color', link: '/features/theme'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/korpusovmax/material-vue' }
    ]
  }
})
