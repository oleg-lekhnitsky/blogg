import CONFIG from "site.config"
import Image from "next/image"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineMan,
  AiOutlineAntDesign,
  AiOutlineRight,
  AiOutlineVideoCamera,
} from "react-icons/ai"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="flex w-full">
      <div className="p-0 mb-3 dark:text-white"></div>
      <div className="p-0 rounded-2xl dark:">
        <div className="flex overflow-hidden rounded-2xl items-center gap-2">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            alt="profile_image"
            className="relative"
          />
        </div>
      </div>
      <div className=" flex w-full justify-between ">
        <div className="pl-4">
          <div className="dark:text-white">
            <div className="text-4xl font-bold">
              {CONFIG.profile.name}
            </div>
            <div className="text-lg font-bold text-neutral-900 mb-2 dark:text-neutral-400">
              {CONFIG.profile.role}
            </div>
            <div className="h-fit">{CONFIG.profile.bio}</div>
          </div>
        </div>
        {<div className="text-xl underline">
          {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              className="font-bold text-[#41A1D4] hover:text-neutral-900 dark:hover:bg-zinc-700 cursor-pointer dark:text-white"
            >

              <div className="text-xl">Instagram</div>
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              className="font-bold text-[#41A1D4] hover:text-neutral-900 overflow-hidden pb-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer dark:text-white"
            >
              <div className="text-xl">Email</div>
            </a>
          )}
          {CONFIG.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              className="font-bold text-[#41A1D4] hover:text-neutral-900 overflow-hidden pb-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer dark:text-white"
            >
              <div className="text-xl">Linkedin</div>
            </a>
          )}
        </div>}
      </div>
    </div>
  )
}

export default MobileProfileCard
