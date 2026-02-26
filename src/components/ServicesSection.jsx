import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Code2, Smartphone, Monitor, LineChart, Megaphone, Palette, ArrowRight } from 'lucide-react'

const services = [
    {
        icon: <Monitor size={32} />,
        title: "Website Development",
        desc: "Lightning-fast, SEO-optimized, and conversion-focused websites."
    },
    {
        icon: <Code2 size={32} />,
        title: "Web App Development",
        desc: "Complex SaaS platforms and sophisticated web applications."
    },
    {
        icon: <Smartphone size={32} />,
        title: "App Development",
        desc: "Native and cross-platform mobile apps for iOS and Android."
    },
    {
        icon: <LineChart size={32} />,
        title: "Performance Marketing",
        desc: "Data-driven campaigns that maximize your return on ad spend."
    },
    {
        icon: <Megaphone size={32} />,
        title: "Ads Management",
        desc: "Expert Meta Ads & Google Ads management to scale reach."
    },
    {
        icon: <Palette size={32} />,
        title: "Logo & Branding",
        desc: "Memorable visual identities that resonate with your audience."
    }
]

// 3D Tilt Card Component
function TiltCard({ service, idx }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useTransform(x, [-0.5, 0.5], [10, -10])
    const mouseYSpring = useTransform(y, [-0.5, 0.5], [-10, 10])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: mouseYSpring,
                rotateY: mouseXSpring,
                transformStyle: "preserve-3d"
            }}
            className="glass p-8 rounded-2xl border border-[#6A0DAD]/30 hover:border-[#8A2BE2] transition-colors group cursor-pointer relative"
        >
            <div style={{ transform: "translateZ(30px)" }}>
                <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{service.desc}</p>

                <div className="flex items-center gap-2 text-[#E0B0FF] font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Learn More <ArrowRight size={16} />
                </div>
            </div>

            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6A0DAD]/0 to-[#6A0DAD]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </motion.div>
    )
}

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6">
                        Everything You Need To <span className="gradient-text glow">Dominate</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        From line of code to ad campaign, we handle the full spectrum of digital scaling. Our services are designed to work together for maximum impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
                    {services.map((service, idx) => (
                        <TiltCard key={idx} service={service} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}
