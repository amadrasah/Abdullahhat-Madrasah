// Abdullah Hat Islamia Fazil (Degree) Madrasah
// Online Result System


// ======================================
// MOBILE MENU
// ======================================

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }

}


// ======================================
// SUBJECT CONFIGURATION
// ======================================

const subjects = [

    {
        name: "কুরআন মাজিদ",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "হাদীস শরিফ",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "আকাইদ ও ফিকহ",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "আরবী ১ম",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "আরবী ২য়",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "ইংরেজি ১ম",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "ইংরেজি ২য়",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "বাংলা ১ম",
        fullMarks: 100,
        mcqFull: 30,
        cqFull: 70,
        practicalFull: 0,
        optional: false
    },

    {
        name: "বাংলা ২য়",
        fullMarks: 100,
        mcqFull: 30,
        cqFull: 70,
        practicalFull: 0,
        optional: false
    },

    {
        name: "গণিত",
        fullMarks: 100,
        mcqFull: 30,
        cqFull: 70,
        practicalFull: 0,
        optional: false
    },

    {
        name: "ইসলামের ইতিহাস",
        fullMarks: 100,
        mcqFull: 30,
        cqFull: 70,
        practicalFull: 0,
        optional: false
    },

    {
        name: "ICT",
        fullMarks: 100,
        mcqFull: 25,
        cqFull: 50,
        practicalFull: 25,
        optional: false
    },

    {
        name: "কৃষি",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: true
    }

];


// ======================================
// DEMO STUDENT RESULT
// ======================================

const students = {

    "2026|বার্ষিক পরীক্ষা|dakhil10|101": {

        name: "আব্দুল্লাহ",
        roll: "101",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        examName: "বার্ষিক পরীক্ষা",

        marks: {

            "কুরআন মাজিদ": {
                mcq: 0,
                cq: 82,
                practical: 0
            },

            "হাদীস শরিফ": {
                mcq: 0,
                cq: 76,
                practical: 0
            },

            "আকাইদ ও ফিকহ": {
                mcq: 0,
                cq: 88,
                practical: 0
            },

            "আরবী ১ম": {
                mcq: 0,
                cq: 91,
                practical: 0
            },

            "আরবী ২য়": {
                mcq: 0,
                cq: 79,
                practical: 0
            },

            "ইংরেজি ১ম": {
                mcq: 0,
                cq: 80,
                practical: 0
            },

            "ইংরেজি ২য়": {
                mcq: 0,
                cq: 75,
                practical: 0
            },

            "বাংলা ১ম": {
                mcq: 25,
                cq: 60,
                practical: 0
            },

            "বাংলা ২য়": {
                mcq: 24,
                cq: 54,
                practical: 0
            },

            "গণিত": {
                mcq: 27,
                cq: 61,
                practical: 0
            },

            "ইসলামের ইতিহাস": {
                mcq: 26,
                cq: 58,
                practical: 0
            },

            "ICT": {
                mcq: 22,
                cq: 42,
                practical: 23
            },

            "কৃষি": {
                mcq: 0,
                cq: 86,
                practical: 0
            }

        }

    }

};


// ======================================
// GRADE
// ======================================

function getGrade(mark, fullMarks) {

    const percentage =
        (mark / fullMarks) * 100;


    if (percentage >= 80) {
        return {
            grade: "A+",
            point: 5.00
        };
    }

    if (percentage >= 70) {
        return {
            grade: "A",
            point: 4.00
        };
    }

    if (percentage >= 60) {
        return {
            grade: "A-",
            point: 3.50
        };
    }

    if (percentage >= 50) {
        return {
            grade: "B",
            point: 3.00
        };
    }

    if (percentage >= 40) {
        return {
            grade: "C",
            point: 2.00
        };
    }

    if (percentage >= 33) {
        return {
            grade: "D",
            point: 1.00
        };
    }

    return {
        grade: "F",
        point: 0.00
    };

}


// ======================================
// PART PASS CHECK
// ======================================

function partPassed(mark, fullMarks) {

    if (fullMarks === 0) {
        return true;
    }

    // 33% এবং ভগ্নাংশ হলে পরের পূর্ণসংখ্যা
    const passMark =
        Math.ceil(fullMarks * 0.33);

    return mark >= passMark;

}


// ======================================
// RESULT SEARCH
// ======================================

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


    // Search

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


    // ======================================
    // CALCULATION
    // ======================================

    let compulsoryPoint = 0;
    let compulsoryCount = 0;

    let totalMarks = 0;
    let totalFullMarks = 0;

    let hasFail = false;

    let agricultureBonus = 0;

    let rows = "";


    subjects.forEach(function(subject) {

        const data =
            student.marks[subject.name] || {
                mcq: 0,
                cq: 0,
                practical: 0
            };


        const mcq =
            Number(data.mcq || 0);

        const cq =
            Number(data.cq || 0);

        const practical =
            Number(data.practical || 0);


        const total =
            mcq + cq + practical;


        // ----------------------------------
        // Separate pass checking
        // ----------------------------------

        const mcqPass =
            partPassed(mcq, subject.mcqFull);

        const cqPass =
            partPassed(cq, subject.cqFull);

        const practicalPass =
            partPassed(
                practical,
                subject.practicalFull
            );


        const subjectPass =
            mcqPass &&
            cqPass &&
            practicalPass;


        if (!subject.optional && !subjectPass) {
            hasFail = true;
        }


        const gradeInfo =
            getGrade(
                total,
                subject.fullMarks
            );


        // ----------------------------------
        // Agriculture bonus
        // ----------------------------------

        if (subject.optional) {

            const percentage =
                (total / subject.fullMarks) * 100;


            if (percentage > 40) {

                agricultureBonus =
                    Math.max(
                        0,
                        gradeInfo.point - 2
                    );

            }

        }
        else {

            compulsoryPoint +=
                gradeInfo.point;

            compulsoryCount++;

        }


        totalMarks += total;

        totalFullMarks +=
            subject.fullMarks;


        // ----------------------------------
        // Display row
        // ----------------------------------

        rows += `

            <tr>

                <td>${subject.name}</td>

                <td>${subject.fullMarks}</td>

                <td>${subject.mcqFull === 0 ? "-" : mcq}</td>

                <td>${subject.cqFull === 0 ? "-" : cq}</td>

                <td>${subject.practicalFull === 0 ? "-" : practical}</td>

                <td>${total}</td>

                <td>${gradeInfo.grade}</td>

                <td>${gradeInfo.point.toFixed(2)}</td>

            </tr>

        `;

    });


    // ======================================
    // GPA
    // ======================================

    let baseGPA =
        compulsoryCount > 0
            ? compulsoryPoint / compulsoryCount
            : 0;


    let finalGPA =
        baseGPA + agricultureBonus;


    if (finalGPA > 5) {
        finalGPA = 5;
    }


    if (hasFail) {
        finalGPA = 0;
    }


    const average =
        totalMarks / totalFullMarks * 100;


    const result =
        hasFail
            ? "FAIL"
            : "PASS";


    // ======================================
    // MESSAGE
    // ======================================

    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";

    message.style.color =
        "#087f4f";


    // ======================================
    // OUTPUT
    // ======================================

    output.innerHTML = `

        <div class="result-summary">

            <h3>${student.name}</h3>

            <p>
                <strong>সন:</strong>
                ${student.year}

                &nbsp; | &nbsp;

                <strong>পরীক্ষা:</strong>
                ${student.examName}
            </p>

            <p>

                <strong>শ্রেণি:</strong>
                ${student.className}

                &nbsp; | &nbsp;

                <strong>রোল:</strong>
                ${student.roll}

            </p>

        </div>


        <div style="overflow-x:auto;">

            <table class="result-table">

                <thead>

                    <tr>

                        <th>বিষয়</th>

                        <th>পূর্ণমান</th>

                        <th>MCQ</th>

                        <th>CQ</th>

                        <th>Practical</th>

                        <th>মোট</th>

                        <th>গ্রেড</th>

                        <th>পয়েন্ট</th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>


                <tfoot>

                    <tr>

                        <th colspan="5">
                            মোট প্রাপ্ত নম্বর
                        </th>

                        <th>
                            ${totalMarks}
                        </th>

                        <th colspan="2">
                            ${totalFullMarks}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            মূল GPA
                        </th>

                        <th>
                            ${baseGPA.toFixed(2)}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            কৃষি অতিরিক্ত পয়েন্ট
                        </th>

                        <th>
                            ${agricultureBonus.toFixed(2)}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            চূড়ান্ত GPA
                        </th>

                        <th>
                            ${finalGPA.toFixed(2)}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
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

        </div>

    `;

}


// ======================================
// PAGE LOADED
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navLinks =
            document.querySelectorAll("#menu a");


        navLinks.forEach(function(link) {

            link.addEventListener(
                "click",
                function () {

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
