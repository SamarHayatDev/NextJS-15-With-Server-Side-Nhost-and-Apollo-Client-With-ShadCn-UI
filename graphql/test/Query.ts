import { gql } from "@apollo/client";

export const GET_TEST = gql`
  query GetTest {
    test {
      title
      desc
      id
    }
  }
`;
