/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   COMPLETE SCHOOL MANAGEMENT / RESULT SYSTEM
   BULK MARK ENTRY VERSION
   ========================================================= */


/* =========================================================
   1. BASIC CONFIGURATION
   ========================================================= */

const CLASS_LIST = {

    nurani1: "নূরানী ১ম জামাত",
    nurani2: "নূরানী ২য় জামাত",
    nurani3: "নূরানী ৩য় জামাত",

    ebtedayi4: "ইবতেদায়ী ৪র্থ শ্রেণি",
    ebtedayi5: "ইবতেদায়ী ৫ম শ্রেণি",

    dakhil6: "দাখিল ৬ষ্ঠ শ্রেণি",
    dakhil7: "দাখিল ৭ম শ্রেণি",
    dakhil8: "দাখিল ৮ম শ্রেণি",
    dakhil9: "দাখিল ৯ম শ্রেণি",
    dakhil10: "দাখিল ১০ম শ্রেণি",

    alim1: "আলিম ১ম বর্ষ",
    alim2: "আলিম ২য় বর্ষ",

    fazil1: "ফাজিল ১ম বর্ষ",
    fazil2: "ফাজিল ২য় বর্ষ",
    fazil3: "ফাজিল ৩য় বর্ষ"

};


const EXAMS = [

    "অর্ধবার্ষিক পরীক্ষা",
    "প্রাক-নির্বাচনী পরীক্ষা",
    "নির্বাচনী পরীক্ষা",
    "১ম টিউটোরিয়াল",
    "২য় টিউটোরিয়াল",
    "৩য় টিউটোরিয়াল",
    "বার্ষিক পরীক্ষা"

];


const SUBJECTS = [

    {
        name: "কুরআন মাজিদ",
        group: "quran-hadith",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "হাদীস শরিফ",
        group: "quran-hadith",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "আকাইদ ও ফিকহ",
        group: "aqaid-fiqh",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "আরবী ১ম",
        group: "arabic",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "আরবী ২য়",
        group: "arabic",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "ইংরেজি ১ম",
        group: "english",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "ইংরেজি ২য়",
        group: "english",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "বাংলা ১ম",
        group: "bangla",
        full: 100,
        mcq: 30,
        cq: 70,
        practical: 0,
        optional: false
    },

    {
        name: "বাংলা ২য়",
        group: "bangla",
        full: 100,
        mcq: 30,
        cq: 70,
        practical: 0,
        optional: false
    },

    {
        name: "গণিত",
        group: "math",
        full: 100,
        mcq: 30,
        cq: 70,
        practical: 0,
        optional: false
    },

    {
        name: "ইসলামের ইতিহাস",
        group: "islamic-history",
        full: 100,
        mcq: 30,
        cq: 70,
        practical: 0,
        optional: false
    },

    {
        name: "ICT",
        group: "ict",
        full: 100,
        mcq: 25,
        cq: 50,
        practical: 25,
        optional: false
    },

    {
        name: "কৃষি",
        group: "agriculture",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: true
    }

];


/* =========================================================
   2. LOCAL STORAGE
   ========================================================= */

let admissionStudents =
    JSON.parse(
        localStorage.getItem("madrasah_students") || "[]"
    );


let marksData =
    JSON.parse(
        localStorage.getItem("madrasah_marks") || "[]"
    );


/* =========================================================
   3. STORAGE SAVE
   ========================================================= */

function saveStudents() {

    localStorage.setItem(
        "madrasah_students",
        JSON.stringify(admissionStudents)
    );

}


function saveMarksData() {

    localStorage.setItem(
        "madrasah_marks",
        JSON.stringify(marksData)
    );

}

