// @ts-nocheck
// Docs: https://docusaurus.io/docs/next/sidebar
// Tip: sidebar labels are specified within the frontmatter of individual docs, not here

module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'DAO Masons',
      items: ['Intro/about', 'Intro/values', 'Intro/join'],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'Rules/gov-overview',
        'Rules/dao-types',
        'Rules/membership-rules',
        'Rules/decision-making',
        'Rules/proposals',
        'Rules/projects',
      ],
    },
    /*{
      type: 'category',
      label: 'Strategy',
      items: ['Strategy/sustainability'],
    },*/
    {
      type: 'category',
      label: 'Rituals',
      items: [
        'Rituals/about-rituals',
        'Rituals/ritual-of-oaths',
        'Rituals/ritual-of-echoes',
        'Rituals/ritual-of-light',
        'Rituals/ritual-of-ranks',
        'Rituals/ritual-of-acumen',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: [
        'Templates/project-proposal',
        'Templates/ritual',
        'Templates/core-member-agreement',
        'Templates/contributor-agreement',
      ],
    },
  ],
};
