import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, Globe, Newspaper, Mic2, Verified } from 'lucide-react';

export default function Resume() {
  return (
    <main className="pt-24 min-h-screen bg-surface">
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Sidebar Info */}
            <div className="md:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-32"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                  <img 
                    src="eliePortrait.webp" 
                    alt="Elie Nasrallah" 
                    className="w-full grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h1 className="text-3xl font-headline font-black text-primary mb-2">Elie Nasrallah, B.A. (Hons)</h1>
                <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Principal Consultant</p>
                
                <div className="space-y-4 border-t border-outline-variant/20 pt-6">
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <Verified className="w-5 h-5 text-primary" />
                    <span>CICC Member #R416303</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>Based in Ottawa, Canada</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <Award className="w-5 h-5 text-primary" />
                    <span>Top 25 People in the Capital</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-16"
              >
                {/* Bio */}
                <section>
                  <h2 className="text-3xl font-headline font-bold text-primary mb-6">Professional Profile</h2>
                  <div className="prose prose-lg text-on-surface-variant leading-relaxed">
                    <p className="mb-4">
                      Elie Nasrallah is a prominent Regulated Canadian Immigration Consultant (RCIC) with over 25 years of experience in the field. He is widely recognized for his expertise in handling complex immigration cases and his advocacy for fair and efficient immigration policies.
                    </p>
                    <p>
                      Beyond his consultancy work, Elie is a prolific writer and commentator on immigration issues, frequently contributing to national newspapers and appearing on television and radio programs to provide expert analysis.
                    </p>
                  </div>
                </section>

                {/* Experience */}
                <section>
                  <h2 className="text-3xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                    <Award className="w-8 h-8 text-secondary" /> Experience & Recognition
                  </h2>
                  <div className="space-y-8">
                    {[
                      { title: "Principal Consultant", company: "VisaVisa / Legal Advocacy Plus", period: "1997 - Present", desc: "Leading a premier immigration consultancy in Ottawa, specializing in high-stakes applications and legal advocacy." },
                      { title: "Top 25 People in the Capital", company: "Ottawa Life Magazine", period: "Honoree", desc: "Recognized for significant contributions to the social and professional fabric of Canada's capital city." },
                      { title: "Consumer Choice Award", company: "Immigration Consulting", period: "Multi-year Winner", desc: "Voted as the top immigration consultancy in Ottawa by consumers for multiple consecutive years." }
                    ].map((exp, i) => (
                      <div key={i} className="relative pl-8 border-l-2 border-outline-variant/30">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
                        <div className="mb-1 flex justify-between items-start">
                          <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                          <span className="text-sm font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{exp.period}</span>
                        </div>
                        <p className="text-secondary font-medium mb-2">{exp.company}</p>
                        <p className="text-on-surface-variant">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h2 className="text-3xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-secondary" /> Education
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10">
                      <h3 className="text-xl font-bold text-primary mb-2">B.A. (Hons)</h3>
                      <p className="text-on-surface-variant">Carleton University</p>
                    </div>
                    <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10">
                      <h3 className="text-xl font-bold text-primary mb-2">Immigration Practitioner Program</h3>
                      <p className="text-on-surface-variant">Seneca College of Applied Arts and Technology</p>
                    </div>
                  </div>
                </section>

                {/* Media & Publications */}
                <section>
                  <h2 className="text-3xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                    <Mic2 className="w-8 h-8 text-secondary" /> Media & Publications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-surface-container-low rounded-xl">
                      <Newspaper className="w-6 h-6 text-primary mb-4" />
                      <h3 className="font-bold mb-2">Author & Columnist</h3>
                      <p className="text-sm text-on-surface-variant">Frequent contributor to Canada's national newspapers including The Globe and Mail, Toronto Star, and Ottawa Citizen, offering expert analysis on immigration policy and social integration.</p>
                    </div>
                    <div className="p-6 bg-surface-container-low rounded-xl">
                      <BookOpen className="w-6 h-6 text-primary mb-4" />
                      <h3 className="font-bold mb-2">Gates and Walls (2023)</h3>
                      <p className="text-sm text-on-surface-variant mb-4">"Gates and Walls: Stories of Migration in Modern Times" explores the intellectual and human complexities of resettlement.</p>
                      <a href="http://www.eliemnasrallah.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-secondary hover:underline">Author Site: eliemnasrallah.com</a>
                    </div>
                  </div>
                </section>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
