import { AppLayout, DrawerToggle, Tab, Tabs } from "react-vaadin-components";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/checkout-form",
    name: "Checkout Form",
  },
  {
    path: "/signup-form",
    name: "Signup (with validation)",
  },
  {
    path: "/master-detail",
    name: "Master-Detail",
  },
];

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;

  const router = useRouter();
  const currentIndex = routes.findIndex(
    (route) => route.path === router.pathname
  );

  // const [drawerOpened, setDrawerOpened] = React.useState(false);

  return (
    <AppLayout
      style={{ "--_vaadin-app-layout-navbar-offset-size": "60px" } as any}
    >
      <DrawerToggle slot="navbar" style={{ height: "60px" } as any} />

      <h1 className="m-0 text-l" slot="navbar">
        React Vaadin Components - Next.js example
      </h1>

      <div slot="drawer">
        <Tabs
          orientation="vertical"
          selected={currentIndex}
          // onSelectedChanged={() => setDrawerOpened(false)}
        >
          <h2 className="text-m">Example views:</h2>

          {routes.map((route) => (
            <Tab key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </Tab>
          ))}
        </Tabs>
      </div>

      <main className="h-full">{children}</main>
    </AppLayout>
  );
}
