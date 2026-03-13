const allLessonsData = {
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
            { word: "置", parts: ["images/L3/筆順-置-部件-1.png", "images/L3/筆順-置-部件-2.png", "images/L3/筆順-置-部件-3.png"], pos: [{x: 70, y: 180}, {x: 130, y: 180}, {x: 190, y: 180}], vocab: "布丁", vocabImg: "images/L3/vocab-布丁.png" }
        ], 
        // 🌟 第二關：找錯字資料
        level2: [
            { text: "這不是人口，你走錯地方了。", typo: "人", correct: "入", options: ["入", "八", "大"], speakText: "這不是入口，你走錯地方了。" },
            { text: "從那個山波走進去，就會看到很多小貓咪。", typo: "波", correct: "坡", options: ["坡", "破", "披"], speakText: "從那個山坡走進去，就會看到很多小貓咪。" },
            { text: "我最喜歡吃的點心就是不丁。", typo: "不", correct: "布", options: ["布", "有", "下"], speakText: "我最喜歡吃的點心就是布丁。" },
            { text: "走廊不可以跑步，請去操揚跑。", typo: "揚", correct: "場", options: ["場", "湯", "陽"], speakText: "走廊不可以跑步，請去操場跑。" },
            { text: "那條小和有很多的魚。", typo: "和", correct: "河", options: ["河", "何", "可"], speakText: "那條小河有很多的魚。" },
            { text: "這條路的中問有很多的坑洞。", typo: "問", correct: "間", options: ["間", "聞", "閃"], speakText: "這條路的中間有很多的坑洞。" }
        ], 
        // 🌟 第三關：短語練習資料
        level3: [
            { parts: ["山坡上", "的", "花朵"] },
            { parts: ["小河", "在山上，", "小鳥", "在林間"] },
            { parts: ["我要", "加入", "山中", "音樂會"] },
            { parts: ["我", "要去", "玩球", "也要去", "跳繩"] },
            { parts: ["媽媽", "把", "花瓶", "擺在", "中間"] }
        ], 
        // 🌟 第四關：部首二選一資料
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
    }
};
