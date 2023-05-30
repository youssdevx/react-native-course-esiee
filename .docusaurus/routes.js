import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '87e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '88e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c22'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b36'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6bc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b47'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f4f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f61'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'd46'),
    exact: true
  },
  {
    path: '/blog/project',
    component: ComponentCreator('/blog/project', '8fe'),
    exact: true
  },
  {
    path: '/blog/td-1',
    component: ComponentCreator('/blog/td-1', 'adf'),
    exact: true
  },
  {
    path: '/blog/td-2',
    component: ComponentCreator('/blog/td-2', '799'),
    exact: true
  },
  {
    path: '/blog/td-2-solutions',
    component: ComponentCreator('/blog/td-2-solutions', '9bc'),
    exact: true
  },
  {
    path: '/blog/td-3',
    component: ComponentCreator('/blog/td-3', 'eaa'),
    exact: true
  },
  {
    path: '/blog/td-3-solutions',
    component: ComponentCreator('/blog/td-3-solutions', '43e'),
    exact: true
  },
  {
    path: '/blog/td-4',
    component: ComponentCreator('/blog/td-4', '5dc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b8f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bbb'),
    routes: [
      {
        path: '/docs/category/components',
        component: ComponentCreator('/docs/category/components', '577'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/context',
        component: ComponentCreator('/docs/category/context', 'ec3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/forms',
        component: ComponentCreator('/docs/category/forms', 'd41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/hooks',
        component: ComponentCreator('/docs/category/hooks', '9d3'),
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
        path: '/docs/category/navigation',
        component: ComponentCreator('/docs/category/navigation', 'cd6'),
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
        path: '/docs/context/',
        component: ComponentCreator('/docs/context/', 'f5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/context/storage',
        component: ComponentCreator('/docs/context/storage', '0cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/forms/basic-form-components',
        component: ComponentCreator('/docs/forms/basic-form-components', '51c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/forms/forms-intro',
        component: ComponentCreator('/docs/forms/forms-intro', '48a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/forms/handle-user-input',
        component: ComponentCreator('/docs/forms/handle-user-input', 'c01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hooks/go-further',
        component: ComponentCreator('/docs/hooks/go-further', '546'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hooks/hooks-intro',
        component: ComponentCreator('/docs/hooks/hooks-intro', '146'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hooks/use-effect',
        component: ComponentCreator('/docs/hooks/use-effect', '321'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hooks/use-state',
        component: ComponentCreator('/docs/hooks/use-state', '1b0'),
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
        path: '/docs/navigation/add-navigation',
        component: ComponentCreator('/docs/navigation/add-navigation', '20c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/navigation/navigation-guides',
        component: ComponentCreator('/docs/navigation/navigation-guides', '067'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/navigation/navigation-intro',
        component: ComponentCreator('/docs/navigation/navigation-intro', 'd30'),
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
    component: ComponentCreator('/', '5a5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
