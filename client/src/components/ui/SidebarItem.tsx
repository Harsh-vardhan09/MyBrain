import type { ReactElement } from "react"

const SidebarItem = ({text,icon}:{
  text:string,
  icon:ReactElement
}) => {
  return (
    <div className="flex py-2 gap-2 items-center text-gray-700">
      {icon}{text}
    </div>
  )
}

export default SidebarItem
