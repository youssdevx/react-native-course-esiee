import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f77'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '507'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1f0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b86'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9d7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '67f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '044'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '758'),
    exact: true
  },
  {
    path: '/blog/td-1',
    component: ComponentCreator('/blog/td-1', 'b21'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '65f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '690'),
    routes: [
      {
        path: '/docs/category/introduction',
        component: ComponentCreator('/docs/category/introduction', 'd40'),
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
        path: '/docs/welcome',
        component: ComponentCreator('/docs/welcome', 'e5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '849'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
