// @ts-check
// Portfolio-first Docusaurus configuration

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seyitan Oluwaseitan',
  tagline:
    'Technical Writer & DevOps Engineer · Clear documentation for cloud, APIs, and emerging technologies',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://writetech-accelerator-portfolio-sey-three.vercel.app/',
  baseUrl: '/',

  organizationName: 'Seyinka',
  projectName: 'technical-writing-portfolio',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
          editUrl:
            'https://github.com/Seyinka/writetech-accelerator-portfolio-seyitan',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Seyinka/writetech-accelerator-portfolio-seyitan',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Seyitan',
      logo: {
        alt: 'Seyitan Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'My Work',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'toolingSidebar',
              label: 'Documentation Tooling',
            },
            {
              type: 'docSidebar',
              sidebarId: 'apiSidebar',
              label: 'API Documentation',
            },
            {
              type: 'docSidebar',
              sidebarId: 'devopsSidebar',
              label: 'DevOps Documentation',
            },
            {
              type: 'docSidebar',
              sidebarId: 'aiSidebar',
              label: 'AI Documentation',
            },
            {
              type: 'docSidebar',
              sidebarId: 'web3Sidebar',
              label: 'Web3 Documentation',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'profileSidebar',
          label: 'About',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href:
            'https://github.com/Seyinka/writetech-accelerator-portfolio-seyitan',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'My Work',
          items: [
            {
              label: 'Documentation Tooling',
              to: '/docs/documentation-tooling/intro',
            },
            {
              label: 'API Documentation',
              to: '/docs/api-documentation/intro',
            },
            {
              label: 'DevOps Documentation',
              to: '/docs/devops-cloud-documentation/intro',
            },
            {
              label: 'AI Documentation',
              to: '/docs/ai-documentation/intro',
            },
            {
              label: 'Web3 Documentation',
              to: '/docs/web3-documentation/intro',

            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href:
                'https://www.linkedin.com/in/seyitan-oluwaseitan-83ab93251',
            },
            {
              label: 'Hashnode',
              href: 'https://seyitanjohnson.hashnode.dev',
            },
            {
              label: 'GitHub',
              href:
                'https://github.com/Seyinka/writetech-accelerator-portfolio-seyitan',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Seyitan Oluwaseitan · Technical Writing & DevOps`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
