import axios from "axios";

const USER_API_URL = "https://api.marktube.tv/v1/me";

export default class UserService {
  static async login(email, password) {
    const response = await axios.post(USER_API_URL, {
      email,
      password,
    });
    return response.data.token;
  }
}
