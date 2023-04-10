import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
