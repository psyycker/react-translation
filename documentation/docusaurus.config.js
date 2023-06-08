/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Translation',
  tagline: 'Modern translation library for React and React Native',
  url: 'https://github.com',
  baseUrl: 'react-translation',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'psyycker', // Usually your GitHub org/user name.
  projectName: 'react-translation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Translation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/psyycker/react-translation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     // {
        //     //   label: 'Stack Overflow',
        //     //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     // },
        //     // {
        //     //   label: 'Discord',
        //     //   href: 'https://discordapp.com/invite/docusaurus',
        //     // },
        //     // {
        //     //   label: 'Twitter',
        //     //   href: 'https://twitter.com/docusaurus',
        //     // },
        //   ],
        // },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/psyycker/react-translation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Translation. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/psyycker/react-translation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/psyycker/react-translation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
