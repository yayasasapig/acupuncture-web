import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { schools } from '../data/schools';
import {
  BookOpen, Scroll, Star, Target, Zap, Clock,
  ChevronDown, ChevronUp, X, Users, CalendarDays, FileText, Sparkles
} from 'lucide-react';

const iconMap = {
  BookOpen, Scroll, Star, Target, Zap, Clock
};

const SchoolsOverview = () => {
  const { t, i18n } = useTranslation();
  const [selectedSchool, setSelectedSchool] = useState(null);
  const isZh = i18n.language === 'zh';

  const schoolLabels = [
    { zh: '傳統經絡派', en: 'Traditional Meridian' },
    { zh: '金元四大家', en: 'Jin-Yuan Four Schools' },
    { zh: '董氏針灸', en: 'Dong\'s Acupuncture' },
    { zh: '微針系統', en: 'Microsystems' },
    { zh: '現代理論', en: 'Modern Theories' },
    { zh: '時間醫學', en: 'Chrono Medicine' },
  ];

  const getLabel = (index) => isZh ? schoolLabels[index].zh : schoolLabels[index].en;

  return (
    <section id="schools" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-chinese-jade/10 rounded-full mb-6">
            <Sparkles className="text-chinese-jade" size={16} />
            <span className="text-chinese-jade text-sm font-medium">
              {isZh ? '針灸流派總覽' : 'Acupuncture Schools Overview'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isZh ? '針灸主要學派' : 'Major Acupuncture Schools'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {isZh
              ? '從《黃帝內經》到現代理論，了解針灸學兩千年的流派演變與發展'
              : 'From Huangdi Neijing to modern theory — explore two millennia of acupuncture school evolution'}
          </p>
        </motion.div>

        {/* School Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school, index) => {
            const Icon = iconMap[school.icon] || BookOpen;
            const isExpanded = selectedSchool === school.id;

            return (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className="relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card cursor-pointer transition-all duration-300 hover:border-opacity-60"
                  style={{ borderColor: isExpanded ? school.color : undefined }}
                  onClick={() => setSelectedSchool(isExpanded ? null : school.id)}
                >
                  {/* Color accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                    style={{ backgroundColor: school.color }}
                  />

                  <div className="p-6 pt-7">
                    {/* Icon + Title row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${school.color}20` }}
                      >
                        <Icon size={24} style={{ color: school.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {getLabel(index)}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {isZh ? school.founders.zh : school.founders.en}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 mb-4">
                      <CalendarDays size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-500">
                        {isZh ? school.period.zh : school.period.en}
                      </span>
                    </div>

                    {/* Preview text */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {isZh
                        ? school.coreTheory.zh
                        : school.coreTheory.en}
                    </p>

                    {/* Expand toggle */}
                    <div className="flex items-center justify-between">
                      <div
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${school.color}15`,
                          color: school.color
                        }}
                      >
                        {isZh ? '點擊展開' : 'Click to expand'}
                      </div>
                      {isExpanded
                        ? <ChevronUp size={18} className="text-gray-500" />
                        : <ChevronDown size={18} className="text-gray-500" />
                      }
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Detail Panel */}
        <AnimatePresence>
          {selectedSchool && (() => {
            const school = schools.find(s => s.id === selectedSchool);
            const index = schools.findIndex(s => s.id === selectedSchool);
            const Icon = iconMap[school.icon] || BookOpen;
            if (!school) return null;

            return (
              <motion.div
                key={selectedSchool}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <div
                  className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden"
                  style={{ borderColor: `${school.color}40` }}
                >
                  {/* Panel Header */}
                  <div
                    className="px-8 py-6 flex items-center gap-4"
                    style={{ backgroundColor: `${school.color}10` }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${school.color}25` }}
                    >
                      <Icon size={28} style={{ color: school.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{getLabel(index)}</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {isZh ? school.founders.zh : school.founders.en}
                        {' · '}
                        {isZh ? school.period.zh : school.period.en}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedSchool(null)}
                      className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center hover:bg-dark-border transition-colors"
                    >
                      <X size={18} className="text-gray-400" />
                    </button>
                  </div>

                  {/* Panel Body */}
                  <div className="p-8 space-y-8">
                    {/* Core Theory */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FileText size={16} style={{ color: school.color }} />
                        <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: school.color }}>
                          {isZh ? '核心理論' : 'Core Theory'}
                        </h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base">
                        {isZh ? school.coreTheory.zh : school.coreTheory.en}
                      </p>
                    </div>

                    {/* Key Texts */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={16} style={{ color: school.color }} />
                        <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: school.color }}>
                          {isZh ? '代表典籍' : 'Key Texts'}
                        </h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base">
                        {isZh ? school.texts.zh : school.texts.en}
                      </p>
                    </div>

                    {/* Techniques */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles size={16} style={{ color: school.color }} />
                        <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: school.color }}>
                          {isZh ? '主要技法' : 'Key Techniques'}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(isZh ? school.techniques.zh : school.techniques.en).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-full text-sm font-medium border"
                            style={{
                              backgroundColor: `${school.color}10`,
                              borderColor: `${school.color}30`,
                              color: school.color
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sub-schools (if any) */}
                    {(school.subSchools || school.subSystems) && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={16} style={{ color: school.color }} />
                          <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: school.color }}>
                            {isZh ? '子學派' : 'Sub-Schools'}
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {(school.subSchools || school.subSystems).map((sub, i) => (
                            <div
                              key={i}
                              className="p-4 rounded-xl border border-dark-border bg-dark-bg/50"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: sub.color || school.color }}
                                />
                                <h5 className="text-white font-semibold text-sm">
                                  {isZh ? sub.name.zh : sub.name.en}
                                </h5>
                              </div>
                              {sub.founder && (
                                <p className="text-gray-400 text-xs mb-1">
                                  {isZh ? sub.founder.zh : sub.founder.en}
                                </p>
                              )}
                              {sub.description && (
                                <p className="text-gray-400 text-xs mb-1">
                                  {isZh ? sub.description.zh : sub.description.en}
                                </p>
                              )}
                              <p className="text-gray-300 text-xs leading-relaxed">
                                {isZh ? sub.core.zh : sub.core.en}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features Summary */}
                    <div
                      className="p-5 rounded-xl border"
                      style={{
                        backgroundColor: `${school.color}08`,
                        borderColor: `${school.color}25`
                      }}
                    >
                      <p className="text-gray-300 leading-relaxed italic">
                        "{isZh ? school.features.zh : school.features.en}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SchoolsOverview;
