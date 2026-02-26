import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', business: '', message: ''
    })
    const [sumitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock save to database
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="glass rounded-3xl overflow-hidden border border-[#8A2BE2]/40 relative flex flex-col md:flex-row shadow-[0_0_50px_rgba(106,13,173,0.3)]">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A012B] to-[#300060] opacity-80 pointer-events-none"></div>

                    {/* Left info side */}
                    <div className="p-10 md:p-16 relative z-10 md:w-1/2 flex flex-col justify-center">
                        <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Ready to <span className="gradient-text">scale</span> your business?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Book a free consultation today and discover your customized short-way path to digital dominance.
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-[#E0B0FF]" size={20} />
                                <span>Free Website Audit</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-[#E0B0FF]" size={20} />
                                <span>Growth Strategy Session</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-[#E0B0FF]" size={20} />
                                <span>Competitor Analysis</span>
                            </li>
                        </ul>

                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full border border-[#8A2BE2] flex items-center justify-center p-1">
                                <img src="https://i.pravatar.cc/150?img=68" alt="Expert" className="rounded-full w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Talk to an expert</p>
                                <p className="text-xs text-[#E0B0FF]">Available in 5 mins</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form side */}
                    <div className="p-10 md:p-16 relative z-10 md:w-1/2 bg-[#0b001a]/40 border-l border-[#8A2BE2]/20">
                        {sumitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-10"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                                    <CheckCircle className="text-green-400" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                                <p className="text-gray-400">Our team will contact you shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <h3 className="text-2xl font-bold mb-2">Start Your Growth Journey</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <input required type="text" placeholder="Your Name" className="w-full bg-[#1A012B]/60 border border-[#8A2BE2]/30 rounded-xl px-4 py-3 outline-none focus:border-[#E0B0FF] transition-colors" />
                                    <input required type="email" placeholder="Email Address" className="w-full bg-[#1A012B]/60 border border-[#8A2BE2]/30 rounded-xl px-4 py-3 outline-none focus:border-[#E0B0FF] transition-colors" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <input required type="tel" placeholder="Phone Number" className="w-full bg-[#1A012B]/60 border border-[#8A2BE2]/30 rounded-xl px-4 py-3 outline-none focus:border-[#E0B0FF] transition-colors" />
                                    <input required type="text" placeholder="Business Type" className="w-full bg-[#1A012B]/60 border border-[#8A2BE2]/30 rounded-xl px-4 py-3 outline-none focus:border-[#E0B0FF] transition-colors" />
                                </div>

                                <textarea required rows={4} placeholder="How can we help you grow?" className="w-full bg-[#1A012B]/60 border border-[#8A2BE2]/30 rounded-xl px-4 py-3 outline-none focus:border-[#E0B0FF] transition-colors resize-none"></textarea>

                                <button type="submit" className="w-full gradient-bg mt-2 py-4 rounded-xl font-bold text-lg hover:glow transition-all flex items-center justify-center gap-2 group">
                                    Submit Request <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
