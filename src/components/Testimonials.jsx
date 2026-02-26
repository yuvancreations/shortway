import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CEO, TechFlow SaaS",
        content: "Short-Way didn't just build us a website; they built an engine that doubled our lead generation in 3 months. Their 3X growth guarantee isn't a gimmick.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
        name: "David Chen",
        role: "Founder, Peak Marketing",
        content: "The speed at which they execute is mind-blowing. Our app went from idea to launch 40% faster than other agencies promised.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "Emma Watson",
        role: "Director of Brand, Luma",
        content: "They redesigned our entire digital identity and created converting funnels that broke all our previous sales records. Highly recommended.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=5"
    }
]

export default function Testimonials() {
    const [activeIdx, setActiveIdx] = useState(0)

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-4">
                        95% Client <span className="gradient-text glow">Satisfaction</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here is what leading brands have to say about partnering with Short-Way.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main Card */}
                    <motion.div
                        key={activeIdx}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="glass rounded-3xl p-8 md:p-12 relative z-10 border border-[#8A2BE2]/30 shadow-2xl"
                    >
                        <Quote size={48} className="text-[#8A2BE2]/20 absolute top-8 right-8" />

                        <div className="flex gap-1 mb-6 text-yellow-400">
                            {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" />
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 italic text-gray-200">
                            "{testimonials[activeIdx].content}"
                        </p>

                        <div className="flex items-center gap-4">
                            <img
                                src={testimonials[activeIdx].avatar}
                                alt={testimonials[activeIdx].name}
                                className="w-14 h-14 rounded-full border-2 border-[#8A2BE2] shadow-[0_0_15px_rgba(138,43,226,0.5)]"
                            />
                            <div>
                                <h4 className="font-bold text-lg">{testimonials[activeIdx].name}</h4>
                                <p className="text-sm text-[#E0B0FF]">{testimonials[activeIdx].role}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIdx ? 'bg-[#E0B0FF] w-8' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
