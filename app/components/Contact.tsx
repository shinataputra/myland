"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hubungi Saya
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Kontak */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Informasi
            </h3>
            <p className="text-gray-600">
              Jika Anda ingin berdiskusi, bekerja sama, atau sekadar menyapa —
              silakan hubungi saya melalui kontak berikut.
            </p>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5" />
              <span>shinata.putra@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5" />
              <span>Jakarta, Indonesia</span>
            </div>

            {/* Sosial Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              >
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </motion.div>

          {/* Form Kontak */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pesan
              </label>
              <textarea
                rows={4}
                placeholder="Tulis pesan Anda..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              <Send className="w-4 h-4" />
              Kirim
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
