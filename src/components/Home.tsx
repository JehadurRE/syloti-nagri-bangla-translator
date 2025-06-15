
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Globe, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Script Support',
      description: 'Convert between Bangla, Syloti Nagri, and Phonetic scripts seamlessly'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Conversion',
      description: 'Instant text conversion powered by our advanced API'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Developer Friendly',
      description: 'RESTful API with comprehensive documentation and examples'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Syloti Nagri
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">Converter</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A modern, beautiful web application for converting text between Bangla, Syloti Nagri, and Phonetic scripts. 
              Built with cutting-edge technology and designed for developers and linguists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/converter"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 group"
              >
                Start Converting
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://syloti-converter-api-express.vercel.app/api/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 glass-effect text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-200 hover:scale-105"
              >
                View API Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the next generation of script conversion with our advanced features and intuitive design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Ready to Start Converting?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of users who trust our platform for accurate and fast script conversion.
            </p>
            <Link
              to="/converter"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 group"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
