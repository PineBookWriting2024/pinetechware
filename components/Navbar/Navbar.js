"use client"
import { useState, useEffect } from "react"
import styles from "./Navbar.module.css"
import Image from "next/image"
import logoDark from "@/public/images/logo-dark.png"
import logoWhite from "@/public/images/logo.png"
import { usePopup } from "@/context/PopupContext";
// import { Link } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const { openPopup } = usePopup();
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTheme, setActiveTheme] = useState("dark") // default dark

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme")
            if (theme) setActiveTheme(theme)
          }
        })
      },
      { threshold: 0.6 } // 60% section visible hote hi trigger
    )

    document.querySelectorAll("[data-theme]").forEach((sec) => {
      observer.observe(sec)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Packages", href: "/packages" },
  ]

  const isLight = activeTheme === "light" || isScrolled

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/" className="block w-32 h-auto">
              <Image
                src={isLight ? logoDark : logoWhite}
                alt="MyLogo"
                width={130}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex space-x-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${styles.navLink} text-base font-medium transition-colors duration-200 ${
                  isLight
                    ? "text-gray-700 hover:[text-#3BB9E1]"
                    : "text-white hover:#3BB9E1]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden md:block">
            <button
              className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] items-center md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm mb-4"
              onClick={openPopup}
            >
              <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
              <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
