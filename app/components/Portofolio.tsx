"use client";
import { motion } from "framer-motion";
import { Laptop, Camera } from "lucide-react";

export default function Portfolio() {
  const caseStudies = [
    {
      title: "Portal Kurikulum",
      subtitle: "Aplikasi Web",
      icon: <Laptop className="w-5 h-5 text-gray-700" />,
      img: "/portalkurikulum.png",
      desc: "Aplikasi web untuk mengelola data akademik siswa dan guru. Dibangun dengan fokus pada kemudahan penggunaan dan kecepatan akses.",
      tech: ["PHP", "MySql", "Tailwind", "Docker"],
      link: "https://github.com/shinataputra/kurikulum-app",
    },
    {
      title: "Petik Laut Mayangan",
      subtitle: "Street Photography",
      icon: <Camera className="w-5 h-5 text-gray-700" />,
      img: "/petiklaut.png",
      desc: "Petik Laut Mayangan adalah sebuah acara tahunan yang diadakan di Pantai Mayangan, Probolinggo. Acara ini menampilkan berbagai kegiatan menarik seperti pertunjukan seni, bazaar kuliner, dan atraksi budaya lokal.",
      tech: ["Canon 80D", "Lightroom", "50mm f/4"],
      link: "https://www.instagram.com/shinata.putra",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Portofolio
        </motion.h2>

        <div className="flex flex-col gap-20">
          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Gambar */}
              <div className="lg:w-1/2">
  <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-cover rounded-2xl shadow-md border-4 border-white"
    />
  </div>
</div>


              {/* Teks */}
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center gap-2 text-gray-700">
                  {item.icon}
                  <span className="text-sm font-medium">{item.subtitle}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={item.link}
                  className="inline-block mt-4 text-sm font-medium text-indigo-600 hover:underline"
                >
                  Lihat Selengkapnya →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
