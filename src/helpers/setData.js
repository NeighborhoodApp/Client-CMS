export function clearDeveloper() {
  localStorage.removeItem('developer');
  localStorage.removeItem('devId');
}

export function setDeveloper(option) {
  localStorage.setItem('developer', option.developer);
  localStorage.setItem('devId', option.devId);
}

export function getDevId() {
  return localStorage.getItem('devId');
}

export function getDeveloper() {
  return localStorage.getItem('developer');
}
