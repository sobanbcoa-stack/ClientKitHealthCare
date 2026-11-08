import { test } from 'node:test';
import assert from 'node:assert';
import {
  BRAND_RULES,
  SPECIALTIES,
  LOCATIONS_DATABASE,
  COMPETITOR_BENCHMARKS,
  BLOG_POSTS
} from '../data/pseoData.js';
import { parsePath } from './router.js';

test('PSEO Dataset contains all required entities', () => {
  assert.strictEqual(SPECIALTIES.length, 8, 'Must have exactly 8 specialties');
  assert.strictEqual(LOCATIONS_DATABASE.length, 6, 'Must have 6 city clusters');
  assert.strictEqual(BLOG_POSTS.length, 12, 'Must have 12 blog posts');
  assert.strictEqual(COMPETITOR_BENCHMARKS.length, 7, 'Must have 7 competitor benchmarks');

  // Total localities across cities
  const totalLocalities = LOCATIONS_DATABASE.reduce(
    (acc, city) => acc + city.localities.length,
    0
  );
  assert.strictEqual(totalLocalities, 22, 'Must have 22 micro-localities total across 6 clusters');
});

test('Brand rules adhere to strict isolation', () => {
  assert.strictEqual(BRAND_RULES.brand_name, 'ClientKit');
  assert.strictEqual(
    BRAND_RULES.core_guarantee,
    'Dominate Your 10km Radius in 30 Days — Or We Work For Free.'
  );
  assert.ok(
    BRAND_RULES.strict_exclusion.includes('Never mention Razes'),
    'Must strictly exclude non-healthcare brand references'
  );
});

test('Router properly parses National Specialty URL', () => {
  const match = parsePath('/specialties/dental-clinic-marketing-agency-pakistan', '');
  assert.strictEqual(match.type, 'national-specialty');
  assert.strictEqual(match.params.specialtySlug, 'dental-clinic');
});

test('Router properly parses Hyper-Local 10km Sector URL', () => {
  const match = parsePath('/pk/karachi/clifton/dental-clinic-10km-domination', '');
  assert.strictEqual(match.type, 'sector-specialty');
  assert.strictEqual(match.params.citySlug, 'karachi');
  assert.strictEqual(match.params.localitySlug, 'clifton');
  assert.strictEqual(match.params.specialtySlug, 'dental-clinic');
});

test('Router properly parses Blog Post URL', () => {
  const match = parsePath('/blog/hospital-patient-acquisition-pakistan-guide', '');
  assert.strictEqual(match.type, 'blog-post');
  assert.strictEqual(match.params.blogSlug, 'hospital-patient-acquisition-pakistan-guide');
});

test('Router properly parses Competitor Comparison URL', () => {
  const match = parsePath('/compare/clientkit-vs-brivon-media', '');
  assert.strictEqual(match.type, 'competitor-compare');
  assert.strictEqual(match.params.competitorSlug, 'brivon-media');
});

test('Router properly parses City Directory URL', () => {
  const match = parsePath('/directory/best-healthcare-marketing-agencies-karachi', '');
  assert.strictEqual(match.type, 'city-directory');
  assert.strictEqual(match.params.citySlug, 'karachi');
});

test('Router properly handles hash-based navigation for dev servers', () => {
  const match = parsePath('/', '#/blog/why-social-media-agencies-fail-hospitals-pakistan');
  assert.strictEqual(match.type, 'blog-post');
  assert.strictEqual(match.params.blogSlug, 'why-social-media-agencies-fail-hospitals-pakistan');
});
