<script>
import authService from "../services/authService";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const response = await authService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="">
    <h1>Register here</h1>
    <div class="inputs">
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<style>
.inputs {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
