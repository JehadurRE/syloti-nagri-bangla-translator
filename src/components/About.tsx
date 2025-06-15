
import { Github, ExternalLink, Heart, Code2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Syloti Nagri Converter
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Preserving and digitizing the beautiful Syloti Nagri script
          </p>
        </div>

        <div className="space-y-12">
          {/* Script Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Code2 className="w-6 h-6 mr-3 text-blue-500" />
              The Syloti Nagri Script
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Syloti Nagri is a historical script that was used to write the Sylheti language, primarily spoken in the Sylhet region of Bangladesh and Assam, India. This ancient writing system has deep cultural and historical significance for the Sylheti-speaking community.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The script consists of unique characters and diacritical marks that represent the phonetic nuances of the Sylheti language. While it fell out of common use in the modern era, there has been renewed interest in preserving and revitalizing this important cultural heritage.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our converter aims to bridge the gap between traditional Syloti Nagri script and modern digital communication, making it accessible to researchers, linguists, educators, and community members worldwide.
              </p>
            </div>
          </div>

          {/* Project Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-3 text-red-500" />
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Preservation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to preserving the Syloti Nagri script for future generations through digital tools and resources.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Accessibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Making the script accessible to a global audience through modern web technologies and user-friendly interfaces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Supporting educational initiatives and research in historical linguistics and script studies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Community
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building a community of scholars, developers, and enthusiasts interested in South Asian scripts.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Built with Modern Technology
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'React', description: 'Frontend Framework' },
                { name: 'TypeScript', description: 'Type Safety' },
                { name: 'Tailwind CSS', description: 'Styling' },
                { name: 'Vite', description: 'Build Tool' },
                { name: 'Material 3', description: 'Design System' },
                { name: 'Framer Motion', description: 'Animations' },
                { name: 'Express.js', description: 'API Backend' },
                { name: 'Vercel', description: 'Deployment' }
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white/30 dark:bg-gray-800/30 rounded-xl">
                  <h3 className="font-semibold text-gray-800 dark:text-white">{tech.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Author Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              About the Developer
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JR</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  JehadurRE
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Passionate developer and linguistics enthusiast dedicated to preserving cultural heritage through technology. 
                  With expertise in full-stack development and a deep appreciation for South Asian languages and scripts.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://github.com/JehadurRE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://syloti-converter-api-express.vercel.app/api/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    API Docs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="glass-effect p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Support the Project
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This project is open source and free to use. If you find it helpful, consider supporting its development 
              or contributing to the codebase.
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
                href="https://syloti-converter-api-express.vercel.app/api/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
