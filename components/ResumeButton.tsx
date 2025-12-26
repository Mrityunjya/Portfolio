export default function ResumeButton() {
  return (
    <a
      href="/resume/resume.pdf"  // Note the leading slash
      download
      className="inline-block px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
    >
      Download Resume
    </a>
  );
}
