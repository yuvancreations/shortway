import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
    { label: "Projects Completed", value: 200, suffix: "+" },
    { label: "Happy Clients", value: 150, suffix: "+" },
    { label: "Client Satisfaction", value: 95, suffix: "%" },
    { label: "Growth Guarantee", value: 3, suffix: "X" }
]

function AnimatedCounter({ value, suffix }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            let start = 0
            const end = value
            const duration = 2000 // ms
            const increment = end / (duration / 16) // 60fps

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.ceil(start))
                }
            }, 16)

            return () => clearInterval(timer)
        }
    }, [isInView, value])

    return (
        <span ref={ref} className="font-outfit text-5xl md:text-6xl font-bold gradient-text drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">
            {count}{suffix}
        </span>
    )
}

export default function StatsSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0b001a] via-[#1A012B] to-[#0b001a]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col items-center justify-center gap-4"
                        >
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#6A0DAD] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
        </section>
    )
}
