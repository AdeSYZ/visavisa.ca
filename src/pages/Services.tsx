import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Globe, Users, Briefcase, GraduationCap, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Federal High-Skilled Class",
      icon: <Globe className="w-8 h-8" />,
      description: "Strategic guidance for Canada's incoming Federal High-Skilled Class — the unified programme that will replace the former Express Entry streams by 2026–2027. We assess your profile against the new criteria and build a submission strategy aligned with Canada's evolving labour market priorities.",
      items: [
        "Federal High-Skilled Class (Unified Stream — replaces FSWP, CEC & FSTP)",
        "Category-Based Selection (STEM, Healthcare, Skilled Trades)",
        "Provincial Nominee Programmes (PNP)",
        "Atlantic Immigration Programme"
      ]
    },
    {
      title: "Family Class",
      icon: <Users className="w-8 h-8" />,
      description: "Reuniting families through robust and well-prepared sponsorship applications.",
      items: [
        "Spousal & Common-law Sponsorship",
        "Parent and Grandparent Sponsorship",
        "Dependent Child Sponsorship",
        "Super Visas"
      ]
    },
    {
      title: "Business & Corporate",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Strategic immigration solutions tailored for businesses, investors, and entrepreneurs.",
      items: [
        "Labour Market Impact Assessments (LMIA)",
        "Intra-Company Transfers",
        "Start-up Visa Programme",
        "Self-Employed Persons Programme"
      ]
    },
    {
      title: "Temporary Residence",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Securing your right to study, work, or visit Canada through accurate and timely applications.",
      items: [
        "Study Permits",
        "Work Permits (Open & Closed)",
        "Visitor Visas (Temporary Resident Visa)",
        "Electronic Travel Authorisations (eTA)"
      ]
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
              Comprehensive immigration solutions tailored to your unique profile. We provide legal clarity and strategic direction in an increasingly complex regulatory landscape.
            </p>
          </motion.div>

          {/* Federal High-Skilled Class Notice Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-12 bg-surface-container border-l-4 border-secondary p-6 rounded-xl"
          >
            <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Important Policy Update — 2026/2027</p>
            <p className="text-on-surface-variant leading-relaxed">
              The Government of Canada, through Immigration, Refugees and Citizenship Canada (IRCC), has proposed replacing the three existing Express Entry streams — the Federal Skilled Worker Programme (FSWP), the Canadian Experience Class (CEC), and the Federal Skilled Trades Programme (FSTP) — with a single, unified <span className="font-bold text-primary">Federal High-Skilled Class</span>. This new framework consolidates eligibility requirements into one programme, placing emphasis on high-wage occupations and targeted labour market needs, while preserving the competitive Comprehensive Ranking System (CRS) pool. Legal Advocacy Plus is actively monitoring these regulatory developments to ensure our clients receive current, accurate, and strategic counsel.
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
                <h2 className="text-3xl font-headline font-bold mb-6">Specialised Legal Advocacy</h2>
                <p className="text-white/80 mb-8">
                  Beyond standard applications, we provide high-level advocacy for complex and sensitive cases, including appeals and humanitarian and compassionate considerations.
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
                <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-lg font-headline font-bold hover:bg-surface-container transition-colors">
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
