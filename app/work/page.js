'use client'
import Featured from '@/components/Featured/Featured'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import { usePopup } from "@/context/PopupContext";


import React from 'react'

export default function work () {
    const { openPopup, closePopup, isOpen } = usePopup();

    return (
        <div>

            <div data-theme="light">
                <Navbar />
            </div>

            <Featured />

             <section className="start-project bg-dark relative w-full lg:min-h-[80vh] z-50 flex items-center justify-center top-[0px]">
                <div className="mx-auto reveal-text text-center max-w-7xl md:pb-24 pb-14 lg:px-8">
                    <p className="text-black mb-2 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Pull the Trigger!</p>
                    <div className="overflow-hidden">
                        <h2 className="text-black font-extrabold text-[43px] leading-none lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px] pb-2 2xl:pb-[11px]" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>Let’s bring your <br className="min-[580px]:block hidden" /> vision to life.</h2>
                    </div>
                     <div className="flex mx-auto justify-center mt-6 md:mt-8 lg:mt-11 w-fit">
                            <button
                                className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm" onClick={openPopup}
                            >
                                <span className="pb-[3px] md:pb-1.5">Get a Quote</span>
                                <span className="pb-[3px] md:pb-1.5">Get a Quote</span>
                            </button>
                        </div>
                </div>
            </section>


            <Sidepopup/>
            <Footer />

        </div>
    )
}
