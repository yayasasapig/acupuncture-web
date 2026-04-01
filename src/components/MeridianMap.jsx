import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { meridians, extraMeridians } from '../data/meridians';
import { Info, RotateCcw, Eye, EyeOff } from 'lucide-react';

const MeridianMap = () => {
  const { t, i18n } = useTranslation();
  const [view, setView] = useState('front');
  const [selectedMeridian, setSelectedMeridian] = useState(null);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [showAll, setShowAll] = useState(true);
  const [showExtra, setShowExtra] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allMeridians = { ...meridians, ...extraMeridians };

  const filteredMeridians = () => {
    if (selectedCategory === 'all') {
      return showExtra ? allMeridians : meridians;
    } else if (selectedCategory === 'twelve') {
      return meridians;
    } else if (selectedCategory === 'extra') {
      return extraMeridians;
    }
    return allMeridians;
  };

  const getMeridiansForView = () => {
    const filtered = filteredMeridians();
    const result = {};
    Object.entries(filtered).forEach(([key, meridian]) => {
      if (view === 'front' && meridian.route === 'front') {
        result[key] = meridian;
      } else if (view === 'back' && meridian.route === 'back') {
        result[key] = meridian;
      } else if (view === 'front' && key === 'conception') {
        result[key] = meridian;
      } else if (view === 'back' && key === 'governor') {
        result[key] = meridian;
      }
    });
    return result;
  };

  const displayedMeridians = getMeridiansForView();

  return (
    <section id="meridian" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('meridian.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('meridian.subtitle')}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex bg-dark-card rounded-lg p-1">
            <button
              onClick={() => setView('front')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === 'front' ? 'bg-chinese-jade text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('meridian.frontView')}
            </button>
            <button
              onClick={() => setView('back')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === 'back' ? 'bg-chinese-jade text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('meridian.backView')}
            </button>
          </div>

          <div className="flex bg-dark-card rounded-lg p-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === 'all' ? 'bg-chinese-indigo text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('meridian.allMeridians')}
            </button>
            <button
              onClick={() => setSelectedCategory('twelve')}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === 'twelve' ? 'bg-chinese-indigo text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('meridian.twelveMeridians')}
            </button>
            <button
              onClick={() => setSelectedCategory('extra')}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === 'extra' ? 'bg-chinese-indigo text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('meridian.eightExtra')}
            </button>
          </div>
        </div>

        {/* Meridian selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(allMeridians).map(([key, meridian]) => (
            <button
              key={key}
              onClick={() => setSelectedMeridian(selectedMeridian === key ? null : key)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedMeridian === key
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-dark-bg'
                  : 'opacity-60 hover:opacity-100'
              }`}
              style={{ 
                backgroundColor: `${meridian.color}30`,
                color: meridian.color,
                borderColor: meridian.color
              }}
            >
              {meridian.name[i18n.language]}
            </button>
          ))}
        </div>

        {/* Body Map */}
        <div className="relative bg-dark-card rounded-2xl p-8 border border-dark-border">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* SVG Body Map */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 80 280" className="w-full max-w-md h-auto">
                {/* Body silhouette */}
                <defs>
                  <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2d3a4f" />
                    <stop offset="100%" stopColor="#1a2332" />
                  </linearGradient>
                  {Object.values(allMeridians).map((m) => (
                    <filter key={m.id} id={`glow-${m.id}`}>
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  ))}
                </defs>

                {/* Body outline */}
                <path
                  d="M40 5 
                     C45 5, 48 8, 48 15 
                     L48 25 C55 25, 62 30, 65 40 L70 75 
                     L62 78 L58 55 
                     L58 75 
                     C58 85, 62 90, 62 90 
                     L65 160 
                     C65 165, 62 170, 58 170 
                     L55 170 L55 175 
                     L58 250 
                     C58 260, 55 265, 52 265 
                     L52 270 
                     L48 270 
                     L48 265 
                     L45 265 
                     L48 270 
                     L42 270 
                     L38 270 
                     L35 265 
                     L35 250 
                     L38 175 
                     L38 170 
                     L35 170 
                     C31 170, 28 165, 28 160 
                     L31 90 
                     C31 90, 35 85, 35 75 
                     L35 55 
                     L31 78 
                     L25 75 
                     L30 40 
                     C33 30, 38 25, 45 25 
                     L45 15 
                     C45 8, 48 5, 40 5 Z"
                  fill="url(#bodyGradient)"
                  stroke="#3d4a5f"
                  strokeWidth="0.5"
                />

                {/* Meridian lines */}
                {Object.entries(displayedMeridians).map(([key, meridian]) => {
                  const isActive = !selectedMeridian || selectedMeridian === key;
                  const opacity = selectedMeridian ? (isActive ? 1 : 0.2) : (showAll ? 0.7 : 0.2);
                  
                  return meridian.points.slice(0, -1).map((point, i) => {
                    const next = meridian.points[i + 1];
                    if (!next) return null;
                    
                    return (
                      <motion.line
                        key={`${point.id}-${next.id}`}
                        x1={point.x}
                        y1={point.y}
                        x2={next.x}
                        y2={next.y}
                        stroke={meridian.color}
                        strokeWidth={isActive ? 2 : 1}
                        opacity={opacity}
                        filter={isActive ? `url(#glow-${meridian.id})` : 'none'}
                        className="transition-opacity"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    );
                  });
                })}

                {/* Acupoints */}
                {Object.entries(displayedMeridians).map(([key, meridian]) => {
                  const isActive = !selectedMeridian || selectedMeridian === key;
                  
                  return meridian.points.map((point) => (
                    <motion.g
                      key={point.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint({ ...point, meridian })}
                      onMouseLeave={() => setHoveredPoint(null)}
                      onClick={() => setSelectedMeridian(selectedMeridian === key ? null : key)}
                    >
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={isActive ? 3 : 2}
                        fill={isActive ? meridian.color : '#666'}
                        stroke={isActive ? '#fff' : '#444'}
                        strokeWidth="0.5"
                        opacity={isActive ? 1 : 0.4}
                        className="transition-all"
                        style={{ filter: isActive ? `drop-shadow(0 0 4px ${meridian.color})` : 'none' }}
                      />
                    </motion.g>
                  ));
                })}
              </svg>
            </div>

            {/* Info panel */}
            <div className="lg:w-80">
              <AnimatePresence mode="wait">
                {hoveredPoint ? (
                  <motion.div
                    key={hoveredPoint.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-dark-bg rounded-xl p-6 border border-dark-border"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: hoveredPoint.meridian.color }}
                      />
                      <h3 className="text-xl font-semibold text-white">
                        {hoveredPoint.name[i18n.language]}
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-500">{t('meridian.location')}:</span>
                        <p className="text-gray-300 mt-1">{hoveredPoint.desc[i18n.language]}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">{hoveredPoint.meridian.name[i18n.language]}:</span>
                        <p className="text-gray-300 mt-1">
                          {hoveredPoint.meridian.functions[i18n.language]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : selectedMeridian && allMeridians[selectedMeridian] ? (
                  <motion.div
                    key={selectedMeridian}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-dark-bg rounded-xl p-6 border border-dark-border"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: allMeridians[selectedMeridian].color }}
                      />
                      <h3 className="text-xl font-semibold text-white">
                        {allMeridians[selectedMeridian].name[i18n.language]}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {allMeridians[selectedMeridian].functions[i18n.language]}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-gray-500 text-sm font-medium">
                        {i18n.language === 'zh' ? '主要穴位' : 'Key Acupoints'}
                      </h4>
                      {allMeridians[selectedMeridian].points.map((point) => (
                        <div
                          key={point.id}
                          className="flex justify-between items-center py-2 border-b border-dark-border last:border-0"
                        >
                          <span className="text-white">{point.name[i18n.language]}</span>
                          <span className="text-gray-500 text-sm">{point.desc[i18n.language]}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-dark-bg rounded-xl p-6 border border-dark-border text-center"
                  >
                    <Info className="mx-auto mb-3 text-gray-500" size={32} />
                    <p className="text-gray-400 text-sm">
                      {t('common.hoverForDetails')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MeridianMap;
