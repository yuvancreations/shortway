import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center, MeshDistortMaterial, Environment, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

function FloatingObjects() {
    const meshRef = useRef()

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
            meshRef.current.rotation.y += 0.01
        }
    })

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-2, 1, -2]}>
                    <octahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial color="#8A2BE2" distort={0.5} speed={2} wireframe />
                </mesh>
            </Float>

            <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[2, -1, -3]}>
                    <torusGeometry args={[0.8, 0.2, 16, 100]} />
                    <MeshDistortMaterial color="#E0B0FF" distort={0.2} speed={3} roughness={0.1} />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                <mesh position={[1.5, 2, -1]}>
                    <sphereGeometry args={[0.6, 64, 64]} />
                    <meshStandardMaterial color="#6A0DAD" roughness={0.2} metalness={0.8} />
                </mesh>
            </Float>
        </group>
    )
}

export default function Hero3D() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none md:pointer-events-auto">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={1.5} />
                    <pointLight position={[-10, -10, -10]} color="#6A0DAD" intensity={2} />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <FloatingObjects />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-block px-4 py-2 rounded-full glass border border-[#8A2BE2]/30 w-fit">
                        <span className="text-sm font-semibold tracking-wider text-[#d8bcff]">
                            🚀 THE FASTEST PATH TO BUSINESS GROWTH
                        </span>
                    </div>

                    <h1 className="font-outfit text-5xl md:text-7xl font-bold leading-tight">
                        Your <span className="gradient-text glow">Short Way</span> <br />
                        To Digital Success
                    </h1>

                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed mix-blend-screen bg-black/20 p-2 md:p-0 rounded-lg backdrop-blur-sm md:backdrop-blur-none md:bg-transparent">
                        Web Development, Performance Marketing & Brand Design. We build high-converting digital experiences that scale.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <button className="gradient-bg px-8 py-4 rounded-full font-bold text-lg hover:glow transition-all hover:-translate-y-1">
                            Start Your Growth Journey
                        </button>
                        <button className="px-8 py-4 rounded-full font-bold text-lg border border-[#8A2BE2] hover:bg-[#8A2BE2]/10 transition-all">
                            View Our Work
                        </button>
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1A012B] bg-[#300060] flex items-center justify-center text-xs">
                                    {i}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">
                            <strong className="text-white text-base">200+</strong> Happy Clients
                        </p>
                    </div>
                </motion.div>

                {/* Right side spacer for 3D elements */}
                <div className="hidden md:block h-full w-full"></div>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6A0DAD] rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8A2BE2] rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </section>
    )
}
