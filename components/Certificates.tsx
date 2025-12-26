import certificates from "./certificates.json"

type Certificate = {
  title: string
  issuer?: string
  year?: string
  link?: string
}

export default function Certificates() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Certificates</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {certificates.map((c: Certificate) => (
          <div
            key={c.title}
            className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/30"
          >
            <h3 className="text-lg font-medium">{c.title}</h3>

            {c.issuer && (
              <p className="mt-1 text-sm text-white/60">{c.issuer}</p>
            )}

            {c.year && (
              <p className="text-xs text-white/40 mt-1">{c.year}</p>
            )}

            {c.link && (
              <a
                href={c.link}
                target="_blank"
                className="mt-3 inline-block text-sm text-blue-400 hover:underline"
              >
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

