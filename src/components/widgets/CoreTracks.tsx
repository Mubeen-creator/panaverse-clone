import Wrapper from "@/components/shared/Wrapper"
import Button from "@/components/shared/Button"
import QuarterBox from "../shared/QuarterBox"




const CoreTrackData = [
  {
    header:"Quarter I",
    desc:"CS-101: Object-Oriented Programming using TypeScript",
    num: 1
  },
  {
    header:"Quarter II",
    desc:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    num: 2
  },
  {
    header:"Quarter III",
    desc:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    num: 3
  },
]



 const CoreTracks = () => {  
  return (
    <section className="bg-gradient-to-r from-[#dbf2f5] to white mt-5">
        <Wrapper>
            {/* Content */}
            <div className="pt-2 max-w-screen-sm">
                <h4 className="text-[#00616C] text-lg font-bold mb-0 mt-20">Program of Studies</h4>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Core Courses <br /> (Common in All Specializations)</h2>
                <p className="mt-7 text-base font-semibold text-gray-600">Every participant of the program will start by completing the following three core courses.</p>
                <div className="mt-5">
                    <Button text="Enroll Now"/>
                </div>
            </div>
            {/* Boxes */}
            <div className="my-20 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl">
              {
                CoreTrackData.map( (item)=>(
                    <QuarterBox
                        key={item.num}
                        header={item.header}
                        description={item.desc}
                        number={item.num} 
                      />
                    ))
              }
            </div>
        </Wrapper>
    </section>
  )
}

export default CoreTracks