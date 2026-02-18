import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Users, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#FFF6F1" }}
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
            About the Platform
          </span>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
            A Safer, Smarter Mahakumbh Experience
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our platform is built to manage massive pilgrim gatherings at
            Mahakumbh ghats by combining technology, safety, and spirituality —
            ensuring a smooth, secure, and divine experience for everyone.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 bg-gradient-to-br ${item.color} text-white shadow`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Gradients */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-52 h-52 bg-pink-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}

const aboutCards = [
  {
    title: "Crowd Safety First",
    desc: "Real-time monitoring, alerts, and heatmaps help prevent overcrowding and ensure pilgrim safety.",
    icon: <ShieldCheck className="w-7 h-7" />,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Smart Ghat Access",
    desc: "Digital ticket booking and slot-based ghat access reduce chaos and improve crowd flow.",
    icon: <MapPin className="w-7 h-7" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Pilgrim-Centric Design",
    desc: "Built for elderly, families, and first-time visitors with simple UI and multilingual support.",
    icon: <Users className="w-7 h-7" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Seva Through Technology",
    desc: "Our mission is to support administration, volunteers, and pilgrims through digital seva.",
    icon: <HeartHandshake className="w-7 h-7" />,
    color: "from-purple-500 to-pink-500",
  },
];
