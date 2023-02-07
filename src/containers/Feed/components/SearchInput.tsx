import React, { InputHTMLAttributes, ReactNode } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8 mt-5">
      <div className="p-0 mb-3 dark:text-white"></div>
      <input
        className="font-bold border-2 border-neutral-600 rounded-2xl px-4 py-2 w-full placeholder-neutral-400 dark: bg-transparent dark:text-gray-100 focus:border-neutral-900 focus:d outline-none transition dark:md:hover:border-neutral-100"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
    </div>
  )
}

export default SearchInput
