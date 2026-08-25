// ==========================================================
// Abdullah Hat Islamia Fazil (Degree) Madrasah
// ONLINE RESULT SYSTEM
// ==========================================================


// ==========================================================
// MOBILE MENU
// ==========================================================

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }

}


// ==========================================================
// EXAMINATION LIST
// অর্ধবার্ষিক থেকে শুরু হবে
// Tutorial সবশেষে
// ==========================================================

const examList = [
    "অর্ধবার্ষিক পরীক্ষা",
    "প্রাক নির্বাচনী পরীক্ষা",
    "নির্বাচনী পরীক্ষা",
    "বার্ষিক পরীক্ষা",
    "১ম টিউটোরিয়াল",
    "২য় টিউটোরিয়াল",
    "৩য় টিউটোরিয়াল"
];


// ==========================================================
// EXAM DROPDOWN AUTO SET
// ==========================================================

function setupExamDropdown() {

    const examSelect =
        document.getElementById("examName");

    if (!examSelect) {
        return;
    }

    examSelect.innerHTML = `
        <option value="">
            পরীক্ষার নাম নির্বাচন করুন
        </option>
    `;

    examList.forEach(function(exam) {

        const option =
            document.createElement("option");

        option.value = exam;
        option.textContent = exam;

        examSelect.appendChild(option);

    });

}


// ==========================================================
// SUBJECT CONFIGURATION
// ==========================================================
//
// group একই হলে ১ম ও ২য় পত্র একই GPA গ্রুপে থাকবে
//
// কৃষি optional = true
//
// পূর্ণমান / MCQ / CQ / Practical
// প্রয়োজন অনুযায়ী এখান থেকে পরিবর্তন করা যাবে
// ==========================================================

const subjects = [

    {
        name: "কুরআন মাজিদ",
        group: "quran-hadith",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "হাদীস শরিফ",
        group: "quran-hadith",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "আকাইদ ও ফিকহ",
        group: "aqaid-fiqh",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "আরবী ১ম",
        group: "arabic",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "আরবী ২য়",
        group: "arabic",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "ইংরেজি ১ম",
        group: "english",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "ইংরেজি ২য়",
        group: "english",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: false
    },

    {
        name: "বাংলা ১ম",
        group: "bangla",
        fullMarks: 100,
        mcqFull: 30,
        cqFull: 70,
        practicalFull: 0,
        optional: false
    },

    {
        name: "বাংলা ২য়",
        group: "bangla",
        fullMarks: 100,
        mcqFull: 30,
        cqFull: 70,
        practicalFull: 0,
        optional: false
    },

    {
        name: "গণিত",
        group: "math",
        fullMarks: 100,
        mcqFull: 30,
        cqFull: 70,
        practicalFull: 0,
        optional: false
    },

    {
        name: "ইসলামের ইতিহাস",
        group: "islamic-history",
        fullMarks: 100,
        mcqFull: 30,
        cqFull: 70,
        practicalFull: 0,
        optional: false
    },

    {
        name: "ICT",
        group: "ict",
        fullMarks: 100,
        mcqFull: 25,
        cqFull: 50,
        practicalFull: 25,
        optional: false
    },

    {
        name: "কৃষি",
        group: "agriculture",
        fullMarks: 100,
        mcqFull: 0,
        cqFull: 100,
        practicalFull: 0,
        optional: true
    }

];


// ==========================================================
// STUDENTS DATABASE
// ==========================================================
//
// নতুন শিক্ষার্থী যোগ করার নিয়ম:
//
// "2026|বার্ষিক পরীক্ষা|dakhil10|101": {
//
//     name: "আব্দুল্লাহ",
//     roll: "101",
//     className: "দাখিল ১০ম শ্রেণি",
//     classCode: "dakhil10",
//     year: "2026",
//     examName: "বার্ষিক পরীক্ষা",
//
//     marks: {
//         "কুরআন মাজিদ": {
//             mcq: 0,
//             cq: 82,
//             practical: 0
//         }
//     }
//
// }
//
// ==========================================================

const students = {

    // ======================================================
    // STUDENT 1
    // ======================================================

    "2026|বার্ষিক পরীক্ষা|dakhil10|101": {

        name: "আব্দুল্লাহ",

        roll: "101",

        className: "দাখিল ১০ম শ্রেণি",

        classCode: "dakhil10",

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


// ==========================================================
// GRADE / GPA
// ==========================================================

function getGrade(mark, fullMarks) {

    if (!fullMarks || fullMarks <= 0) {

        return {
            grade: "-",
            point: 0
        };

    }

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


// ==========================================================
// PASS MARK
// 33%
// ==========================================================

function partPassed(mark, fullMarks) {

    if (!fullMarks || fullMarks === 0) {

        return true;

    }


    const passMark =
        Math.ceil(fullMarks * 0.33);


    return mark >= passMark;

}


// ==========================================================
// CALCULATE ONE STUDENT
// ==========================================================

function calculateStudentResult(student) {

    let compulsoryGroups = {};

    let hasFail = false;

    let failedSubjectCount = 0;

    let totalMarks = 0;

    let totalFullMarks = 0;

    let agricultureBonus = 0;

    let rows = "";


    // ======================================================
    // SUBJECT CALCULATION
    // ======================================================

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


        // ==================================================
        // PART PASS
        // ==================================================

        const mcqPass =
            partPassed(
                mcq,
                subject.mcqFull
            );


        const cqPass =
            partPassed(
                cq,
                subject.cqFull
            );


        const practicalPass =
            partPassed(
                practical,
                subject.practicalFull
            );


        const subjectPass =
            mcqPass &&
            cqPass &&
            practicalPass;


        // ==================================================
        // FAIL
        // কৃষি optional হওয়ায় কৃষিতে ফেল হলেও
        // compulsory fail হবে না
        // ==================================================

        if (
            !subject.optional &&
            !subjectPass
        ) {

            hasFail = true;

            failedSubjectCount++;

        }


        // ==================================================
        // GRADE
        // ==================================================

        const gradeInfo =
            getGrade(
                total,
                subject.fullMarks
            );


        // ==================================================
        // AGRICULTURE BONUS
        //
        // 40%-এর বেশি হলে
        // Point - 2 = অতিরিক্ত GPA
        // ==================================================

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


        // ==================================================
        // COMPULSORY GPA GROUP
        // ==================================================

        else {

            if (
                !compulsoryGroups[
                    subject.group
                ]
            ) {

                compulsoryGroups[
                    subject.group
                ] = [];

            }


            compulsoryGroups[
                subject.group
            ].push(
                gradeInfo.point
            );

        }


        // ==================================================
        // TOTAL MARKS
        // ==================================================

        totalMarks += total;

        totalFullMarks +=
            subject.fullMarks;


        // ==================================================
        // RESULT TABLE
        // ==================================================

        rows += `

            <tr>

                <td>
                    ${subject.name}
                </td>

                <td>
                    ${subject.fullMarks}
                </td>

                <td>
                    ${
                        subject.mcqFull === 0
                            ? "-"
                            : mcq
                    }
                </td>

                <td>
                    ${
                        subject.cqFull === 0
                            ? "-"
                            : cq
                    }
                </td>

                <td>
                    ${
                        subject.practicalFull === 0
                            ? "-"
                            : practical
                    }
                </td>

                <td>
                    ${total}
                </td>

                <td>
                    ${gradeInfo.grade}
                </td>

                <td>
                    ${gradeInfo.point.toFixed(2)}
                </td>

            </tr>

        `;

    });


    // ======================================================
    // COMPULSORY GPA
    //
    // একই group-এর ১ম ও ২য় পত্রের GPA গড় হবে।
    //
    // যেমন:
    // Arabic 1st = 5
    // Arabic 2nd = 4
    // Group GPA = 4.50
    // ======================================================

    let compulsoryPointTotal = 0;

    let compulsorySubjectCount = 0;


    Object.keys(
        compulsoryGroups
    ).forEach(function(group) {

        const points =
            compulsoryGroups[group];


        let groupPoint = 0;


        points.forEach(function(point) {

            groupPoint += point;

        });


        const groupGPA =
            groupPoint /
            points.length;


        compulsoryPointTotal +=
            groupGPA;


        compulsorySubjectCount++;

    });


    // ======================================================
    // COMPULSORY SUBJECT GPA
    //
    // যোগফল দেখানো হবে না।
    // গড় GPA দেখানো হবে।
    // ======================================================

    let compulsoryGPA = 0;


    if (
        compulsorySubjectCount > 0
    ) {

        compulsoryGPA =
            compulsoryPointTotal /
            compulsorySubjectCount;

    }


    // ======================================================
    // FINAL GPA
    //
    // কৃষির অতিরিক্ত GPA যোগ হবে।
    // কিন্তু কৃষি divisor-এ থাকবে না।
    //
    // উদাহরণ:
    //
    // Compulsory GPA = 4.20
    // Agriculture Bonus = 1.00
    // Compulsory Subject Count = 10
    //
    // Final GPA =
    // 4.20 + (1.00 / 10)
    //
    // ======================================================

    let finalGPA = 0;


    if (
        compulsorySubjectCount > 0
    ) {

        finalGPA =
            compulsoryGPA +
            (
                agricultureBonus /
                compulsorySubjectCount
            );

    }


    if (finalGPA > 5) {

        finalGPA = 5;

    }


    // ======================================================
    // FAIL হলে GPA = 0
    // ======================================================

    if (hasFail) {

        finalGPA = 0;

    }


    // ======================================================
    // RESULT
    // ======================================================

    const result =
        hasFail
            ? "FAIL"
            : "PASS";


    // ======================================================
    // REMARKS
    // ======================================================

    let remarks = "";


    if (hasFail) {

        if (failedSubjectCount === 1) {

            remarks =
                "১টি বিষয়ে অকৃতকার্য";

        }

        else {

            remarks =
                failedSubjectCount +
                "টি বিষয়ে অকৃতকার্য";

        }

    }

    else {

        if (finalGPA >= 5) {

            remarks =
                "অতি উত্তম";

        }

        else if (finalGPA >= 4) {

            remarks =
                "উত্তম";

        }

        else if (finalGPA >= 3) {

            remarks =
                "ভালো";

        }

        else if (finalGPA >= 2) {

            remarks =
                "সন্তোষজনক";

        }

        else {

            remarks =
                "উত্তীর্ণ";

        }

    }


    return {

        rows: rows,

        totalMarks: totalMarks,

        totalFullMarks: totalFullMarks,

        compulsoryGPA: compulsoryGPA,

        agricultureBonus: agricultureBonus,

        finalGPA: finalGPA,

        hasFail: hasFail,

        failedSubjectCount: failedSubjectCount,

        result: result,

        remarks: remarks

    };

}


// ==========================================================
// GET CLASS STUDENTS
// একই সন + পরীক্ষা + শ্রেণির শিক্ষার্থী
// ==========================================================

function getClassStudents(
    year,
    examName,
    classCode
) {

    const list = [];


    Object.keys(
        students
    ).forEach(function(key) {

        const student =
            students[key];


        if (
            String(student.year) ===
                String(year) &&

            student.examName ===
                examName &&

            student.classCode ===
                classCode
        ) {

            const calculation =
                calculateStudentResult(
                    student
                );


            list.push({

                student: student,

                calculation:
                    calculation

            });

        }

    });


    return list;

}


// ==========================================================
// MERIT POSITION
//
// 1. PASS আগে
// 2. Final GPA বেশি আগে
// 3. GPA সমান হলে মোট নম্বর বেশি আগে
// 4. মোট নম্বর সমান হলে Roll ছোট আগে
//
// FAIL শিক্ষার্থী মেধাক্রম পাবে না
// ==========================================================

function getMeritPosition(
    student,
    calculation
) {

    if (
        calculation.hasFail
    ) {

        return "-";

    }


    const list =
        getClassStudents(
            student.year,
            student.examName,
            student.classCode
        );


    const passed =
        list.filter(function(item) {

            return !item.calculation.hasFail;

        });


    passed.sort(function(a, b) {

        // GPA
        if (
            b.calculation.finalGPA !==
            a.calculation.finalGPA
        ) {

            return (
                b.calculation.finalGPA -
                a.calculation.finalGPA
            );

        }


        // Total Marks
        if (
            b.calculation.totalMarks !==
            a.calculation.totalMarks
        ) {

            return (
                b.calculation.totalMarks -
                a.calculation.totalMarks
            );

        }


        // Roll
        return (
            Number(a.student.roll) -
            Number(b.student.roll)
        );

    });


    const index =
        passed.findIndex(function(item) {

            return (
                item.student.roll ===
                student.roll
            );

        });


    if (index === -1) {

        return "-";

    }


    return index + 1;

}


// ==========================================================
// SEARCH RESULT
// ==========================================================

function searchResult() {

    const yearElement =
        document.getElementById(
            "examYear"
        );


    const examNameElement =
        document.getElementById(
            "examName"
        );


    const classElement =
        document.getElementById(
            "examClass"
        );


    const rollElement =
        document.getElementById(
            "rollNumber"
        );


    const message =
        document.getElementById(
            "resultMessage"
        );


    const output =
        document.getElementById(
            "resultOutput"
        );


    if (
        !yearElement ||
        !examNameElement ||
        !classElement ||
        !rollElement ||
        !message ||
        !output
    ) {

        alert(
            "ফলাফল ফর্মের প্রয়োজনীয় HTML অংশ পাওয়া যায়নি।"
        );

        return;

    }


    const year =
        yearElement.value;


    const examName =
        examNameElement.value;


    const classCode =
        classElement.value;


    const roll =
        rollElement.value.trim();


    message.innerHTML = "";

    output.innerHTML = "";


    // ======================================================
    // VALIDATION
    // ======================================================

    if (
        year === "" ||
        examName === "" ||
        classCode === "" ||
        roll === ""
    ) {

        message.innerHTML =
            "⚠️ সন, পরীক্ষার নাম, শ্রেণি ও রোল নম্বর পূরণ করুন।";

        message.style.color =
            "red";

        return;

    }


    // ======================================================
    // KEY
    // ======================================================

    const key =
        year +
        "|" +
        examName +
        "|" +
        classCode +
        "|" +
        roll;


    const student =
        students[key];


    // ======================================================
    // STUDENT NOT FOUND
    // ======================================================

    if (!student) {

        message.innerHTML =
            "❌ এই তথ্যের কোনো ফলাফল পাওয়া যায়নি।";

        message.style.color =
            "red";

        return;

    }


    // ======================================================
    // CALCULATION
    // ======================================================

    const calculation =
        calculateStudentResult(
            student
        );


    // ======================================================
    // MERIT
    // ======================================================

    const meritPosition =
        getMeritPosition(
            student,
            calculation
        );


    // ======================================================
    // MESSAGE
    // ======================================================

    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";

    message.style.color =
        "#087f4f";


    // ======================================================
    // RESULT STATUS CLASS
    // ======================================================

    const resultClass =
        calculation.result === "PASS"
            ? "result-pass"
            : "result-fail";


    // ======================================================
    // OUTPUT
    // ======================================================

    output.innerHTML = `

        <div class="result-summary">

            <h3>
                ${student.name}
            </h3>


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

                        <th>
                            বিষয়
                        </th>

                        <th>
                            পূর্ণমান
                        </th>

                        <th>
                            MCQ
                        </th>

                        <th>
                            CQ
                        </th>

                        <th>
                            Practical
                        </th>

                        <th>
                            মোট
                        </th>

                        <th>
                            গ্রেড
                        </th>

                        <th>
                            পয়েন্ট
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${calculation.rows}

                </tbody>


                <tfoot>

                    <tr>

                        <th colspan="5">
                            মোট প্রাপ্ত নম্বর
                        </th>

                        <th>
                            ${calculation.totalMarks}
                        </th>

                        <th colspan="2">
                            ${calculation.totalFullMarks}
                        </th>

                    </tr>


                    <!-- ==========================
                         COMPULSORY GPA
                         ========================== -->

                    <tr>

                        <th colspan="7">
                            আবশ্যিক বিষয়ের GPA
                        </th>

                        <th>
                            ${calculation.compulsoryGPA.toFixed(2)}
                        </th>

                    </tr>


                    <!-- ==========================
                         AGRICULTURE BONUS
                         ========================== -->

                    <tr>

                        <th colspan="7">
                            কৃষির অতিরিক্ত GPA
                        </th>

                        <th>
                            ${calculation.agricultureBonus.toFixed(2)}
                        </th>

                    </tr>


                    <!-- ==========================
                         FAIL SUBJECT COUNT
                         ========================== -->

                    <tr>

                        <th colspan="7">
                            ফেল বিষয় সংখ্যা
                        </th>

                        <th>
                            ${calculation.failedSubjectCount}
                        </th>

                    </tr>


                    <!-- ==========================
                         FINAL GPA
                         ========================== -->

                    <tr>

                        <th colspan="7">
                            চূড়ান্ত GPA
                        </th>

                        <th>
                            ${calculation.finalGPA.toFixed(2)}
                        </th>

                    </tr>


                    <!-- ==========================
                         MERIT POSITION
                         ========================== -->

                    <tr>

                        <th colspan="7">
                            মেধাক্রম
                        </th>

                        <th>
                            ${meritPosition}
                        </th>

                    </tr>


                    <!-- ==========================
                         RESULT
                         ========================== -->

                    <tr>

                        <th colspan="7">
                            ফলাফল
                        </th>

                        <th class="${resultClass}">
                            ${calculation.result}
                        </th>

                    </tr>


                    <!-- ==========================
                         REMARKS
                         ========================== -->

                    <tr>

                        <th colspan="7">
                            Remarks
                        </th>

                        <th>
                            ${calculation.remarks}
                        </th>

                    </tr>

                </tfoot>

            </table>

        </div>

    `;

}


// ==========================================================
// PAGE LOADED
// ==========================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        // ==================================================
        // EXAM DROPDOWN
        // ==================================================

        setupExamDropdown();


        // ==================================================
        // MOBILE MENU
        // ==================================================

        const navLinks =
            document.querySelectorAll(
                "#menu a"
            );


        navLinks.forEach(
            function(link) {

                link.addEventListener(
                    "click",
                    function() {

                        const menu =
                            document.getElementById(
                                "menu"
                            );


                        if (menu) {

                            menu.classList.remove(
                                "active"
                            );

                        }

                    }
                );

            }
        );


        // ==================================================
        // ENTER KEY
        // রোল নম্বরে Enter চাপলে ফলাফল দেখাবে
        // ==================================================

        const rollInput =
            document.getElementById(
                "rollNumber"
            );


        if (rollInput) {

            rollInput.addEventListener(
                "keydown",
                function(event) {

                    if (
                        event.key === "Enter"
                    ) {

                        searchResult();

                    }

                }
            );

        }

    }
);
