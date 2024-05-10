import { FC } from "react";

interface Iprops {
    header:string;
    description: string;
    number:number;
    haveBorder?: boolean
}


const QuarterBox:FC<Iprops> = ({header, description, number, haveBorder = true}) => {
  return (
    <div className={`rounded-md px-8 py-12 relative flex flex-col justify-center ${haveBorder && "border"}`}>
        <h4 className="font-bold text-lg">{header}</h4>
        <p className="mt-2  text-gray-600">{description}</p>
        <div className="absolute text-gray-200 top-5 xl::top-8 right-10 text-9xl font-bold -z-10">{number}</div>
    </div>
  )
}

export default QuarterBox