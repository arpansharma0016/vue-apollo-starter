import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-boost";
import VueApollo from "vue-apollo";
import Vue from "vue";

// Create the apollo client
const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPHQL_PATH,
  cache: new InMemoryCache(),
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider;
