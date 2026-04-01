import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ziwuHours } from '../data/ziwu';
import { meridians } from '../data/meridians';
import { Clock, Sun, Moon, Play, RotateCcw } from 'lucide-react';

const ZiwuLiuzhu = () => {
  const { t, i18n } = useTranslation();
  const [currentHour, setCurrentHour] = useState(() => {
    const now = new Date();
    return now.getHours();
  });
  const [isLive, setIsLive] = useState(true);
  const [selectedHour, setSelectedHour] = useState(null);

  const getCurrentShichen = () => {
    let hour = currentHour;
    if (hour < 1) return 0;
    if (hour < 3) return 1;
    if (hour < 5) return 2;
    if (hour < 7) return 3;
    if (hour < 9) return 4;
    if (hour < 11) return 5;
    if (hour < 13) return 6;
    if (hour < 15) return 7;
    if (hour < 17) return 8;
    if (hour < 19) return 9;
    if (hour < 21) return 10;
    return 11;
  };

  const activeIndex = isLive ? getCurrentShichen() : (selectedHour ?? getCurrentShichen());
  const activeHour = ziwuHours[activeIndex];

  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);
    return () => clearInterval(interval);
  }, [isLive]);

  const handleHourClick = (index) => {
    setIsLive(false);
    setSelectedHour(index);
  };

  const resetToLive = () => {
    setIsLive(true);
    setSelectedHour(null);
    setCurrentHour(new Date().getHours());
  };

  const getHourAngle = (index) => {
    return (index * 30) - 90;
  };

  const getMeridianColor = (meridianKey) => {
    return meridians[meridianKey]?.color || '#666';
  };

  return (
    <section id="ziwu" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('ziwu.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('ziwu.subtitle')}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={resetToLive}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isLive
                ? 'bg-chinese-vermilion/20 text-chinese-vermilion border border-chinese-vermilion/50'
                : 'bg-dark-card text-gray-400 border border-dark-border hover:text-white'
            }`}
          >
            {isLive ? <Play size={16} className="animate-pulse" /> : <RotateCcw size={16} />}
            {t('ziwu.currentTime')}
          </button>
        </div>

        {/* Clock and cards */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Clock */}
          <div className="relative w-full max-w-md">
            <svg viewBox="0 0 300 300" className="w-full">
              <defs>
                <filter id="clockGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Clock face */}
              <circle cx="150" cy="150" r="140" fill="#1a2332" stroke="#2d3a4f" strokeWidth="2" />
              <circle cx="150" cy="150" r="120" fill="none" stroke="#2d3a4f" strokeWidth="1" />

              {/* Hour markers */}
              {ziwuHours.map((hour, i) => {
                const angle = getHourAngle(i);
                const isActive = i === activeIndex;
                const x = 150 + 100 * Math.cos((angle * Math.PI) / 180);
                const y = 150 + 100 * Math.sin((angle * Math.PI) / 180);
                const labelX = 150 + 125 * Math.cos((angle * Math.PI) / 180);
                const labelY = 150 + 125 * Math.sin((angle * Math.PI) / 180);

                return (
                  <g key={hour.id} className="cursor-pointer" onClick={() => handleHourClick(i)}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? 20 : 16}
                      fill={isActive ? getMeridianColor(hour.meridianKey) : '#2d3a4f'}
                      stroke={isActive ? '#fff' : '#3d4a5f'}
                      strokeWidth="2"
                      filter={isActive ? 'url(#clockGlow)' : 'none'}
                      className="transition-all duration-300"
                    />
                    <text
                      x={x}
                      y={y + 1}
                      textAnchor="middle"
                      className="fill-white text-[10px] font-bold pointer-events-none"
                    >
                      {hour.name[i18n.language]}
                    </text>
                    <text
                      x={labelX}
                      y={labelY + 4}
                      textAnchor="middle"
                      className={`fill-gray-400 text-[8px] pointer-events-none`}
                    >
                      {hour.hours}
                    </text>
                  </g>
                );
              })}

              {/* Center info */}
              <circle cx="150" cy="150" r="45" fill="#0f1419" stroke="#2d3a4f" strokeWidth="1" />
              <text x="150" y="142" textAnchor="middle" className="fill-gray-400 text-[10px]">
                {activeHour.hours}
              </text>
              <text x="150" y="162" textAnchor="middle" className="fill-white text-[14px] font-bold">
                {activeHour.name[i18n.language]}
              </text>
            </svg>

            {/* Current meridian indicator */}
            <motion.div
              key={activeIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${getMeridianColor(activeHour.meridianKey)}20` }}
              >
                <div className="text-center">
                  <p className="text-xs text-gray-400">{activeHour.meridian[i18n.language]}</p>
                  <p className="text-sm font-bold" style={{ color: getMeridianColor(activeHour.meridianKey) }}>
                    {activeHour.name[i18n.language]}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info Cards */}
          <div className="lg:w-96 w-full space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-dark-card rounded-xl p-6 border border-dark-border"
                style={{ borderColor: `${getMeridianColor(activeHour.meridianKey)}40` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: `${getMeridianColor(activeHour.meridianKey)}30`, color: getMeridianColor(activeHour.meridianKey) }}
                    >
                      {activeHour.name[i18n.language]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {activeHour.name[i18n.language]}時
                      </h3>
                      <p className="text-gray-400 text-sm">{activeHour.hours}</p>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: `${getMeridianColor(activeHour.meridianKey)}20`, color: getMeridianColor(activeHour.meridianKey) }}
                  >
                    {activeHour.meridian[i18n.language]}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-dark-bg rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun size={16} className="text-chinese-amber" />
                      <span className="text-gray-500 text-sm">{t('ziwu.health')}</span>
                    </div>
                    <p className="text-white font-medium">
                      {activeHour.health[i18n.language]}
                    </p>
                  </div>

                  <div className="bg-dark-bg rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-chinese-vermilion" />
                      <span className="text-gray-500 text-sm">{t('ziwu.symptoms')}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeHour.symptoms[i18n.language].map((symptom, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-chinese-vermilion/10 text-chinese-vermilion rounded-full text-sm"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-dark-bg rounded-lg p-4">
                    <span className="text-gray-500 text-sm block mb-2">{t('ziwu.acupoints')}</span>
                    <div className="flex flex-wrap gap-2">
                      {activeHour.acupoints[i18n.language].map((point, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-3 py-1 bg-chinese-jade/10 text-chinese-jade rounded-full text-sm"
                        >
                          {point}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Hour cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            {i18n.language === 'zh' ? '十二時辰養生表' : '12 Branches Health Guide'}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ziwuHours.map((hour, i) => {
              const isActive = i === activeIndex;
              const color = getMeridianColor(hour.meridianKey);
              
              return (
                <motion.button
                  key={hour.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleHourClick(i)}
                  className={`relative p-4 rounded-xl text-left transition-all ${
                    isActive ? 'ring-2' : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: isActive ? `${color}20` : '#1a2332',
                    borderColor: color,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    ringColor: color
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: isActive ? color : '#666' }}
                    >
                      {hour.name[i18n.language]}
                    </span>
                    {i % 2 === 0 ? <Sun size={14} className="text-chinese-amber" /> : <Moon size={14} className="text-chinese-indigo" />}
                  </div>
                  <p className="text-xs text-gray-400 mb-1">{hour.hours}</p>
                  <p className="text-sm font-medium" style={{ color: isActive ? color : '#999' }}>
                    {hour.meridian[i18n.language]}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ZiwuLiuzhu;
