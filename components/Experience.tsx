interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experience: ExperienceItem[] = [
  {
    role: "Lead Developer ( AI ML )",
    company: "EDORAS",
    duration: "Nov 2024 – Present",
    description:
      "Designed and built AI-driven systems across NLP, computer vision, and intelligent web platforms with a strong emphasis on real-world usability.",
  },
  {
    role: "SDE AI ML Intern",
    company: "Octin Technology",
    duration: "Jun 2025 – Jul 2025",
    description:
      "Designed and built AI-driven systems that detects synthetic datas",
  },
  {
    role: "AI ML Intern",
    company: "OutriX",
    duration: "Jul 2025 – Aug 2025",
    description:
      "Designed and built AI-driven systems like News Classification,Image Segregation,etc",
  },
];

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Work Experience</h2>

      {experience.map((item) => (
        <div
          key={item.role}
          className="border border-white/10 rounded-xl p-6 mb-6"
        >
          <h3 className="text-xl font-medium">
            {item.role} —{" "}
            <span className="text-white/70">{item.company}</span>
          </h3>

          <p className="text-sm text-white/50 mt-1">{item.duration}</p>

          <p className="text-white/80 mt-4 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}
