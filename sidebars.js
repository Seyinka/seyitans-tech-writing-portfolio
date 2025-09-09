// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  profileSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'intro',
    },
  ],
  
  toolingSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'documentation-tooling/intro',
    },
    {
      type: 'category',
      label: 'Mautic',
      link: {
        type: 'doc',
        id: 'documentation-tooling/mautic-overview'
      },
      items: [
        'documentation-tooling/getting-started',
        {
          type: 'category',
          label: 'API Reference',
          link: {
            type: 'doc',
            id: 'documentation-tooling/mautic-overview'
          },
          items: [
            'documentation-tooling/reference/get-user'
          ]
        }
      ]
    }
  ],

  apiSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'api-documentation/intro',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'api-documentation/getting-started',
      },
      items:[],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-documentation/reference/get-user',
        'api-documentation/reference/post-item',
      ],
    },
  ],

  // 👇 New AI Documentation sidebar
  aiDocumentationSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'ai-documentation/README',
    },
    {
      type: 'category',
      label: 'Files',
      items: [
        'ai-documentation/model_card',
        'ai-documentation/ai_output',
        'ai-documentation/final_doc',
        'ai-documentation/prompt_used',
        'ai-documentation/reflection',
      ],
    },
  ],
};

export default sidebars;
