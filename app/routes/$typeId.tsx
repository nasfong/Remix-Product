import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ProductionCard from 'components/ProductionCard';
import { productions } from 'database/data';

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {

  const typeId = params.typeId
  const production = productions.filter(pro => pro.type === typeId)

  return { production };
};

export default function Production() {
  const { production } = useLoaderData<typeof loader>()
  return (
    <div className='flex space-x-4'>
      {production.map(item => (
        <ProductionCard data={item} key={item.name} />
      ))}
    </div>
  )
}