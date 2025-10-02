"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
  <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
        
        {/* Foto Profil */}
        <motion.div
          className="flex justify-center lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/foto.JPG"
            alt="Profile"
            className="w-44 h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-md border-4 border-white"
          />
        </motion.div>

        {/* Konten Teks */}
        <motion.div
          className="lg:w-1/2 max-w-xl text-center lg:text-left"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Halo, Saya <span className="text-gray-900">Shinata Putra</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            Seorang <span className="font-semibold">Guru di Bidang Pemrograman</span> dan{" "}
            <span className="font-semibold">Street Photographer</span> yang senang berbagi pengetahuan 
            dan menangkap momen kehidupan.
          </p>

          <motion.a
            href="#portfolio"
            className="inline-block px-5 py-2.5 bg-white border border-gray-200 text-gray-800 text-sm lg:text-base font-medium rounded-lg shadow-sm hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            ✨ Lihat Portofolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
