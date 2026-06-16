import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-24 min-h-screen bg-surface">
      <section className="py-20 px-8">
        <div className="max-w-7xl auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-primary mb-6">Get In Touch</h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Have questions about your immigration journey? Our team is here to provide the answers you need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div className="grid gap-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary text-white rounded-2xl shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Our Office</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      251 Bank Street, Suite 405<br/>
                      Ottawa, ON K2P 1X3<br/>
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary text-white rounded-2xl shadow-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                    <p className="text-on-surface-variant">+1 (613) 266-5633</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary text-white rounded-2xl shadow-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                    <p className="text-on-surface-variant">enadr@sympatico.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary text-white rounded-2xl shadow-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Hours</h3>
                    <p className="text-on-surface-variant">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder - Now a Clickable Link */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=251+Bank+Street+Ottawa+ON+K2P+1X3+Canada"
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-video rounded-2xl overflow-hidden shadow-inner bg-surface-container relative hover:opacity-90 transition-opacity"
              >
                <img 
                  src="https://picsum.photos/seed/map-ottawa/800/450" 
                  alt="Map of Ottawa Office" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-2">
                    <MapPin className="text-secondary" />
                    <span className="font-bold text-primary">View on Google Maps</span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container-lowest p-10 rounded-3xl shadow-xl border border-outline-variant/10"
            >
              <h2 className="text-3xl font-headline font-bold text-primary mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Subject</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all">
                    <option>General Inquiry</option>
                    <option>Express Entry</option>
                    <option>Family Sponsorship</option>
                    <option>Business/Corporate</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                  <textarea rows={5} className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-xl font-headline font-bold text-lg shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-3">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
