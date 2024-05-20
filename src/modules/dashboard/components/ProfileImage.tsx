import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";


export function ProfileImage() {
  return (
    <div className="mt-8 text-center">
      {/* <Image
        src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
        alt=""
        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
        width={100}
        height={100}
      /> */}
      <FaRegCircleUser
        className="w-10 h-10 m-auto text-gray-400 lg:w-28 lg:h-28"
        size={100}
        color="#D1D5DB"
      />
      <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">User Name</h5>
      <span className="hidden text-gray-400 lg:block">Admin</span>
    </div>
  )
}