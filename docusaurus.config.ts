import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Crystal Studio Community',
  tagline: 'Learn. Build. Collaborate. 💎',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://crystal-studio-community.github.io',
  baseUrl: '/',

  organizationName: 'Crystal-Studio-Community',
  projectName: 'Crystal-Studio-Community.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Crystal-Studio-Community/Crystal-Studio-Community.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/Crystal-Studio-Community/Crystal-Studio-Community.github.io/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Crystal Studio',
      logo: {
        alt: 'Crystal Studio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/join', label: 'Join Community 🚀', position: 'left'},
        {
          href: 'https://github.com/Crystal-Studio-Community',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Educational Guides',
          items: [
            {
              label: 'Git & GitHub Basics',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community Channels',
          items: [
            {
              label: 'Discord Support',
              href: 'https://discord.gg/your-discord-link-here',
            },
            {
              label: 'Organization Page',
              href: 'https://github.com/Crystal-Studio-Community',
            },
          ],
        },
        {
          title: 'Developer Portal',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Connect (Auto-Invite)',
              href: 'https://github.com/Crystal-Studio-Community/Connect',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crystal Studio Community. Built with Docusaurus. 💎`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
