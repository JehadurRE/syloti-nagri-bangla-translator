import { Github, ExternalLink, Heart, Code2, CodeXml } from "lucide-react";

const About = () => {
  return (
    <div className="mt-4 pt-16 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Syloti Nagri Converter by Md. Jehad & YH Zaison
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Preserving and digitalizing the beautiful Syloti Nagri script
            through modern technology
          </p>
        </div>

        <div className="space-y-12">
          {/* Script Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Code2 className="w-6 h-6 mr-3 text-blue-500" />
              The Syloti Nagri Script - Cultural Heritage of Sylhet
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Syloti Nagri (ꠍꠤꠟꠐꠤ ꠘꠣꠉꠞꠤ) is a historical script that was used
                to write the Sylheti language, primarily spoken in the Sylhet
                region of Bangladesh and Assam, India. This ancient writing
                system has deep cultural and historical significance for the
                Sylheti-speaking community worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The script consists of unique characters and diacritical marks
                that represent the phonetic nuances of the Sylheti language.
                While it fell out of common use in the modern era, there has
                been renewed interest in preserving and revitalizing this
                important cultural heritage through digital tools and
                educational resources.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our free online converter aims to bridge the gap between
                traditional Syloti Nagri script and modern digital
                communication, making it accessible to researchers, linguists,
                educators, students, and community members worldwide who want to
                learn and practice this beautiful script.
              </p>
            </div>
          </div>

          {/* Project Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-3 text-red-500" />
              Our Mission - Digital Preservation of South Asian Scripts
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Cultural Preservation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to preserving the Syloti Nagri script for
                  future generations through digital tools, educational
                  resources, and community engagement initiatives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Global Accessibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Making the script accessible to a global audience through
                  modern web technologies, mobile-friendly interfaces, and
                  comprehensive learning tools.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Educational Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Supporting educational initiatives, academic research in
                  historical linguistics, computational linguistics, and South
                  Asian script studies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Community Building
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building a vibrant community of scholars, developers,
                  students, and enthusiasts interested in Sylheti language and
                  South Asian scripts.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Built with Modern Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "React", description: "Frontend Framework" },
                { name: "TypeScript", description: "Type Safety" },
                { name: "Tailwind CSS", description: "Modern Styling" },
                { name: "Vite", description: "Build Tool" },
                { name: "Framer Motion", description: "Smooth Animations" },
                { name: "Lucide Icons", description: "Beautiful Icons" },
                { name: "Express.js", description: "API Backend" },
                { name: "Vercel", description: "Cloud Deployment" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/30 dark:bg-gray-800/30 rounded-xl"
                >
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Author Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              About the Developer - Md. Jehad (JehadurRE)
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src="/logo/JehadurRE.jpg"
                  alt="Md. Jehad (JehadurRE) Avatar"
                  className="w-24 h-24 rounded-full object-cover border-2 border-green-500 shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Md. Jehad (JehadurRE)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Passionate full-stack developer, software engineer, and
                  linguistics enthusiast dedicated to preserving cultural
                  heritage through innovative technology solutions. With
                  expertise in modern web development, API design, and a deep
                  appreciation for South Asian languages, scripts, and digital
                  humanities. Committed to making historical scripts accessible
                  through free, open-source tools and educational resources.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://github.com/JehadurRE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </a>
                  <a
                    href="https://jehadurre.icu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    <CodeXml className="w-4 h-4 mr-2 " />
                    

                    Portfolio
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">YZ</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  YH Zaison
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Creative problem solver, software engineer, and technology enthusiast focused on building impactful solutions. Experienced in modern web development and passionate about leveraging technology to address real-world challenges and support cultural and educational initiatives.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://github.com/JehadurRE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </a>
                  <a
                    href="https://nagri.jehadurre.icu/api/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    API Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Comprehensive Learning Platform Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Script Conversion Tools
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Bangla to Syloti Nagri converter</li>
                  <li>• Phonetic to Syloti Nagri translation</li>
                  <li>• Real-time bidirectional conversion</li>
                  <li>• API integration for developers</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Learning & Practice
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Interactive writing practice</li>
                  <li>• Reading comprehension exercises</li>
                  <li>• Vocabulary building tools</li>
                  <li>• Progress tracking system</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="glass-effect p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Support the Open Source Project
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This project is completely free and open source. If you find it
              helpful for learning Syloti Nagri, academic research, or cultural
              preservation, consider supporting its development or contributing
              to the codebase. Help us preserve this beautiful script for future
              generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/JehadurRE/syloti-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <Github className="w-5 h-5 mr-2" />
                Star on GitHub
              </a>
              <a
                href="https://nagri.jehadurre.icu/api/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-rose-600 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Contribute & Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
