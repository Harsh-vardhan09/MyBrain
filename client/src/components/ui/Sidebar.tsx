import BrainIcon from "../../icons/BrainIcon"
import X from "../../icons/X"
import YoutubeIcon from "../../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r border-gray-700/20 w-72 fixed left-0 top-0  pl-6">
      <div className="flex  mt-4 gap-2 text-slate-700">
        <BrainIcon/>
        <h1 className="text-3xl font-semibold ">MyBrain</h1>
      </div>
      <div className="pt-4">
        <SidebarItem text='X' icon={<X size='lg'/>}/>
        <SidebarItem text='Youtube' icon={<YoutubeIcon size='lg'/>}/>
      </div>
    </div>
  )
}

export default Sidebar
