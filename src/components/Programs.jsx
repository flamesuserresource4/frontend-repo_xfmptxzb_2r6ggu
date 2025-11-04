import { BookOpen, FlaskConical, Palette, Trophy, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Programs that empower</h2>
          <p className="mt-3 text-slate-600">
            A balanced education that nurtures curiosity, character, and community.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {programs.map(({ icon: Icon, title, desc }) => (
            <motion.div
              variants={item}
              key={title}
              className="group rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Expert faculty</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
