import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, Map, Hexagon, Clock, BookOpen } from 'lucide-react';

const Navigation = ({ currentLang, onLangChange }) => {
  const { t, i18n } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'meridian', label: t('nav.meridianMap'), icon: Map },
    { id: 'fiveelements', label: t('nav.fiveElements'), icon: Hexagon },
    { id: 'ziwu', label: t('nav.ziwuLiuzhu'), icon: Clock },
    { id: 'schools', label: t('nav.schoolsOverview'), icon: BookOpen },
  ];

  const toggleLang = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    onLangChange(newLang);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chinese-vermilion to-chinese-amber flex items-center justify-center">
              <span className="text-white font-bold text-lg">針</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-white">
                {i18n.language === 'zh' ? '針灸理論可視化' : 'Acupuncture Visualization'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-dark-card rounded-lg transition-colors"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </button>
            ))}

            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-chinese-jade/20 text-chinese-jade hover:bg-chinese-jade/30 rounded-lg transition-colors border border-chinese-jade/30"
            >
              <Globe size={16} />
              <span>{i18n.language === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-dark-border">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center gap-1 px-3 py-1 text-xs text-gray-400 hover:text-white"
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
