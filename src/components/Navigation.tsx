import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO BUTTON WITH PROFILE PHOTO */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2"
          >
            <img
              src="/profile.jpg"
              alt="Nikhil Ravuri"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-lg font-bold hidden sm:block">Nikhil</span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-blue-600 transition-colors capitalize font-medium"
              >
                {section}
              </button>
            ))}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors capitalize font-medium py-2"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
