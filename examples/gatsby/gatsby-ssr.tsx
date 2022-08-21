import * as React from "react";
import type { GatsbySSR } from "gatsby";
import Layout from "./src/components/Layout";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
  <Layout>{element}</Layout>
);
