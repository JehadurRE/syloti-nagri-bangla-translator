
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';

const AlphabetBasics = ({ onBack }: { onBack: () => void }) => {
  const [currentLesson, setCurrentLesson] = useState(0);

  const lessons = [
    {
      title: "Basic Characters",
      content: [
        { syloti: "ꠀ", bangla: "অ", pronunciation: "o", meaning: "vowel 'a'" },
        { syloti: "ꠇ", bangla: "ক", pronunciation: "ko", meaning: "consonant 'ka'" },
        { syloti: "ꠈ", bangla: "খ", pronunciation: "kho", meaning: "consonant 'kha'" },
        { syloti: "ꠉ", bangla: "গ", pronunciation: "go", meaning: "consonant 'ga'" },
        { syloti: "ꠊ", bangla: "ঘ", pronunciation: "gho", meaning: "consonant 'gha'" },
        { syloti: "ꠌ", bangla: "চ", pronunciation: "cho", meaning: "consonant 'cha'" },
      ]
    },
    {
      title: "Vowels & Consonants",
      content: [
        { syloti: "ꠁ", bangla: "ই", pronunciation: "i", meaning: "vowel 'i'" },
        { syloti: "ꠃ", bangla: "উ", pronunciation: "u", meaning: "vowel 'u'" },
        { syloti: "ꠄ", bangla: "এ", pronunciation: "e", meaning: "vowel 'e'" },
        { syloti: "ꠅ", bangla: "ও", pronunciation: "o", meaning: "vowel 'o'" },
        { syloti: "ꠍ", bangla: "ছ", pronunciation: "chho", meaning: "consonant 'chha'" },
        { syloti: "ꠎ", bangla: "জ", pronunciation: "jo", meaning: "consonant 'ja'" },
      ]
    },
    {
      title: "Writing Practice",
      content: [
        { syloti: "ꠇꠤ", bangla: "কি", pronunciation: "ki", meaning: "what" },
        { syloti: "ꠇꠦꠝ", bangla: "কেম", pronunciation: "kem", meaning: "how" },
        { syloti: "ꠀꠝꠤ", bangla: "আমি", pronunciation: "ami", meaning: "I/me" },
        { syloti: "ꠔꠥꠝꠤ", bangla: "তুমি", pronunciation: "tumi", meaning: "you" },
        { syloti: "ꠘꠣꠝ", bangla: "নাম", pronunciation: "nam", meaning: "name" },
        { syloti: "ꠛꠣꠡꠣ", bangla: "ভাষা", pronunciation: "bhasha", meaning: "language" },
      ]
    }
  ];

  const currentLessonData = lessons[currentLesson];

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button onClick={onBack} variant="outline" className="mr-4">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Learn
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Alphabet & Basics
          </h1>
        </div>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {currentLessonData.title}
              <span className="text-sm font-normal text-gray-500">
                {currentLesson + 1} of {lessons.length}
              </span>
            </CardTitle>
            <CardDescription>
              Learn the fundamental characters and sounds of Syloti Nagri script
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentLessonData.content.map((item, index) => (
                <div key={index} className="p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {item.syloti}
                    </div>
                    <Button variant="ghost" size="sm">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Bangla:</span>
                      <span className="text-2xl">{item.bangla}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Pronunciation:</span>
                      <span className="font-mono">{item.pronunciation}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Meaning:</span>
                      <span className="text-sm">{item.meaning}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <Button 
                onClick={prevLesson} 
                disabled={currentLesson === 0}
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button 
                onClick={nextLesson} 
                disabled={currentLesson === lessons.length - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlphabetBasics;
