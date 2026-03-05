/**
 * Central image URLs for the Intelera site.
 * Uses high-quality, realistic stock imagery from Unsplash.
 */

const U = (id, w = 1200, h = 800, opts = '') =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}&h=${h}${opts ? `&${opts}` : ''}`;

// Diverse professional avatars for testimonials
export const testimonialAvatars = {
  david: U('1507003211169-0a1dd7228f2c', 400, 400, 'crop=faces'),
  amara: U('1573496359142-b8d87734a5a2', 400, 400, 'crop=faces'),
  michael: U('1472099649645-5b1a0d417e1c', 400, 400, 'crop=faces'),
};

// Case study / industry imagery
export const caseStudyImages = {
  financial: U('1563986768609-322da13575f3', 1000, 750),
  ecommerce: U('1550751827-4bd374c3f58b', 1000, 750),
  healthcare: U('1576091160399-112ba8d25d1d', 1000, 750),
};

// Blog post imagery
export const blogImages = {
  security: U('1555949963-aa79dcee981c', 1000, 600),
  compliance: U('1454165804606-c3d57bc86b40', 1000, 600),
  development: U('1498050108023-52478953ceb1', 1000, 600),
};

// Hero: Modern high-tech dashboard / workspace
export const heroImage = U('1551288049-cebf2cceab72', 1600, 1200);

// About: Team collaboration in a modern office
export const aboutTeamImage = U('1522071823914-7a384e330427', 1200, 800);

// Contact: Professional consultation / meeting
export const contactImage = U('1521737711867-e3b97375f902', 1000, 750);

// Services: Secure data center / futuristic server room
export const servicesHeroImage = U('1558494949-ef010b3d6a6a', 1600, 800);

export default {
  testimonialAvatars,
  caseStudyImages,
  blogImages,
  heroImage,
  aboutTeamImage,
  contactImage,
  servicesHeroImage,
};
