import api from "./api";

export default {
  register(credentials) {
    return api().post("register", credentials);
  },
};

// authService.register({
//   email: "testing@gmail.com",
//   password: "123456",
// });
