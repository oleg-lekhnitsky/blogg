import React, { InputHTMLAttributes, ReactNode } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="">
      <div className=""></div>
      <input
        className="search"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
    </div>
  )
}

export default SearchInput
