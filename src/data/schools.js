export const schools = [
  {
    id: 'traditional-meridian',
    icon: 'BookOpen',
    color: '#c94a4a',
    founders: { zh: '黃帝 / 歧伯', en: 'Yellow Emperor / Qi Bo' },
    period: { zh: '戰國至漢初', en: 'Warring States to Early Han' },
    texts: { zh: '《黃帝內經》《難經》《針灸甲乙經》', en: 'Huangdi Neijing, Nan Jing, Zhenjiu Jiayi Jing' },
    coreTheory: {
      zh: '以《黃帝內經》為根基，建構十四經絡系統（十二正經＋奇經八脈），以陰陽五行辯證，強調經絡是氣血運行通道，穴位是臟腑之氣輸注於體表的反應點。',
      en: 'Rooted in the Huangdi Neijing, the system establishes the 14-meridian network (12 regular + 8 extra channels), using Yin-Yang and Five Element diagnosis. Meridians are pathways for Qi and blood; acupoints are surface reflections of organ Qi.'
    },
    techniques: {
      zh: ['迎隨補瀉', '提插捻轉', '開闔補瀉', '呼吸補瀉'],
      en: ['Reinforcing-Reducing by Direction', 'Lift-Thrust-Twist', 'Opening-Closing Method', 'Breathing Method']
    },
    features: {
      zh: '強調「經絡所過，主治所及」，以經脈循行路線為選穴依據，是針灸學的根本理論體系。',
      en: 'Emphasizes "where the meridian passes, it treats what is there" — selecting acupoints based on meridian pathways. This is the foundational theory of acupuncture.'
    }
  },
  {
    id: 'jin-yuan-four',
    icon: 'Scroll',
    color: '#d4a04a',
    founders: { zh: '劉完素 / 張從正 / 李東垣 / 朱震亨', en: 'Liu Wansu / Zhang Congzheng / Li Dongyuan / Zhu Zhenheng' },
    period: { zh: '金元時期（12-14世紀）', en: 'Jin-Yuan Period (12th-14th Century)' },
    texts: { zh: '《素問玄機原病式》《儒門事親》《脾胃論》《丹溪心法》', en: 'Suwen Xuanji Yuanbingshi, Rumenshiqin, Piwei Lun, Danxi Xinfa' },
    coreTheory: {
      zh: '金元四大家各自提出不同病理觀點與治療主張：河間派重火熱、攻邪派重三法、補土派重脾胃、養陰派重陰虛，形成百家爭鳴的繁荣局面。',
      en: 'The Four Great Schools each proposed distinct pathological theories: the Hejian school focused on heat-fire; the Gongxie school emphasized three therapeutic methods; the Butu school prioritized spleen-stomach; the Yangyin school stressed Yin deficiency — creating a golden age of debate.'
    },
    techniques: {
      zh: ['寒涼瀉火', '汗吐下三法攻邪', '溫補脾胃', '滋陰降火'],
      en: ['Cooling and Draining Fire', 'Sweating-Vomiting-Purging', 'Warming and Tonifying Spleen-Stomach', 'Nourishing Yin, Lowering Fire']
    },
    features: {
      zh: '金元四大家雖各自偏重不同，但皆以《內經》為本，並在臨床實踐中不斷創新，奠定中醫內科學與針灸治療學的多元化發展基礎。',
      en: 'Though each school emphasized different aspects, all were rooted in the Neijing and innovated through clinical practice, laying the foundation for diversified development in TCM internal medicine and acupuncture therapeutics.'
    },
    subSchools: [
      {
        name: { zh: '河間派（火熱說）', en: 'Hejian School (Fire-Heat Theory)' },
        founder: { zh: '劉完素', en: 'Liu Wansu' },
        core: { zh: '病多從火化，六氣皆能化火，治療重寒涼', en: 'Illness often transforms into fire; all six Qi can produce fire; treatment emphasizes cold and cooling' },
        color: '#e57373'
      },
      {
        name: { zh: '攻邪派', en: 'Gongxie School' },
        founder: { zh: '張從正', en: 'Zhang Congzheng' },
        core: { zh: '病由邪生，主張汗、吐、下三法驅邪', en: 'Disease originates from pathogenic factors; advocates sweating, vomiting, and purging to expel pathogens' },
        color: '#ffb74d'
      },
      {
        name: { zh: '補土派', en: 'Butu School (Earth-Tonifying)' },
        founder: { zh: '李東垣', en: 'Li Dongyuan' },
        core: { zh: '脾胃為後天之本，補中益氣是治療核心', en: 'Spleen-stomach are the postnatal foundation; tonifying middle Qi is the core of treatment' },
        color: '#aed581'
      },
      {
        name: { zh: '養陰派', en: 'Yangyin School (Yin-Nourishing)' },
        founder: { zh: '朱震亨（丹溪）', en: 'Zhu Zhenheng (Danxi)' },
        core: { zh: '陽常有餘，陰常不足，治療重滋陰降火', en: 'Yang is often excessive; Yin is often deficient; treatment focuses on nourishing Yin and lowering fire' },
        color: '#4db6ac'
      }
    ]
  },
  {
    id: 'dong-taiwan',
    icon: 'Star',
    color: '#4a8c7a',
    founders: { zh: '董景昌（董氏針灸）', en: 'Dong Jingchang (Dong\'s Acupuncture)' },
    period: { zh: '1950年代至今', en: '1950s – Present' },
    texts: { zh: '《董氏針灸正經奇穴學》', en: 'Dong\'s Acupuncture: Zhengjing Qixue Xue' },
    coreTheory: {
      zh: '董景昌自創奇穴體系，迥異於傳統十四經絡，以「動氣針法」為特色，主張平補平瀉，取穴少而精，療效迅速。董氏奇穴分布於全身，許多穴位不在傳統經絡上，卻有獨特療效。',
      en: 'Dong Jingchang created a unique extraordinary acupoint system distinct from the traditional 14-meridian framework. His signature "Dongqi needling technique" uses even reinforcing-reducing methods with fewer, precisely selected points for rapid results. Many Dong\'s points lie outside conventional meridians yet deliver unique therapeutic effects.'
    },
    techniques: {
      zh: ['動氣針法', '倒馬針法', '董氏奇穴', '平補平瀉'],
      en: ['Dongqi Needling Technique', 'Daoma Needling (Horse-Reverse)', 'Dong\'s Extraordinary Points', 'Even Reinforcing-Reducing']
    },
    features: {
      zh: '董氏針灸在台灣及海外影響深遠，其「倒馬針法」以同部位相鄰兩三穴一起針刺，增強效果，是台灣針灸四大名家之首。',
      en: 'Dong\'s Acupuncture has profound influence in Taiwan and abroad. The "Daoma (horse-reverse) needling" — needling two or three adjacent points in the same region to enhance effect — marks it as the leading school among Taiwan\'s Four Great Acupuncture masters.'
    }
  },
  {
    id: 'micro-systems',
    icon: 'Target',
    color: '#6b4c7a',
    founders: { zh: 'Nogier / 朱明清 / 薄智雲 / 彭靜山', en: 'Nogier / Zhu Qingming / Bo Zhiyun / Peng Jingshan' },
    period: { zh: '1950年代至今', en: '1950s – Present' },
    texts: { zh: '《耳針療法》《頭針療法》《腹針療法》《眼針療法》', en: 'Auricular Acupuncture Therapy, Scalp Acupuncture, Abdominal Acupuncture, Eye Acupuncture' },
    coreTheory: {
      zh: '微針系統主張人體局部區域（如耳朵、頭部、腹部、眼睛）是全身的縮影，透過刺激這些區域可治療對應的遠端病變。這些系統各具特色，針刺深度與手法各異。',
      en: 'Microsystems theory holds that localized body regions — ear, scalp, abdomen, and eye — contain complete representations of the whole body. Stimulating these zones treats corresponding distant conditions. Each microsystem has unique characteristics, needling depth, and technique.'
    },
    techniques: {
      zh: ['耳針（Nogier系統）', '頭針（大腦皮層分區）', '腹針（神闕布氣）', '眼針（彭氏）'],
      en: ['Auricular (Nogier System)', 'Scalp (Cortex Mapping)', 'Abdominal (Shenque Qiqi)', 'Eye (Peng\'s Method)']
    },
    features: {
      zh: '耳針源於法國Nogier，結合中國發展成獨特系統；頭針則以朱氏、焦氏、方氏、國際頭針為代表，皆以大腦皮層功能分區為理論基礎；腹針無痛感為最大特色。',
      en: 'Auricular acupuncture originated from French Nogier and developed uniquely in China. Scalp acupuncture — represented by Zhu, Jiao, Fang, and international systems — is based on cerebral cortex functional mapping. Abdominal acupuncture\'s greatest feature is its painless approach.'
    },
    subSystems: [
      {
        name: { zh: '耳針', en: 'Auricular Acupuncture' },
        description: { zh: '法國Nogier倒置胎兒圖＋中國耳針', en: 'French Nogier inverted fetus map + Chinese ear acupuncture' },
        color: '#ce93d8'
      },
      {
        name: { zh: '頭針', en: 'Scalp Acupuncture' },
        description: { zh: '朱氏、焦氏、方氏、國際頭針（大脑皮層分區）', en: 'Zhu, Jiao, Fang, International scalp (cortex mapping)' },
        color: '#90caf9'
      },
      {
        name: { zh: '腹針', en: 'Abdominal Acupuncture' },
        description: { zh: '薄智雲「神闕布氣說」，無痛感', en: 'Bo Zhiyun\'s Shenque Qiqi theory — painless' },
        color: '#ffcc80'
      },
      {
        name: { zh: '眼針', en: 'Eye Acupuncture' },
        description: { zh: '彭氏眼針，取穴少而精', en: 'Peng\'s eye acupuncture — few precise points' },
        color: '#80cbc4'
      }
    ]
  },
  {
    id: 'modern-theories',
    icon: 'Zap',
    color: '#1976d2',
    founders: { zh: '王文遠 / 張釗漢 / 符仲華 / 西醫肌筋膜激痛點', en: 'Wang Wenyuan / Zhang Zhaohan / Fu Zhonghua / Myofascial Trigger Points' },
    period: { zh: '1970年代至今', en: '1970s – Present' },
    texts: { zh: '《平衡針灸學》《原始點療法》《浮針醫學》', en: 'Balance Acupuncture, Yuan Dian Dian Therapy, Fu\'s Subcutaneous Needling' },
    coreTheory: {
      zh: '現代理論學派融合中西醫學，以解剖學、神經學及筋膜理論為基礎，發展出強調立即見效、療程短暫的針法。這些學派重視中西醫結合，擺脫傳統經絡理論框架。',
      en: 'Modern theoretical schools integrate Western and Chinese medicine, grounding themselves in anatomy, neurology, and fascial theory to develop needling techniques that emphasize immediate effect and short treatment courses. These schools prioritize integrative medicine and move beyond traditional meridian frameworks.'
    },
    techniques: {
      zh: ['平衡針灸（王文遠）', '原始點（張釗漢）', '浮針（符仲華）', '乾針（西醫激痛點）', '針刀'],
      en: ['Balance Acupuncture (Wang)', 'Yuan Dian Dian (Zhang)', 'Fu\'s Subcutaneous Needling', 'Dry Needling (Trigger Points)', 'Acupotomy']
    },
    features: {
      zh: '平衡針灸以神經系統為突破口；原始點以「一條脊椎＋七處原始點」簡化治療；浮針在皮下疏鬆結締組織層操作；乾針直接刺激西醫認定的肌筋膜激痛點。',
      en: 'Balance acupuncture targets the nervous system; Yuan Dian Dian simplifies treatment through one spine plus seven primary points; Fu\'s needling operates in subcutaneous loose connective tissue; dry needling directly stimulates medically recognized myofascial trigger points.'
    }
  },
  {
    id: 'chrono-acupuncture',
    icon: 'Clock',
    color: '#00897b',
    founders: { zh: '傳統時間醫學 / 子午流注派', en: 'Traditional Chronomedicine / Ziwu Liuzhu School' },
    period: { zh: '唐宋時期（7-13世紀）', en: 'Tang-Song Period (7th-13th Century)' },
    texts: { zh: '《子午流注針經》《靈龜八法》', en: 'Ziwu Liuzhu Zhenjing, Linggui Bafa' },
    coreTheory: {
      zh: '時間醫學針灸根據人體氣血在十二經脈中的盛衰節律，配合天干地支陰陽五行，選擇最佳時機開穴治療。子午流注重視日時辰，靈龜八法則結合空間方位與時間。',
      en: 'Chronomedical acupuncture selects optimal timing for acupoint activation based on the ebb-flow rhythms of Qi and blood through the twelve meridians, combined with heavenly stems and earthly branches (Yin-Yang Five Elements). Ziwu Liuzhu emphasizes day-hour rhythms; Linggui Bafa integrates spatial orientation with time.'
    },
    techniques: {
      zh: ['子午流注按時開穴', '靈龜八法', '飛騰八法', '養生導引'],
      en: ['Ziwu Liuzhu Time-Based Point Selection', 'Linggui Bafa (Eight Methods)', 'Feiteng Bafa (Flying Ascension)', 'Yangsheng Daoyin']
    },
    features: {
      zh: '子午流注與靈龜八法強調「因時制宜」，在正確時辰刺激正確穴位，可獲事半功倍之效。現代研究亦證實人體生理節律與針灸療效密切相關。',
      en: 'Ziwu Liuzhu and Linggui Bafa emphasize "treating according to time" — stimulating the correct acupoint at the right time yields enhanced results. Modern research confirms that human physiological rhythms are closely related to acupuncture efficacy.'
    }
  }
];
