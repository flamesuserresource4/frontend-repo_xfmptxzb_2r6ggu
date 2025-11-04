import { BookOpen, FlaskConical, Palette, Trophy, CheckCircle } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Academics",
    desc: "Challenging curriculum with personalized support in STEM, humanities, and languages.",
  },
  {
    icon: FlaskConical,
    title: "STEM Labs",
    desc: "Hands-on science, robotics, and coding in state-of-the-art labs.",
  },
  {
    icon: Palette,
    title: "Arts",
    desc: "Visual arts, music, and theater programs that spark creativity and confidence.",
  },
  {
    icon: Trophy,
    title: "Athletics",
    desc: "Inclusive sports with a focus on teamwork, health, and sportsmanship.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Programs that empower</h2>
          <p className="mt-3 text-slate-600">
            A balanced education that nurtures curiosity, character, and community.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Expert faculty</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
