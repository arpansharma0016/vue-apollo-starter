<template>
  <div id="app">
    <homeRouter v-if="!$store.state.token"></homeRouter>
    <in-app v-else></in-app>
  </div>
</template>

<script>
import homeRouter from "./components/home/homeRouter.vue";
import { gql } from "apollo-boost";
import InApp from './components/dashboard/inApp.vue';
const GET_BOOKS = gql`
  query Query {
    books {
      title
    }
  }
`;
export default {
  name: "App",
  components: {
    homeRouter,
    InApp,
  },
  async created() {
    console.log(await this.$apollo.query({ query: GET_BOOKS }));
  },
};
</script>

<style>
</style>
