export function getCurrentUrl() {
  const origin = window.location.origin;
  const href = window.location.href.substr(origin.length);
  return href;
}

export function getBackUrl() {
  let url = window.location.pathname;
  const href = getCurrentUrl();
  const params = href.substr(url.length + 1);
  const arr = params.split('&');
  arr.pop();
  if (arr.length > 0) {
    url = `${url}?${arr.join('&')}`;
  }
  return url;
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
