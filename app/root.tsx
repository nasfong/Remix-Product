import {
  json,
  Links,
  // LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import "../styles/app.css"

import { Navbar } from "../components/Navbar";
import ProductTypeList from "components/ProductTypeList";
import { type } from "database/data";

export const loader = async () => {
  return json({
    type: type
  })
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { type } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Navbar />
        <ProductTypeList data={type}>
          {children}
        </ProductTypeList>
        <ScrollRestoration />
        <Scripts />
        {/* {process.env.NODE_ENV === 'development' && <LiveReload />} */}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
