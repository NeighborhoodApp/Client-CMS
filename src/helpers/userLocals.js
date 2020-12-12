export default function saveUserInfo(users) {
  const { email, access_token } = users;
  localStorage.setItem('email', email);
  localStorage.setItem('access_token', access_token);
  return true;
}
