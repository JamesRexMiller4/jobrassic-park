import * as React from "react";
import * as RealmWeb from "realm-web";
// import { useRealmApp } from "./RealmApp";

// Apollo
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
// import { setContext } from "apollo-link-context";
// import { ApolloProvider } from "@apollo/react-hooks";

// const RealmApolloProvider: React.FC = ({ children }) => {

//   // return <ApolloProvider client={client}>{children}</ApolloProvider>;
// };
// export default RealmApolloProvider;

// TODO: Implement createApolloClient()





function createApolloClient() {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${process.env.REACT_APP_API_PASSWORD}/graphql`;
  const httpLink = new HttpLink({ uri: graphql_url });
  // const authorizationHeaderLink = setContext(async (_, { headers }) => ({
  //   headers: {
  //     ...headers,
  //     Authorization: `Bearer ${user.accessToken}`,
  //   },
  // }));

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

module.exports = {
  createApolloClient
}

