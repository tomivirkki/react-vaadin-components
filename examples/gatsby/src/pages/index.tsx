import React from "react";
import { Button, Dialog } from "react-vaadin-components";

export default function Page() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <section className="p-m">
      <p>
        This is an example app built with Gatsby and React Vaadin Components
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
