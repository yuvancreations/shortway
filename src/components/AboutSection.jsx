import { motion } from 'framer-motion'
import { Target, Zap, Trophy, ArrowRight } from 'lucide-react'

const features = [
    {
        icon: <Zap size={24} className="text-[#E0B0FF]" />,
        title: "Fast Execution",
        description: "We don't just plan. We execute swiftly to get your product to market faster."
    },
    {
        icon: <Target size={24} className="text-[#E0B0FF]" />,
        title: "Strategic Growth",
        description: "Every pixel and line of code is optimized for conversion and ROI."
    },
    {
        icon: <Trophy size={24} className="text-[#E0B0FF]" />,
        title: "Performance Driven",
        description: "We measure success by your metrics: traffic, leads, and revenue."
    }
]

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6">
                            Why We Are The <br />
                            <span className="gradient-text glow">Fastest Path</span> To Growth
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            At Short-Way, we eliminate the red tape of traditional agencies. We combine cutting-edge tech with performance marketing to turn your vision into a measurable reality, faster than ever before.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 border border-[#8A2BE2]/30 group-hover:bg-[#8A2BE2]/20 transition-all">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 flex items-center gap-2 text-[#E0B0FF] font-semibold hover:gap-4 transition-all hover:text-white">
                            Learn more about our approach <ArrowRight size={20} />
                        </button>
                    </motion.div>

                    {/* Right Content - Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="glass rounded-3xl p-8 border border-[#6A0DAD]/40 relative z-10 aspect-square flex flex-col justify-center items-center text-center glow">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#6A0DAD]/20 to-transparent rounded-3xl"></div>

                            <div className="relative z-20 space-y-6 max-w-xs">
                                <div className="w-20 h-20 mx-auto rounded-2xl gradient-bg flex items-center justify-center -rotate-6 shadow-[0_0_30px_rgba(138,43,226,0.5)]">
                                    <Zap size={40} className="text-white" />
                                </div>
                                <h3 className="font-outfit text-2xl font-bold">The Short-Way Method</h3>
                                <p className="text-gray-300 text-sm">
                                    We bridge the gap between complex technology and rapid business growth, delivering SaaS-level products for your brand.
                                </p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full border border-[#8A2BE2]/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full border border-[#b28bff]/30 border-dashed animate-[spin_8s_linear_infinite_reverse]"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
