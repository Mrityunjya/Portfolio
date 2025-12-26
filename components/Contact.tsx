"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="text-3xl font-semibold text-white mb-6">
        Let’s Connect
      </h2>

      <p className="text-white/70 mb-12 leading-relaxed">
        Open to collaborations, research discussions, and meaningful
        opportunities at the intersection of technology and impact.
      </p>

      <div className="flex justify-center flex-wrap gap-6">
        <a
          href="mailto:mrityunjyasankar04@gmail.com"
          className="px-7 py-3 rounded-full border border-white/20
                     text-sm text-white/80
                     hover:border-white/40 hover:bg-white/10
                     transition"
        >
          Email
        </a>

        <Link
          href="https://github.com/Mrityunjya"
          target="_blank"
          className="px-7 py-3 rounded-full border border-white/20
                     text-sm text-white/80
                     hover:border-white/40 hover:bg-white/10
                     transition"
        >
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/mrityunjya-s"
          target="_blank"
          className="px-7 py-3 rounded-full border border-white/20
                     text-sm text-white/80
                     hover:border-white/40 hover:bg-white/10
                     transition"
        >
          LinkedIn
        </Link>
      </div>
    </section>
  );
}
