
import { Book, BookOpen, Users, Clock, Award } from 'lucide-react';

const Learn = () => {
  const sections = [
    {
      title: "Alphabet & Basics",
      description: "Learn the fundamental characters and sounds of Syloti Nagri script",
      icon: BookOpen,
      lessons: ["Basic Characters", "Vowels & Consonants", "Writing Practice"],
      status: "Available"
    },
    {
      title: "Common Words",
      description: "Master everyday vocabulary in Syloti Nagri",
      icon: Book,
      lessons: ["Greetings", "Family Terms", "Daily Objects"],
      status: "Available"
    },
    {
      title: "Grammar Rules",
      description: "Understand the grammatical structure of Syloti language",
      icon: Users,
      lessons: ["Sentence Structure", "Verb Conjugation", "Pronouns"],
      status: "Coming Soon"
    },
    {
      title: "Advanced Topics",
      description: "Dive deeper into complex linguistic concepts",
      icon: Award,
      lessons: ["Poetry", "Historical Texts", "Regional Variations"],
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Learn Syloti Nagri
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master the beautiful script of Sylhet through structured lessons, interactive exercises, and cultural insights.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-effect rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Learning Time</h3>
            <p className="text-gray-600 dark:text-gray-300">2-3 hours per week</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Community</h3>
            <p className="text-gray-600 dark:text-gray-300">Join fellow learners</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <Award className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Achievements</h3>
            <p className="text-gray-600 dark:text-gray-300">Track your progress</p>
          </div>
        </div>

        {/* Learning Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className="glass-effect rounded-xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {section.title}
                    </h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      section.status === 'Available' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {section.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {section.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Lessons:</h4>
                  <ul className="space-y-1">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Learn;
