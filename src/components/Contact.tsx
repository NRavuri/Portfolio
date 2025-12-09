import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-lg text-gray-700 text-center mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about DevOps and cloud technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:nikhilr@mycareermail.com"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-gray-900">nikhilr@mycareermail.com</p>
                </div>
              </a>

              <a
                href="tel:908-222-6246"
                className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="bg-green-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone</p>
                  <p className="text-gray-900">908-222-6246</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="bg-orange-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Location</p>
                  <p className="text-gray-900">USA</p>
                </div>
              </div>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-700 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">LinkedIn</p>
                  <p className="text-gray-900">Connect on LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}