import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl924qsro2iec01t60k7ggu89/master",
  cache: new InMemoryCache(),
})