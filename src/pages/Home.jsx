import Navbar from '../components/Navbar'
import Hero3D from '../components/Hero3D'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero3D />
            <AboutSection />
            <ServicesSection />
            <StatsSection />
            <Testimonials />
            <CTASection />
            <Footer />
        </div>
    )
}
