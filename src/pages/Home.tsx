import { motion } from 'motion/react';
import { ArrowRight, Rocket, School, Users, Building2, Verified, Award, Gavel, Handshake, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tight mb-6">
              Expert Immigration <br/><span className="text-secondary italic font-normal">Guidance & Support</span> Since 1999
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              Led by <span className="font-bold text-primary">Elie Nasrallah, B.A. (Hons)</span>, a widely respected CICC consultant, we've spent decades turning Canadian dreams into legal realities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-headline font-bold flex items-center gap-2 group shadow-xl hover:bg-primary-container transition-all">
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="border border-outline-variant text-primary px-8 py-4 rounded-lg font-headline font-bold hover:bg-surface-container-low transition-colors">
                View Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="palamFountain.webp" 
                alt="Canadian landscape heritage" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-lg shadow-xl z-20 border border-outline-variant/10 max-w-xs">
              <p className="text-secondary font-headline font-bold text-sm tracking-widest uppercase mb-2">Heritage</p>
              <p className="text-primary font-headline text-lg font-bold leading-tight">25+ Years of Trust in the National Capital</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credential Strip */}
      <section className="bg-surface-container-high py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="flex items-center gap-2 font-headline font-black text-xl text-primary">
              <Verified className="w-6 h-6" /> CICC MEMBER
            </div>
            <div className="flex items-center gap-2 font-headline font-black text-xl text-primary">
              <Award className="w-6 h-6" /> TOP 25 OTTAWA
            </div>
            <div className="flex items-center gap-2 font-headline font-black text-xl text-primary">
              <Gavel className="w-6 h-6" /> LEGAL EXCELLENCE
            </div>
            <div className="flex items-center gap-2 font-headline font-black text-xl text-primary">
              <Handshake className="w-6 h-6" /> ACCREDITED
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">Core Pathways</h2>
          <div className="h-1 w-24 bg-secondary"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl shadow-md flex flex-col justify-between border border-outline-variant/10 group hover:bg-primary transition-all duration-500">
            <div>
              <Rocket className="w-12 h-12 text-secondary mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-3xl font-headline font-bold text-primary mb-4 group-hover:text-white">Express Entry System</h3>
              <p className="text-on-surface-variant group-hover:text-white/80 max-w-md">Mastering the new Category-Based Selection system to ensure your profile stands out in the selection pool.</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 group-hover:text-white mt-8">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:col-span-4 bg-surface-container-low p-10 rounded-xl flex flex-col justify-between border border-outline-variant/10 group hover:shadow-xl transition-all">
            <div>
              <School className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Study & Work</h3>
              <p className="text-on-surface-variant">Seamless transition from international student to permanent residency.</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 mt-8">
              Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:col-span-4 bg-surface-container-low p-10 rounded-xl flex flex-col justify-between border border-outline-variant/10">
            <div>
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Family Sponsorship</h3>
              <p className="text-on-surface-variant">Reuniting loved ones through meticulous application preparation.</p>
            </div>
          </div>

          <div className="md:col-span-8 bg-surface-container p-10 rounded-xl flex items-center justify-between border border-outline-variant/10 relative overflow-hidden group">
            <div className="z-10">
              <h3 className="text-3xl font-headline font-bold text-primary mb-4">Business & LMIA</h3>
              <p className="text-on-surface-variant max-w-xs">Facilitating global talent for Canadian enterprises.</p>
            </div>
            <Building2 className="absolute right-0 top-0 w-48 h-48 text-primary/5 -mr-12 -mt-12" />
          </div>
        </div>
      </section>

      {/* The Advocate's Desk */}
      <section className="bg-primary text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="border-l-4 border-secondary pl-12">
              <h2 className="text-5xl font-headline font-extrabold mb-8 tracking-tight italic">The Expert's Desk</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                Elie Nasrallah is not just a consultant; he is a voice in the national conversation on immigration. As a Full Member of the <span className="text-white font-bold">CICC</span> and recognized among the "Top 25 People in the Capital," his expertise is sought by media and government alike.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Verified className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-bold text-lg">CICC Membership #R416303</p>
                    <p className="text-white/60 text-sm">Regulated Canadian Immigration Consultant in good standing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-bold text-lg">Best Immigration Consultants Award</p>
                    <p className="text-white/60 text-sm">Multi-year recipient of Ottawa's consumer choice recognition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="asymmetric-overlap">
            <div className="bg-surface-container-lowest p-2 rounded-lg shadow-2xl rotate-3">
              <img 
                src="/eliePortrait.webp" 
                alt="Elie Nasrallah" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white text-primary">
                <p className="font-headline font-black text-2xl">Elie Nasrallah, B.A. (Hons)</p>
                <p className="text-secondary font-bold text-sm tracking-widest uppercase">Principal Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Book Section */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 -rotate-6 rounded-lg group-hover:rotate-0 transition-transform"></div>
              <img 
                src="/gates&Walls.webp" 
                alt="Gates and Walls Book Cover" 
                className="relative z-10 w-72 shadow-2xl rounded-sm border border-outline-variant/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <div>
            <h2 className="text-primary font-headline font-black text-sm tracking-[0.2em] uppercase mb-4">Latest Publication</h2>
            <h3 className="text-4xl font-headline font-bold text-primary mb-6">Gates and Walls: Stories of Migration in Modern Times</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              In his latest work, Elie Nasrallah explores the human dimension of the immigrant experience. Through compelling narratives and intellectual rigor, he examines the barriers and opportunities facing those searching for a new home.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href="https://burnstownpublishing.com/product/gates-walls-stories-of-migration-and-modern-times/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-lg font-headline font-bold hover:bg-primary-container transition-all"
              >
                Learn More & Purchase
              </a>
              <a 
                href="http://www.eliemnasrallah.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary font-headline font-extrabold hover:underline"
              >
                Author Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">Voices of Success</h2>
            <p className="text-on-surface-variant font-medium">Stories from the hundreds of families we've guided home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Ahmed R.", stream: "Skilled Worker Stream", text: "The attention to detail and personal care Elie provided was exceptional. Our PR process was seamless despite complex circumstances." },
              { name: "Elena S.", stream: "Family Sponsorship", text: "VisaVisa is the gold standard. They don't just fill forms; they build a strategy. I am forever grateful for their honesty and results." },
              { name: "Marcus K.", stream: "Entrepreneur Pathway", text: "Transparent, authoritative, and efficient. We recommend VisaVisa to anyone serious about settling in Canada." }
            ].map((t, i) => (
              <div key={i} className={`bg-surface-container-lowest p-10 rounded-xl shadow-md border border-outline-variant/5 ${i === 1 ? 'mt-8 md:mt-16' : ''}`}>
                <div className="flex gap-1 text-secondary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-on-surface mb-8 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden">
                    <img src={`https://picsum.photos/seed/client${i}/100/100`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-tighter">{t.stream}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl p-8 md:p-16 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute inset-0 opacity-10">
            <img src="https://picsum.photos/seed/map/1920/1080" alt="Canada Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-8 leading-tight">Ready to Begin Your Canadian Chapter?</h2>
            <p className="text-white/70 text-base md:text-lg mb-12">Schedule a direct assessment with Elie Nasrallah and receive a clear, honest roadmap for your immigration goals.</p>
            <Link to="/contact" className="inline-block bg-secondary hover:bg-red-800 text-white px-6 py-4 md:px-12 md:py-5 rounded-lg font-headline font-extrabold text-base md:text-xl transition-all shadow-2xl">
              Book Your Assessment Now
            </Link>
            <p className="mt-8 text-white/40 text-xs font-medium uppercase tracking-widest leading-relaxed">Initial consultations are confidential and comprehensive</p>
          </div>
        </div>
      </section>
    </main>
  );
}
