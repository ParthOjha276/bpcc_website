"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Ensure you have lucide-react installed

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Detect scroll to toggle the background style
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '/work' },
        { name: 'About', href: '/about' },
        { name: 'Team', href: '/team' }, // Changed "Contact" to "Team" per standard consulting
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="group">
                    <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-bpcc-navy' : 'text-white'
                        }`}>
                        BPCC<span className="text-bpcc-gold">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-sans font-medium tracking-wide transition-colors hover:text-bpcc-gold ${isScrolled ? 'text-bpcc-navy-light' : 'text-gray-200'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className={`px-6 py-2 rounded-sm text-sm font-semibold transition-all ${isScrolled
                            ? 'bg-bpcc-navy text-white hover:bg-bpcc-navy-light'
                            : 'bg-white text-bpcc-navy hover:bg-gray-100'
                            }`}
                    >
                        Partner With Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? 'text-bpcc-navy' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled ? 'text-bpcc-navy' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay (Simple for now) */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 shadow-lg md:hidden flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-bpcc-navy font-serif text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;