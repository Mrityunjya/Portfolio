"use client";

import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold text-white mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-white/10 bg-black/40 p-6
                       hover:border-white/20 transition"
          >
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>

            <p className="text-sm text-white/70 mt-1">
              {project.subtitle}
            </p>

            <p className="text-xs text-white/40 mt-1">
              {project.year}
            </p>

            <p className="text-sm text-white/60 mt-4">
              {project.description}
            </p>

            <Link
              href={project.view}
              className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
            >
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
