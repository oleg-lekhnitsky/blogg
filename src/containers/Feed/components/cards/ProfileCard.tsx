import CONFIG from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
  className?: string
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  return (
    <div className="hidden block p-0">
      <div className="dark:text-white"></div>
      <div className="block overflow-hidden w-fit  rounded-xl bg-neutral-100 md:p-4 lg:p-0 rounded-2xl  dark: ">
        <div className="relative   after:content-[''] ">
        <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            alt="profile_image"
            className="relative"
          />
        </div>
      </div>
        <div className="p-0 flex flex-col pl-0 items-left rounded-2xl dark: dark:text-white">
          <div className="text-4xl w-full pt-4 mb-2 font-bold">{CONFIG.profile.name}</div>
          <div className="text-M mb-0  text-neutral-900 dark:text-neutral-400">
            {CONFIG.profile.role}
          </div>
          <div className="text-xl mb-2">{CONFIG.profile.bio}</div>
        </div>
    </div>
  )
}

export default ProfileCard
