import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-[#080014] pt-20 pb-10 border-t border-[#8A2BE2]/20 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex">
                            <img src="/logo.png" alt="Shortway Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(138,43,226,0.6)]" />
                            <span className="font-outfit font-bold text-2xl tracking-tight">
                                SHORT<span className="text-[#b28bff]">WAY</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            The fastest path to business growth. We combine world-class web development, sleek design, and aggressive performance marketing to scale your brand.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#8A2BE2]/20 hover:text-[#E0B0FF] transition-all"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#8A2BE2]/20 hover:text-[#E0B0FF] transition-all"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#8A2BE2]/20 hover:text-[#E0B0FF] transition-all"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#8A2BE2]/20 hover:text-[#E0B0FF] transition-all"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Website Development</a></li>
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Web App UI/UX</a></li>
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Mobile Applications</a></li>
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Performance Marketing</a></li>
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Meta & Google Ads</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Our Work</a></li>
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#E0B0FF] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="https://www.shortway.in" className="hover:text-[#E0B0FF] transition-colors">www.shortway.in</a></li>
                            <li>Mob. 7302718150</li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Short-Way Agency. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-[#E0B0FF]">Privacy Policy</a>
                        <a href="#" className="hover:text-[#E0B0FF]">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
