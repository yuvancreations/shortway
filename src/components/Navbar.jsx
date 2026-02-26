import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import AuthModal from './AuthModal'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [authModalOpen, setAuthModalOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/logo.png" alt="Shortway Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(138,43,226,0.6)]" />
                        <span className="font-outfit font-bold text-2xl tracking-tight hidden sm:block">
                            SHORT<span className="text-[#b28bff]">WAY</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 font-medium">
                        <a href="#about" className="hover:text-[#b28bff] transition-colors">About</a>
                        <a href="#services" className="hover:text-[#b28bff] transition-colors">Services</a>
                        <a href="#work" className="hover:text-[#b28bff] transition-colors">Our Work</a>
                        <button className="gradient-bg px-6 py-2.5 rounded-full font-semibold hover:glow transition-all hover:-translate-y-1">
                            Free Consultation
                        </button>
                        <button onClick={() => setAuthModalOpen(true)} className="text-sm font-semibold border border-[#8A2BE2] px-4 py-2 rounded-full hover:bg-[rgba(138,43,226,0.1)] transition-colors">
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6"
                    >
                        <a href="#about" className="text-lg w-full text-center hover:text-[#b28bff]" onClick={() => setMobileMenuOpen(false)}>About</a>
                        <a href="#services" className="text-lg w-full text-center hover:text-[#b28bff]" onClick={() => setMobileMenuOpen(false)}>Services</a>
                        <a href="#work" className="text-lg w-full text-center hover:text-[#b28bff]" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
                        <button onClick={() => { setMobileMenuOpen(false); setAuthModalOpen(true); }} className="text-lg w-full text-center hover:text-[#b28bff]">Login</button>
                        <button className="gradient-bg w-[80%] py-3 rounded-full font-semibold mt-2">Free Consultation</button>
                    </motion.div>
                )}
            </nav>

            {authModalOpen && <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />}
        </>
    )
}
