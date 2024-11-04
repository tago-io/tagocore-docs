import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import { themes } from "prism-react-renderer";

const config: Config = {
  title: "TagoCore Docs",
  url: "https://docs.tagocore.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "tago-io",
  projectName: "docs.tagocore.com",
  trailingSlash: false,

  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: false,
        docsRouteBasePath: "/",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.

      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/tago-io/tagocore-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "TagoCore Logo",
        src: "img/tagocore-logo-black.svg",
        srcDark: "img/tagocore-logo-white.svg",
        href: "https://tagocore.com",
        target: "_self",
        width: "147px",
        height: "30px",
      },
      items: [],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/tcore",
            },
            {
              label: "Community",
              href: "https://community.tago.io/c/tagocore/19",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/tagoio",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/tago-io/tagocore",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TagoIO Inc. Built with Docusaurus.`,
    } satisfies Preset.ThemeConfig,
    prism: {
      theme: themes.vsLight,
      darkTheme: themes.vsDark,
    },
  },
};

export default config;
