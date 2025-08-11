"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState<string>("#about")
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ids = ["about", "planes", "projects", "experience", "contact"]; 
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio));
        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { root: null, rootMargin: "0px 0px -50% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Nosotros", href: "#about" },
    { name: "Planes", href: "#planes" },
    { name: "Proyectos", href: "#projects" },
    { name: "Proceso", href: "#experience" },
    { name: "Contáctanos", href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-4 py-3 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur opacity-50"></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/img/logodark.png"
                  alt="Logo"
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <nav className="flex items-center gap-1">
              <Link href="/" className="flex items-center mr-4">
                <Image
                  src="/img/logodark.png"
                  alt="Logo"
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <ul className="flex items-center gap-1.5 bg-zinc-900/50 backdrop-blur-xl ring-1 ring-white/10 rounded-full px-2.5 py-1.5 shadow-md">
                {navItems.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative group inline-flex h-8 px-3 items-center justify-center rounded-full text-sm leading-none transition-colors duration-300 ${
                          isActive ? "text-amber-300" : "text-zinc-300 hover:text-white"
                        }`}
                        onClick={handleNavClick}
                      >
                        <span className="relative inline-block text-center">
                          {item.name}
                          <span
                            className={`pointer-events-none absolute left-0 -bottom-0.5 h-px w-full origin-center scale-x-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-transform duration-300 ${
                              isActive ? "scale-x-100" : "group-hover:scale-x-100"
                            }`}
                          />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Button
                size="sm"
                className="ml-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-amber-500 hover:to-orange-500 border-0"
              >
                Resume
              </Button>
            </nav>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-white hover:text-orange-400 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-amber-500 hover:to-orange-500 border-0">
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
