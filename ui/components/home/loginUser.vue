<template>
  <div>
    <h1>Login</h1>
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="loginUser">Register</button>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: LOGIN_USER,
          fetchPolicy: "no-cache",
          variables: {
            email: this.email,
            password: this.password,
          },
        });
        console.log(data.loginUser.token);
        localStorage.setItem("token", data.loginUser.token);
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid black;
}
</style>
