import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { fiveElements, generatingCycle, overcomingCycle } from '../data/fiveElements';
import { Sparkles, ArrowRight, Ban } from 'lucide-react';

const FiveElements = () => {
  const { t, i18n } = useTranslation();
  const [selectedElement, setSelectedElement] = useState(null);
  const [showCycle, setShowCycle] = useState('generating');

  const elements = Object.values(fiveElements);

  const getPosition = (index, total, radius) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { x, y };
  };

  const getGeneratingCyclePath = () => {
    const points = generatingCycle.map((el, i) => {
      const pos = getPosition(i, 5, 32);
      return `${pos.x},${pos.y}`;
    });
    return `M ${points.join(' L ')} Z`;
  };

  const getOvercomingCyclePath = () => {
    const order = ['wood', 'fire', 'earth', 'metal', 'water'];
    const points = order.map((el, i) => {
      const pos = getPosition(i, 5, 38);
      return `${pos.x},${pos.y}`;
    });
    return `M ${points.join(' L ')} Z`;
  };

  const getElementPosition = (elementId) => {
    const index = generatingCycle.indexOf(elementId);
    return getPosition(index, 5, 32);
  };

  const getOvercomingPosition = (elementId) => {
    const order = ['wood', 'fire', 'earth', 'metal', 'water'];
    const index = order.indexOf(elementId);
    return getPosition(index, 5, 38);
  };

  const getGeneratingArrow = (from, to) => {
    const fromPos = getElementPosition(from);
    const toPos = getElementPosition(to);
    const midX = (fromPos.x + toPos.x) / 2;
    const midY = (fromPos.y + toPos.y) / 2;
    return { from: fromPos, to: toPos, mid: { x: midX, y: midY } };
  };

  const getOvercomingArrow = (from, to) => {
    const fromPos = getOvercomingPosition(from);
    const toPos = getOvercomingPosition(to);
    const midX = (fromPos.x + toPos.x) / 2;
    const midY = (fromPos.y + toPos.y) / 2;
    return { from: fromPos, to: toPos, mid: { x: midX, y: midY } };
  };

  return (
    <section id="fiveelements" className="py-20 px-4 bg-dark-bg/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('fiveElements.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('fiveElements.subtitle')}
          </p>
        </div>

        {/* Cycle toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setShowCycle('generating')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              showCycle === 'generating'
                ? 'bg-green-600/20 text-green-400 border border-green-600/50'
                : 'bg-dark-card text-gray-400 border border-dark-border hover:text-white'
            }`}
          >
            <Sparkles size={18} />
            {t('fiveElements.generating')}
          </button>
          <button
            onClick={() => setShowCycle('overcoming')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              showCycle === 'overcoming'
                ? 'bg-red-600/20 text-red-400 border border-red-600/50'
                : 'bg-dark-card text-gray-400 border border-dark-border hover:text-white'
            }`}
          >
            <Ban size={18} />
            {t('fiveElements.overcoming')}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* SVG Diagram */}
          <div className="relative w-full max-w-2xl">
            <svg viewBox="0 0 100 100" className="w-full aspect-square">
              <defs>
                {elements.map((el) => (
                  <filter key={el.id} id={`glow-${el.id}`}>
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                ))}
              </defs>

              {/* Generating cycle path */}
              {showCycle === 'generating' && (
                <motion.path
                  d={getGeneratingCyclePath()}
                  fill="none"
                  stroke="url(#generatingGradient)"
                  strokeWidth="0.8"
                  strokeDasharray="2,1"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  filter="url(#glow-wood)"
                />
              )}

              {/* Overcoming cycle path */}
              {showCycle === 'overcoming' && (
                <motion.path
                  d={getOvercomingCyclePath()}
                  fill="none"
                  stroke="url(#overcomingGradient)"
                  strokeWidth="0.8"
                  strokeDasharray="2,1"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                />
              )}

              {/* Generating cycle arrows */}
              {showCycle === 'generating' && generatingCycle.map((el, i) => {
                const next = generatingCycle[(i + 1) % 5];
                const arrow = getGeneratingArrow(el, next);
                const angle = Math.atan2(arrow.to.y - arrow.from.y, arrow.to.x - arrow.from.x) * 180 / Math.PI;
                
                return (
                  <motion.g
                    key={`gen-${el}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <ArrowRight
                      x={arrow.mid.x - 2}
                      y={arrow.mid.y - 1.5}
                      width={4}
                      height={4}
                      fill="#4CAF50"
                      stroke="#4CAF50"
                      style={{ transform: `rotate(${angle}deg)`, transformOrigin: `${arrow.mid.x} ${arrow.mid.y}px` }}
                    />
                  </motion.g>
                );
              })}

              {/* Overcoming cycle lines (diagonal) */}
              {showCycle === 'overcoming' && (() => {
                const connections = [
                  { from: 'wood', to: 'earth' },
                  { from: 'fire', to: 'metal' },
                  { from: 'earth', to: 'water' },
                  { from: 'metal', to: 'wood' },
                  { from: 'water', to: 'fire' },
                ];
                
                return connections.map(({ from, to }) => {
                  const fromPos = getOvercomingPosition(from);
                  const toPos = getOvercomingPosition(to);
                  const midX = (fromPos.x + toPos.x) / 2;
                  const midY = (fromPos.y + toPos.y) / 2;
                  const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x) * 180 / Math.PI;
                  
                  return (
                    <motion.g
                      key={`over-${from}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.6, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <line
                        x1={fromPos.x}
                        y1={fromPos.y}
                        x2={toPos.x}
                        y2={toPos.y}
                        stroke="#f44336"
                        strokeWidth="0.5"
                        strokeDasharray="1,1"
                      />
                      <Ban
                        x={midX - 2}
                        y={midY - 2}
                        width={4}
                        height={4}
                        fill="#f44336"
                        stroke="none"
                        style={{ transform: `rotate(${angle}deg)`, transformOrigin: `${midX} ${midY}px` }}
                      />
                    </motion.g>
                  );
                });
              })()}

              {/* Center circle */}
              <circle cx="50" cy="50" r="12" fill="#1a2332" stroke="#2d3a4f" strokeWidth="0.5" />
              <text x="50" y="48" textAnchor="middle" className="fill-gray-500 text-[4px]">
                {i18n.language === 'zh' ? '五行' : 'Five'}
              </text>
              <text x="50" y="54" textAnchor="middle" className="fill-gray-500 text-[4px]">
                {i18n.language === 'zh' ? '相生相剋' : 'Elements'}
              </text>

              {/* Five element nodes */}
              {elements.map((el, i) => {
                const pos = getElementPosition(el.id);
                const isSelected = selectedElement === el.id;
                const isHighlighted = !selectedElement || isSelected;
                
                return (
                  <motion.g
                    key={el.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: 'spring' }}
                    className="cursor-pointer"
                    onClick={() => setSelectedElement(isSelected ? null : el.id)}
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 8 : 7}
                      fill={el.color}
                      stroke={isSelected ? '#fff' : el.color}
                      strokeWidth="0.5"
                      opacity={isHighlighted ? 1 : 0.3}
                      filter={isSelected ? `url(#glow-${el.id})` : 'none'}
                    />
                    <text
                      x={pos.x}
                      y={pos.y + 1}
                      textAnchor="middle"
                      className="fill-white text-[5px] font-bold pointer-events-none"
                    >
                      {el.name[i18n.language]}
                    </text>
                  </motion.g>
                );
              })}

              {/* Gradients */}
              <defs>
                <linearGradient id="generatingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4CAF50" />
                  <stop offset="100%" stopColor="#8BC34A" />
                </linearGradient>
                <linearGradient id="overcomingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f44336" />
                  <stop offset="100%" stopColor="#FF5722" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Info Panel */}
          <div className="lg:w-96 w-full">
            <AnimatePresence mode="wait">
              {selectedElement ? (
                <motion.div
                  key={selectedElement}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="bg-dark-card rounded-xl p-6 border border-dark-border"
                  style={{ borderColor: `${fiveElements[selectedElement].color}40` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{ backgroundColor: `${fiveElements[selectedElement].color}30`, color: fiveElements[selectedElement].color }}
                    >
                      {fiveElements[selectedElement].name[i18n.language]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {fiveElements[selectedElement].name[i18n.language]}
                      </h3>
                      <p className="text-gray-400">
                        {fiveElements[selectedElement].organ[i18n.language]}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-dark-bg rounded-lg p-3">
                      <p className="text-gray-500 text-xs mb-1">{t('fiveElements.season')}</p>
                      <p className="text-white font-medium">
                        {fiveElements[selectedElement].season[i18n.language]}
                      </p>
                    </div>
                    <div className="bg-dark-bg rounded-lg p-3">
                      <p className="text-gray-500 text-xs mb-1">{t('fiveElements.color')}</p>
                      <p className="text-white font-medium flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: fiveElements[selectedElement].color }}
                        />
                        {fiveElements[selectedElement].colorAttr[i18n.language]}
                      </p>
                    </div>
                    <div className="bg-dark-bg rounded-lg p-3">
                      <p className="text-gray-500 text-xs mb-1">{t('fiveElements.taste')}</p>
                      <p className="text-white font-medium">
                        {fiveElements[selectedElement].taste[i18n.language]}
                      </p>
                    </div>
                    <div className="bg-dark-bg rounded-lg p-3">
                      <p className="text-gray-500 text-xs mb-1">{t('fiveElements.emotion')}</p>
                      <p className="text-white font-medium">
                        {fiveElements[selectedElement].emotion[i18n.language]}
                      </p>
                    </div>
                  </div>

                  <div className="bg-dark-bg rounded-lg p-4 mb-4">
                    <p className="text-gray-500 text-xs mb-2">{t('fiveElements.orifice')}</p>
                    <p className="text-white">
                      {fiveElements[selectedElement].orifice[i18n.language]}
                    </p>
                  </div>

                  <div className="bg-dark-bg rounded-lg p-4">
                    <p className="text-gray-500 text-xs mb-2">{t('fiveElements.functions')}</p>
                    <p className="text-white">
                      {fiveElements[selectedElement].functions[i18n.language]}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-dark-card rounded-xl p-6 border border-dark-border text-center"
                >
                  <Sparkles className="mx-auto mb-3 text-chinese-amber" size={32} />
                  <p className="text-gray-400">
                    {t('common.clickToExplore')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Five zang organ radar chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-dark-card rounded-2xl p-8 border border-dark-border"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            {i18n.language === 'zh' ? '五臟功能雷達圖' : 'Five Zang Organs Function Radar'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {elements.map((el, i) => (
              <motion.div
                key={el.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-bg rounded-xl p-4 text-center"
                style={{ borderTop: `3px solid ${el.color}` }}
              >
                <h4 className="text-lg font-bold mb-2" style={{ color: el.color }}>
                  {el.name[i18n.language]}
                </h4>
                <p className="text-gray-400 text-xs mb-2">{el.organ[i18n.language]}</p>
                <p className="text-gray-300 text-sm">
                  {el.functions[i18n.language]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FiveElements;
