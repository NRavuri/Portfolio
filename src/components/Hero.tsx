import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Nikhil Ravuri
          </h1>

          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
            DevOps Engineer
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Experienced DevOps Engineer with 4+ years of expertise in automating and streamlining CI/CD pipelines,
            cloud infrastructure, and container orchestration.
          </p>

          {/* UPDATED CONTACT ROW — GitHub moved inside */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-700">
            <a
              href="mailto:nikhilr@mycareermail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <Mail size={20} />
              <span>nikhilr@mycareermail.com</span>
            </a>

            <a
              href="tel:908-222-6246"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <Phone size={20} />
              <span>908-222-6246</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>USA</span>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            {/* GitHub (NEW — moved beside LinkedIn) */}
            <a
              href="https://github.com/NRavuri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Remove old "Visit My GitHub" button since GitHub is now in row */}
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              View Projects
            </button>

            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
