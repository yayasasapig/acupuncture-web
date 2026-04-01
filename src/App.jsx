import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import MeridianMap from './components/MeridianMap';
import FiveElements from './components/FiveElements';
import ZiwuLiuzhu from './components/ZiwuLiuzhu';
import SchoolsOverview from './components/SchoolsOverview';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('zh');
  const { i18n } = useTranslation();

  const handleLangChange = (newLang) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation currentLang={lang} onLangChange={handleLangChange} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-chinese-indigo/10 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-chinese-amber/10 rounded-full mb-6">
              <Sparkles className="text-chinese-amber" size={16} />
              <span className="text-chinese-amber text-sm font-medium">
                {lang === 'zh' ? '傳統中醫理論' : 'Traditional Chinese Medicine'}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {lang === 'zh' ? '針灸理論可視化' : 'Acupuncture Theory'}
              <br />
              <span className="bg-gradient-to-r from-chinese-vermilion via-chinese-amber to-chinese-jade bg-clip-text text-transparent">
                {lang === 'zh' ? '互動式探索' : 'Interactive Exploration'}
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {lang === 'zh' 
                ? '深入了解十二經脈、奇經八脈、五行學說與子午流注的奧秘'
                : 'Explore the mysteries of Twelve Meridians, Eight Extra Channels, Five Elements Theory, and Ziwu Liuzhu'}
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-40 left-10 w-64 h-64 bg-chinese-indigo/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-chinese-vermilion/10 rounded-full blur-3xl" />
        </section>

        {/* Main content */}
        <MeridianMap />
        <FiveElements />
        <ZiwuLiuzhu />
        <SchoolsOverview />

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-dark-border">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chinese-vermilion to-chinese-amber flex items-center justify-center">
                <span className="text-white font-bold text-lg">針</span>
              </div>
              <span className="text-gray-400">
                {lang === 'zh' ? '針灸理論可視化' : 'Acupuncture Theory Visualization'}
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              {lang === 'zh' 
                ? '本網頁僅供教育參考，不構成醫療建議。如有健康問題，請諮詢專業醫師。'
                : 'This website is for educational purposes only and does not constitute medical advice. Please consult a qualified healthcare professional for any health concerns.'}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
