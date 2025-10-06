"use client";

import { useState } from "react";
import React from 'react'
import Image from 'next/image'
import serviceBoll from "@/public/images/serviceBoll.webp"
import serviceHand from "@/public/images/serviceHand.webp"
import Navbar from '@/components/Navbar/Navbar'
import serMob from "@/public/images/serMob.jpg"
import OurClients from "@/components/OurClients/OurClients";
import Trigger from "@/components/Trigger/Trigger";
import Footer from "@/components/Footer/Footer";



export default function services() {


    const [openIndex, setOpenIndex] = useState(1); // Default: 2nd (Audit & Consulting) open

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            title: "Customized Software Development",
            content:
                "Customized Software Development services create tailor-made digital solutions designed to meet your unique business needs, ensuring efficiency, scalability, and innovation.",
        },
        {
            title: "Audit and Consulting",
            content:
                "Audit and Consulting services provide expert guidance and thorough evaluations to ensure financial accuracy, regulatory compliance, and strategic business improvements.",
        },
        {
            title: "Delivery",
            content:
                "Our delivery services focus on efficient project completion with timely execution, transparency, and client satisfaction.",
        },
        {
            title: "Support and Maintenance",
            content:
                "Support and Maintenance ensure long-term reliability, providing continuous monitoring, updates, and troubleshooting for your software solutions.",
        },
    ];
    return (
        <div>

            <Navbar />

            <section className='service-module--heroGradient--bed34 hero relative overflow-x-hidden' data-theme="light">
                <div className='min-h-screen flex justify-center items-center flex-col max-w-7xl mx-auto relative'>
                    <div className='mx-auto w-full md:w-8/12 xl:w-3/5 2xl:w-5/6 px-4 lg:px-8'>

                        <h1 className=" font-extrabold text-black leading-none text-[43px] lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px]"><span className="text-theme"> Business </span> through Accelerated Digital Services</h1>

                        <p className=" text-black mt-5 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Achieve business goals and meet user satisfaction by developing seamless and intuitive products.</p>

                    </div>
                </div>

                <div className="absolute top-28 lg:top-24 sm:top-36 -left-10 ">
                    <Image src={serviceBoll} className="w-24 md:w-28 2xl:w-36" alt="teach Asset" />
                </div>

                <div className="absolute bottom-20 2xl:-right-28 -right-12 hidden lg:block">
                    <Image src={serviceHand} className="w-[28rem] 2xl:w-[42rem]" alt="teach Asset" />
                </div>
            </section>



            <section className="service-provided" id="mobile-services">
                <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:py-[10.5rem] max-w-7xl mx-auto">
                    <div className="max-w-3xl xl:max-w-4xl">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold pb-8 md:pb-12 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>services we provide</span></h2></div>
                    </div>
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-10">
                        <div className="lg:col-span-5">
                            <Image className="w-full fade-in lg:sticky lg:top-20" src={serMob} />
                        </div>


                        {/* <div className="lg:col-span-7 lg:pt-0 pt-10">
                            <div className="space-y-6 lg:space-y-10">

                                <div className="pt-2">
                                    <button className="flex w-full justify-between text-left">
                                        <h3 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Customized Software Development</h3>
                                        <span className="ml-6 flex h-7 items-center"><span className="transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[8px]">+</span></span>
                                    </button>
                                </div>

                                <div className="pt-2">
                                    <button className="flex w-full justify-between text-left">
                                        <h3 className=" text-theme font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Audit and Consulting</h3>
                                        <span className="ml-6 flex h-7 items-center"><span className="transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal rotate-180 text-theme mt-[5px]">-</span></span>
                                    </button>
                                    <div className="overflow-hidden">
                                        <dd className="mt-6 pr-12">
                                            <p className=" text-black mt-3 mb-7 text-sm lg:text-md xl:text-lg 2xl:text-xl">Audit and Consulting services provide expert guidance and thorough evaluations to ensure financial accuracy, regulatory compliance, and strategic business improvements.</p>
                                            <p className=" text-black font-bold pb-2 text-xs xl:text-sm 2xl:text-base"></p>
                                        </dd>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button className="flex w-full justify-between text-left">
                                        <h3 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Delivery</h3>
                                        <span className="ml-6 flex h-7 items-center"><span className="transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[8px]">+</span></span>
                                    </button>
                                </div>

                                <div className="pt-2">
                                    <button className="flex w-full justify-between text-left">
                                        <h3 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Support and Maintenance</h3>
                                        <span className="ml-6 flex h-7 items-center"><span className="transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[8px]">+</span></span>
                                    </button>
                                </div>

                            </div>
                        </div> */}


                        <div className="lg:col-span-7 lg:pt-0 pt-10">
                            <div className="space-y-6 lg:space-y-10">
                                {data.map((item, index) => (
                                    <div key={index} className="pt-2">
                                        <button
                                            className="flex w-full justify-between text-left"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <h3
                                                className={`font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] ${openIndex === index ? "text-theme" : ""
                                                    }`}
                                            >
                                                {item.title}
                                            </h3>
                                            <span className="ml-6 flex h-7 items-center">
                                                <span
                                                    className={`transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[8px] ${openIndex === index
                                                        ? "rotate-180 text-theme mt-[5px]"
                                                        : ""
                                                        }`}
                                                >
                                                    {openIndex === index ? "-" : "+"}
                                                </span>
                                            </span>
                                        </button>

                                        {/* Accordion Content with Animation */}
                                        <div
                                            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === index ? "max-h-[500px]" : "max-h-0"
                                                }`}
                                        >
                                            <dd className="mt-6 pr-12">
                                                <p className="text-black mt-3 mb-7 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                                                    {item.content}
                                                </p>
                                                <p className="text-black font-bold pb-2 text-xs xl:text-sm 2xl:text-base"></p>
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="teach-guarantees">
                <div className="undefined px-6 lg:px-8 pb-14 md:pb-24 lg:pb-[10.5rem] max-w-7xl mx-auto">
                    <div className="2xl:max-w-4xl lg:max-w-3xl pb-12 lg:pb-20">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span><span classname="!normal-case">teach</span> guarantees</span></h2></div>
                    </div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <article className=" cursor-auto group p-7 rounded-3xl border h-full border-[#CCCCCC]">
                                <a>
                                    <div className="flex flex-col h-full justify-between gap-y-16 lg:gap-y-20">
                                        <h3 className=" font-bold leading-[1.2] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">High-Quality Practices</h3>
                                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">High-quality practices in software development involve rigorous testing, adherence to standards, and continuous improvement, ensuring reliable, efficient, and robust solutions.</p>
                                    </div>
                                </a>
                            </article>
                            <article className=" cursor-auto group p-7 rounded-3xl border h-full border-[#CCCCCC]">
                                <a>
                                    <div className="flex flex-col h-full justify-between gap-y-16 lg:gap-y-20">
                                        <h3 className=" font-bold leading-[1.2] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Real-estate Software</h3>
                                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Real-Estate software streamlines property management, sales, and client interactions, enhancing efficiency, organization, and profitability for real estate professionals.</p>
                                    </div>
                                </a>
                            </article>
                            <article className=" cursor-auto group p-7 rounded-3xl border h-full border-[#CCCCCC]">
                                <a>
                                    <div className="flex flex-col h-full justify-between gap-y-16 lg:gap-y-20">
                                        <h3 className=" font-bold leading-[1.2] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Strategic Partnerships</h3>
                                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Strategic partnerships in software development drive innovation and growth by combining expertise, resources, and technologies to deliver superior solutions.</p>
                                    </div>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>


            <OurClients />

            <Trigger />

            <Footer />
        </div>
    )
}
