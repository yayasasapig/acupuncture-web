export const fiveElements = {
  wood: {
    id: 'wood',
    name: { zh: '木', en: 'Wood' },
    color: '#4CAF50',
    organ: { zh: '肝（膽）', en: 'Liver (Gallbladder)' },
    season: { zh: '春季', en: 'Spring' },
    colorAttr: { zh: '青色', en: 'Green' },
    taste: { zh: '酸', en: 'Sour' },
    emotion: { zh: '怒', en: 'Anger' },
    orifice: { zh: '目', en: 'Eyes' },
    functions: { zh: '藏血、主疏泄', en: 'Stores Blood, Regulates Flow' },
    generating: 'fire',
    overcoming: 'earth',
    position: { x: 50, y: 15 }
  },
  fire: {
    id: 'fire',
    name: { zh: '火', en: 'Fire' },
    color: '#f44336',
    organ: { zh: '心（小腸）', en: 'Heart (Small Intestine)' },
    season: { zh: '夏季', en: 'Summer' },
    colorAttr: { zh: '赤色', en: 'Red' },
    taste: { zh: '苦', en: 'Bitter' },
    emotion: { zh: '喜', en: 'Joy' },
    orifice: { zh: '舌', en: 'Tongue' },
    functions: { zh: '藏神、主血脈', en: 'Stores Spirit, Governs Blood' },
    generating: 'earth',
    overcoming: 'metal',
    position: { x: 85, y: 35 }
  },
  earth: {
    id: 'earth',
    name: { zh: '土', en: 'Earth' },
    color: '#FFC107',
    organ: { zh: '脾（胃）', en: 'Spleen (Stomach)' },
    season: { zh: '長夏', en: 'Late Summer' },
    colorAttr: { zh: '黃色', en: 'Yellow' },
    taste: { zh: '甘', en: 'Sweet' },
    emotion: { zh: '思', en: 'Worry' },
    orifice: { zh: '口', en: 'Mouth' },
    functions: { zh: '運化、統血', en: 'Transforms, Controls Blood' },
    generating: 'metal',
    overcoming: 'water',
    position: { x: 85, y: 65 }
  },
  metal: {
    id: 'metal',
    name: { zh: '金', en: 'Metal' },
    color: '#9e9e9e',
    organ: { zh: '肺（大腸）', en: 'Lung (Large Intestine)' },
    season: { zh: '秋季', en: 'Autumn' },
    colorAttr: { zh: '白色', en: 'White' },
    taste: { zh: '辛', en: 'Pungent' },
    emotion: { zh: '悲', en: 'Sadness' },
    orifice: { zh: '鼻', en: 'Nose' },
    functions: { zh: '主氣、司呼吸', en: 'Governs Qi, Respiration' },
    generating: 'water',
    overcoming: 'wood',
    position: { x: 50, y: 85 }
  },
  water: {
    id: 'water',
    name: { zh: '水', en: 'Water' },
    color: '#2196F3',
    organ: { zh: '腎（膀胱）', en: 'Kidney (Bladder)' },
    season: { zh: '冬季', en: 'Winter' },
    colorAttr: { zh: '黑色', en: 'Black' },
    taste: { zh: '鹹', en: 'Salty' },
    emotion: { zh: '恐', en: 'Fear' },
    orifice: { zh: '耳', en: 'Ears' },
    functions: { zh: '藏精、主水', en: 'Stores Essence, Governs Water' },
    generating: 'wood',
    overcoming: 'fire',
    position: { x: 15, y: 50 }
  }
};

export const generatingCycle = ['wood', 'fire', 'earth', 'metal', 'water'];
export const overcomingCycle = ['wood', 'earth', 'water', 'fire', 'metal'];
