import { FC } from "react"


const Button:FC<{text:string}> = ({text}) => {
    // props.text
  return (
    <button
     className="bg-[#00616C] text-white px-8 py-4 rounded-full hover:shadow-lg text-lg font-semibold hover:scale-105 duration-300">
        {text}
    </button>
  )
}

export default Button