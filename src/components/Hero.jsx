import Spline from "@splinetool/react-spline";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
              <Star className="h-4 w-4 fill-current" /> Inspiring minds. Building futures.
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              A modern school for the next generation of leaders
            </h1>
            <p className="mt-5 text-slate-600 text-lg md:text-xl">
              BrightPath blends rigorous academics with real-world skills, arts, and athletics—so every student thrives.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Start Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 text-sm font-semibold border border-slate-200 hover:bg-slate-50"
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-white">
              <Spline
                scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg ring-1 ring-slate-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">98%</div>
              <div className="text-sm">
                <p className="font-semibold text-slate-900">College Acceptance</p>
                <p className="text-slate-600">Class of 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
