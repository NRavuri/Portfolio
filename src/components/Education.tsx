import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Master of Sciences</h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">Pace University</p>
                <p className="text-gray-700 font-medium mb-4">Computer Science</p>

                <div className="flex flex-wrap gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>09/2022 - 05/2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}