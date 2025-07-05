import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  },
];

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 text-blue-400" />,
    text: "support@firstrank.com",
    href: "mailto:support@firstrank.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-green-400" />,
    text: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: <MapPin className="h-5 w-5 text-red-400" />,
    text: "123 Education St, San Francisco, CA 94107",
    href: "https://maps.google.com",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/Images/first_rank_logo.png" 
                alt="First Rank Logo" 
                width={32}
                height={32}
                className="h-8 w-auto" 
              />
              <span className="ml-2 text-2xl font-bold text-white">First Rank</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of learners with personalized, AI-driven education.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} First Rank. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
