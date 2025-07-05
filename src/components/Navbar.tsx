"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" passHref>
              <Image 
                src="/Images/first_rank_logo.png" 
                alt="First Rank Logo" 
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group ${isActive ? 'font-bold text-black' : 'text-foreground hover:text-primary'}`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
                    )}
                    <span className="absolute inset-0 bg-black/5 rounded-md opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-200"></span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="cta" size="lg">Get Started</Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-background inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'font-bold text-black' : 'text-foreground hover:text-primary'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    {isActive && (
                      <span className="block w-6 h-0.5 bg-black mt-1"></span>
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="px-4 pb-4">
                <Button variant="cta" className="w-full" size="lg">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
