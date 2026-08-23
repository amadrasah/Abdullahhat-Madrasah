// Abdullah Hat Islamia Fazil (Degree) Madrasah
// Online Result System


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }

}


// ===============================
// SUBJECT CONFIGURATION
// ===============================

// এখানে ভবিষ্যতে বিষয় ও পূর্ণমান পরিবর্তন করা যাবে।

const subjects = [

    {
        name: "কুরআন মাজিদ",
        fullMarks: 100,
        mcq: 0,
        cq: 100,
        practical: 0
    },

    {
        name: "হাদীস শরিফ",
        fullMarks: 100,
        mcq: 0,
        cq: 100,
        practical: 0
    },

    {
        name: "আকাইদ ও ফিকহ",
        fullMarks: 100,
        mcq: 0,
        cq: 100,
        practical: 0
    },

    {
        name: "আরবী ১ম",
        fullMarks: 100,
        mcq: 0,
        cq: 100,
        practical: 0
    },

    {
        name: "আরবী ২য়",
        fullMarks: 100,
        mcq: 0,
        cq: 100,
        practical: 0
    },

    {
        name: "ইংরেজি ১ম",
        fullMarks: 100,
        mcq: 0,
        cq: 100,
        practical: 0
    },

    {
        name: "ইংরেজি ২য়",
        fullMarks: 100,
        mcq: 0,
        cq: 100,
        practical: 0
    },

    {
        name: "বাংলা ১ম",
        fullMarks: 100,
        mcq: 30,
        cq: 70,
        practical: 0
    },

    {
        name: "বাংলা ২য়",
        fullMarks: 100,
        mcq: 30,
        cq: 70,
        practical: 0
    },

    {
        name: "গণিত",
        fullMarks: 100,
        mcq: 30,
        cq: 70,
        practical: 0
    },

    {
        name: "ইসলামের ইতিহাস",
        fullMarks: 100,
        mcq: 30,
        cq: 70,
        practical: 0
    },

    {
        name: "ICT",
        fullMarks: 100,
        mcq: 25,
        cq: 50,
        practical: 25
    },

    {
        name: "কৃষি",
        fullMarks: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: true
    }

];


// ===============================
// DEMO RESULT DATABASE
// ===============================

const students = {

    "2026|বার্ষিক পরীক্ষা|dakhil10|101": {

        name: "আব্দুল্লাহ",
        roll: "101",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        examName: "বার্ষিক পরীক্ষা",

        marks: {

            "কুরআন মাজিদ": 82,
            "হাদীস শরিফ": 76,
            "আকাইদ ও ফিকহ": 88,
            "আরবী ১ম": 91,
            "আরবী ২য়": 79,
            "ইংরেজি ১ম": 80,
            "ইংরেজি ২য়": 75,
            "বাংলা ১ম": 85,
            "বাংলা ২য়": 78,
            "গণিত": 88,
            "ইসলামের ইতিহাস": 84,
            "ICT": 92,
            "কৃষি": 86

        }

    },

    "2026|বার্ষিক পরীক্ষা|dakhil10|102": {

        name: "মোঃ হাসান",
        roll: "102",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        examName: "বার্ষিক পরীক্ষা",

        marks: {

            "কুরআন মাজিদ": 72,
            "হাদীস শরিফ": 68,
            "আকাইদ ও ফিকহ": 81,
            "আরবী ১ম": 85,
            "আরবী ২য়": 74,
            "ইংরেজি ১ম": 70,
            "ইংরেজি ২য়": 69,
            "বাংলা ১ম": 76,
            "বাংলা ২য়": 71,
            "গণিত": 81,
            "ইসলামের ইতিহাস": 75,
            "ICT": 78,
            "কৃষি": 73

        }

    },

    "2026|বার্ষিক পরীক্ষা|dakhil10|103": {

        name: "সুমাইয়া আক্তার",
        roll: "103",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        examName: "বার্ষিক পরীক্ষা",

        marks: {

            "কুরআন মাজিদ": 95,
            "হাদীস শরিফ": 89,
            "আকাইদ ও ফিকহ": 92,
            "আরবী ১ম": 96,
            "আরবী ২য়": 90,
            "ইংরেজি ১ম": 94,
            "ইংরেজি ২য়": 91,
            "বাংলা ১ম": 95,
            "বাংলা ২য়": 89,
            "গণিত": 92,
            "ইসলামের ইতিহাস": 96,
            "ICT": 94,
            "কৃষি": 93

        }

    }

};


// ===============================
// GRADE / GPA
// ===============================

function getGrade(mark, fullMarks) {

    const percentage = (mark / fullMarks) * 100;

    if (percentage >= 80) {
        return { grade: "A+", point: 5.00 };
    }

    if (percentage >= 70) {
        return { grade: "A", point: 4.00 };
    }

    if (percentage >= 60) {
        return { grade: "A-", point: 3.50 };
    }

    if (percentage >= 50) {
        return { grade: "B", point: 3.00 };
    }

    if (percentage >= 40) {
        return { grade: "C", point: 2.00 };
    }

    if (percentage >= 33) {
        return { grade: "D", point: 1.00 };
    }

    return { grade: "F", point: 0.00 };

}


// ===============================
// RESULT SEARCH
// ===============================

function searchResult() {

    const year =
        document.getElementById("examYear").value;

    const examName =
        document.getElementById("examName").value;

    const className =
        document.getElementById("examClass").value;

    const roll =
        document.getElementById("rollNumber").value.trim();

    const message =
        document.getElementById("resultMessage");

    const output =
        document.getElementById("resultOutput");


    message.innerHTML = "";
    output.innerHTML = "";


    // Input check

    if (
        year === "" ||
        examName === "" ||
        className === "" ||
        roll === ""
    ) {

        message.innerHTML =
            "⚠️ সন, পরীক্ষার নাম, শ্রেণি ও রোল নম্বর পূরণ করুন।";

        message.style.color = "red";

        return;
    }


    // Search key

    const key =
        year + "|" +
        examName + "|" +
        className + "|" +
        roll;


    const student =
        students[key];


    if (!student) {

        message.innerHTML =
            "❌ এই পরীক্ষার জন্য এই শিক্ষার্থীর কোনো ফলাফল পাওয়া যায়নি।";

        message.style.color = "red";

        return;
    }


    // ===============================
    // RESULT CALCULATION
    // ===============================

    let total = 0;
    let totalFullMarks = 0;
    let totalPoint = 0;
    let subjectCount = 0;
    let hasFail = false;


    let rows = "";


    subjects.forEach(function(subject) {

        const mark =
            Number(student.marks[subject.name] || 0);

        const gradeInfo =
            getGrade(mark, subject.fullMarks);


        total += mark;
        totalFullMarks += subject.fullMarks;

        totalPoint += gradeInfo.point;

        subjectCount++;


        if (mark < subject.fullMarks * 0.33) {
            hasFail = true;
        }


        rows += `

            <tr>

                <td>${subject.name}</td>

                <td>${subject.fullMarks}</td>

                <td>${mark}</td>

                <td>${gradeInfo.grade}</td>

                <td>${gradeInfo.point.toFixed(2)}</td>

            </tr>

        `;

    });


    const average =
        total / subjectCount;


    let gpa =
        totalPoint / subjectCount;


    if (gpa > 5) {
        gpa = 5;
    }


    const result =
        hasFail ? "FAIL" : "PASS";


    // ===============================
    // DISPLAY
    // ===============================

    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";

    message.style.color = "#087f4f";


    output.innerHTML = `

        <div class="result-summary">

            <h3>${student.name}</h3>

            <p>
                <strong>সন:</strong> ${student.year}
                &nbsp; | &nbsp;
                <strong>পরীক্ষা:</strong> ${student.examName}
            </p>

            <p>
                <strong>শ্রেণি:</strong> ${student.className}
                &nbsp; | &nbsp;
                <strong>রোল:</strong> ${student.roll}
            </p>

        </div>


        <table class="result-table">

            <thead>

                <tr>

                    <th>বিষয়</th>
                    <th>পূর্ণমান</th>
                    <th>প্রাপ্ত</th>
                    <th>গ্রেড</th>
                    <th>GPA</th>

                </tr>

            </thead>


            <tbody>

                ${rows}

            </tbody>


            <tfoot>

                <tr>

                    <th colspan="2">
                        মোট
                    </th>

                    <th>
                        ${total}
                    </th>

                    <th>
                        গড়
                    </th>

                    <th>
                        ${average.toFixed(2)}
                    </th>

                </tr>

                <tr>

                    <th colspan="4">
                        GPA
                    </th>

                    <th>
                        ${hasFail ? "0.00" : gpa.toFixed(2)}
                    </th>

                </tr>

                <tr>

                    <th colspan="4">
                        ফলাফল
                    </th>

                    <th class="${
                        result === "PASS"
                            ? "result-pass"
                            : "result-fail"
                    }">

                        ${result}

                    </th>

                </tr>

            </tfoot>

        </table>

    `;

}


// ===============================
// PAGE LOADED
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navLinks =
            document.querySelectorAll("#menu a");


        navLinks.forEach(function(link) {

            link.addEventListener(
                "click",
                function() {

                    const menu =
                        document.getElementById("menu");

                    if (menu) {
                        menu.classList.remove("active");
                    }

                }
            );

        });

    }
);
