import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/HeroSection.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Center Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Mahakumbh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Book tickets easily, quickly, and securely — all in one place.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/slots"
            className="inline-block px-8 py-3 rounded-full text-lg font-semibold 
            bg-gradient-to-r from-orange-500 to-purple-600 text-white 
            shadow-lg hover:scale-105 transition-transform"
          >
            Book Tickets
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
