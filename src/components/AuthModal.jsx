import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, LogIn, Chrome } from 'lucide-react'

export default function AuthModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true)

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                ></motion.div>

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="glass border border-[#8A2BE2]/40 rounded-3xl p-8 w-full max-w-md relative z-10 shadow-[0_0_50px_rgba(106,13,173,0.3)] bg-[#1A012B]"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="text-center mb-8">
                        <img src="/logo.png" alt="Shortway Logo" className="w-12 h-12 mx-auto mb-4 object-contain drop-shadow-[0_0_15px_rgba(138,43,226,0.6)]" />
                        <h2 className="text-3xl font-bold font-outfit text-white">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-gray-400 text-sm mt-2">
                            {isLogin ? 'Log in to access your dashboard' : 'Join Short-Way to accelerate your growth'}
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                        {!isLogin && (
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="w-full bg-[#0b001a]/50 border border-[#8A2BE2]/30 rounded-xl px-4 py-3 pl-11 outline-none focus:border-[#E0B0FF] transition-colors text-white"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full bg-[#0b001a]/50 border border-[#8A2BE2]/30 rounded-xl px-4 py-3 pl-11 outline-none focus:border-[#E0B0FF] transition-colors text-white"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full bg-[#0b001a]/50 border border-[#8A2BE2]/30 rounded-xl px-4 py-3 pl-11 outline-none focus:border-[#E0B0FF] transition-colors text-white"
                            />
                        </div>

                        {isLogin && (
                            <div className="flex justify-between items-center text-sm px-1">
                                <label className="flex items-center gap-2 cursor-pointer text-gray-300">
                                    <input type="checkbox" className="accent-[#8A2BE2]" />
                                    Remember me
                                </label>
                                <a href="#" className="text-[#E0B0FF] hover:underline">Forgot Password?</a>
                            </div>
                        )}

                        <button type="submit" className="w-full gradient-bg mt-6 py-3.5 rounded-xl font-bold text-lg hover:glow transition-all flex items-center justify-center gap-2">
                            {isLogin ? 'Log In' : 'Sign Up'} <LogIn size={18} />
                        </button>
                    </form>

                    <div className="mt-6 flex items-center gap-4 text-gray-500 text-sm before:h-px before:flex-1 before:bg-gray-800 after:h-px after:flex-1 after:bg-gray-800">
                        OR
                    </div>

                    <button className="w-full mt-6 py-3.5 rounded-xl text-white font-medium border border-gray-700 hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                        <Chrome size={20} />
                        Continue with Google
                    </button>

                    <p className="text-center text-gray-400 text-sm mt-8">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-[#E0B0FF] font-semibold hover:underline"
                        >
                            {isLogin ? 'Sign up' : 'Log in'}
                        </button>
                    </p>

                </motion.div>
            </div>
        </AnimatePresence>
    )
}
