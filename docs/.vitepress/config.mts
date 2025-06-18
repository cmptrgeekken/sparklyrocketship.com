import favicons from '@peterek/vite-plugin-favicons'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sparkly Rocketship",
  description: "Showcasing custom jewelry designed by our littlest ones.",
  themeConfig: {
    logo: 'public/favicon.ico',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Works', link: '/works.md' },
      // { text: 'Methods', link: '/methods.md' },
      // { text: 'About', link: '/about.md' }
    ],
    socialLinks: [
      { icon: 'etsy', link: 'https://sparklyrocketship.etsy.com' },
      { icon: 'instagram', link: 'https://instagram.com/sparklyrocketship' }
    ],
    footer: {
      copyright: `&copy; ${new Date().getFullYear()} Sparkly Unicorn Dinosaur Rocketship, LLC., All Rights Reserved.`
    }
  },
  vite: {
    plugins: [
      favicons('docs/assets/logo.png')
    ]
  }
})
