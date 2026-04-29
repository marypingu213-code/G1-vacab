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
            { word: "顏", parts: ["images/L2/筆順-顏-部件-1.png", "images/L2/筆順-顏-部件-2.png", "images/L2/筆順-顏-部件-3.png", "images/L2/筆順-顏-部件-4.png", "images/L2/筆順-顏-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180, scale: 1.5}], vocab: "顏色", vocabImg: "images/L2/vocab-顏色.png" },
            { word: "色", parts: ["images/L2/筆順-色-部件-1.png", "images/L2/筆順-色-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "調色盤", vocabImg: "images/L2/vocab-調色盤.png" },
            { word: "細", parts: ["images/L2/筆順-細-部件-1.png", "images/L2/筆順-細-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "細心", vocabImg: "images/L2/vocab-細心.png" },
            { word: "著", parts: ["images/L2/筆順-著-部件-1.png", "images/L2/筆順-著-部件-2.png", "images/L2/筆順-著-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "聽著", vocabImg: "images/L2/vocab-聽著.png" },
            { word: "問", parts: ["images/L2/筆順-問-部件-1.png", "images/L2/筆順-問-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "問號", vocabImg: "images/L2/vocab-問號.png" },
            { word: "鳥", parts: ["images/L2/筆順-鳥-部件-1.png", "images/L2/筆順-鳥-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "小鳥", vocabImg: "images/L2/vocab-小鳥.png" },
            { word: "綠", parts: ["images/L2/筆順-綠-部件-1.png", "images/L2/筆順-綠-部件-2.png", "images/L2/筆順-綠-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "綠茶", vocabImg: "images/L2/vocab-綠茶.png" },
            { word: "看", parts: ["images/L2/筆順-看-部件-1.png", "images/L2/筆順-看-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "偷看", vocabImg: "images/L2/vocab-偷看.png" },
            { word: "藍", parts: ["images/L2/筆順-藍-部件-1.png", "images/L2/筆順-藍-部件-2.png", "images/L2/筆順-藍-部件-3.png", "images/L2/筆順-藍-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "藍莓", vocabImg: "images/L2/vocab-藍莓.png" },
            { word: "空", parts: ["images/L2/筆順-空-部件-1.png", "images/L2/筆順-空-部件-2.png", "images/L2/筆順-空-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "空氣", vocabImg: "images/L2/vocab-空氣.png" },
            { word: "媽", parts: ["images/L2/筆順-媽-部件-1.png", "images/L2/筆順-媽-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "媽媽", vocabImg: "images/L2/vocab-媽媽.png" },
            { word: "彩", parts: ["images/L2/筆順-彩-部件-1.png", "images/L2/筆順-彩-部件-2.png", "images/L2/筆順-彩-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "彩色筆", vocabImg: "images/L2/vocab-彩色筆.png" },
            { word: "中", parts: ["images/L2/筆順-中-部件-1.png", "images/L2/筆順-中-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180, scale: 1.5}], vocab: "中文", vocabImg: "images/L2/vocab-中文.png" },
            { word: "虹", parts: ["images/L2/筆順-虹-部件-1.png", "images/L2/筆順-虹-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "彩虹", vocabImg: "images/L2/vocab-彩虹.png" },
            { word: "蜻", parts: ["images/L2/筆順-蜻-部件-1.png", "images/L2/筆順-蜻-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "蜻蜓", vocabImg: "images/L2/vocab-蜻蜓.png" },
            { word: "蜓", parts: ["images/L2/筆順-蜓-部件-1.png", "images/L2/筆順-蜓-部件-2.png", "images/L2/筆順-蜓-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "蜻蜓", vocabImg: "images/L2/vocab-蜻蜓.png" }
        ], 
        level2: [
            { text: "下雨過後草地上有很多的睛蜓。", typo: "睛", correct: "蜻", options: ["蜻", "睛", "請"], speakText: "下雨過後草地上有很多的蜻蜓。" },
            { text: "宇晴最喜歡的顏色是緣色。", typo: "緣", correct: "綠", options: ["綠", "緣", "線"], speakText: "宇晴最喜歡的顏色是綠色。" },
            { text: "你看過彩紅，有七種顏色。", typo: "紅", correct: "虹", options: ["虹", "紅", "江"], speakText: "你看過彩虹，有七種顏色。" },
            { text: "今天的天空好籃，我的心情很好。", typo: "籃", correct: "藍", options: ["藍", "籃", "蘭"], speakText: "今天的天空好藍，我的心情很好。" },
            { text: "如果你有不會的，可以先去間同學。", typo: "間", correct: "問", options: ["問", "間", "聞"], speakText: "如果你有不會的，可以先去問同學。" },
            { text: "明天要記得帶採色筆喔。", typo: "採", correct: "彩", options: ["彩", "採", "踩"], speakText: "明天要記得帶彩色筆喔。" }
        ], 
        level3: [
            { parts: ["學校的", "生態池", "有很多的", "蝌蚪"] },
            { parts: ["天空是", "藍色的", "我的", "心情是", "黃色的"] },
            { parts: ["媽媽", "告訴", "我", "上課", "要", "聽", "老師的話"] },
            { parts: ["在台灣", "我們", "說的", "語言", "是", "中文"] },
            { parts: ["他", "看著", "外面", "發呆"] }
        ], 
        level4: [
            { word: "顏", radical: "頁", options: ["頁", "彥"] },
            { word: "色", radical: "色", options: ["色", "刀"] },
            { word: "細", radical: "糸", options: ["糸", "田"] },
            { word: "著", radical: "艸(艹)", options: ["艸(艹)", "者"] },
            { word: "問", radical: "口", options: ["口", "門"] },
            { word: "鳥", radical: "鳥", options: ["鳥", "隹"] },
            { word: "綠", radical: "糸", options: ["糸", "水"] },
            { word: "看", radical: "目", options: ["目", "手"] },
            { word: "藍", radical: "艸(艹)", options: ["艸(艹)", "皿"] },
            { word: "空", radical: "穴", options: ["穴", "工"] },
            { word: "媽", radical: "女", options: ["女", "馬"] },
            { word: "彩", radical: "彡", options: ["彡", "木"] },
            { word: "中", radical: "丨", options: ["丨", "口"] },
            { word: "虹", radical: "虫", options: ["虫", "工"] },
            { word: "蜻", radical: "虫", options: ["虫", "青"] },
            { word: "蜓", radical: "虫", options: ["虫", "廴"] }
        ] 
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
            { word: "風", parts: ["images/L3/筆順-風-部件-1.png", "images/L3/筆順-風-部件-2.png", "images/L3/筆順-風-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "龍捲風", vocabImg: "images/L3/vocab-龍捲風.png" },
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

    // ================= 第四課 =================
    "4": { 
        title: "第四課：書是我的好朋友", 
        level1: [
            { word: "書", parts: ["images/L4/筆順-書-部件-1.png", "images/L4/筆順-書-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "看書", vocabImg: "images/L4/vocab-看書.png" },
            { word: "打", parts: ["images/L4/筆順-打-部件-1.png", "images/L4/筆順-打-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "打開", vocabImg: "images/L4/vocab-打開.png" },
            { word: "跳", parts: ["images/L4/筆順-跳-部件-1.png", "images/L4/筆順-跳-部件-2.png", "images/L4/筆順-跳-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "跳躍", vocabImg: "images/L4/vocab-跳躍.png" },
            { word: "陪", parts: ["images/L4/筆順-陪-部件-1.png", "images/L4/筆順-陪-部件-2.png", "images/L4/筆順-陪-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "陪伴", vocabImg: "images/L4/vocab-陪伴.png" },
            { word: "去", parts: ["images/L4/筆順-去-部件-1.png", "images/L4/筆順-去-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "出去", vocabImg: "images/L4/vocab-出去.png" },
            { word: "險", parts: ["images/L4/筆順-險-部件-1.png", "images/L4/筆順-險-部件-2.png", "images/L4/筆順-險-部件-3.png", "images/L4/筆順-險-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "危險", vocabImg: "images/L4/vocab-危險.png" },
            { word: "海", parts: ["images/L4/筆順-海-部件-1.png", "images/L4/筆順-海-部件-2.png", "images/L4/筆順-海-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "大海", vocabImg: "images/L4/vocab-大海.png" },
            { word: "找", parts: ["images/L4/筆順-找-部件-1.png", "images/L4/筆順-找-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "尋找", vocabImg: "images/L4/vocab-尋找.png" },
            { word: "歡", parts: ["images/L4/筆順-歡-部件-1.png", "images/L4/筆順-歡-部件-2.png", "images/L4/筆順-歡-部件-3.png", "images/L4/筆順-歡-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "喜歡", vocabImg: "images/L4/vocab-喜歡.png" },
            { word: "神", parts: ["images/L4/筆順-神-部件-1.png", "images/L4/筆順-神-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "神奇", vocabImg: "images/L4/vocab-神奇.png" },
            { word: "奇", parts: ["images/L4/筆順-奇-部件-1.png", "images/L4/筆順-奇-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "奇怪", vocabImg: "images/L4/vocab-奇怪.png" },
            { word: "猜", parts: ["images/L4/筆順-猜-部件-1.png", "images/L4/筆順-猜-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "猜謎", vocabImg: "images/L4/vocab-猜謎.png" },
            { word: "誰", parts: ["images/L4/筆順-誰-部件-1.png", "images/L4/筆順-誰-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "是誰", vocabImg: "images/L4/vocab-是誰.png" },
            { word: "跟", parts: ["images/L4/筆順-跟-部件-1.png", "images/L4/筆順-跟-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "跟著", vocabImg: "images/L4/vocab-跟著.png" },
            { word: "恐", parts: ["images/L4/筆順-恐-部件-1.png", "images/L4/筆順-恐-部件-2.png", "images/L4/筆順-恐-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "恐龍", vocabImg: "images/L4/vocab-恐龍.png" },
            { word: "龍", parts: ["images/L4/筆順-龍-部件-1.png", "images/L4/筆順-龍-部件-2.png", "images/L4/筆順-龍-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "恐龍", vocabImg: "images/L4/vocab-恐龍.png" },
            { word: "豚", parts: ["images/L4/筆順-豚-部件-1.png", "images/L4/筆順-豚-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "海豚", vocabImg: "images/L4/vocab-海豚.png" }
        ], 
        level2: [
            { text: "這個地方很危臉，你不可以自己去！", typo: "臉", correct: "險", options: ["險", "臉", "檢"], speakText: "這個地方很危險，你不可以自己去！" },
            { text: "這本書我已經讀了很多吹了。", typo: "吹", correct: "次", options: ["次", "吹", "歡"], speakText: "這本書我已經讀了很多次了。" },
            { text: "媽媽都會部我一起玩溜滑梯。", typo: "部", correct: "陪", options: ["陪", "部", "倍"], speakText: "媽媽都會陪我一起玩溜滑梯。" },
            { text: "大每裡面有非常多的生物。", typo: "每", correct: "海", options: ["海", "每", "梅"], speakText: "大海裡面有非常多的生物。" },
            { text: "爸爸根奶奶一起去學校走路。", typo: "根", correct: "跟", options: ["跟", "根", "很"], speakText: "爸爸跟奶奶一起去學校走路。" }
        ], 
        level3: [
            { parts: ["下次", "打開書", "還會", "遇到", "誰?"] },
            { parts: ["老師", "因為", "同學", "說謊", "所以", "暴跳如雷。"] },
            { parts: ["這個", "玩具", "好神奇", "去哪裡", "買的?"] },
            { parts: ["海豚", "聰明", "又可愛", "大家", "都喜歡。"] },
            { parts: ["書", "是", "我的", "好朋友。"] }
        ], 
        level4: [
            { word: "書", radical: "曰", options: ["曰", "日"] },
            { word: "打", radical: "手", options: ["手", "丁"] },
            { word: "跳", radical: "足", options: ["足", "兆"] },
            { word: "陪", radical: "阜(阝)", options: ["阜(阝)", "邑(阝)"] },
            { word: "去", radical: "厶", options: ["厶", "土"] },
            { word: "險", radical: "阜(阝)", options: ["阜(阝)", "僉"] },
            { word: "海", radical: "水", options: ["水", "每"] },
            { word: "找", radical: "手", options: ["手", "戈"] },
            { word: "歡", radical: "欠", options: ["欠", "雚"] },
            { word: "神", radical: "示(礻)", options: ["示(礻)", "申"] },
            { word: "奇", radical: "大", options: ["大", "可"] },
            { word: "猜", radical: "犬(犭)", options: ["犬(犭)", "青"] },
            { word: "次", radical: "欠", options: ["欠", "冫"] },
            { word: "誰", radical: "言", options: ["言", "隹"] },
            { word: "跟", radical: "足", options: ["足", "艮"] },
            { word: "恐", radical: "心", options: ["心", "工"] },
            { word: "龍", radical: "龍", options: ["龍", "立"] },
            { word: "豚", radical: "豕", options: ["豕", "月"] }
        ] 
    },
    
    // ================= 第五課 =================
    "5": { 
        title: "第五課：風喜歡跟我玩", 
        level1: [
            { word: "喜", parts: ["images/L5/筆順-喜-部件-1.png", "images/L5/筆順-喜-部件-2.png", "images/L5/筆順-喜-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "喜歡", vocabImg: "images/L5/vocab-喜歡.png" },
            { word: "帶", parts: ["images/L5/筆順-帶-部件-1.png", "images/L5/筆順-帶-部件-2.png", "images/L5/筆順-帶-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "帶來", vocabImg: "images/L5/vocab-帶來.png" },
            { word: "氣", parts: ["images/L5/筆順-氣-部件-1.png", "images/L5/筆順-氣-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "生氣", vocabImg: "images/L5/vocab-生氣.png" },
            { word: "球", parts: ["images/L5/筆順-球-部件-1.png", "images/L5/筆順-球-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "氣球", vocabImg: "images/L5/vocab-氣球.png" },
            { word: "始", parts: ["images/L5/筆順-始-部件-1.png", "images/L5/筆順-始-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "開始", vocabImg: "images/L5/vocab-開始.png" },
            { word: "吹", parts: ["images/L5/筆順-吹-部件-1.png", "images/L5/筆順-吹-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "吹風", vocabImg: "images/L5/vocab-吹風.png" },
            { word: "突", parts: ["images/L5/筆順-突-部件-1.png", "images/L5/筆順-突-部件-2.png", "images/L5/筆順-突-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "突然", vocabImg: "images/L5/vocab-突然.png" },
            { word: "然", parts: ["images/L5/筆順-然-部件-1.png", "images/L5/筆順-然-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "然後", vocabImg: "images/L5/vocab-然後.png" },
            { word: "得", parts: ["images/L5/筆順-得-部件-1.png", "images/L5/筆順-得-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "得到", vocabImg: "images/L5/vocab-得到.png" },
            { word: "高", parts: ["images/L5/筆順-高-部件-1.png", "images/L5/筆順-高-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "高興", vocabImg: "images/L5/vocab-高興.png" },
            { word: "樹", parts: ["images/L5/筆順-樹-部件-1.png", "images/L5/筆順-樹-部件-2.png", "images/L5/筆順-樹-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "大樹", vocabImg: "images/L5/vocab-大樹.png" },
            { word: "給", parts: ["images/L5/筆順-給-部件-1.png", "images/L5/筆順-給-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "給予", vocabImg: "images/L5/vocab-給予.png" },
            { word: "可", parts: ["images/L5/筆順-可-部件-1.png", "images/L5/筆順-可-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "可以", vocabImg: "images/L5/vocab-可以.png" },
            { word: "理", parts: ["images/L5/筆順-理-部件-1.png", "images/L5/筆順-理-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "修理", vocabImg: "images/L5/vocab-修理.png" },
            { word: "只", parts: ["images/L5/筆順-只-部件-1.png", "images/L5/筆順-只-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "只有", vocabImg: "images/L5/vocab-只有.png" },
            { word: "輕", parts: ["images/L5/筆順-輕-部件-1.png", "images/L5/筆順-輕-部件-2.png", "images/L5/筆順-輕-部件-3.png", "images/L5/筆順-輕-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "輕輕", vocabImg: "images/L5/vocab-輕輕.png" },
            { word: "飛", parts: ["images/L5/筆順-飛-部件-1.png", "images/L5/筆順-飛-部件-2.png", "images/L5/筆順-飛-部件-3.png", "images/L5/筆順-飛-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "飛翔", vocabImg: "images/L5/vocab-飛翔.png" },
            { word: "還", parts: ["images/L5/筆順-還-部件-1.png", "images/L5/筆順-還-部件-2.png", "images/L5/筆順-還-部件-3.png", "images/L5/筆順-還-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "還有", vocabImg: "images/L5/vocab-還有.png" }
        ], 
        level2: [
            { text: "這顆求是去哪裡借的，要記得還老師。", typo: "求", correct: "球", options: ["球", "求", "救"], speakText: "這顆球是去哪裡借的，要記得還老師。" },
            { text: "和豚可以在海裡也可以在水裡。", typo: "和", correct: "河", options: ["河", "和", "荷"], speakText: "河豚可以在海裡也可以在水裡。" },
            { text: "我紙是要拿課本，不小心把杯子打破了。", typo: "紙", correct: "只", options: ["只", "紙", "汁"], speakText: "我只是要拿課本，不小心把杯子打破了。" },
            { text: "平板壞了要拿去修裡，這幾天都不能玩了。", typo: "裡", correct: "理", options: ["理", "裡", "狸"], speakText: "平板壞了要拿去修理，這幾天都不能玩了。" },
            { text: "作業終於寫完了，可以放清鬆了。", typo: "清", correct: "輕", options: ["輕", "清", "猜"], speakText: "作業終於寫完了，可以放輕鬆了。" }
        ], 
        level3: [
            { parts: ["風", "把", "氣球", "吹到", "樹上。"] },
            { parts: ["弟弟", "看著", "他的", "作品", "一副", "沾沾自喜", "的樣子。"] },
            { parts: ["兔子", "聽到", "一點", "風吹草動", "就會", "很害怕。"] },
            { parts: ["媽媽", "送我", "一個", "可愛的", "貓咪", "玩偶"] },
            { parts: ["他", "喜歡", "放假的", "時候", "聽音樂。"] }
        ], 
        level4: [
            { word: "喜", radical: "口", options: ["口", "士"] },
            { word: "帶", radical: "巾", options: ["巾", "廿"] },
            { word: "氣", radical: "气", options: ["气", "米"] },
            { word: "球", radical: "玉", options: ["玉", "求"] },
            { word: "始", radical: "女", options: ["女", "台"] },
            { word: "吹", radical: "口", options: ["口", "欠"] },
            { word: "突", radical: "穴", options: ["穴", "犬"] },
            { word: "然", radical: "火(灬)", options: ["火(灬)", "犬"] },
            { word: "得", radical: "彳", options: ["彳", "寸"] },
            { word: "高", radical: "高", options: ["高", "口"] },
            { word: "樹", radical: "木", options: ["木", "豆"] },
            { word: "給", radical: "糸", options: ["糸", "合"] },
            { word: "可", radical: "口", options: ["口", "丁"] },
            { word: "理", radical: "玉", options: ["玉", "里"] },
            { word: "只", radical: "口", options: ["口", "八"] },
            { word: "輕", radical: "車", options: ["車", "巠"] },
            { word: "飛", radical: "飛", options: ["飛", "升"] },
            { word: "還", radical: "辵(辶)", options: ["辵(辶)", "睘"] }
        ] 
    },

    "6": { title: "第六課：鄰居的小孩", level1: [], level2: [], level3: [], level4: [] },
    
    "7": { title: "第七課：畫畫", level1: [], level2: [], level3: [], level4: [] },
    
    // ================= 第八課 =================
    "8": { 
        title: "第八課：給松鼠的卡片", 
        level1: [
            { word: "卡", parts: ["images/L8/筆順-卡-部件-1.png", "images/L8/筆順-卡-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "卡片", vocabImg: "images/L8/vocab-卡片.png" },
            { word: "片", parts: ["images/L8/筆順-片-部件-1.png", "images/L8/筆順-片-部件-2.png", "images/L8/筆順-片-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "卡片", vocabImg: "images/L8/vocab-卡片.png" },
            { word: "秋", parts: ["images/L8/筆順-秋-部件-1.png", "images/L8/筆順-秋-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "秋天", vocabImg: "images/L8/vocab-秋天.png" },
            { word: "採", parts: ["images/L8/筆順-採-部件-1.png", "images/L8/筆順-採-部件-2.png", "images/L8/筆順-採-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "採集", vocabImg: "images/L8/vocab-採集.png" },
            { word: "果", parts: ["images/L8/筆順-果-部件-1.png", "images/L8/筆順-果-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "水果", vocabImg: "images/L8/vocab-水果.png" },
            { word: "吃", parts: ["images/L8/筆順-吃-部件-1.png", "images/L8/筆順-吃-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "吃飯", vocabImg: "images/L8/vocab-吃飯.png" },
            { word: "飽", parts: ["images/L8/筆順-飽-部件-1.png", "images/L8/筆順-飽-部件-2.png", "images/L8/筆順-飽-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "吃飽", vocabImg: "images/L8/vocab-吃飽.png" },
            { word: "方", parts: ["images/L8/筆順-方-部件-1.png", "images/L8/筆順-方-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "地方", vocabImg: "images/L8/vocab-地方.png" },
            { word: "埋", parts: ["images/L8/筆順-埋-部件-1.png", "images/L8/筆順-埋-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "埋藏", vocabImg: "images/L8/vocab-埋藏.png" },
            { word: "進", parts: ["images/L8/筆順-進-部件-1.png", "images/L8/筆順-進-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "進去", vocabImg: "images/L8/vocab-進去.png" },
            { word: "很", parts: ["images/L8/筆順-很-部件-1.png", "images/L8/筆順-很-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "很好", vocabImg: "images/L8/vocab-很好.png" },
            { word: "久", parts: ["images/L8/筆順-久-部件-1.png", "images/L8/筆順-久-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "很久", vocabImg: "images/L8/vocab-很久.png" },
            { word: "嗎", parts: ["images/L8/筆順-嗎-部件-1.png", "images/L8/筆順-嗎-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "好嗎", vocabImg: "images/L8/vocab-好嗎.png" },
            { word: "長", parts: ["images/L8/筆順-長-部件-1.png", "images/L8/筆順-長-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "長大", vocabImg: "images/L8/vocab-長大.png" },
            { word: "敬", parts: ["images/L8/筆順-敬-部件-1.png", "images/L8/筆順-敬-部件-2.png", "images/L8/筆順-敬-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "敬愛", vocabImg: "images/L8/vocab-敬愛.png" },
            { word: "松", parts: ["images/L8/筆順-松-部件-1.png", "images/L8/筆順-松-部件-2.png", "images/L8/筆順-松-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "松鼠", vocabImg: "images/L8/vocab-松鼠.png" },
            { word: "鼠", parts: ["images/L8/筆順-鼠-部件-1.png", "images/L8/筆順-鼠-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "松鼠", vocabImg: "images/L8/vocab-松鼠.png" },
            { word: "從", parts: ["images/L8/筆順-從-部件-1.png", "images/L8/筆順-從-部件-2.png", "images/L8/筆順-從-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "從前", vocabImg: "images/L8/vocab-從前.png" },
            { word: "等", parts: ["images/L8/筆順-等-部件-1.png", "images/L8/筆順-等-部件-2.png", "images/L8/筆順-等-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "等待", vocabImg: "images/L8/vocab-等待.png" }
        ], 
        level2: [
            { text: "你的上片畫的好漂亮，媽媽一定會很喜歡！", typo: "上", correct: "卡", options: ["卡", "上", "下"], speakText: "你的卡片畫的好漂亮，媽媽一定會很喜歡！" },
            { text: "他已經近去教室五分鐘了，怎麼還沒拿課本出來?", typo: "近", correct: "進", options: ["進", "近", "退"], speakText: "他已經進去教室五分鐘了，怎麼還沒拿課本出來？" },
            { text: "今天的作業很多，所以妹妹寫了很九。", typo: "九", correct: "久", options: ["久", "九", "丸"], speakText: "今天的作業很多，所以妹妹寫了很久。" },
            { text: "蜜蜂跟蝴蝶都會彩花蜜。", typo: "彩", correct: "採", options: ["採", "彩", "踩"], speakText: "蜜蜂跟蝴蝶都會採花蜜。" },
            { text: "大家都很尊靜這位年級很大的老師。", typo: "靜", correct: "敬", options: ["敬", "靜", "淨"], speakText: "大家都很尊敬這位年級很大的老師。" }
        ], 
        level3: [
            { parts: ["我", "喜歡", "跟", "大家", "一起", "去", "操場", "玩球。"] },
            { parts: ["希望", "你", "每天", "健康", "快樂。"] },
            { parts: ["他", "已經", "都", "整理", "好了", "你不用", "畫蛇添足", "幫倒忙。"] },
            { parts: ["亮恩", "這幾天都", "愁眉苦臉", "好像", "有心事。"] },
            { parts: ["小狗", "把", "沒吃完的", "骨頭", "埋在", "樹下。"] }
        ], 
        level4: [
            { word: "卡", radical: "卜", options: ["卜", "一"] },
            { word: "片", radical: "片", options: ["片", "木"] },
            { word: "秋", radical: "禾", options: ["禾", "火"] },
            { word: "採", radical: "手", options: ["手", "木"] },
            { word: "果", radical: "木", options: ["木", "田"] },
            { word: "吃", radical: "口", options: ["口", "乞"] },
            { word: "飽", radical: "食", options: ["食", "包"] },
            { word: "方", radical: "方", options: ["方", "万"] },
            { word: "埋", radical: "土", options: ["土", "里"] },
            { word: "進", radical: "辵(辶)", options: ["辵(辶)", "隹"] },
            { word: "很", radical: "彳", options: ["彳", "艮"] },
            { word: "久", radical: "丿", options: ["丿", "人"] },
            { word: "嗎", radical: "口", options: ["口", "馬"] },
            { word: "長", radical: "長", options: ["長", "辰"] },
            { word: "敬", radical: "攴(攵)", options: ["攴(攵)", "苟"] },
            { word: "松", radical: "木", options: ["木", "公"] },
            { word: "鼠", radical: "鼠", options: ["鼠", "臼"] },
            { word: "從", radical: "彳", options: ["彳", "人"] },
            { word: "等", radical: "竹", options: ["竹", "寺"] }
        ] 
    },

    // ================= 第九課 =================
    "9": { 
        title: "第九課：張奶奶的寶貝", 
        level1: [
            { word: "奶", parts: ["images/L9/筆順-奶-部件-1.png", "images/L9/筆順-奶-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "奶奶", vocabImg: "images/L9/vocab-奶奶.png" },
            { word: "貝", parts: ["images/L9/筆順-貝-部件-1.png", "images/L9/筆順-貝-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "寶貝", vocabImg: "images/L9/vocab-寶貝.png" },
            { word: "早", parts: ["images/L9/筆順-早-部件-1.png", "images/L9/筆順-早-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "早上", vocabImg: "images/L9/vocab-早上.png" },
            { word: "校", parts: ["images/L9/筆順-校-部件-1.png", "images/L9/筆順-校-部件-2.png", "images/L9/筆順-校-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "學校", vocabImg: "images/L9/vocab-學校.png" },
            { word: "園", parts: ["images/L9/筆順-園-部件-1.png", "images/L9/筆順-園-部件-2.png", "images/L9/筆順-園-部件-3.png", "images/L9/筆順-園-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "校園", vocabImg: "images/L9/vocab-校園.png" },
            { word: "工", parts: ["images/L9/筆順-工-部件-1.png", "images/L9/筆順-工-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "工作", vocabImg: "images/L9/vocab-工作.png" },
            { word: "作", parts: ["images/L9/筆順-作-部件-1.png", "images/L9/筆順-作-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "作業", vocabImg: "images/L9/vocab-作業.png" },
            { word: "她", parts: ["images/L9/筆順-她-部件-1.png", "images/L9/筆順-她-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "她們", vocabImg: "images/L9/vocab-她們.png" },
            { word: "邊", parts: ["images/L9/筆順-邊-部件-1.png", "images/L9/筆順-邊-部件-2.png", "images/L9/筆順-邊-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "旁邊", vocabImg: "images/L9/vocab-旁邊.png" },
            { word: "汗", parts: ["images/L9/筆順-汗-部件-1.png", "images/L9/筆順-汗-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "流汗", vocabImg: "images/L9/vocab-流汗.png" },
            { word: "學", parts: ["images/L9/筆順-學-部件-1.png", "images/L9/筆順-學-部件-2.png", "images/L9/筆順-學-部件-3.png", "images/L9/筆順-學-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "學習", vocabImg: "images/L9/vocab-學習.png" },
            { word: "您", parts: ["images/L9/筆順-您-部件-1.png", "images/L9/筆順-您-部件-2.png", "images/L9/筆順-您-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "您好", vocabImg: "images/L9/vocab-您好.png" },
            { word: "樣", parts: ["images/L9/筆順-樣-部件-1.png", "images/L9/筆順-樣-部件-2.png", "images/L9/筆順-樣-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "樣子", vocabImg: "images/L9/vocab-樣子.png" },
            { word: "當", parts: ["images/L9/筆順-當-部件-1.png", "images/L9/筆順-當-部件-2.png", "images/L9/筆順-當-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "當然", vocabImg: "images/L9/vocab-當然.png" },
            { word: "成", parts: ["images/L9/筆順-成-部件-1.png", "images/L9/筆順-成-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "成功", vocabImg: "images/L9/vocab-成功.png" },
            { word: "寶", parts: ["images/L9/筆順-寶-部件-1.png", "images/L9/筆順-寶-部件-2.png", "images/L9/筆順-寶-部件-3.png", "images/L9/筆順-寶-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "寶石", vocabImg: "images/L9/vocab-寶石.png" },
            { word: "擦", parts: ["images/L9/筆順-擦-部件-1.png", "images/L9/筆順-擦-部件-2.png", "images/L9/筆順-擦-部件-3.png", "images/L9/筆順-擦-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "擦拭", vocabImg: "images/L9/vocab-擦拭.png" },
            { word: "澆", parts: ["images/L9/筆順-澆-部件-1.png", "images/L9/筆順-澆-部件-2.png", "images/L9/筆順-澆-部件-3.png", "images/L9/筆順-澆-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "澆水", vocabImg: "images/L9/vocab-澆水.png" }
        ], 
        level2: [], 
        level3: [], 
        level4: [
            { word: "奶", radical: "女", options: ["女", "乃"] },
            { word: "貝", radical: "貝", options: ["貝", "目"] },
            { word: "早", radical: "日", options: ["日", "十"] },
            { word: "校", radical: "木", options: ["木", "交"] },
            { word: "園", radical: "囗", options: ["囗", "袁"] },
            { word: "工", radical: "工", options: ["工", "土"] },
            { word: "作", radical: "人", options: ["人", "乍"] },
            { word: "她", radical: "女", options: ["女", "也"] },
            { word: "邊", radical: "辵(辶)", options: ["辵(辶)", "力"] },
            { word: "汗", radical: "水", options: ["水", "干"] },
            { word: "學", radical: "子", options: ["子", "臼"] },
            { word: "您", radical: "心", options: ["心", "你"] },
            { word: "樣", radical: "木", options: ["木", "羊"] },
            { word: "當", radical: "田", options: ["田", "尚"] },
            { word: "成", radical: "戈", options: ["戈", "戊"] },
            { word: "寶", radical: "宀", options: ["宀", "玉"] },
            { word: "擦", radical: "手", options: ["手", "察"] },
            { word: "澆", radical: "水", options: ["水", "堯"] }
        ] 
    },

    // ================= 第十課 =================
    "10": { 
        title: "第十課：井裡的青蛙", 
        level1: [
            { word: "井", parts: ["images/L10/筆順-井-部件-1.png", "images/L10/筆順-井-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "水井", vocabImg: "images/L10/vocab-水井.png" },
            { word: "隻", parts: ["images/L10/筆順-隻-部件-1.png", "images/L10/筆順-隻-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "一隻", vocabImg: "images/L10/vocab-一隻.png" },
            { word: "除", parts: ["images/L10/筆順-除-部件-1.png", "images/L10/筆順-除-部件-2.png", "images/L10/筆順-除-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "除了", vocabImg: "images/L10/vocab-除了.png" },
            { word: "睡", parts: ["images/L10/筆順-睡-部件-1.png", "images/L10/筆順-睡-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "睡覺", vocabImg: "images/L10/vocab-睡覺.png" },
            { word: "覺", parts: ["images/L10/筆順-覺-部件-1.png", "images/L10/筆順-覺-部件-2.png", "images/L10/筆順-覺-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "覺得", vocabImg: "images/L10/vocab-覺得.png" },
            { word: "東", parts: ["images/L10/筆順-東-部件-1.png", "images/L10/筆順-東-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "東西", vocabImg: "images/L10/vocab-東西.png" },
            { word: "西", parts: ["images/L10/筆順-西-部件-1.png", "images/L10/筆順-西-部件-2.png"], pos: [{x: 100, y: 110}, {x: 100, y: 180}], vocab: "西瓜", vocabImg: "images/L10/vocab-西瓜.png" },
            { word: "拍", parts: ["images/L10/筆順-拍-部件-1.png", "images/L10/筆順-拍-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "拍手", vocabImg: "images/L10/vocab-拍手.png" },
            { word: "肚", parts: ["images/L10/筆順-肚-部件-1.png", "images/L10/筆順-肚-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "肚子", vocabImg: "images/L10/vocab-肚子.png" },
            { word: "唉", parts: ["images/L10/筆順-唉-部件-1.png", "images/L10/筆順-唉-部件-2.png", "images/L10/筆順-唉-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "嘆氣", vocabImg: "images/L10/vocab-嘆氣.png" },
            { word: "幾", parts: ["images/L10/筆順-幾-部件-1.png", "images/L10/筆順-幾-部件-2.png", "images/L10/筆順-幾-部件-3.png", "images/L10/筆順-幾-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}], vocab: "幾個", vocabImg: "images/L10/vocab-幾個.png" },
            { word: "世", parts: ["images/L10/筆順-世-部件-1.png", "images/L10/筆順-世-部件-2.png", "images/L10/筆順-世-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "世界", vocabImg: "images/L10/vocab-世界.png" },
            { word: "界", parts: ["images/L10/筆順-界-部件-1.png", "images/L10/筆順-界-部件-2.png", "images/L10/筆順-界-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "邊界", vocabImg: "images/L10/vocab-邊界.png" },
            { word: "連", parts: ["images/L10/筆順-連-部件-1.png", "images/L10/筆順-連-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "連忙", vocabImg: "images/L10/vocab-連忙.png" },
            { word: "裝", parts: ["images/L10/筆順-裝-部件-1.png", "images/L10/筆順-裝-部件-2.png", "images/L10/筆順-裝-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "假裝", vocabImg: "images/L10/vocab-假裝.png" },
            { word: "蛙", parts: ["images/L10/筆順-蛙-部件-1.png", "images/L10/筆順-蛙-部件-2.png"], pos: [{x: 80, y: 180}, {x: 150, y: 180}], vocab: "青蛙", vocabImg: "images/L10/vocab-青蛙.png" },
            { word: "窪", parts: ["images/L10/筆順-窪-部件-1.png", "images/L10/筆順-窪-部件-2.png", "images/L10/筆順-窪-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "水窪", vocabImg: "images/L10/vocab-水窪.png" }
        ], 
        level2: [], 
        level3: [], 
        level4: [
            { word: "井", radical: "二", options: ["二", "十"] },
            { word: "隻", radical: "隹", options: ["隹", "又"] },
            { word: "除", radical: "阜(阝)", options: ["阜(阝)", "余"] },
            { word: "睡", radical: "目", options: ["目", "垂"] },
            { word: "覺", radical: "見", options: ["見", "學"] },
            { word: "東", radical: "木", options: ["木", "日"] },
            { word: "西", radical: "襾", options: ["襾", "四"] },
            { word: "拍", radical: "手", options: ["手", "白"] },
            { word: "肚", radical: "肉(月)", options: ["肉(月)", "土"] },
            { word: "唉", radical: "口", options: ["口", "矣"] },
            { word: "幾", radical: "幺", options: ["幺", "戈"] },
            { word: "世", radical: "一", options: ["一", "廿"] },
            { word: "界", radical: "田", options: ["田", "介"] },
            { word: "連", radical: "辵(辶)", options: ["辵(辶)", "車"] },
            { word: "裝", radical: "衣", options: ["衣", "壯"] },
            { word: "蛙", radical: "虫", options: ["虫", "圭"] },
            { word: "窪", radical: "水", options: ["水", "穴"] }
        ] 
    },

    "11": { title: "第十一課：吃星星的鴨子", level1: [], level2: [], level3: [], level4: [] },
    
    "12": { title: "第十二課：快樂不只一半", level1: [], level2: [], level3: [], level4: [] }
};
