
# 🔤 Syloti Nagri Converter - Free Online Script Translator

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue?style=for-the-badge)](https://syloti-converter.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/JehadurRE/syloti-converter?style=for-the-badge)](https://github.com/JehadurRE/syloti-converter)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/JehadurRE)

> **Created by [Md. Jehad (JehadurRE)](https://github.com/JehadurRE)** - Preserving Cultural Heritage Through Technology

A comprehensive, free online platform for converting between **Bangla**, **Syloti Nagri**, and **Phonetic** scripts. Learn the beautiful Sylheti language with interactive tools, practice exercises, and educational resources.

## 🌟 Features

### 🔄 **Script Conversion Tools**
- **Bangla to Syloti Nagri** converter with real-time translation
- **Phonetic to Syloti Nagri** transformation
- **Bidirectional conversion** support
- **API integration** for developers
- **Batch text processing** capabilities

### 📚 **Learning Platform**
- **Interactive Alphabet Learning** - Master Syloti Nagri characters
- **Common Words Practice** - Build essential vocabulary
- **Writing Practice** - Learn proper character formation
- **Reading Comprehension** - Improve text understanding
- **Listening Exercises** - Audio-based learning
- **Vocabulary Builder** - Expand your word knowledge

### 🎮 **Educational Games**
- **Character Matching** - Fun character recognition games
- **Speed Translation** - Test your conversion speed
- **Word Builder** - Construct words from characters
- **Story Quest** - Interactive storytelling in Syloti Nagri

### 🛠️ **Developer Features**
- **RESTful API** for script conversion
- **TypeScript support** with full type definitions
- **Rate limiting** and **usage tracking**
- **Comprehensive documentation**
- **Mobile-responsive** design

## 🚀 Live Demo

Experience the converter: **[syloti-converter.vercel.app](https://syloti-converter.vercel.app/)**

## 🔧 Technology Stack

Built with modern web technologies for optimal performance:

| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | Frontend Framework | ^18.3.1 |
| 🔷 **TypeScript** | Type Safety | Latest |
| 🎨 **Tailwind CSS** | Styling & Design | Latest |
| ⚡ **Vite** | Build Tool | Latest |
| 🧩 **shadcn/ui** | UI Components | Latest |
| 🎭 **Framer Motion** | Animations | ^12.18.1 |
| 🔗 **React Router** | Navigation | ^6.26.2 |
| 🎯 **Lucide Icons** | Beautiful Icons | ^0.462.0 |
| ☁️ **Vercel** | Deployment Platform | - |

## 🏃‍♂️ Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/JehadurRE/syloti-converter.git

# Navigate to project directory
cd syloti-converter

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📖 About Syloti Nagri Script

**Syloti Nagri** (ꠍꠤꠟꠐꠤ ꠘꠣꠉꠞꠤ) is a historical script used to write the **Sylheti language**, primarily spoken in:

- 🇧🇩 **Sylhet region** of Bangladesh
- 🇮🇳 **Assam state** of India
- 🌍 **Sylheti diaspora** worldwide

### Cultural Significance
- **Historical Heritage**: Ancient writing system with deep cultural roots
- **Linguistic Preservation**: Essential for maintaining Sylheti language identity
- **Academic Research**: Important for South Asian linguistics studies
- **Community Connection**: Bridges traditional and modern communication

## 🎯 Project Mission

### Our Goals
1. **Digital Preservation** - Safeguard Syloti Nagri script for future generations
2. **Educational Access** - Make learning resources freely available worldwide
3. **Cultural Heritage** - Promote awareness of Sylheti language and script
4. **Community Building** - Connect Sylheti speakers and learners globally
5. **Academic Support** - Assist researchers and linguists in their studies

## 👨‍💻 About the Developer

**Md. Jehad (JehadurRE)** is a passionate full-stack developer and linguistics enthusiast dedicated to preserving cultural heritage through innovative technology solutions.

### Connect with Md. Jehad
- 🌐 **GitHub**: [@JehadurRE](https://github.com/JehadurRE)
- 💼 **LinkedIn**: [Md. Jehad](https://linkedin.com/in/jehadurre)
- 📧 **Email**: contact@jehadur.dev
- 🐦 **Twitter**: [@JehadurRE](https://twitter.com/JehadurRE)

### Expertise
- **Full-Stack Development** (React, Node.js, TypeScript)
- **API Design & Development** (RESTful APIs, GraphQL)
- **Digital Humanities** (Script digitization, Language tools)
- **Cultural Technology** (Heritage preservation through tech)

## 🔗 API Documentation

Integrate Syloti Nagri conversion into your applications:

- **API Base URL**: `https://syloti-converter-api-express.vercel.app`
- **Documentation**: [API Docs](https://syloti-converter-api-express.vercel.app/api/docs)
- **Rate Limits**: 100 requests per hour (free tier)
- **Authentication**: API token required for advanced features

### Quick API Example

```javascript
// Convert Bangla to Syloti Nagri
const response = await fetch('https://syloti-converter-api-express.vercel.app/api/convert', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_TOKEN'
  },
  body: JSON.stringify({
    text: 'আমি তোমাকে ভালোবাসি',
    from: 'bangla',
    to: 'syloti'
  })
});

const data = await response.json();
console.log(data.convertedText); // ꠀꠝꠤ ꠔꠥꠝꠣꠇꠦ ꠜꠣꠟꠥꠛꠣꠍꠤ
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute
1. **🐛 Bug Reports** - Found an issue? Report it!
2. **✨ Feature Requests** - Suggest new functionality
3. **📝 Documentation** - Improve our docs
4. **🔧 Code Contributions** - Submit pull requests
5. **🌍 Translations** - Help translate the interface
6. **📢 Spread the Word** - Share with others interested in Sylheti

### Development Workflow
```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Commit with descriptive messages
git commit -m 'Add amazing feature'

# Push to your branch
git push origin feature/amazing-feature

# Open a Pull Request
```

### Contribution Guidelines
- Follow **TypeScript** best practices
- Write **clear commit messages**
- Add **tests** for new features
- Update **documentation** as needed
- Respect the **code style** (Prettier + ESLint)

## 📊 Project Stats

- ⭐ **GitHub Stars**: Growing community support
- 🔄 **Daily Conversions**: Thousands of script conversions
- 🌍 **Global Users**: Serving Sylheti learners worldwide
- 📱 **Mobile Friendly**: 100% responsive design
- ⚡ **Performance**: Lighthouse score 90+

## 🛣️ Roadmap

### Upcoming Features
- [ ] **Mobile App** (React Native)
- [ ] **Offline Mode** (PWA capabilities)
- [ ] **Voice Recognition** (Speech-to-text)
- [ ] **Advanced Games** (More learning activities)
- [ ] **Community Features** (User profiles, sharing)
- [ ] **Teacher Dashboard** (Classroom management)
- [ ] **Progress Analytics** (Learning insights)

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Free to use, modify, and distribute
Created by Md. Jehad (JehadurRE) with ❤️
```

## 🙏 Acknowledgments

- **Sylheti Community** - For preserving this beautiful language
- **Open Source Contributors** - For making this project better
- **Academic Researchers** - For linguistic insights and feedback
- **Beta Testers** - For helping improve the user experience

## 📞 Support & Contact

Need help or have questions?

- 📖 **Documentation**: [Project Wiki](https://github.com/JehadurRE/syloti-converter/wiki)
- 🐛 **Issues**: [GitHub Issues](https://github.com/JehadurRE/syloti-converter/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/JehadurRE/syloti-converter/discussions)
- 📧 **Email**: support@syloti-converter.com

## 🌟 Show Your Support

If this project helps you learn Syloti Nagri or supports your research:

- ⭐ **Star** this repository
- 🍴 **Fork** and contribute
- 📢 **Share** with others
- 💝 **Sponsor** the development

---

<div align="center">

**Made with ❤️ by [Md. Jehad (JehadurRE)](https://github.com/JehadurRE)**

*Preserving Sylheti Heritage Through Technology*

[🌐 Visit Website](https://syloti-converter.vercel.app/) • [📚 API Docs](https://syloti-converter-api-express.vercel.app/api/docs) • [🐙 GitHub](https://github.com/JehadurRE/syloti-converter)

</div>
