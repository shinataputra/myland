"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        
        {/* Foto / Ilustrasi */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/foto2.jpg"
            alt="About"
            className=" w-[320px] h-[420px] rounded-xl object-cover shadow-md border-4 border-white"
          />
        </motion.div>

        {/* Teks */}
        <motion.div
          className="lg:w-1/2"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Tentang Saya
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-4">
            Saya <span className="font-semibold text-gray-800">Shinata Putra</span>, 
            seorang guru di bidang pemrograman yang juga menekuni dunia fotografi jalanan. 
            Bagi saya, kode dan foto memiliki kesamaan: keduanya bisa menceritakan 
            sesuatu dengan cara yang unik.
          </p>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            Dengan pengalaman mengajar dan menjelajahi jalanan kota, saya berusaha 
            membagikan pengetahuan, inspirasi, dan cerita melalui karya saya — baik 
            dalam bentuk baris kode maupun foto sederhana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
