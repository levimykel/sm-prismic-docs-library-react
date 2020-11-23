import React from 'react'
import Link from 'next/link'
import { Client } from "../prismicKits";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => (
  <>
    <SliceZone {...props} resolver={resolver} />
  </>
);

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => "test-page"
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "page",
  fallback: true, // process.env.NODE_ENV === "development",
  formatPath: () => ({ params: { uid: "test-page" }})
});

export default Page;
