import { motion } from 'motion/react';
import { Calendar, Clock, User, ShieldCheck, Info, Mail } from 'lucide-react';

export default function BookAppointment() {
  return (
    <main className="pt-24 min-h-screen bg-surface">
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-headline font-extrabold text-primary mb-6">Book Your Assessment</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Begin your journey with a direct, one-on-one consultation with Elie Nasrallah, Principal Consultant.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col items-center text-center">
              <div className="p-3 bg-surface-container rounded-full text-primary mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary">45 Minutes</h3>
              <p className="text-sm text-on-surface-variant">In-depth strategy session</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col items-center text-center">
              <div className="p-3 bg-surface-container rounded-full text-primary mb-4">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary">Direct Access</h3>
              <p className="text-sm text-on-surface-variant">Consult with the Principal</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col items-center text-center">
              <div className="p-3 bg-surface-container rounded-full text-primary mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary">Confidential</h3>
              <p className="text-sm text-on-surface-variant">Secure & private discussion</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/10"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 text-secondary mb-8 bg-secondary/5 p-4 rounded-xl">
                <Info className="w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">Initial assessments are subject to a professional fee, which is credited in full toward your future application costs.</p>
              </div>

              <div className="space-y-8">
                {/* Step 1: Select Consultation Type */}
                <div>
                  <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
                    Select Consultation Type
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'General Immigration Strategy',
                      'Federal High-Skilled Class Assessment',
                      'Business / LMIA Strategy',
                      'Family Sponsorship Review'
                    ].map((type) => (
                      <button key={type} className="p-4 text-left rounded-xl border-2 border-surface-container hover:border-primary hover:bg-surface-container transition-all group">
                        <p className="font-bold text-primary group-hover:text-primary">{type}</p>
                        <p className="text-xs text-on-surface-variant">45 min • Video Call</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Date & Time */}
                <div>
                  <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
                    Choose Date & Time
                  </h2>
                  <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col items-center justify-center text-on-surface-variant">
                    <Calendar className="w-12 h-12 mb-4 opacity-20" />
                    <p className="font-medium">Calendar widget would load here</p>
                    <p className="text-sm">Available slots starting from next Monday</p>
                  </div>
                </div>

                {/* Step 3: Payment via E-Transfer */}
                <div>
                  <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">3</span>
                    Payment
                  </h2>
                  <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-primary text-white rounded-xl shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-lg mb-1">Payment by Interac E-Transfer</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          All consultation fees are payable via Interac E-Transfer. Please send your payment to the following address once your appointment time is confirmed.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-outline-variant/10 mb-6">
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">E-Transfer Recipient</p>
                      <p className="text-2xl font-headline font-bold text-primary">enadr@sympatico.ca</p>
                      <p className="text-sm text-on-surface-variant mt-2">Legal Advocacy Plus — VisaVisa Immigration Services</p>
                    </div>

                    <ul className="space-y-3 text-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        Include your full name and consultation date in the message field of your transfer.
                      </li>
                      <li className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        Payment must be received prior to your scheduled appointment time.
                      </li>
                      <li className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        Your consultation fee will be credited in full toward any future application retainer.
                      </li>
                    </ul>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-xl font-headline font-bold text-xl shadow-lg hover:bg-primary-container transition-all">
                  Confirm Appointment Request
                </button>

                <p className="text-center text-xs text-on-surface-variant">
                  By submitting this request, you acknowledge that appointment confirmation is subject to availability and receipt of payment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
