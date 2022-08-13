/* eslint-disable import/no-unresolved */
import { AppLayout, DrawerToggle, Tab, Tabs } from "react-vaadin-components";
import * as React from "react";
import { Link } from "gatsby";
import { globalHistory } from "@reach/router";
import "react-vaadin-components/dist/css/core.css";
import "../styles/global.css";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/components",
    name: "Components",
  },
];

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const currentIndex = routes.findIndex(
    (route) => route.path === globalHistory.location.pathname
  );

  return (
    <AppLayout
      style={{ "--_vaadin-app-layout-navbar-offset-size": "60px" } as any}
    >
      <DrawerToggle slot="navbar" style={{ height: "60px" } as any} />

      <h1 className="m-0 text-l" slot="navbar">
        React Vaadin Components - Gatsby example
      </h1>

      <div slot="drawer">
        <Tabs
          orientation="vertical"
          selected={currentIndex}
          onSelectedChanged={() =>
            window.dispatchEvent(new CustomEvent("close-overlay-drawer"))
          }
        >
          <h2 className="text-m">Example views:</h2>

          {routes.map((route) => (
            <Tab key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </Tab>
          ))}
        </Tabs>
      </div>

      <main className="h-full">{children}</main>
    </AppLayout>
  );
}
