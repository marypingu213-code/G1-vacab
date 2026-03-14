const allLessonsData = {
    // ================= 第一課 =================
    "1": { 
        title: "第一課：太陽是充電機", 
        level1: [
            { word: "太", parts: ["images/L1/筆順-太-部件-1.png", "images/L1/筆順-太-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "太陽", vocabImg: "images/L1/vocab-太陽.png" },
            { word: "充", parts: ["images/L1/筆順-充-部件-1.png", "images/L1/筆順-充-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "充電", vocabImg: "images/L1/vocab-充電.png" },
            { word: "電", parts: ["images/L1/筆順-電-部件-1.png", "images/L1/筆順-電-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "充電", vocabImg: "images/L1/vocab-充電.png" },
            { word: "雨", parts: ["images/L1/筆順-雨-部件-1.png", "images/L1/筆順-雨-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "下雨", vocabImg: "images/L1/vocab-下雨.png" },
            { word: "過", parts: ["images/L1/筆順-過-部件-1.png", "images/L1/筆順-過-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "過年", vocabImg: "images/L1/vocab-過年.png" },
            { word: "後", parts: ["images/L1/筆順-後-部件-1.png", "images/L1/筆順-後-部件-2.png", "images/L1/筆順-後-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "後悔", vocabImg: "images/L1/vocab-後悔.png" },
            { word: "為", parts: ["images/L1/筆順-為-部件-1.png", "images/L1/筆順-為-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "為什麼", vocabImg: "images/L1/vocab-為什麼.png" },
            { word: "冬", parts: ["images/L1/筆順-冬-部件-1.png", "images/L1/筆順-冬-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "冬眠", vocabImg: "images/L1/vocab-冬眠.png" },
            { word: "草", parts: ["images/L1/筆順-草-部件-1.png", "images/L1/筆順-草-部件-2.png", "images/L1/筆順-草-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "小草", vocabImg: "images/L1/vocab-小草.png" },
            { word: "冒", parts: ["images/L1/筆順-冒-部件-1.png", "images/L1/筆順-冒-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "感冒", vocabImg: "images/L1/vocab-感冒.png" },
            { word: "哭", parts: ["images/L1/筆順-哭-部件-1.png", "images/L1/筆順-哭-部件-2.png", "images/L1/筆順-哭-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "大哭", vocabImg: "images/L1/vocab-大哭.png" },
            { word: "心", parts: ["images/L1/筆順-心-部件-1.png"], pos: [{x: 120, y: 150}], vocab: "愛心", vocabImg: "images/L1/vocab-愛心.png" },
            { word: "陽", parts: ["images/L1/筆順-陽-部件-1.png", "images/L1/筆順-陽-部件-2.png", "images/L1/筆順-陽-部件-3.png", "images/L1/筆順-陽-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "夕陽", vocabImg: "images/L1/vocab-夕陽.png" },
            { word: "機", parts: ["images/L1/筆順-機-部件-1.png", "images/L1/筆順-機-部件-2.png", "images/L1/筆順-機-部件-3.png", "images/L1/筆順-機-部件-4.png", "images/L1/筆順-機-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}], vocab: "手機", vocabImg: "images/L1/vocab-手機.png" }
        ], 
        level2: [
            { text: "手機快沒電了，要趕快兒電。", typo: "兒", correct: "充", options: ["充", "見", "元"], speakText: "手機快沒電了，要趕快充電。" },
            { text: "早地上有很多的小鳥。", typo: "早", correct: "草", options: ["草", "早", "車"], speakText: "草地上有很多的小鳥。" },
            { text: "今天的太場好溫暖。", typo: "場", correct: "陽", options: ["陽", "場", "湯"], speakText: "今天的太陽好溫暖。" },
            { text: "教室候面有好多的故事書。", typo: "候", correct: "後", options: ["後", "候", "很"], speakText: "教室後面有好多的故事書。" },
            { text: "教室的雷燈壞了，要請人來修理。", typo: "雷", correct: "電", options: ["電", "雷", "雪"], speakText: "教室的電燈壞了，要請人來修理。" },
            { text: "我剛剛經渦了校長室，校長在裡面辦公。", typo: "渦", correct: "過", options: ["過", "渦", "鍋"], speakText: "我剛剛經過了校長室，校長在裡面辦公。" }
        ], 
        level3: [
            { parts: ["太陽", "為", "小花", "充充電"] },
            { parts: ["四點", "過後", "教室", "空了"] },
            { parts: ["為什麼", "今天", "會", "下雨"] },
            { parts: ["這裡", "有好多的", "機器人"] },
            { parts: ["他被", "小狗", "嚇到", "所以", "一直哭"] }
        ], 
        level4: [
            { word: "太", radical: "大", options: ["大", "丶"] },
            { word: "充", radical: "儿", options: ["儿", "亠"] },
            { word: "電", radical: "雨", options: ["雨", "田"] },
            { word: "雨", radical: "雨", options: ["雨", "水"] },
            { word: "過", radical: "辵(辶)", options: ["辵(辶)", "咼"] },
            { word: "後", radical: "彳", options: ["彳", "幺"] },
            { word: "為", radical: "火", options: ["火", "力"] },
            { word: "冬", radical: "冫", options: ["冫", "夂"] },
            { word: "土", radical: "土", options: ["土", "十"] },
            { word: "草", radical: "艸(艹)", options: ["艸(艹)", "早"] },
            { word: "冒", radical: "冂", options: ["冂", "目"] },
            { word: "哭", radical: "口", options: ["口", "犬"] },
            { word: "心", radical: "心", options: ["心", "必"] },
            { word: "陽", radical: "阜(阝)", options: ["阜(阝)", "日"] },
            { word: "機", radical: "木", options: ["木", "戈"] }
        ] 
    },
   // ================= 第二課 =================
    "2": { 
        title: "第二課：春雨是什麼顏色", 
        level1: [
            // 5個部件
            { word: "顏", parts: ["images/L2/筆順-顏-部件-1.png", "images/L2/筆順-顏-部件-2.png", "images/L2/筆順-顏-部件-3.png", "images/L2/筆順-顏-部件-4.png", "images/L2/筆順-顏-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}], vocab: "顏色", vocabImg: "images/L2/vocab-顏色.png" },
            // 2個部件
            { word: "色", parts: ["images/L2/筆順-色-部件-1.png", "images/L2/筆順-色-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "調色盤", vocabImg: "images/L2/vocab-調色盤.png" },
            // 2個部件
            { word: "細", parts: ["images/L2/筆順-細-部件-1.png", "images/L2/筆順-細-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "細心", vocabImg: "images/L2/vocab-細心.png" },
            // 3個部件
            { word: "著", parts: ["images/L2/筆順-著-部件-1.png", "images/L2/筆順-著-部件-2.png", "images/L2/筆順-著-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "聽著", vocabImg: "images/L2/vocab-聽著.png" },
            // 2個部件
            { word: "問", parts: ["images/L2/筆順-問-部件-1.png", "images/L2/筆順-問-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "問號", vocabImg: "images/L2/vocab-問號.png" },
            // 2個部件
            { word: "鳥", parts: ["images/L2/筆順-鳥-部件-1.png", "images/L2/筆順-鳥-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "小鳥", vocabImg: "images/L2/vocab-小鳥.png" },
            // 3個部件
            { word: "綠", parts: ["images/L2/筆順-綠-部件-1.png", "images/L2/筆順-綠-部件-2.png", "images/L2/筆順-綠-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "綠茶", vocabImg: "images/L2/vocab-綠茶.png" },
            // 2個部件
            { word: "看", parts: ["images/L2/筆順-看-部件-1.png", "images/L2/筆順-看-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "偷看", vocabImg: "images/L2/vocab-偷看.png" },
            // 4個部件
            { word: "藍", parts: ["images/L2/筆順-藍-部件-1.png", "images/L2/筆順-藍-部件-2.png", "images/L2/筆順-藍-部件-3.png", "images/L2/筆順-藍-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "藍莓", vocabImg: "images/L2/vocab-藍莓.png" },
            // 3個部件
            { word: "空", parts: ["images/L2/筆順-空-部件-1.png", "images/L2/筆順-空-部件-2.png", "images/L2/筆順-空-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "空氣", vocabImg: "images/L2/vocab-空氣.png" },
            // 2個部件
            { word: "媽", parts: ["images/L2/筆順-媽-部件-1.png", "images/L2/筆順-媽-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "媽媽", vocabImg: "images/L2/vocab-媽媽.png" },
            // 3個部件
            { word: "彩", parts: ["images/L2/筆順-彩-部件-1.png", "images/L2/筆順-彩-部件-2.png", "images/L2/筆順-彩-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "彩色筆", vocabImg: "images/L2/vocab-彩色筆.png" },
            // 2個部件
            { word: "中", parts: ["images/L2/筆順-中-部件-1.png", "images/L2/筆順-中-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "中文", vocabImg: "images/L2/vocab-中文.png" },
            // 2個部件
            { word: "虹", parts: ["images/L2/筆順-虹-部件-1.png", "images/L2/筆順-虹-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "彩虹", vocabImg: "images/L2/vocab-彩虹.png" },
            // 2個部件
            { word: "蜻", parts: ["images/L2/筆順-蜻-部件-1.png", "images/L2/筆順-蜻-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "蜻蜓", vocabImg: "images/L2/vocab-蜻蜓.png" },
            // 3個部件
            { word: "蜓", parts: ["images/L2/筆順-蜓-部件-1.png", "images/L2/筆順-蜓-部件-2.png", "images/L2/筆順-蜓-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "蜻蜓", vocabImg: "images/L2/vocab-蜻蜓.png" }
        ], 
        level2: [], 
        level3: [], 
        level4: [] 
    },
    // ================= 第三課 =================
    "3": { 
        title: "第三課：山中音樂會", 
        level1: [
            { word: "音", parts: ["images/L3/筆順-音-部件-1.png", "images/L3/筆順-音-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "聲音", vocabImg: "images/L3/vocab-聲音.png" },
            { word: "樂", parts: ["images/L3/筆順-樂-部件-1.png", "images/L3/筆順-樂-部件-2.png", "images/L3/筆順-樂-部件-3.png", "images/L3/筆順-樂-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "音樂", vocabImg: "images/L3/vocab-音樂.png" },
            { word: "會", parts: ["images/L3/筆順-會-部件-1.png", "images/L3/筆順-會-部件-2.png", "images/L3/筆順-會-部件-3.png", "images/L3/筆順-會-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "音樂會", vocabImg: "images/L3/vocab-音樂會.png" },
            { word: "坡", parts: ["images/L3/筆順-坡-部件-1.png", "images/L3/筆順-坡-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "山坡", vocabImg: "images/L3/vocab-山坡.png" },
            { word: "忙", parts: ["images/L3/筆順-忙-部件-1.png", "images/L3/筆順-忙-部件-2.png", "images/L3/筆順-忙-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "幫忙", vocabImg: "images/L3/vocab-幫忙.png" },
            { word: "布", parts: ["images/L3/筆順-布-部件-1.png", "images/L3/筆順-布-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "布丁", vocabImg: "images/L3/vocab-布丁.png" },
            { word: "場", parts: ["images/L3/筆順-場-部件-1.png", "images/L3/筆順-場-部件-2.png", "images/L3/筆順-場-部件-3.png", "images/L3/筆順-場-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "操場", vocabImg: "images/L3/vocab-操場.png" },
            { word: "河", parts: ["images/L3/筆順-河-部件-1.png", "images/L3/筆順-河-部件-2.png", "images/L3/筆順-河-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "小河", vocabImg: "images/L3/vocab-小河.png" },
            { word: "林", parts: ["images/L3/筆順-林-部件-1.png", "images/L3/筆順-林-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "樹林", vocabImg: "images/L3/vocab-樹林.png" },
            { word: "間", parts: ["images/L3/筆順-間-部件-1.png", "images/L3/筆順-間-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "中間", vocabImg: "images/L3/vocab-中間.png" },
            { word: "風", parts: ["images/L3/筆順-風-部件-1.png", "images/L3/筆順-風-部件-2.png", "images/L3/筆順-風-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "龍選風", vocabImg: "images/L3/vocab-龍捲風.png" },
            { word: "跑", parts: ["images/L3/筆順-跑-部件-1.png", "images/L3/筆順-跑-部件-2.png", "images/L3/筆順-跑-部件-3.png", "images/L3/筆順-跑-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "跑步", vocabImg: "images/L3/vocab-跑步.png" },
            { word: "置", parts: ["images/L3/筆順-置-部件-1.png", "images/L3/筆順-置-部件-2.png", "images/L3/筆順-置-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "置物櫃", vocabImg: "images/L3/vocab-置物櫃.png" }
        ], 
        level2: [
            { text: "這不是人口，你走錯地方了。", typo: "人", correct: "入", options: ["入", "八", "大"], speakText: "這不是入口，你走錯地方了。" },
            { text: "從那個山波走進去，就會看到很多小貓咪。", typo: "波", correct: "坡", options: ["坡", "破", "披"], speakText: "從那個山坡走進去，就會看到很多小貓咪。" },
            { text: "我最喜歡吃的點心就是不丁。", typo: "不", correct: "布", options: ["布", "有", "下"], speakText: "我最喜歡吃的點心就是布丁。" },
            { text: "走廊不可以跑步，請去操揚跑。", typo: "揚", correct: "場", options: ["場", "湯", "陽"], speakText: "走廊不可以跑步，請去操場跑。" },
            { text: "那條小和有很多的魚。", typo: "和", correct: "河", options: ["河", "何", "可"], speakText: "那條小河有很多的魚。" },
            { text: "這條路的中問有很多的坑洞。", typo: "問", correct: "間", options: ["間", "聞", "閃"], speakText: "這條路的中間有很多的坑洞。" }
        ], 
        level3: [
            { parts: ["山坡上", "的", "花朵"] },
            { parts: ["小河", "在山上，", "小鳥", "在林間"] },
            { parts: ["我要", "加入", "山中", "音樂會"] },
            { parts: ["我", "要去", "玩球", "也要去", "跳繩"] },
            { parts: ["媽媽", "把", "花瓶", "擺在", "中間"] }
        ], 
        level4: [
            { word: "音", radical: "音", options: ["音", "日"] },
            { word: "樂", radical: "木", options: ["木", "白"] },
            { word: "會", radical: "曰", options: ["曰", "人"] },
            { word: "坡", radical: "土", options: ["土", "皮"] },
            { word: "忙", radical: "心", options: ["心", "亡"] },
            { word: "布", radical: "巾", options: ["巾", "大"] },
            { word: "場", radical: "土", options: ["土", "昜"] },
            { word: "入", radical: "入", options: ["入", "人"] },
            { word: "口", radical: "口", options: ["口", "囗"] },
            { word: "河", radical: "水", options: ["水", "可"] },
            { word: "林", radical: "木", options: ["木", "二"] },
            { word: "間", radical: "門", options: ["門", "日"] },
            { word: "風", radical: "風", options: ["風", "虫"] },
            { word: "跑", radical: "足", options: ["足", "包"] },
            { word: "置", radical: "网", options: ["网", "直"] }
        ] 
    },

    "4": { title: "第四課：(準備中)", level1: [], level2: [], level3: [], level4: [] },
    "5": { title: "第五課：(準備中)", level1: [], level2: [], level3: [], level4: [] },
    "6": { title: "第六課：(準備中)", level1: [], level2: [], level3: [], level4: [] },
    "7": { title: "第七課：(準備中)", level1: [], level2: [], level3: [], level4: [] },
    "8": { title: "第八課：(準備中)", level1: [], level2: [], level3: [], level4: [] },
    "9": { title: "第九課：(準備中)", level1: [], level2: [], level3: [], level4: [] },
    "10": { title: "第十課：(準備中)", level1: [], level2: [], level3: [], level4: [] },
    "11": { title: "第十一課：(準備中)", level1: [], level2: [], level3: [], level4: [] },
    "12": { title: "第十二課：(準備中)", level1: [], level2: [], level3: [], level4: [] }
};
