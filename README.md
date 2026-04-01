# 針灸理論可視化 | Acupuncture Theory Visualization

一個互動式的針灸理論學習網頁，包含經絡地圖、五行學說和子午流注三大核心模組。

## 🚀 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 構建生產版本
npm run build
```

## 📁 項目結構

```
acupuncture-web/
├── src/
│   ├── components/          # React 組件
│   │   ├── Navigation.jsx   # 頂部導航欄
│   │   ├── MeridianMap.jsx  # 經絡互動人體地圖
│   │   ├── FiveElements.jsx # 五行相生相剋環形圖
│   │   └── ZiwuLiuzhu.jsx   # 子午流注時鐘
│   ├── data/                # 數據文件
│   │   ├── meridians.js     # 十二經脈 + 奇經八脈數據
│   │   ├── fiveElements.js   # 五行學說數據
│   │   └── ziwu.js          # 子午流注時辰數據
│   ├── locales/             # 翻譯文件
│   │   ├── zh.json          # 中文
│   │   └── en.json          # 英文
│   ├── App.jsx             # 主應用組件
│   ├── main.jsx            # 入口文件
│   ├── i18n.js              # i18n 配置
│   └── index.css            # 全局樣式
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✨ 功能特色

### 1. 經絡互動人體地圖
- 人體正/背面 SVG 展示
- 點擊經脈高亮所有穴位
- 懸停穴位顯示詳細資訊
- 支援全部/十二經脈/奇經八脈切換
- 中英文即時切換

### 2. 五行相生相剋互動環形圖
- 環形排列木火土金水五行
- 點擊任一行顯示詳細資訊
- 相生路线动画（顺时针流动）
- 相剋路线动画（对角线阻断）
- 五臟功能雷達圖展示

### 3. 子午流注時鐘
- 12時辰/24小時雙模式
- 即時或手動選擇時辰
- 每個時辰顯示養生重點與關鍵穴位

## 🎨 技術棧

- **框架**: React 18 + Vite 5
- **樣式**: Tailwind CSS 3
- **動畫**: Framer Motion
- **圖標**: Lucide React
- **國際化**: react-i18next

## 📝 中英文雙語

所有內容均支援中英文即時切換，包括：
- 經脈名稱
- 穴位名稱
- 功效說明
- 界面文字

## ⚠️ 免责声明

本網頁僅供教育參考，不構成醫療建議。如有健康問題，請諮詢專業醫師。

---

**Developer**: Claude (as subagent for yayafu)
