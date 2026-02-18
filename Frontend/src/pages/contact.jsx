import { motion } from "framer-motion";
import { Phone, Mail, MapPin, LifeBuoy } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#FFF4EE" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white shadow text-sm font-semibold text-orange-600">
            Contact & Support
          </span>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
            We’re Here to Help You
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you need assistance with ticket booking, ghat access, lost &
            found, or emergency support — reach out anytime.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <InfoCard
              icon={<Phone />}
              title="24×7 Helpline"
              desc="+91 1800-XXX-XXXX"
              color="from-green-500 to-emerald-500"
            />
            <InfoCard
              icon={<Mail />}
              title="Email Support"
              desc="support@mahakumbh.gov.in"
              color="from-blue-500 to-indigo-500"
            />
            <InfoCard
              icon={<MapPin />}
              title="Control Room"
              desc="Integrated Command & Control Center, Prayagraj"
              color="from-orange-500 to-red-500"
            />
            <InfoCard
              icon={<LifeBuoy />}
              title="Emergency Assistance"
              desc="Medical SOS & Security Support available instantly"
              color="from-red-600 to-red-700"
              emergency
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-white"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <Input label="Full Name" placeholder="Enter your name" />
              <Input label="Mobile Number" placeholder="+91 XXXXX XXXXX" />
              <Input label="Email Address" placeholder="you@example.com" />
              <Textarea label="Message" placeholder="Describe your issue or query..." />

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg transition"
              >
                Submit Request
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              For emergencies, please use the Medical SOS feature.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 left-10 w-52 h-52 bg-red-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}

/* ---------- Components ---------- */

function InfoCard({ icon, title, desc, color, emergency }) {
  return (
    <div
      className={`flex items-start gap-5 p-6 rounded-2xl bg-white shadow border border-gray-100 ${
        emergency ? "ring-2 ring-red-500" : ""
      }`}
    >
      <div
        className={`p-3 rounded-xl bg-gradient-to-br ${color} text-white shadow`}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        rows="4"
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
      />
    </div>
  );
}
