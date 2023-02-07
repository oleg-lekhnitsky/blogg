import React from "react"
import Link from "next/link"
import CONFIG from "site.config"

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    (<Link href="/" aria-label={CONFIG.blog.title}>
      
      <div className="flex items-center">
        <div className="ml-0 md:ml-4 font-bold text-xl text-black dark:text-white header-name">
          {CONFIG.blog.title}
        </div>
      </div>

    </Link>
    )
  );
}

export default Logo
