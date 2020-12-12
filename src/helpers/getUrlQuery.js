export function getCurrentUrl() {
  const origin = window.location.origin;
  const href = window.location.href.substr(origin.length);
  return href;
}

export function setHistory(url) {
  localStorage.setItem('urlFrom', url);
}

export function getHistory() {
  return localStorage.getItem('urlFrom');
}

const urlParams = new URLSearchParams(window.location.search);

export function getQueryParams(key) {
  return urlParams.get(key);
}
