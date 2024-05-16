<template>
  <div>
    <h1>Register</h1>
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="registerUser">Register</button>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
const REGISTER_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    registerUser(email: $email, password: $password) {
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
    async registerUser() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: REGISTER_USER,
          fetchPolicy: "no-cache",
          variables: {
            email: this.email,
            password: this.password,
          },
        });

        localStorage.setItem("token", data.registerUser.token);
        console.log(data.registerUser.token);
        this.$router.push("/login");
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
