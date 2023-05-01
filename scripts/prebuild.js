require("dotenv").config();
fs = require("fs");

const {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} = require("@apollo/client");
const { setContext } = require("@apollo/client/link/context");
const { GITHUB_LOGIN, GITHUB_PERSONAL_ACCESS_TOKEN } = process.env;

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Token ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: "https://api.github.com/graphql" })
  ),
  cache: new InMemoryCache(),
});

apolloClient
  .mutate({
    mutation: gql`
      query ($github_login: String!) {
        user(login: $github_login) {
          repositories(
            first: 15
            orderBy: { field: STARGAZERS, direction: DESC }
          ) {
            nodes {
              id
              name
              description
              url
              updatedAt
              forkCount
              openGraphImageUrl
              stargazers {
                totalCount
              }
              readme: object(expression: "master:README.md") {
                ... on Blob {
                  text
                }
              }
              licenseInfo {
                id
              }
              primaryLanguage {
                name
              }
              languages(first: 10) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      github_login: GITHUB_LOGIN,
    },
  })
  .then((data) => {
    console.log("✓ successfully fetched data from github api !!");

    const jsonUri = "githubData.json";
    const NewData = JSON.stringify(data, null, 4);
    fs.writeFileSync(jsonUri, NewData);
    console.log("✓ data saved in " + jsonUri + "");
  })
  .catch((error) => {
    console.log(error);
  });

console.log("✓ requesting data from github api.....");
