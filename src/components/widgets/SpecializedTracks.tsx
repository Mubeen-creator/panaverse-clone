"use client"


import React, { useState } from 'react'
import Wrapper from '@/components/shared/Wrapper'
import { IoIosArrowForward } from "react-icons/io";
import QuarterBox from '@/components/shared/QuarterBox';
import Image from 'next/image';
// Images
import Web3Img from "@/assets/images/metaverse.webp"
import AiImg from "@/assets/images/ai.webp"
import CloudImg from "@/assets/images/cloud.webp"
import Ambient from "@/assets/images/ambient.webp"
import Goenomics from "@/assets/images/genomics.webp"
import Network from "@/assets/images/network.webp"


export const programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: Web3Img,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: AiImg,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps5",
                number: 5
            }
        ]
    },
    {
        slug: "cn",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image: CloudImg,
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "ac",
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: Ambient,
        quarters: [
            {
                header: "Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number: 5
            }
        ]
    },
    {
        slug: "bio",
        header: "Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: Goenomics,
        quarters: [
            {
                header: "Quarter IV",
                description: "Bio-351: Python for Biologists",
                number: 4
            },
            {
                header: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number: 5
            }
        ]
    },
    {
        slug: "npa",
        header: "Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image: Network,
        quarters: [
            {
                header: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number: 4
            },
            {
                header: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number: 5
            }
        ]
    },
]


const SpecializedTracks = () => {


    const [selectedItem, setSelectedItem] = useState("wmd")
    const selectedItemData = programsData.find((item) => item.slug === selectedItem )
    console.log(selectedItem);
    



  return (
    <section>
        <Wrapper>
            {/* Header */}
                <div className="max-w-screen-sm">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Specialized Tracks:</h2>
                    <p className="mt-4 text-base font-semibold text-gray-600">
                        After completing the first three quarters the participants will select one or more specializations consisting of two courses each.
                    </p>
                </div>

            {/* Content Left */}
                <div className='mt-14 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8'>
                    <div className="shadow-xl sticky top-24 self-start basis-7/12 rounded-xl border border-[#a8e0e9] px-8 py-10">
                        <h4 className="text-primary text-lg font-bold mb-0">Specialized Track</h4>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedItemData?.header}</h3>
                        <p className="mt-4 text-base font-semibold text-gray-600">{selectedItemData?.description}</p>
                        <button className="text-primary text-xl mt-6 underline underline-offset-2 flex gap-x-1 items-end">
                            Learn More <span className='text-xl'><IoIosArrowForward /></span>
                        </button>

                        {/* QuarterBox in specializedTracks.tsx starts here */}
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            {
                                selectedItemData?.quarters.map( (item)=>(
                                    <QuarterBox
                                        key={item.number}
                                        header={item.header}
                                        description={item.description}
                                        number={item.number} 
                                        haveBorder={false}
                                    />
                                ))
                            }
                        </div>
                        {/* QuarterBox in specializedTracks.tsx ends here */}
                    </div>

            {/* Content Right */}
                    <div className="px-4 py-6 space-y-5 basis-5/12 flex-1">
                        {
                            programsData.map((item, i) => (
                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-4 items-center cursor-pointer">   
                                <div className="flex-shrink-0 h-24 w-36"> 
                                    {/* <div className="w-20 h-16 rounded bg-red-500"></div> */}
                                    <Image src={item.image} alt={item.header} className={"h-20 object-cover rounded-md"}/>
                                </div>
                                <div>
                                    <h4 className="text-primary font-medium">Specialized Track</h4>
                                    <h3 className="text-xl font-semibold">{item.header}</h3>
                                </div>
                            </div> 
                            ))
                        }
                    </div>
                </div>

        </Wrapper>
    </section>
  )
}

export default SpecializedTracks