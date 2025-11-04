import { GraduationCap, BookOpen, Users, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-blue-600 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-900">BrightPath School</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#programs" className="hover:text-blue-600 transition-colors flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Programs
            </a>
            <a href="#community" className="hover:text-blue-600 transition-colors flex items-center gap-2">
              <Users className="h-4 w-4" /> Community
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors flex items-center gap-2">
              <Phone className="h-4 w-4" /> Contact
            </a>
          </nav>

          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
