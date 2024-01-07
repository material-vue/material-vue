import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Material Vue",
  description: "Material vue library docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
        // TODO: to /components/overview
      { text: 'Components', link: '/components/buttons' }
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
          { text: 'Checkbox', link: '/components/checkbox'},
          { text: 'Dialogs', link: '/components/dialogs'},
          { text: 'Divider', link: '/components/divider'},
          { text: 'Radio', link: '/components/radio-buttons'}
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Theming', link: '/features/theme'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/korpusovmax/material-vue' }
    ]
  },
})
