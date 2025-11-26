import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import resumePdf from "../assets/Resume_Ayush.pdf";

function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Experience", to: "experience" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-deep-charcoal/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="home" smooth={true} duration={500} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-electric-purple cursor-pointer">
                    Ayush Verma
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={resumePdf}
                        download
                        className="px-5 py-2 border border-electric-blue text-electric-blue rounded-full hover:bg-electric-blue hover:text-white transition-all text-sm font-medium"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-deep-charcoal border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer block"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href={resumePdf}
                            download
                            className="inline-block text-center px-5 py-2 border border-electric-blue text-electric-blue rounded-full hover:bg-electric-blue hover:text-white transition-all"
                        >
                            Resume
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavigationBar;
