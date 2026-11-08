import { useEffect, useState } from 'react';

export type RouteType =
  | 'home'
  | 'national-specialty'
  | 'city-specialty'
  | 'sector-specialty'
  | 'city-directory'
  | 'competitor-compare'
  | 'directory-index'
  | 'blog-post'
  | 'blog-index'
  | 'master-sitemap';

export interface RouteMatch {
  type: RouteType;
  params: Record<string, string>;
  rawPath: string;
}

export function parsePath(pathname: string, hash: string): RouteMatch {
  // If hash is used for routing (e.g. #/specialties/dental-clinic-marketing-agency-pakistan)
  let path = pathname;
  if (hash && hash.startsWith('#/')) {
    path = hash.substring(1);
  }

  // Normalize path
  path = path.replace(/\/+$/, '') || '/';

  // 1. Home
  if (path === '/' || path === '') {
    return { type: 'home', params: {}, rawPath: '/' };
  }

  // 2. Master Directory / Sitemap / Indexing
  if (path === '/sitemap' || path === '/seo-index' || path === '/indexing-engine') {
    return { type: 'master-sitemap', params: {}, rawPath: path };
  }

  // 3. Blog Index
  if (path === '/blog') {
    return { type: 'blog-index', params: {}, rawPath: path };
  }

  // 4. Blog Post (/blog/:slug)
  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    return {
      type: 'blog-post',
      params: { blogSlug: blogMatch[1] },
      rawPath: path
    };
  }

  // 5. Directory Index
  if (path === '/directory' || path === '/compare') {
    return { type: 'directory-index', params: {}, rawPath: path };
  }

  // 6. Competitor Compare (/compare/clientkit-vs-:competitor_slug)
  const compareMatch = path.match(/^\/compare\/clientkit-vs-([^/]+)$/);
  if (compareMatch) {
    return {
      type: 'competitor-compare',
      params: { competitorSlug: compareMatch[1] },
      rawPath: path
    };
  }

  // 7. City Directory (/directory/best-healthcare-marketing-agencies-:city_slug)
  const dirMatch = path.match(/^\/directory\/best-healthcare-marketing-agencies-([^/]+)$/);
  if (dirMatch) {
    return {
      type: 'city-directory',
      params: { citySlug: dirMatch[1] },
      rawPath: path
    };
  }

  // 8. National Specialty (/specialties/:slug-marketing-agency-pakistan)
  const specMatch = path.match(/^\/specialties\/([^/]+)-marketing-agency-pakistan$/);
  if (specMatch) {
    return {
      type: 'national-specialty',
      params: { specialtySlug: specMatch[1] },
      rawPath: path
    };
  }

  // Also support bare /specialties/:slug
  const specBareMatch = path.match(/^\/specialties\/([^/]+)$/);
  if (specBareMatch) {
    return {
      type: 'national-specialty',
      params: { specialtySlug: specBareMatch[1].replace(/-marketing-agency-pakistan$/, '') },
      rawPath: path
    };
  }

  // 9. Hyper-Local 10km Sector Page (/pk/:city_slug/:locality_slug/:slug-10km-domination)
  const sectorMatch = path.match(/^\/pk\/([^/]+)\/([^/]+)\/([^/]+)-10km-domination$/);
  if (sectorMatch) {
    return {
      type: 'sector-specialty',
      params: {
        citySlug: sectorMatch[1],
        localitySlug: sectorMatch[2],
        specialtySlug: sectorMatch[3]
      },
      rawPath: path
    };
  }

  // 10. City × Specialty Page (/pk/:city_slug/:slug-patient-acquisition)
  const citySpecMatch = path.match(/^\/pk\/([^/]+)\/([^/]+)-patient-acquisition$/);
  if (citySpecMatch) {
    return {
      type: 'city-specialty',
      params: {
        citySlug: citySpecMatch[1],
        specialtySlug: citySpecMatch[2]
      },
      rawPath: path
    };
  }

  // Fallback to home
  return { type: 'home', params: {}, rawPath: path };
}

export function navigateTo(path: string) {
  if (typeof window === 'undefined') return;
  // If in dev environment where server doesn't have wildcard rewrite or iframe,
  // we update hash which always works safely without reload:
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useCurrentRoute(): RouteMatch {
  const [route, setRoute] = useState<RouteMatch>(() => {
    if (typeof window === 'undefined') {
      return { type: 'home', params: {}, rawPath: '/' };
    }
    return parsePath(window.location.pathname, window.location.hash);
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(parsePath(window.location.pathname, window.location.hash));
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  return route;
}

export function updateHeadTags({
  title,
  description,
  schema
}: {
  title: string;
  description: string;
  schema?: object;
}) {
  if (typeof document === 'undefined') return;

  document.title = title;

  // Meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  // JSON-LD injection
  const existingScript = document.getElementById('clientkit-jsonld');
  if (existingScript) {
    existingScript.remove();
  }

  if (schema) {
    const script = document.createElement('script');
    script.id = 'clientkit-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  }
}
