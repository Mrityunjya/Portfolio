const skills = {"AI / ML": [
    "Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", 
    "Graph AI", "Reinforcement Learning", "Vector DBs (Pinecone, FAISS)", 
    "Multi-Agent Orchestration", "Predictive Modeling"
  ],
  "Frontend": [
    "React", "Next.js", "TypeScript", "Tailwind CSS", 
    "Three.js", "Framer Motion", "ShadCN UI", "Cinematic UI/UX"
  ],
  "Backend": [
    "Node.js", "GraphQL", "REST APIs", "PostgreSQL", 
    "MongoDB", "SQL", "WebSockets", "Microservices"
  ],
  "Other / Tools": [
    "Git", "Docker", "Linux", "Figma", 
    "Smart Contract Analytics", "Financial AI", "Security & Fraud Analysis"
  ],
};

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-medium mb-4">{category}</h3>

            <ul className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm border border-white/20 text-white/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
