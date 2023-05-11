import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b78'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '089'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '727'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f27'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c3b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '86d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2e0'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c1e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '2c6'),
    exact: true
  },
  {
    path: '/blog/td-1',
    component: ComponentCreator('/blog/td-1', '46d'),
    exact: true
  },
  {
    path: '/blog/td-2',
    component: ComponentCreator('/blog/td-2', '378'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '255'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'af8'),
    routes: [
      {
        path: '/docs/category/components',
        component: ComponentCreator('/docs/category/components', '577'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/introduction',
        component: ComponentCreator('/docs/category/introduction', 'd40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/setup',
        component: ComponentCreator('/docs/category/setup', '991'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/',
        component: ComponentCreator('/docs/components/', 'cfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/basic-components',
        component: ComponentCreator('/docs/components/basic-components', '62b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/image',
        component: ComponentCreator('/docs/components/image', 'df3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/lists',
        component: ComponentCreator('/docs/components/lists', '9ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/styling',
        component: ComponentCreator('/docs/components/styling', 'a8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/about-javascript',
        component: ComponentCreator('/docs/Introduction/about-javascript', 'f3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/about-react-native',
        component: ComponentCreator('/docs/Introduction/about-react-native', '3fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/expo',
        component: ComponentCreator('/docs/Introduction/expo', '22b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setup/debugging',
        component: ComponentCreator('/docs/setup/debugging', 'b69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setup/getting-started',
        component: ComponentCreator('/docs/setup/getting-started', '837'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setup/linter',
        component: ComponentCreator('/docs/setup/linter', '910'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/welcome',
        component: ComponentCreator('/docs/welcome', 'e5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ca5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
