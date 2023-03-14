<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { gql } from "apollo-boost";
const GET_BOOKS = gql`
  query ExampleQuery {
    books {
      title
    }
  }
`;
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  async created() {
    console.log(await this.$apollo.query({ query: GET_BOOKS }));
    console.log("env", process.env);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
