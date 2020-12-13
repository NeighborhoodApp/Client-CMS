// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
function validateLatLng(lat, lng) {
  let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');

  console.log(pattern.test(lat));
  console.log(pattern.test(lng));
  return pattern.test(lat) && pattern.test(lng);
}

console.log(validateLatLng(-0.789275,113.92132699999999));
