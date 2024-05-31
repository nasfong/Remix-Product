import { NavLink } from "@remix-run/react"
import { memo } from "react"

type Props = {
  data: string[]
  children: React.ReactNode
}

const ProductTypeList = ({ data, children }: Props) => {
  return (
    <div className="mt-3">
      <div role="tablist" className="tabs tabs-boxed">
        {data?.map(item => (
          <NavLink
            key={item}
            role="tab"
            className={({ isActive, isPending }) =>
              `tab ${isActive ? "tab-active" : isPending ? "pending" : ""}`
            }
            to={item}
          >
            {item}
          </NavLink>
        ))}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  )
}

export default memo(ProductTypeList)
