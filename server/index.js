const { ApolloServer } = require("apollo-server");
const connectDB = require("./db");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const models = require("./models");
connectDB();

const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
