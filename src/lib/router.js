import { useEffect, useSyncExternalStore } from 'react';

// Minimal path-based router. Every route is also emitted as a static
// index.html at build time (see vite.config.js), so deep links return 200
// on GitHub Pages.

const listeners = new Set();

function subscribe(listener) {
  listeners.add(listener);
  window.addEventListener('popstate', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('popstate', listener);
  };
}

function normalize(path) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path || '/';
}

export function usePath() {
  return useSyncExternalStore(subscribe, () => normalize(window.location.pathname));
}

export function navigate(to) {
  const [path, hash] = to.split('#');
  if (normalize(path) !== normalize(window.location.pathname) || hash) {
    window.history.pushState({}, '', to);
    listeners.forEach((l) => l());
  }
  if (hash) {
    requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }));
  } else {
    window.scrollTo({ top: 0 });
  }
}

export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://connectingcloud.co${window.location.pathname}`);
  }, [title, description]);
}
