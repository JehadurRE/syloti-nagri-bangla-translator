
import { Github, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-effect border-t border-white/20 dark:border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Syloti Nagri Converter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A modern web application for converting text between Bangla, Syloti Nagri, and Phonetic scripts.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Resources
            </h3>
            <div className="space-y-2">
              <a
                href="https://syloti-converter-api-express.vercel.app/api/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                API Documentation
              </a>
              <a
                href="https://github.com/JehadurRE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Author Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Author
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                <strong>JehadurRE</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Passionate developer and linguistics enthusiast dedicated to preserving cultural heritage through technology.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/JehadurRE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 dark:border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by JehadurRE
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {new Date().getFullYear()} Syloti Nagri Converter. Open Source Project.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
