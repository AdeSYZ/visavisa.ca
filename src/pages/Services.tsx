import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Globe, Users, Briefcase, GraduationCap, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Economic Immigration",
      icon: <Globe className="w-8 h-8" />,
      description: "Strategic guidance for the Express Entry System and its new Category-Based Selection focus.",
      items: ["Express Entry System (Strategic Profiling)", "Category-Based Selection (STEM, Healthcare, Trades)", "Provincial Nominee Programs (PNP)", "Atlantic Immigration Program"]
    },
    {
      title: "Family Class",
      icon: <Users className="w-8 h-8" />,
      description: "Reuniting families through robust sponsorship applications.",
      items: ["Spousal & Common-law Sponsorship", "Parent and Grandparent Sponsorship", "Dependent Child Sponsorship", "Super Visas"]
    },
    {
      title: "Business & Corporate",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Strategic immigration solutions for businesses and entrepreneurs.",
      items: ["Labour Market Impact Assessments (LMIA)", "Intra-Company Transfers", "Start-up Visa Program", "Self-Employed Persons Program"]
    },
    {
      title: "Temporary Residence",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Securing your right to study, work, or visit Canada.",
      items: ["Study Permits", "Work Permits (Open & Closed)", "Visitor Visas (TRV)", "Electronic Travel Authorizations (eTA)"]
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-surface">
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Comprehensive immigration solutions tailored to your unique profile. We provide legal clarity in a complex regulatory landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-surface-container rounded-xl text-primary">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-primary">{service.title}</h2>
                </div>
                <p className="text-on-surface-variant mb-8">{service.description}</p>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-on-surface">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Specialized Services */}
          <div className="mt-20 bg-primary text-white p-12 rounded-2xl relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6">Specialized Legal Advocacy</h2>
                <p className="text-white/80 mb-8">
                  Beyond standard applications, we provide high-level advocacy for complex cases, including appeals and humanitarian considerations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                    <ShieldCheck className="w-4 h-4" /> Inadmissibility Issues
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                    <ShieldCheck className="w-4 h-4" /> Procedural Fairness Letters
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                    <ShieldCheck className="w-4 h-4" /> Refugee Claims
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link to="/book" className="bg-white text-primary px-10 py-4 rounded-lg font-headline font-bold hover:bg-surface-container transition-colors">
                  Discuss Your Case
                </Link>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-5">
              <Gavel className="w-64 h-64" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
