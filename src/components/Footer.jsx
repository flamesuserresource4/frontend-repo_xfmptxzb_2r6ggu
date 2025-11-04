import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">BrightPath School</h3>
            <p className="mt-2 text-slate-400">
              A caring, diverse community where students discover their passions and purpose.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100">Visit</h4>
            <div className="mt-3 flex items-start gap-3 text-slate-300">
              <MapPin className="h-5 w-5 mt-0.5" />
              <span>123 Learning Lane, Knowledge City, CA 94000</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100">Contact</h4>
            <div className="mt-3 space-y-2 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" /> info@brightpath.edu
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" /> (555) 123-4567
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-800 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BrightPath School. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#apply" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700">Apply</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
