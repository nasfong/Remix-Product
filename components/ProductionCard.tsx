import { memo } from "react"

type Props = {
  data: {
    image: string
    name: string
    type: string
  }
}

const ProductionCard = ({ data }: Props) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure><img src={data.image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  )
}

export default memo(ProductionCard)
