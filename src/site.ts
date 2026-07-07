export const SITE = {
  url: 'https://oxc7.github.io',
  name: 'Chen Yow Ru (Roy)',
  jobTitle: 'AI Lead',
  firm: 'WAY Equity Partners',
  firmUrl: 'https://www.wayequity.co/',
  email: 'royc09587@gmail.com',
  github: 'https://github.com/oxc7',
  linkedin: 'https://www.linkedin.com/in/ox7/',
  ogImage: '/resources/chen.png',
  resumeDoc:
    'https://docs.google.com/document/d/1a_I5Re0dXwvcBriZ0bwcrJ3k5DXS2QBJK8PloZB-KXA/edit?usp=sharing',
  awsCert:
    'https://www.credly.com/badges/e2a0599b-503a-46b6-9440-7dfb5fc53215/linked_in_profile',
  patentUrl: 'https://ipforce.jp/patent-jp-P_B1-7471760',
}

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chen Yow Ru',
  alternateName: 'Roy Chen',
  url: SITE.url,
  image: `${SITE.url}${SITE.ogImage}`,
  email: `mailto:${SITE.email}`,
  jobTitle: 'AI Lead',
  worksFor: {
    '@type': 'Organization',
    name: 'WAY Equity Partners',
    url: SITE.firmUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressLocality: 'Tokyo',
    },
  },
  workLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressLocality: 'Tokyo', addressCountry: 'JP' },
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'The University of Tokyo' },
    { '@type': 'CollegeOrUniversity', name: 'Northwestern University' },
  ],
  knowsLanguage: ['English', 'Japanese', 'Chinese', 'Taiwanese', 'Arabic'],
  knowsAbout: [
    'AI value creation in private equity',
    'Technical due diligence',
    'Machine learning',
    'Natural language processing',
    'Computer vision',
  ],
  sameAs: [SITE.github, SITE.linkedin],
}
