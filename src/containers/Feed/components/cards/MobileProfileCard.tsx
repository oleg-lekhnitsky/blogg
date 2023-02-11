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
    <div className="tracking-tight font-400 flex w-full flex-col md:flex-row">
      <div className="profile_image_wrapper">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            alt="profile_image"
            className="relative"
          />
      </div>
      <div className="flex w-full flex-col justify-between md:flex-row ">
        <div className="profile_headings_wrapper">
            <div className="profile_heading">
              {CONFIG.profile.name}
            </div>
            <div className="profile_subheading">
              {CONFIG.profile.role}
            </div>
            <div className="h-fit">{CONFIG.profile.bio}</div>
        </div>
        {}
      </div>
    </div>
  )
}

export default MobileProfileCard
