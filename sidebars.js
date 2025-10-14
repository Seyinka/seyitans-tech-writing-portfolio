// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  profileSidebar: [
    {
      type: "doc",
      label: "About Me",
      id: "intro",
    },
  ],

  toolingSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "documentation-tooling/intro",
    },
    {
      type: "category",
      label: "Mautic",
      link: {
        type: "doc",
        id: "documentation-tooling/mautic-overview",
      },
      items: [
        "documentation-tooling/getting-started",
        {
          type: "category",
          label: "API Reference",
          link: {
            type: "doc",
            id: "documentation-tooling/mautic-overview",
          },
          items: [
            "documentation-tooling/api-reference/get-user",
            "documentation-tooling/api-reference/post-transaction",
          ],
        },
      ],
    },
  ],

  apiSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "api-documentation/intro",
    },
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "doc",
        id: "api-documentation/getting-started",
      },
      items: [],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        "api-documentation/reference/info",
        "api-documentation/reference/payouts",
      ],
    },
  ],

  // 👇 New AI Documentation sidebar
  aiDocumentationSidebar: [
    {
      type: "doc",
      label: "Overview",
      id: "ai-documentation/README",
    },
    {
      type: "category",
      label: "Model Documentation",
      items: ["ai-documentation/model_card", "ai-documentation/final_doc"],
    },
  ],

  web3Sidebar: [
    {
      type: "doc",
      label: "Overview",
      id: "web3-documentation/README",
    },
    {
      type: "category",
      label: "Web3 Documentation",
      items: ["web3-documentation/whitepaper"],
    },
  ],

  devopsSidebar: [
    {
      type: "doc",
      label: "Overview",
      id: "devops-cloud-documentation/README",
    },
    {
      type: "category",
      label: "Devops Documenation",
      items: [
        "devops-cloud-documentation/overview",
        "devops-cloud-documentation/setup",
        "devops-cloud-documentation/step_by_step",
        "devops-cloud-documentation/summary",
        "devops-cloud-documentation/troubleshooting",
      ],
    },
  ],
};
export default sidebars;
