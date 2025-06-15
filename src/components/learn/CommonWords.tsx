
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Volume2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const CommonWords = ({ onBack }: { onBack: () => void }) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      title: "Greetings",
      words: [
        { syloti: "ꠀꠍꠟꠣꠝꠥ ꠀꠟꠣꠁꠇꠥꠝ", bangla: "আস্‌সালামু আলাইকুম", pronunciation: "assalamu alaikum", meaning: "Peace be upon you" },
        { syloti: "ꠘꠝꠍ꠆ꠇꠣꠞ", bangla: "নমস্কার", pronunciation: "namaskar", meaning: "Hello/Greetings" },
        { syloti: "ꠇꠦꠝꠘ ꠀꠍꠦꠘ", bangla: "কেমন আছেন", pronunciation: "kemon achen", meaning: "How are you?" },
        { syloti: "ꠝꠣꠁꠘ꠆ꠘꠣ", bangla: "মাইন্না", pronunciation: "mainna", meaning: "No/Don't" },
        { syloti: "ꠀꠣ", bangla: "আঃ", pronunciation: "aa", meaning: "Yes" },
        { syloti: "ꠡꠥꠇ꠆ꠞꠤꠄ", bangla: "শুক্রিয়া", pronunciation: "shukriya", meaning: "Thank you" },
      ]
    },
    {
      title: "Family Terms",
      words: [
        { syloti: "ꠀꠛꠛꠣ", bangla: "আব্বা", pronunciation: "abba", meaning: "Father" },
        { syloti: "ꠀꠝꠟꠣ", bangla: "আম্মা", pronunciation: "amma", meaning: "Mother" },
        { syloti: "ꠛꠣꠁ", bangla: "ভাই", pronunciation: "bhai", meaning: "Brother" },
        { syloti: "ꠀꠛꠤ", bangla: "আপি", pronunciation: "api", meaning: "Sister" },
        { syloti: "ꠘꠣꠘꠣ", bangla: "নানা", pronunciation: "nana", meaning: "Grandfather (maternal)" },
        { syloti: "ꠘꠣꠘꠤ", bangla: "নানী", pronunciation: "nani", meaning: "Grandmother (maternal)" },
        { syloti: "ꠖꠣꠖꠣ", bangla: "দাদা", pronunciation: "dada", meaning: "Grandfather (paternal)" },
        { syloti: "ꠖꠣꠖꠤ", bangla: "দাদী", pronunciation: "dadi", meaning: "Grandmother (paternal)" },
      ]
    },
    {
      title: "Daily Objects",
      words: [
        { syloti: "ꠚꠣꠘꠤ", bangla: "পানি", pronunciation: "pani", meaning: "Water" },
        { syloti: "ꠛꠣꠔ", bangla: "ভাত", pronunciation: "bhat", meaning: "Rice" },
        { syloti: "ꠞꠥꠐꠤ", bangla: "রুটি", pronunciation: "ruti", meaning: "Bread" },
        { syloti: "ꠖꠥꠗ", bangla: "দুধ", pronunciation: "dudh", meaning: "Milk" },
        { syloti: "ꠌꠣ", bangla: "চা", pronunciation: "cha", meaning: "Tea" },
        { syloti: "ꠜꠞ", bangla: "ঘর", pronunciation: "ghor", meaning: "House/Room" },
        { syloti: "ꠇꠤꠔꠣꠛ", bangla: "কিতাব", pronunciation: "kitab", meaning: "Book" },
        { syloti: "ꠇꠟꠝ", bangla: "কলম", pronunciation: "kolom", meaning: "Pen" },
      ]
    }
  ];

  const currentCategoryData = categories[currentCategory];
  
  const filteredWords = currentCategoryData.words.filter(word =>
    word.syloti.includes(searchTerm) ||
    word.bangla.includes(searchTerm) ||
    word.pronunciation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextCategory = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
    }
  };

  const prevCategory = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button onClick={onBack} variant="outline" className="mr-4">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Learn
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Common Words
          </h1>
        </div>

        <Card className="glass-effect mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{currentCategoryData.title}</CardTitle>
                <CardDescription>
                  Master everyday vocabulary in Syloti Nagri
                </CardDescription>
              </div>
              <span className="text-sm font-normal text-gray-500">
                {currentCategory + 1} of {categories.length}
              </span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search words..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWords.map((word, index) => (
                <div key={index} className="p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-white/20 hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {word.syloti}
                    </div>
                    <Button variant="ghost" size="sm">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Bangla:</span>
                      <span className="text-lg">{word.bangla}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Pronunciation:</span>
                      <span className="font-mono text-sm">{word.pronunciation}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Meaning:</span>
                      <span className="text-sm font-medium">{word.meaning}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredWords.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No words found matching "{searchTerm}"
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button 
                onClick={prevCategory} 
                disabled={currentCategory === 0}
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous Category
              </Button>
              <Button 
                onClick={nextCategory} 
                disabled={currentCategory === categories.length - 1}
              >
                Next Category
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommonWords;
