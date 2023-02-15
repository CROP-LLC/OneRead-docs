// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OneRead Manual',
  tagline: 'OneReadの説明書をご覧いただけます。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://crop-llc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/OneRead-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CROP-LLC', // Usually your GitHub org/user name.
  projectName: 'Oneread-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CROP-LLC/OneRead-docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OneReadの説明書',
        logo: {
          alt: 'OneRead Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '説明書',
          },
          {
            href: 'ttps://oneread.jp/',
            label: '公式サイト',
            position: 'right',
          },
          {
            href: 'https://uhaip.com/',
            label: 'ログイン',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'OneReadの説明書',
            items: [
              {
                label: 'Webで見る',
                to: '/',
              },
              {
                label: '動画で見る',
                to: 'https://youtube.com/playlist?list=PL8z5R-_9Y5Mr9Zbk6HLJLXA91BubV5uTb',
              },
            ],
          },
          {
            title: 'SNS',
            items: [
              {
                label: 'Youtube',
                href: 'https://youtube.com/@oneread',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/526628375019694',
              },
            ],
          },
          {
            title: 'OneRead',
            items: [
              {
                label: '公式サイト',
                href: 'https://oneread.jp/',
              },
              {
                label: 'ログイン',
                href: 'https://uhaip.com/',
              },
              {
                label: '合同会社CROP',
                href: 'https://crop-cc.info/company/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CROP llc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
