import React from "react"
import Link from "next/link"
import CONFIG from "site.config"
import Image from "next/image"

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    (<Link href="/" aria-label={CONFIG.blog.title}>
      
      <div className="logo-name-wrapper">
      <div className="logo_image_wrapper">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            alt="logo_image"
            className="logo_image"
          />
      </div>
        <div className="logo-name">
          {CONFIG.blog.title}
        </div>
      </div>
      

    </Link>
    )
  );
  
}


export default Logo
