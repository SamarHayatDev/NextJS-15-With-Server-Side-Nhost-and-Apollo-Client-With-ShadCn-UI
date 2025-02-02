import { GET_TEST } from "@/graphql/test/Query";
import { client } from "@/lib/apolloClient";
import React from "react";

const QueryUseServerSide = async () => {
  const { data } = await client.query({ query: GET_TEST });
  return <div>QueryUseServerSide</div>;
};

export default QueryUseServerSide;
