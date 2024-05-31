import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductionCard from "components/ProductionCard";
import { productions } from "database/data";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json({ productions })
};

export default function Index() {
  const { productions } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {productions?.map(item => (
          <ProductionCard data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}
