import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Services } from '@/components/Services';
import { Tools } from '@/components/Tools';
import { WhyHireMe } from '@/components/WhyHireMe';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20 flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Tools />
      <WhyHireMe />
      <Contact />
      <Footer />
    </main>
  );
}
