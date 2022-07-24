import React from "react";
import type { ReactElement } from "react";
import { Button, Dialog } from "react-vaadin-components";
import Layout from "../components/Layout";

function Page() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <section className="p-m">
      <p>
        This is an example app built with Next.js and React Vaadin Components
      </p>

      <Button onClick={() => setDialogOpen(true)}>Open a test dialog</Button>

      <Dialog
        opened={dialogOpen}
        onOpenedChanged={(e) => setDialogOpen(e.detail.value)}
      >
        <div slot="header">Header</div>

        <div>Hello world</div>

        <div slot="footer">Footer</div>
      </Dialog>
    </section>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
