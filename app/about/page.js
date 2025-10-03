'use client'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import Image from 'next/image'
import abtBanner from "@/public/images/abt-banner.webp"
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import CEO from "@/public/images/CEO.webp"
import c1 from "@/public/images/c1.webp"
import c2 from "@/public/images/c2.webp"
import c3 from "@/public/images/c3.webp"
import c4 from "@/public/images/c4.webp"
import c5 from "@/public/images/c5.webp"
import c6 from "@/public/images/c6.webp"
import c7 from "@/public/images/c7.webp"
import c8 from "@/public/images/c8.webp"
import c9 from "@/public/images/c9.webp"
import c10 from "@/public/images/c10.webp"
import clutch from "@/public/images/clutch.webp"
import aboutBanner from "@/public/images/aboutteambanner.webp"
import t1 from "@/public/images/t1.svg"
import t2 from "@/public/images/t2.svg"
import t3 from "@/public/images/t3.svg"
import t4 from "@/public/images/t4.svg"
import y1 from "@/public/images/y1.svg"
import y2 from "@/public/images/y2.svg"
import y3 from "@/public/images/y3.svg"
import Elvina from "@/public/images/elvina.webp"



import React from 'react'
import Tech from '@/components/Tech/Tech'
import { Link } from 'lucide-react'
import Trigger from '@/components/Trigger/Trigger'

export default function about() {
  const [activeTab, setActiveTab] = useState("tab1"); // 👈 by default Tab1 active


  const counterRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);


  return (
    <div>
      <Navbar />

      <section className="bg-white"  data-theme="light">
        <div className="container px-6 lg:px-8 pt-40 lg:pt-[10.5rem] max-w-7xl mx-auto">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>Brilliant Tech Minds, Together! </span>
              </h2>
            </div>
            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              We are a team of visionary leaders and problem-solvers utilizing our agile processes to build solutions for lasting value.
            </p>
          </div>

          <Image src={abtBanner} alt="About Us Image" width={1200} height={600} className="mt-8 lg:mt-24 image lg:rounded-[30px] rounded-2xl w-full" />
        </div>
      </section>


      <section ref={counterRef}>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pt-[10.5rem] lg:pb-24 lg:px-8">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>building software for global leaders</span>
              </h2>
            </div>
            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              Since 2008, Cubix has been setting new quality benchmarks every year. We equip you with solutions that create impact with purpose while generating business value. Let’s work together to build your next success story.

            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8" id="project-stats">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">

            {/* Completed Projects */}
            <div className="flex flex-col gap-y-2 w-max">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="group-hover:text-[#3BB9E1] font-bold text-4xl xl:text-5xl 2xl:text-6xl">
                    {startCounter && (
                      <CountUp
                        start={0}
                        end={1300}
                        duration={3}
                        separator=","
                      />
                    )}
                    +
                  </span>
                </div>
                <p className="group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Completed Projects
                </p>
              </span>
            </div>

            {/* Talented Cubixians */}
            <div className="flex flex-col gap-y-2 w-max">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="group-hover:text-[#3BB9E1] font-bold text-4xl xl:text-5xl 2xl:text-6xl">
                    {startCounter && (
                      <CountUp
                        start={0}
                        end={750}
                        duration={3}
                        separator=","
                      />
                    )}
                    +
                  </span>
                </div>
                <p className="group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Talented Cubixians
                </p>
              </span>
            </div>

            {/* Satisfied Clients */}
            <div className="flex flex-col gap-y-2 w-max md:pb-20">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="group-hover:text-[#3BB9E1] font-bold text-4xl xl:text-5xl 2xl:text-6xl">
                    {startCounter && (
                      <CountUp
                        start={0}
                        end={600}
                        duration={3}
                        separator=","
                      />
                    )}
                    +
                  </span>
                </div>
                <p className="group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Satisfied Clients
                </p>
              </span>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pb-24 lg:px-8">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>Technologies we use </span>
              </h2>
            </div>
            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              Hire from our pool of 350+ specialized experts in web, mobile, and
              software engineering, specializing in the latest technologies and
              frameworks, ready to scale your development teams effortlessly.
            </p>

            <div className="flex flex-wrap flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300">
              {/* Left Tabs */}
              <div className="w-full md:w-[30%] lg:w-[21.5%] 2xl:w-[24%] overflow-auto md:overflow-hidden md:border-r border-gray-300 md:pt-12 md:border-b-0 border-b">
                <ul className="text-lg lg:text-xl 2xl:text-2xl font-medium space-y-4 md:space-y-6 xl:space-y-10 2xl:space-y-8 pr-4 md:pr-0">
                  <li
                    onClick={() => setActiveTab("tab1")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab1" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Tab 1
                  </li>
                  <li
                    onClick={() => setActiveTab("tab2")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab2" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Tab 2
                  </li>
                  <li
                    onClick={() => setActiveTab("tab3")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab3" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Tab 3
                  </li>
                  <li
                    onClick={() => setActiveTab("tab4")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab4" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Tab 4
                  </li>
                  <li
                    onClick={() => setActiveTab("tab5")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab5" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Tab 5
                  </li>
                </ul>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-[70%] lg:w-[78.5%] 2xl:w-[76%] pt-6 md:pt-0">

                {activeTab === "tab1" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Igniting Ideas That Inspire</h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">At our company, we are driven by a passion for creativity, constantly seeking fresh ideas.</p>

                      <div className="flex flex-col gap-5">
                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Imagination and the thrill of bringing new-age ideas to reality set our team.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">It is a culture of inquisitiveness, experimentation and the courage to breach frontiers.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our creative mindset helps us conceive innovative products that change the dynamics of industries and exceed expected levels.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">To us, creativity is a skillset, an outlook on life that steers us toward a future filled with possibilities.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Amazing outcomes emerge when our talented team collaborates with passion and purpose.</p>

                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab2" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Igniting Ideas That Inspire 2</h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">At our company, we are driven by a passion for creativity, constantly seeking fresh ideas.</p>

                      <div className="flex flex-col gap-5">
                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Imagination and the thrill of bringing new-age ideas to reality set our team.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">It is a culture of inquisitiveness, experimentation and the courage to breach frontiers.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our creative mindset helps us conceive innovative products that change the dynamics of industries and exceed expected levels.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">To us, creativity is a skillset, an outlook on life that steers us toward a future filled with possibilities.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Amazing outcomes emerge when our talented team collaborates with passion and purpose.</p>

                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab3" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Igniting Ideas That Inspire 3</h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">At our company, we are driven by a passion for creativity, constantly seeking fresh ideas.</p>

                      <div className="flex flex-col gap-5">
                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Imagination and the thrill of bringing new-age ideas to reality set our team.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">It is a culture of inquisitiveness, experimentation and the courage to breach frontiers.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our creative mindset helps us conceive innovative products that change the dynamics of industries and exceed expected levels.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">To us, creativity is a skillset, an outlook on life that steers us toward a future filled with possibilities.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Amazing outcomes emerge when our talented team collaborates with passion and purpose.</p>

                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab4" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Igniting Ideas That Inspire 4</h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">At our company, we are driven by a passion for creativity, constantly seeking fresh ideas.</p>

                      <div className="flex flex-col gap-5">
                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Imagination and the thrill of bringing new-age ideas to reality set our team.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">It is a culture of inquisitiveness, experimentation and the courage to breach frontiers.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our creative mindset helps us conceive innovative products that change the dynamics of industries and exceed expected levels.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">To us, creativity is a skillset, an outlook on life that steers us toward a future filled with possibilities.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Amazing outcomes emerge when our talented team collaborates with passion and purpose.</p>

                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab5" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Igniting Ideas That Inspire 5</h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">At our company, we are driven by a passion for creativity, constantly seeking fresh ideas.</p>

                      <div className="flex flex-col gap-5">
                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Imagination and the thrill of bringing new-age ideas to reality set our team.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">It is a culture of inquisitiveness, experimentation and the courage to breach frontiers.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our creative mindset helps us conceive innovative products that change the dynamics of industries and exceed expected levels.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">To us, creativity is a skillset, an outlook on life that steers us toward a future filled with possibilities.</p>

                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Amazing outcomes emerge when our talented team collaborates with passion and purpose.</p>

                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl lg:px-8 px-6 md:mt-24 lg:mt-[10.5rem] mt-14">
        <figure className="bg-gradient-to-r from-[#050505] to-[#201F21] text-white lg:rounded-[30px] rounded-2xl lg:p-[4.5rem] p-8">
          <h3 className=" font-bold lg:max-w-4xl text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Great Things Happen when Our Talented Teams Work Together to Achieve your Goals. at Cubix, We Focus on Solving Real Business Problems Because That’s Where True Value Lies.</h3>
          <figcaption className="lg:mt-12 mt-6 flex items-center gap-x-4">
            <Image alt="" src={CEO} width="64" height="64" className="h-16 w-16 rounded-full" />
            <div className="flex flex-col">
              <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Salman Lakhani</p>
              <p className=" text-[#6F6F6F] text-sm lg:text-md xl:text-lg 2xl:text-xl">CEO, Cubix inc.</p>
            </div>
          </figcaption>
        </figure>
      </section>


      <section className="textContent-sec">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="pb-1 font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>clients we’re proud to have worked with</span></h2></div>
          </div>
        </div>
      </section>


      <div className="px-6 lg:px-8 max-w-7xl mx-auto mt-8 lg:mt-24">
        <div className="grid grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-5 sm:grid-cols-3 ">

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c1} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c2} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c3} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c4} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c5} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c6} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c7} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c8} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c9} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c10} alt="Image 1" />
          </div>

        </div>
      </div>

      <div className='mt-10 md:mt-12 lg:mt-[7.5rem]'>
        <Tech />
      </div>


      <section className="HalfTextContent-sec">
        <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:pt-[10.5rem] max-w-7xl mx-auto">
          <div className='lg:grid lg:grid-cols-12'>
            <div className='lg:col-span-7 xl:pr-4'>
              <div className='lg:overflow-hidden'>
                <h2 className=" undefined font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>our people and culture</span></h2>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="px-6 lg:px-8 max-w-7xl mx-auto mt-8 lg:mt-20">
        <Image src={aboutBanner} alt="About Us Image" width={1200} height={600} className="image lg:rounded-[30px] rounded-2xl w-full" />
      </section>


      <section className="textContent-sec">
        <div className="undefined px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="pb-1 font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>global awards and recognitions</span></h2>
            </div>
          </div>
        </div>
      </section>


      <section className="leadingBrand-sec">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto mt-8 lg:mt-24">
          <div className="grid grid-cols-2 gap-6 lg:gap-10 lg:grid-cols-4 sm:grid-cols-3 ">

            <span className="flex flex-col">
              <Image className="w-full grayscale hover:grayscale-0" src={clutch} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center">Top Blockchain Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="w-full grayscale hover:grayscale-0" src={clutch} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center">Top Software Development Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="w-full grayscale hover:grayscale-0" src={clutch} alt="Clutch" />
              <p className="lg:text-sm text-xs mt-6 text-center">Top Blockchain Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="w-full grayscale hover:grayscale-0" src={clutch} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center">Top Software Development Company</p>
            </span>


            <span className="flex flex-col">
              <Image className="w-full grayscale hover:grayscale-0" src={clutch} alt="Clutch" />
              <p className="lg:text-sm text-xs mt-6 text-center">Top Blockchain Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="w-full grayscale hover:grayscale-0" src={clutch} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center">Top Software Development Company</p>
            </span>


            <span className="flex flex-col">
              <Image className="w-full grayscale hover:grayscale-0" src={clutch} alt="Clutch" />
              <p className="lg:text-sm text-xs mt-6 text-center">Top Blockchain Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="w-full grayscale hover:grayscale-0" src={clutch} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center">Top Software Development Company</p>
            </span>
          </div>
        </div>
      </section>


      <div className="leadingBrandAbout-sec bg-black lg:mt-[10.5rem] md:mt-24 mt-14">
        <div className="undefined px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem]">
          <div className="lg:overflow-hidden">
            <h2 className="undefined text-white font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>we partner with the </span>
              <br className="invisible md:visible" />
              <span>
                <span className="!normal-case">world’s</span> technology leaders</span>
            </h2>
          </div>

          <span className="flex justify-between items-center mt-8 lg:mt-20 lg:gap-10 lg:flex-nowrap flex-wrap">

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t1} alt="Clutch" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t2} alt="Good Firms" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t3} alt="Clutch" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t4} alt="Good Firms" />
            </div>

          </span>

        </div>
      </div>



      <section className="textContent-sec">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="undefined font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>Media Mentions</span></h2></div>
            <p className="pt-6 text-black lg:pe-[5rem] lg:pt-[2.375rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We stay in the news for our incredible tech achievements to
              <br /> make the world a better place.</p>
          </div>
        </div>
      </section>



      <div className="px-6 lg:px-8 max-w-7xl mx-auto pb-14 md:pb-24 lg:pb-[10.5rem]">
        <div className="flex gap-5 md:gap-0 md:flex-nowrap justify-between flex-wrap lg:gap-10 mt-8">
          <div className="md:w-[33%] sm:w-[60%] w-full">
            <article className="mx-2 md:mx-4 px-6 mt-8 lg:mt-12 lg:mx-0 lg:px-6 relative" >

              <div className="w-full h-[45px] md:h-[90px] pt-3">
                <Image src={y1} alt="y1" />
              </div>

              <div>
                <p className="pt-10 text-black pr-[25px] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">There's Finally a Dating App for People With Disabilities</p>
              </div>
              <div className="absolute left-0 top-0 h-[240px] w-px bg-[#D7D7D7]"></div>
              <div className="absolute left-0 top-0 h-[90px] w-px bg-[#0B0C0D]"></div>
            </article>

          </div>


          <div className="md:w-[33%] sm:w-[60%] w-full">
            <article className="mx-2 md:mx-4 px-6 mt-8 lg:mt-12 lg:mx-0 lg:px-6 relative" >

              <div className="w-full h-[45px] md:h-[90px] pt-3">
                <Image src={y2} alt="y1" />
              </div>

              <div>
                <p className="pt-10 text-black pr-[25px] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">There's Finally a Dating App for People With Disabilities</p>
              </div>
              <div className="absolute left-0 top-0 h-[240px] w-px bg-[#D7D7D7]"></div>
              <div className="absolute left-0 top-0 h-[90px] w-px bg-[#0B0C0D]"></div>
            </article>

          </div>


          <div className="md:w-[33%] sm:w-[60%] w-full">
            <article className="mx-2 md:mx-4 px-6 mt-8 lg:mt-12 lg:mx-0 lg:px-6 relative" >

              <div className="w-full h-[45px] md:h-[90px] pt-3">
                <Image src={y3} alt="y1" />
              </div>

              <div>
                <p className="pt-10 text-black pr-[25px] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">There's Finally a Dating App for People With Disabilities</p>
              </div>
              <div className="absolute left-0 top-0 h-[240px] w-px bg-[#D7D7D7]"></div>
              <div className="absolute left-0 top-0 h-[90px] w-px bg-[#0B0C0D]"></div>
            </article>

          </div>


        </div>
      </div>


      <section className="gameDev-sec bg-black text-white py-14 md:py-24 lg:py-[10.5rem]">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto" >
          <div className="lg:overflow-hidden" >
            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>what we </span><span className="text-theme"><span>believe</span></span><span> in</span></h2></div>
          <div className="mx-auto mt-12 lg:mt-20 grid max-w-2xl grid-cols-1 md:gap-20 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3" >
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Customer Focus</h3>
              <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We put our clients at the center to build trust and build innovative software that exceeds expectations.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Integrity</h3>
              <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our teams embody integrity at all levels, serving as role models and ambassadors of our valued principles.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Innovation</h3>
              <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We utilize the latest technologies to build what’s next and ensure rapid delivery to help you always be first to market.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Quality</h3>
              <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">From custom software to mobile apps, we are committed to delivering excellence in everything we build for you.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Transparency</h3>
              <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">While we move your project forward, we ensure you never lose control of its outcomes by keeping you updated.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Collaboration</h3>
              <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our teams work, learn, succeed, grow, and develop exceptional solutions for your business – together.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="textContent-sec">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="pb-1 font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>behind the scenes, our management</span></h2>
              <p className="undefined text-black lg:pe-[5rem] pt-6 lg:pt-[2.375rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">At Cubix, our leadership extends beyond business, aiming to positively impact our clients and communities through innovation and responsible practices.</p></div>
          </div>

          <div className="px-6 lg:px-8 max-w-7xl mx-auto my-8 lg:my-20">
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="textContent-sec">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto pb-14 md:pb-24 lg:pb-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="pb-1 font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>sales and account force</span></h2>
              <p className="undefined text-black lg:pe-[5rem] pt-6 lg:pt-[2.375rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">At Cubix, our Sales & Account Force is more than a team it’s the driving power behind building lasting client relationships and fueling business growth.</p></div>
          </div>

          <div className="px-6 lg:px-8 max-w-7xl mx-auto my-8 lg:my-20">
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="leadingBrandAbout-sec bg-black">
        <div className="undefined px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem]">
          <div className="lg:overflow-hidden">
            <h2 className="undefined text-white font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>we partner with the </span>
              <br className="invisible md:visible" />
              <span>
                <span className="!normal-case">world’s</span> technology leaders</span>
            </h2>
          </div>

          <span className="flex justify-between items-center mt-8 lg:mt-20 lg:gap-10 lg:flex-nowrap flex-wrap">

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t1} alt="Clutch" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t2} alt="Good Firms" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t3} alt="Clutch" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t4} alt="Good Firms" />
            </div>

          </span>

        </div>
      </div>


      <Trigger />


      <Footer />
      <Sidepopup />


    </div>
  )
}