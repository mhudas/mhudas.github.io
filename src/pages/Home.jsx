import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import InfoSection from '../components/InfoSection';
import SelectedWorks from '../components/SelectedWorks';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="w-full">
            <div id="hero">
                <Hero />
            </div>
            <Marquee />
            <div id="about">
                <InfoSection />
            </div>
            <div id="work">
                <SelectedWorks />
            </div>
            <div id="contact">
                <Footer />
            </div>
        </main>
    );
}
