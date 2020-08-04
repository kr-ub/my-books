const LS_KEY = "token";

export default class TokenService {
  static save(token) {
    localStorage.setItem(LS_KEY, token);
  }
  static get() {
    return localStorage.getItem(LS_KEY);
  }
}
