export const meridians = {
  lung: {
    id: 'lung',
    name: { zh: '肺經', en: 'Lung Meridian' },
    nameShort: { zh: '肺', en: 'LU' },
    color: '#c94a4a',
    route: 'front',
    points: [
      { id: 'lu1', name: { zh: '中府', en: 'Zhongfu' }, x: 28, y: 95, desc: { zh: '雲門下1寸', en: '1 cun below Yunmen' } },
      { id: 'lu5', name: { zh: '尺澤', en: 'Chize' }, x: 25, y: 175, desc: { zh: '肘橫紋橈側', en: 'Radial side of elbow crease' } },
      { id: 'lu7', name: { zh: '列缺', en: 'Lieque' }, x: 22, y: 215, desc: { zh: '腕橫紋上1.5寸', en: '1.5 cun above wrist crease' } },
      { id: 'lu9', name: { zh: '太淵', en: 'Taiyuan' }, x: 20, y: 235, desc: { zh: '腕橫紋橈側', en: 'Radial side of wrist crease' } },
      { id: 'lu11', name: { zh: '少商', en: 'Shaoshang' }, x: 18, y: 260, desc: { zh: '拇指橈側指甲旁', en: 'Thumb radial nail corner' } },
    ],
    functions: { zh: '主氣、司呼吸、主皮毛', en: 'Governs Qi, respiration, skin and hair' }
  },
  largeIntestine: {
    id: 'largeIntestine',
    name: { zh: '大腸經', en: 'Large Intestine' },
    nameShort: { zh: '大腸', en: 'LI' },
    color: '#4a8c7a',
    route: 'front',
    points: [
      { id: 'li1', name: { zh: '商陽', en: 'Shangyang' }, x: 62, y: 260, desc: { zh: '食指橈側指甲旁', en: 'Index finger radial nail corner' } },
      { id: 'li4', name: { zh: '合谷', en: 'Hegu' }, x: 55, y: 220, desc: { zh: '手背第1-2掌骨間', en: 'Between 1st-2nd metacarpal' } },
      { id: 'li10', name: { zh: '手三里', en: 'Shousanli' }, x: 58, y: 165, desc: { zh: '曲池下2寸', en: '2 cun below Quchi' } },
      { id: 'li11', name: { zh: '曲池', en: 'Quchi' }, x: 60, y: 145, desc: { zh: '肘橫紋橈側端', en: 'Radial end of elbow crease' } },
      { id: 'li20', name: { zh: '迎香', en: 'Yingxiang' }, x: 45, y: 70, desc: { zh: '鼻翼旁0.5寸', en: '0.5 cun beside nose wing' } },
    ],
    functions: { zh: '傳導糟粕、大腸津液', en: 'Transports waste, Large Intestine fluids' }
  },
  stomach: {
    id: 'stomach',
    name: { zh: '胃經', en: 'Stomach Meridian' },
    nameShort: { zh: '胃', en: 'ST' },
    color: '#d4a04a',
    route: 'front',
    points: [
      { id: 'st1', name: { zh: '承泣', en: 'Chengqi' }, x: 38, y: 75, desc: { zh: '瞳孔直下眼眶', en: 'Below eye,瞳孔直下' } },
      { id: 'st25', name: { zh: '天樞', en: 'Tianshu' }, x: 38, y: 150, desc: { zh: '臍旁2寸', en: '2 cun beside umbilicus' } },
      { id: 'st36', name: { zh: '足三里', en: 'Zusanli' }, x: 40, y: 200, desc: { zh: '犢鼻下3寸', en: '3 cun below Dubi' } },
      { id: 'st40', name: { zh: '豐隆', en: 'Fenglong' }, x: 42, y: 220, desc: { zh: '外踝尖上8寸', en: '8 cun above ankle' } },
      { id: 'st44', name: { zh: '內庭', en: 'Neiting' }, x: 45, y: 245, desc: { zh: '足背2-3趾間', en: 'Between 2nd-3rd toes' } },
    ],
    functions: { zh: '受納腐熟水穀', en: 'Receives and digests food and drink' }
  },
  spleen: {
    id: 'spleen',
    name: { zh: '脾經', en: 'Spleen Meridian' },
    nameShort: { zh: '脾', en: 'SP' },
    color: '#d4a04a',
    route: 'front',
    points: [
      { id: 'sp1', name: { zh: '隱白', en: 'Yinbai' }, x: 50, y: 255, desc: { zh: '足大趾內側', en: 'Big toe medial side' } },
      { id: 'sp3', name: { zh: '太白', en: 'Taibai' }, x: 48, y: 240, desc: { zh: '足內側第1蹠骨', en: '1st metatarsal内侧' } },
      { id: 'sp4', name: { zh: '公孫', en: 'Gongsun' }, x: 46, y: 225, desc: { zh: '第1蹠骨前緣', en: '1st metatarsal前緣' } },
      { id: 'sp6', name: { zh: '三陰交', en: 'Sanyinjiao' }, x: 44, y: 205, desc: { zh: '內踝尖上3寸', en: '3 cun above medial ankle' } },
      { id: 'sp10', name: { zh: '血海', en: 'Xuehai' }, x: 48, y: 180, desc: { zh: '髕骨內上2寸', en: '2 cun above medial patella' } },
    ],
    functions: { zh: '運化水穀、統血', en: 'Transforms/transport, controls blood' }
  },
  heart: {
    id: 'heart',
    name: { zh: '心經', en: 'Heart Meridian' },
    nameShort: { zh: '心', en: 'HT' },
    color: '#c94a4a',
    route: 'front',
    points: [
      { id: 'ht1', name: { zh: '極泉', en: 'Jiquan' }, x: 30, y: 110, desc: { zh: '腋窩中央', en: 'Center of armpit' } },
      { id: 'ht3', name: { zh: '少海', en: 'Shaohai' }, x: 28, y: 155, desc: { zh: '肘橫紋內側端', en: 'Medial elbow crease' } },
      { id: 'ht5', name: { zh: '通里', en: 'Tongli' }, x: 25, y: 200, desc: { zh: '腕橫紋上1寸', en: '1 cun above wrist' } },
      { id: 'ht7', name: { zh: '神門', en: 'Shenmen' }, x: 23, y: 225, desc: { zh: '腕橫紋尺側', en: 'Ulnar wrist crease' } },
      { id: 'ht9', name: { zh: '少衝', en: 'Shaochong' }, x: 20, y: 260, desc: { zh: '小指橈側', en: 'Little finger radial side' } },
    ],
    functions: { zh: '藏神、主血脈', en: 'Stores spirit, governs blood vessels' }
  },
  smallIntestine: {
    id: 'smallIntestine',
    name: { zh: '小腸經', en: 'Small Intestine' },
    nameShort: { zh: '小腸', en: 'SI' },
    color: '#4a8c7a',
    route: 'front',
    points: [
      { id: 'si1', name: { zh: '少澤', en: 'Shaoze' }, x: 70, y: 260, desc: { zh: '小指尺側指甲旁', en: 'Little finger ulnar nail' } },
      { id: 'si3', name: { zh: '後溪', en: 'Houxi' }, x: 65, y: 235, desc: { zh: '握拳第5掌指關節', en: '5th MCP joint when fist' } },
      { id: 'si6', name: { zh: '養老', en: 'Yanglao' }, x: 62, y: 215, desc: { zh: '尺骨頭橈側', en: 'Ulnar radius side' } },
      { id: 'si8', name: { zh: '小海', en: 'Xiaohai' }, x: 65, y: 165, desc: { zh: '肘關節內側', en: 'Medial elbow' } },
      { id: 'si19', name: { zh: '聽宮', en: 'Tinggong' }, x: 55, y: 75, desc: { zh: '耳屏前凹陷', en: 'In front of ear tragus' } },
    ],
    functions: { zh: '受盛化物、分清泌濁', en: 'Receives/transforms, separates fluids' }
  },
  bladder: {
    id: 'bladder',
    name: { zh: '膀胱經', en: 'Bladder Meridian' },
    nameShort: { zh: '膀胱', en: 'BL' },
    color: '#2d3a6e',
    route: 'back',
    points: [
      { id: 'bl1', name: { zh: '睛明', en: 'Jingming' }, x: 38, y: 75, desc: { zh: '眼內角旁', en: 'Inner eye corner' } },
      { id: 'bl13', name: { zh: '肺俞', en: 'Feishu' }, x: 35, y: 115, desc: { zh: '第3胸椎旁開1.5寸', en: '1.5 cun lateral to T3' } },
      { id: 'bl15', name: { zh: '心俞', en: 'Xinshu' }, x: 35, y: 105, desc: { zh: '第5胸椎旁開1.5寸', en: '1.5 cun lateral to T5' } },
      { id: 'bl18', name: { zh: '肝俞', en: 'Ganshu' }, x: 35, y: 95, desc: { zh: '第9胸椎旁開1.5寸', en: '1.5 cun lateral to T9' } },
      { id: 'bl20', name: { zh: '脾俞', en: 'Pishu' }, x: 35, y: 88, desc: { zh: '第11胸椎旁開1.5寸', en: '1.5 cun lateral to T11' } },
      { id: 'bl23', name: { zh: '腎俞', en: 'Shenshu' }, x: 35, y: 78, desc: { zh: '第2腰椎旁開1.5寸', en: '1.5 cun lateral to L2' } },
      { id: 'bl40', name: { zh: '委中', en: 'Weizhong' }, x: 40, y: 160, desc: { zh: '膝窩中央', en: 'Center of knee crease' } },
      { id: 'bl57', name: { zh: '承山', en: 'Chengshan' }, x: 42, y: 195, desc: { zh: '腓腸肌肌腹', en: 'Gastrocnemius belly' } },
    ],
    functions: { zh: '儲尿排尿', en: 'Stores/excretes urine' }
  },
  kidney: {
    id: 'kidney',
    name: { zh: '腎經', en: 'Kidney Meridian' },
    nameShort: { zh: '腎', en: 'KI' },
    color: '#6b4c7a',
    route: 'front',
    points: [
      { id: 'ki1', name: { zh: '湧泉', en: 'Yongquan' }, x: 52, y: 250, desc: { zh: '足底前1/3', en: 'Anterior 1/3 of sole' } },
      { id: 'ki3', name: { zh: '太溪', en: 'Taixi' }, x: 48, y: 225, desc: { zh: '內踝與跟腱間', en: 'Between ankle & Achilles' } },
      { id: 'ki4', name: { zh: '大鐘', en: 'Dazhong' }, x: 47, y: 220, desc: { zh: '太溪下0.5寸', en: '0.5 cun below Taixi' } },
      { id: 'ki6', name: { zh: '照海', en: 'Zhaohai' }, x: 45, y: 210, desc: { zh: '內踝下1寸', en: '1 cun below medial ankle' } },
      { id: 'ki7', name: { zh: '復溜', en: 'Fuliu' }, x: 46, y: 215, desc: { zh: '太溪上2寸', en: '2 cun above Taixi' } },
    ],
    functions: { zh: '藏精、主水', en: 'Stores essence, governs water' }
  },
  pericardium: {
    id: 'pericardium',
    name: { zh: '心包經', en: 'Pericardium' },
    nameShort: { zh: '心包', en: 'PC' },
    color: '#c94a4a',
    route: 'front',
    points: [
      { id: 'pc1', name: { zh: '天池', en: 'Tianchi' }, x: 32, y: 105, desc: { zh: '乳頭外1寸', en: '1 cun lateral to nipple' } },
      { id: 'pc3', name: { zh: '曲澤', en: 'Quze' }, x: 30, y: 155, desc: { zh: '肘橫紋正中', en: 'Midpoint of elbow crease' } },
      { id: 'pc5', name: { zh: '間使', en: 'Jianshi' }, x: 28, y: 185, desc: { zh: '腕橫紋上3寸', en: '3 cun above wrist' } },
      { id: 'pc6', name: { zh: '內關', en: 'Neiguan' }, x: 27, y: 200, desc: { zh: '腕橈紋上2寸', en: '2 cun above wrist crease' } },
      { id: 'pc8', name: { zh: '勞宮', en: 'Laogong' }, x: 25, y: 230, desc: { zh: '掌心第2-3掌骨間', en: 'Between 2nd-3rd metacarpal' } },
    ],
    functions: { zh: '保護心臟、代心受邪', en: 'Protects heart, receives pathogens' }
  },
  sanjiao: {
    id: 'sanjiao',
    name: { zh: '三焦經', en: 'Sanjiao Meridian' },
    nameShort: { zh: '三焦', en: 'SJ' },
    color: '#4a8c7a',
    route: 'front',
    points: [
      { id: 'sj1', name: { zh: '關衝', en: 'Guanchong' }, x: 72, y: 260, desc: { zh: '無名指尺側', en: 'Ring finger ulnar side' } },
      { id: 'sj3', name: { zh: '中渚', en: 'Zhongzhu' }, x: 68, y: 230, desc: { zh: '第4-5掌骨間', en: 'Between 4th-5th metacarpal' } },
      { id: 'sj5', name: { zh: '外關', en: 'Waiguan' }, x: 65, y: 200, desc: { zh: '腕背橈紋上2寸', en: '2 cun above dorsal wrist' } },
      { id: 'sj10', name: { zh: '天井', en: 'Tianjing' }, x: 68, y: 160, desc: { zh: '肘尖上1寸', en: '1 cun above elbow tip' } },
      { id: 'sj17', name: { zh: '翳風', en: 'Yifeng' }, x: 58, y: 80, desc: { zh: '乳突前凹陷', en: 'Anterior to mastoid process' } },
    ],
    functions: { zh: '通行元氣、水液', en: 'Circulates original Qi, water fluids' }
  },
  gallbladder: {
    id: 'gallbladder',
    name: { zh: '膽經', en: 'Gallbladder Meridian' },
    nameShort: { zh: '膽', en: 'GB' },
    color: '#2d3a6e',
    route: 'back',
    points: [
      { id: 'gb1', name: { zh: '瞳子髎', en: 'Tongziliao' }, x: 42, y: 75, desc: { zh: '眼外角旁', en: 'Lateral eye corner' } },
      { id: 'gb20', name: { zh: '風池', en: 'Fengchi' }, x: 38, y: 85, desc: { zh: '枕骨下凹陷', en: 'Below occipital bone' } },
      { id: 'gb21', name: { zh: '肩井', en: 'Jianjing' }, x: 38, y: 108, desc: { zh: '肩上大椎旁', en: 'Above shoulder, lateral to GV14' } },
      { id: 'gb30', name: { zh: '環跳', en: 'Huantiao' }, x: 38, y: 155, desc: { zh: '股骨大轉子', en: 'Greater trochanter' } },
      { id: 'gb34', name: { zh: '陽陵泉', en: 'Yanglingquan' }, x: 42, y: 200, desc: { zh: '腓骨小頭前下', en: 'Anterior to fibular head' } },
      { id: 'gb37', name: { zh: '光明', en: 'Guangming' }, x: 44, y: 215, desc: { zh: '外踝尖上5寸', en: '5 cun above lateral ankle' } },
      { id: 'gb39', name: { zh: '懸鐘', en: 'Xuanzhong' }, x: 45, y: 205, desc: { zh: '外踝尖上3寸', en: '3 cun above lateral ankle' } },
    ],
    functions: { zh: '儲膽汁、決斷', en: 'Stores bile, governs decision' }
  },
  liver: {
    id: 'liver',
    name: { zh: '肝經', en: 'Liver Meridian' },
    nameShort: { zh: '肝', en: 'LR' },
    color: '#2d3a6e',
    route: 'front',
    points: [
      { id: 'lr1', name: { zh: '大敦', en: 'Dadun' }, x: 52, y: 255, desc: { zh: '足大趾外側', en: 'Big toe lateral side' } },
      { id: 'lr2', name: { zh: '行間', en: 'Xingjian' }, x: 50, y: 248, desc: { zh: '足背1-2趾間', en: 'Between 1st-2nd toes' } },
      { id: 'lr3', name: { zh: '太衝', en: 'Taichong' }, x: 48, y: 242, desc: { zh: '足背1-2蹠骨間', en: 'Between 1st-2nd metatarsal' } },
      { id: 'lr5', name: { zh: '蠡溝', en: 'Ligou' }, x: 46, y: 215, desc: { zh: '內踝尖上5寸', en: '5 cun above medial ankle' } },
      { id: 'lr13', name: { zh: '章門', en: 'Zhangmen' }, x: 42, y: 145, desc: { zh: '第11肋遊離端', en: '11th rib free end' } },
      { id: 'lr14', name: { zh: '期門', en: 'Qimen' }, x: 40, y: 120, desc: { zh: '乳頭直下第6肋', en: 'Directly below nipple, 6th rib' } },
    ],
    functions: { zh: '藏血、主疏泄', en: 'Stores blood, regulates flow' }
  }
};

export const extraMeridians = {
  governor: {
    id: 'governor',
    name: { zh: '督脈', en: 'Governing Vessel' },
    nameShort: { zh: '督', en: 'GV' },
    color: '#c94a4a',
    route: 'back',
    points: [
      { id: 'gv1', name: { zh: '長強', en: 'Changqiang' }, x: 40, y: 240, desc: { zh: '尾骨端', en: 'Tail bone end' } },
      { id: 'gv4', name: { zh: '命門', en: 'Mingmen' }, x: 40, y: 195, desc: { zh: '第2腰椎下', en: 'Below L2' } },
      { id: 'gv14', name: { zh: '大椎', en: 'Dazhui' }, x: 40, y: 120, desc: { zh: '第7頸椎下', en: 'Below C7' } },
      { id: 'gv20', name: { zh: '百會', en: 'Baihui' }, x: 40, y: 80, desc: { zh: '頭頂正中', en: 'Top of head center' } },
      { id: 'gv24', name: { zh: '神庭', en: 'Shenting' }, x: 40, y: 72, desc: { zh: '額頭髮際', en: 'Forehead hairline' } },
    ],
    functions: { zh: '總督諸陽', en: 'Governs all Yang meridians' }
  },
  conception: {
    id: 'conception',
    name: { zh: '任脈', en: 'Conception Vessel' },
    nameShort: { zh: '任', en: 'CV' },
    color: '#6b4c7a',
    route: 'front',
    points: [
      { id: 'cv1', name: { zh: '會陰', en: 'Huiyin' }, x: 40, y: 180, desc: { zh: '會陰中央', en: 'Center of perineum' } },
      { id: 'cv4', name: { zh: '關元', en: 'Guanyuan' }, x: 40, y: 165, desc: { zh: '臍下3寸', en: '3 cun below umbilicus' } },
      { id: 'cv6', name: { zh: '氣海', en: 'Qihai' }, x: 40, y: 160, desc: { zh: '臍下1.5寸', en: '1.5 cun below umbilicus' } },
      { id: 'cv12', name: { zh: '中脘', en: 'Zhongwan' }, x: 40, y: 148, desc: { zh: '臍上4寸', en: '4 cun above umbilicus' } },
      { id: 'cv17', name: { zh: '膻中', en: 'Danzhong' }, x: 40, y: 128, desc: { zh: '兩乳之間', en: 'Between breasts' } },
      { id: 'cv24', name: { zh: '承漿', en: 'Chengjiang' }, x: 40, y: 72, desc: { zh: '下唇凹陷', en: 'Below lower lip' } },
    ],
    functions: { zh: '總任諸陰', en: 'Governs all Yin meridians' }
  }
};
