import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import outcome from "@/assets/images/outcome-poster.webp"
import { SiStarlingbank } from "react-icons/si";
import Icon from "@/assets/images/images.png"




const outcomePoints = ["Product Ownership","Freelacing","Global Marketing by Panaverse DAO", "Boosting Economy."]


const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
        <Wrapper>
            <div className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
                {/* Left - Image */}
                <div className="flex-1">
                    <Image src={outcome} alt="outcome-poster"/>
                </div>
                {/* Right - Content */}
                <div className="flex-1 bg-gradient-to-r from-white to bg-[#cdf1f3] rounded-xl">
                    <h2 className="text-3xl sm:text-[42px] font-bold text-gray-900">
                        The Outcome for Participants of the Program
                    </h2>
                    <p className="mt-4 text-base font-semibold text-gray-600">
                        As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistans software exports.
                    </p>
                        <div className="mt-14 flex-shrink grid grid-cols-2 gap-y-4">
                            {
                                outcomePoints.map((item, i) => (
                                    <div key={i} className="flex items-center gap-x-2">
                                        {/* <SiStarlingbank className="text-2xl text-[#01c7d7] "/> */}
                                        <Image src={Icon} alt="outcome-poster flex-shrink" width={25} height={25}/>
                                        <h3 className="font-medium text-lg">{item}</h3>
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default ProgramOutcome