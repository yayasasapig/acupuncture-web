export const ziwuHours = [
  {
    id: 'zi',
    branch: 1,
    name: { zh: '子', en: 'Zi' },
    hours: '23:00-01:00',
    meridian: { zh: '膽經', en: 'Gallbladder' },
    meridianKey: 'gallbladder',
    health: { zh: '熟睡養膽', en: 'Deep Sleep for Gallbladder' },
    symptoms: { 
      zh: ['膽怯', '焦慮', '偏頭痛'], 
      en: ['Timidity', 'Anxiety', 'Migraine'] 
    },
    acupoints: { zh: ['瞳子髎', '風池', '肩井', '環跳', '陽陵泉', '光明', '懸鐘'], en: ['Tongziliao', 'Fengchi', 'Jianjing', 'Huantiao', 'Yanglingquan', 'Guangming', 'Xuanzhong'] }
  },
  {
    id: 'chou',
    branch: 2,
    name: { zh: '丑', en: 'Chou' },
    hours: '01:00-03:00',
    meridian: { zh: '肝經', en: 'Liver' },
    meridianKey: 'liver',
    health: { zh: '深度睡眠', en: 'Deep Sleep' },
    symptoms: { 
      zh: ['肝火旺盛', '易怒', '眼澀'], 
      en: ['Liver Fire', 'Irritability', 'Dry Eyes'] 
    },
    acupoints: { zh: ['大敦', '行間', '太衝', '蠡溝', '章門', '期門'], en: ['Dadun', 'Xingjian', 'Taichong', 'Ligou', 'Zhangmen', 'Qimen'] }
  },
  {
    id: 'yin',
    branch: 3,
    name: { zh: '寅', en: 'Yin' },
    hours: '03:00-05:00',
    meridian: { zh: '肺經', en: 'Lung' },
    meridianKey: 'lung',
    health: { zh: '肺重新分配氣血', en: 'Lung Redistributes Qi & Blood' },
    symptoms: { 
      zh: ['咳嗽', '氣喘', '呼吸不暢'], 
      en: ['Cough', 'Asthma', 'Breathing Issues'] 
    },
    acupoints: { zh: ['中府', '尺澤', '列缺', '太淵', '少商'], en: ['Zhongfu', 'Chize', 'Lieque', 'Taiyuan', 'Shaoshang'] }
  },
  {
    id: 'mao',
    branch: 4,
    name: { zh: '卯', en: 'Mao' },
    hours: '05:00-07:00',
    meridian: { zh: '大腸經', en: 'Large Intestine' },
    meridianKey: 'largeIntestine',
    health: { zh: '排便', en: 'Bowel Movement' },
    symptoms: { 
      zh: ['便秘', '腹瀉', '痔瘡'], 
      en: ['Constipation', 'Diarrhea', 'Hemorrhoids'] 
    },
    acupoints: { zh: ['商陽', '合谷', '手三里', '曲池', '迎香'], en: ['Shangyang', 'Hegu', 'Shousanli', 'Quchi', 'Yingxiang'] }
  },
  {
    id: 'chen',
    branch: 5,
    name: { zh: '辰', en: 'Chen' },
    hours: '07:00-09:00',
    meridian: { zh: '胃經', en: 'Stomach' },
    meridianKey: 'stomach',
    health: { zh: '進食', en: 'Eating' },
    symptoms: { 
      zh: ['胃痛', '消化不良', '食慾不振'], 
      en: ['Stomach Pain', 'Indigestion', 'Loss of Appetite'] 
    },
    acupoints: { zh: ['承泣', '天樞', '足三里', '豐隆', '內庭'], en: ['Chengqi', 'Tianshu', 'Zusanli', 'Fenglong', 'Neiting'] }
  },
  {
    id: 'si',
    branch: 6,
    name: { zh: '巳', en: 'Si' },
    hours: '09:00-11:00',
    meridian: { zh: '脾經', en: 'Spleen' },
    meridianKey: 'spleen',
    health: { zh: '運化吸收', en: 'Transport & Absorption' },
    symptoms: { 
      zh: ['腹脹', '乏力', '濕氣重'], 
      en: ['Bloating', 'Fatigue', 'Dampness'] 
    },
    acupoints: { zh: ['隱白', '太白', '公孫', '三陰交', '血海'], en: ['Yinbai', 'Taibai', 'Gongsun', 'Sanyinjiao', 'Xuehai'] }
  },
  {
    id: 'wu',
    branch: 7,
    name: { zh: '午', en: 'Wu' },
    hours: '11:00-13:00',
    meridian: { zh: '心經', en: 'Heart' },
    meridianKey: 'heart',
    health: { zh: '靜養', en: 'Rest' },
    symptoms: { 
      zh: ['心悸', '失眠', '口舌生瘡'], 
      en: ['Palpitations', 'Insomnia', 'Mouth Ulcers'] 
    },
    acupoints: { zh: ['極泉', '少海', '通里', '神門', '少衝'], en: ['Jiquan', 'Shaohai', 'Tongli', 'Shenmen', 'Shaochong'] }
  },
  {
    id: 'wei',
    branch: 8,
    name: { zh: '未', en: 'Wei' },
    hours: '13:00-15:00',
    meridian: { zh: '小腸經', en: 'Small Intestine' },
    meridianKey: 'smallIntestine',
    health: { zh: '分清泌濁', en: 'Separating Clean & Turbid' },
    symptoms: { 
      zh: ['腹瀉', '消化不良', '肩背痛'], 
      en: ['Diarrhea', 'Indigestion', 'Shoulder Pain'] 
    },
    acupoints: { zh: ['少澤', '後溪', '養老', '小海', '聽宮'], en: ['Shaoze', 'Houxi', 'Yanglao', 'Xiaohai', 'Tinggong'] }
  },
  {
    id: 'shen',
    branch: 9,
    name: { zh: '申', en: 'Shen' },
    hours: '15:00-17:00',
    meridian: { zh: '膀胱經', en: 'Bladder' },
    meridianKey: 'bladder',
    health: { zh: '排洩', en: 'Excretion' },
    symptoms: { 
      zh: ['尿頻', '腰痛', '背痛'], 
      en: ['Frequent Urination', 'Lower Back Pain'] 
    },
    acupoints: { zh: ['睛明', '肺俞', '心俞', '肝俞', '脾俞', '腎俞', '委中', '承山'], en: ['Jingming', 'Feishu', 'Xinshu', 'Ganshu', 'Pishu', 'Shenshu', 'Weizhong', 'Chengshan'] }
  },
  {
    id: 'you',
    branch: 10,
    name: { zh: '酉', en: 'You' },
    hours: '17:00-19:00',
    meridian: { zh: '腎經', en: 'Kidney' },
    meridianKey: 'kidney',
    health: { zh: '補腎黃金時段', en: 'Golden Time for Kidney' },
    symptoms: { 
      zh: ['腎虛', '腰膝酸軟', '耳鳴'], 
      en: ['Kidney Deficiency', 'Knee Pain', 'Tinnitus'] 
    },
    acupoints: { zh: ['湧泉', '太溪', '大鐘', '照海', '復溜'], en: ['Yongquan', 'Taixi', 'Dazhong', 'Zhaohai', 'Fuliu'] }
  },
  {
    id: 'xu',
    branch: 11,
    name: { zh: '戌', en: 'Xu' },
    hours: '19:00-21:00',
    meridian: { zh: '心包經', en: 'Pericardium' },
    meridianKey: 'pericardium',
    health: { zh: '輕鬆活動', en: 'Light Activity' },
    symptoms: { 
      zh: ['胸悶', '心律不整', '失眠'], 
      en: ['Chest Tightness', 'Arrhythmia', 'Insomnia'] 
    },
    acupoints: { zh: ['天池', '曲澤', '間使', '內關', '勞宮'], en: ['Tianchi', 'Quze', 'Jianshi', 'Neiguan', 'Laogong'] }
  },
  {
    id: 'hai',
    branch: 12,
    name: { zh: '亥', en: 'Hai' },
    hours: '21:00-23:00',
    meridian: { zh: '三焦經', en: 'Sanjiao' },
    meridianKey: 'sanjiao',
    health: { zh: '入睡', en: 'Time to Sleep' },
    symptoms: { 
      zh: ['免疫力下降', '內分泌失調'], 
      en: ['Low Immunity', 'Hormonal Imbalance'] 
    },
    acupoints: { zh: ['關衝', '中渚', '外關', '天井', '翳風'], en: ['Guanchong', 'Zhongzhu', 'Waiguan', 'Tianjing', 'Yifeng'] }
  }
];
