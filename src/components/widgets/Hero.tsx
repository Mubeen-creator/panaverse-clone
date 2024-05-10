import Wrapper from "@/components/shared/Wrapper"
import HeroPoster from "@/assets/images/heroposter.webp"
import Image from "next/image"
// Components
import Button from "@/components/shared/Button"

function Hero() {
  return (
    
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center">
                    {/* left side */}
                        <div className="flex-1 max-w-screen-sm">
                            <h4 className="text-primary text-lg font-bold mb-2">
                                Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                            </h4>
                            
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Certified Web 3.0 and Metaverse Developer</h1>

                            <p className="mt-7 text-base font-semibold text-gray-600">
                                A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                            </p>

                            <p className="mt-4 text-base font-semibold  text-gray-600">
                                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                            </p>

                            <div className="mt-5">
                                <Button text={"Learn More"}/>
                            </div>
                        </div>

                    {/* Right Side */}
                        <div className="flex-1 max-w-screen-sm">
                            <Image src={HeroPoster} alt="Hero poster"/>
                        </div>
                </div>
            </Wrapper>
        </section>
  )
}

export default Hero