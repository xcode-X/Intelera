/**
 * Central image URLs for the Intelera site.
 * Uses high-quality, realistic stock imagery (Unsplash). You can replace these
 * with Nano Banana AI or other AI-generated images by updating the URLs or
 * loading from your own API.
 */

const U = (id, w = 800, h = 600, opts = '') =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=85${opts ? `&${opts}` : ''}`;

// Realistic professional portraits for testimonials (business attire, diverse)
export const testimonialAvatars = {
  david: U('1507003211169-0a1dd7228f2c', 200, 200, 'crop=faces'),
  amara: U('1573496359142-b8d87734a5a2', 200, 200, 'crop=faces'),
  michael: U('1472099649645-5b1a0d417e1c', 200, 200, 'crop=faces'),
};

// Case study / industry imagery (cybersecurity, finance, healthcare, tech)
export const caseStudyImages = {
  financial: U('1563986768609-322da13575f3', 800, 600),
  ecommerce: U('1550751827-4bd374c3f58b', 800, 600),
  healthcare: U('1576091160399-112ba8d25d1d', 800, 600),
};

// Blog post imagery (security, compliance, development)
export const blogImages = {
  security: U('1555949963-aa79dcee981c', 800, 500),
  compliance: U('1454165804606-c3d57bc86b40', 800, 500),
  development: U('1498050108023-52478953ceb1', 800, 500),
};

// Hero: UI / dashboard / app interface design
export const heroImage = U('1551288049-cebf2cceab72', 1200, 900);

// About: team collaboration / office (different from hero)
export const aboutTeamImage = U('1600880292204-7f72e3f4c041', 900, 600);

// Contact / trust: professional meeting
export const contactImage = U('1521791134314-04fba79afde6', 700, 500);

// Services: security / server room style
export const servicesHeroImage = U('1558494949-ef010b3d6a6a', 1200, 600);

export default {
  testimonialAvatars,
  caseStudyImages,
  blogImages,
  heroImage,
  aboutTeamImage,
  contactImage,
  servicesHeroImage,
};
