import { FaBagShopping, FaHouse, FaSackDollar, FaTruckMoving } from "react-icons/fa6"
import { BizLogo, Menu, ProfileImage, SideBarItem } from "@/modules/dashboard"
import { AiOutlineUsergroupDelete } from "react-icons/ai"

const menu: Menu[] = [
  {
    title: 'Dashboard',
    icon: <FaHouse />,
    link: '/dashboard',
  },
  {
    title: 'Suppliers',
    icon: <FaTruckMoving />,
    link: '/dashboard/suppliers',
  },
  {
    title: 'Products',
    icon: <FaBagShopping />,
    link: '/dashboard/products',
  },
  {
    title: 'Sales',
    icon: <FaSackDollar />,
    link: '/dashboard/sales',
  }
]

export function SideBar() {
  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <BizLogo />

          <ProfileImage />

          <ul className="space-y-2 tracking-wide mt-8">
            {menu.map((item, index) => {
              return (
                <SideBarItem key={index} {...item} />
              )
            })}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <AiOutlineUsergroupDelete
              size={20}
              className="group-hover:text-gray-700"
            />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </div>
  )
}