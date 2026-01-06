// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // ======================
  // ABOUT
  // ======================
  profileSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'About Me',
    },
  ],

  // ======================
  // DOCUMENTATION TOOLING
  // ======================
  toolingSidebar: [
    {
      type: 'doc',
      id: 'documentation-tooling/intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Mautic Documentation',
      link: {
        type: 'doc',
        id: 'documentation-tooling/mautic-overview',
      },
      items: [
        'documentation-tooling/getting-started',
        {
          type: 'category',
          label: 'API Reference',
          items: [
            'documentation-tooling/api-reference/get-user',
            'documentation-tooling/api-reference/post-transaction',
          ],
        },
      ],
    },
  ],

  // ======================
  // API DOCUMENTATION
  // ======================
  apiSidebar: [
    {
      type: 'doc',
      id: 'api-documentation/intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'api-documentation/getting-started',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-documentation/reference/info',
        'api-documentation/reference/payouts',
      ],
    },
  ],

  // ======================
  // DEVOPS / CLOUD
  // ======================
  devopsSidebar: [
    {
      type: 'doc',
      id: 'devops-cloud-documentation/intro',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'DevOps Case Study',
      items: [
        'devops-cloud-documentation/overview',
        'devops-cloud-documentation/setup',
        'devops-cloud-documentation/step_by_step',
        'devops-cloud-documentation/troubleshooting',
        'devops-cloud-documentation/summary',
      ],
    },
  ],

  // ======================
  // AI DOCUMENTATION
  // ======================
  aiSidebar: [
    {
      type: 'doc',
      id: 'ai-documentation/intro',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Model Documentation',
      items: [
        'ai-documentation/model_card',
        'ai-documentation/final_doc',
      ],
    },
  ],

  // ======================
  // WEB3
  // ======================
  web3Sidebar: [
    {
      type: 'doc',
      id: 'web3-documentation/intro',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Web3 Writing Sample',
      items: ['web3-documentation/whitepaper'],
    },
  ],
};

export default sidebars;
