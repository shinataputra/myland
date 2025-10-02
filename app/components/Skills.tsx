"use client";
import { motion } from "framer-motion";

const skills = [
  { 
    name: "JavaScript", 
    level: "Newbie", 
    desc: "Mau ngk mau sih ini, maunya ke react / next.js." 
  },
  { 
    name: "Python", 
    level: "Newbie", 
    desc: "Pengembangan AI untuk aplikasi promtless." 
  },
  { 
    name: "React / Express.js",
    level: "Newborn", 
    desc: "Library dan frameworknya banyak banget, baru ORM dan ESM aja ngk kelar-kelar" 
  },
  { 
    name: "Street Photography", 
    level: "Expert", 
    desc: "Sedang mencoba object landscape" 
  },
];

const teaching = [
  {
    year: "2019 - Sekarang",
    role: "Tech Educator",
    place: "SMK Negeri 1 Probolinggo",
    desc: "Mengajar dasar hingga lanjutan pemrograman web dan mobile.",
  },
  {
    year: "2024",
    role: "Immersive Industry Experience",
    place: "Sekawan Media",
    desc: "Wordpress Developer",
  },
  {
    year: "2016 - 2018",
    role: "Scientific Paper Pupport",
    place: "Universitas di Malang",
    desc: "Membantu mahasiswa menyelesaikan skripsi di bidang teknologi informasi.",
  },
];

export default function SkillsTeaching() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16 px-4 sm:px-6 lg:px-8">




        
        {/* Skills */}
        <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex-1 w-full"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Sedang Belajar</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{skill.name}</h3>
            <span className="text-sm text-gray-500 mb-2 block">{skill.level}</span>
            <p className="text-sm text-gray-600 leading-relaxed">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

        {/* Teaching Experience */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Pengalaman</h2>
          <div className="space-y-6">
            {teaching.map((teach, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-gray-200">
                <span className="absolute -left-[6px] top-1 w-3 h-3 bg-gray-800 rounded-full"></span>
                <h3 className="text-lg font-semibold text-gray-700">{teach.role}</h3>
                <p className="text-sm text-gray-600">{teach.place}</p>
                <span className="text-xs text-gray-500">{teach.year}</span>
                <p className="text-sm text-gray-500 mt-1">{teach.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
