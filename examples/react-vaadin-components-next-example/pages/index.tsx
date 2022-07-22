import React from "react";
import type { ReactElement } from "react";
import Layout from "../components/Layout";

function Page() {
  return (
    <section className="p-m">
      <p>
        This is an example app built with Next.js and React Vaadin Components
      </p>
    </section>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
