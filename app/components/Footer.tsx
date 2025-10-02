"use client";
import { Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-white border-t border-gray-200 py-10">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
        
        {/* Pesan Komunikatif */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Terima kasih sudah mampir! 👋
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Jika ada ide, pertanyaan, atau sekadar ingin ngobrol tentang{" "}
          <span className="font-medium text-gray-800">pemrograman</span> atau{" "}
          <span className="font-medium text-gray-800">fotografi jalanan</span>, 
          jangan ragu untuk menghubungi saya. Mari kita terhubung lebih dekat!
        </p>

        {/* Sosial Media */}
        <div className="flex justify-center gap-5">
          <a
            href="mailto:shinata.putra@gmail.com"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <Mail className="w-5 h-5 text-gray-700" />
          </a>
          <a
            href="https://github.com/shinataputra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <Github className="w-5 h-5 text-gray-700" />
          </a>
          <a
            href="https://instagram.com/shinata.putra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <Instagram className="w-5 h-5 text-gray-700" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Shinata Putra • Dibuat dengan ❤️ dan sedikit kopi
        </p>
      </div>
    </footer>
  );
}
