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


// ======================================
// DEMO STUDENTS
// ======================================
// একই শ্রেণির একাধিক শিক্ষার্থী রাখা হয়েছে
// মেধাক্রম পরীক্ষা করার জন্য।
//
// পরে এখানে আসল শিক্ষার্থীদের তথ্য বসবে।
// ======================================

const students = {

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

    },


    // --------------------------------------
    // DEMO STUDENT 102
    // --------------------------------------

    "2026|বার্ষিক পরীক্ষা|dakhil10|102": {

        name: "মুহাম্মদ হাসান",
        roll: "102",
        className: "দাখিল ১০ম শ্রেণি",
        classCode: "dakhil10",
        year: "2026",
        examName: "বার্ষিক পরীক্ষা",

        marks: {

            "কুরআন মাজিদ": {
                mcq: 0,
                cq: 78,
                practical: 0
            },

            "হাদীস শরিফ": {
                mcq: 0,
                cq: 81,
                practical: 0
            },

            "আকাইদ ও ফিকহ": {
                mcq: 0,
                cq: 85,
                practical: 0
            },

            "আরবী ১ম": {
                mcq: 0,
                cq: 86,
                practical: 0
            },

            "আরবী ২য়": {
                mcq: 0,
                cq: 83,
                practical: 0
            },

            "ইংরেজি ১ম": {
                mcq: 0,
                cq: 78,
                practical: 0
            },

            "ইংরেজি ২য়": {
                mcq: 0,
                cq: 77,
                practical: 0
            },

            "বাংলা ১ম": {
                mcq: 24,
                cq: 58,
                practical: 0
            },

            "বাংলা ২য়": {
                mcq: 25,
                cq: 56,
                practical: 0
            },

            "গণিত": {
                mcq: 26,
                cq: 63,
                practical: 0
            },

            "ইসলামের ইতিহাস": {
                mcq: 25,
                cq: 60,
                practical: 0
            },

            "ICT": {
                mcq: 23,
                cq: 43,
                practical: 24
            },

            "কৃষি": {
                mcq: 0,
                cq: 82,
                practical: 0
            }

        }

    },


    // --------------------------------------
    // DEMO STUDENT 103
    // --------------------------------------

    "2026|বার্ষিক পরীক্ষা|dakhil10|103": {

        name: "আবু বকর",
        roll: "103",
        className: "দাখিল ১০ম শ্রেণি",
        classCode: "dakhil10",
        year: "2026",
        examName: "বার্ষিক পরীক্ষা",

        marks: {

            "কুরআন মাজিদ": {
                mcq: 0,
                cq: 72,
                practical: 0
            },

            "হাদীস শরিফ": {
                mcq: 0,
                cq: 74,
                practical: 0
            },

            "আকাইদ ও ফিকহ": {
                mcq: 0,
                cq: 79,
                practical: 0
            },

            "আরবী ১ম": {
                mcq: 0,
                cq: 82,
                practical: 0
            },

            "আরবী ২য়": {
                mcq: 0,
                cq: 76,
                practical: 0
            },

            "ইংরেজি ১ম": {
                mcq: 0,
                cq: 74,
                practical: 0
            },

            "ইংরেজি ২য়": {
                mcq: 0,
                cq: 72,
                practical: 0
            },

            "বাংলা ১ম": {
                mcq: 22,
                cq: 55,
                practical: 0
            },

            "বাংলা ২য়": {
                mcq: 23,
                cq: 52,
                practical: 0
            },

            "গণিত": {
                mcq: 24,
                cq: 57,
                practical: 0
            },

            "ইসলামের ইতিহাস": {
                mcq: 24,
                cq: 55,
                practical: 0
            },

            "ICT": {
                mcq: 21,
                cq: 40,
                practical: 22
            },

            "কৃষি": {
                mcq: 0,
                cq: 75,
                practical: 0
            }

        }

    }

};


// ======================================
// GRADE / GPA
// ======================================

function getGrade(mark, fullMarks) {

    if (fullMarks === 0) {

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


// ======================================
// PASS MARK
// ======================================

function partPassed(mark, fullMarks) {

    if (fullMarks === 0) {
        return true;
    }


    const passMark =
        Math.ceil(fullMarks * 0.33);


    return mark >= passMark;

}


// ======================================
// CALCULATE STUDENT RESULT
// ======================================

function calculateStudentResult(student) {

    let compulsoryGroups = {};

    let hasFail = false;

    let failSubjectCount = 0;

    let totalMarks = 0;

    let totalFullMarks = 0;

    let agricultureBonus = 0;


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


        // -------------------------------
        // PART PASS
        // -------------------------------

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


        // -------------------------------
        // FAIL COUNT
        // -------------------------------

        if (
            !subject.optional &&
            !subjectPass
        ) {

            hasFail = true;

            failSubjectCount++;

        }


        // -------------------------------
        // GRADE
        // -------------------------------

        const gradeInfo =
            getGrade(
                total,
                subject.fullMarks
            );


        // -------------------------------
        // AGRICULTURE BONUS
        // -------------------------------

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


        // -------------------------------
        // COMPULSORY GROUP
        // -------------------------------

        else {

            if (!compulsoryGroups[subject.group]) {

                compulsoryGroups[subject.group] = [];

            }


            compulsoryGroups[
                subject.group
            ].push({

                point: gradeInfo.point,
                passed: subjectPass

            });

        }


        totalMarks += total;

        totalFullMarks +=
            subject.fullMarks;

    });


    // ======================================
    // COMPULSORY GPA
    // ======================================

    let compulsoryPointTotal = 0;

    let compulsorySubjectCount = 0;


    Object.keys(compulsoryGroups).forEach(
        function(group) {

            const papers =
                compulsoryGroups[group];


            let groupPoint = 0;


            papers.forEach(function(item) {

                groupPoint += item.point;

            });


            const groupGPA =
                groupPoint / papers.length;


            compulsoryPointTotal +=
                groupGPA;


            compulsorySubjectCount++;

        }
    );


    let compulsoryGPA = 0;


    if (compulsorySubjectCount > 0) {

        compulsoryGPA =
            compulsoryPointTotal /
            compulsorySubjectCount;

    }


    // ======================================
    // FINAL GPA
    // ======================================

    let finalGPA =
        compulsoryGPA +
        (
            agricultureBonus /
            compulsorySubjectCount
        );


    if (finalGPA > 5) {
        finalGPA = 5;
    }


    if (hasFail) {
        finalGPA = 0;
    }


    // ======================================
    // RESULT
    // ======================================

    const result =
        hasFail
            ? "FAIL"
            : "PASS";


    // ======================================
    // REMARKS
    // ======================================

    let remarks = "";


    if (result === "FAIL") {

        remarks =
            "ফেল";

    }

    else if (finalGPA >= 5) {

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


    return {

        totalMarks,
        totalFullMarks,
        compulsoryGPA,
        agricultureBonus,
        finalGPA,
        result,
        failSubjectCount,
        remarks

    };

}


// ======================================
// MERIT POSITION
// ======================================

function getMeritPosition(student) {

    const targetYear =
        student.year;

    const targetExam =
        student.examName;

    const targetClass =
        student.classCode ||
        student.className;


    const candidates = [];


    Object.keys(students).forEach(
        function(key) {

            const other =
                students[key];


            const otherClass =
                other.classCode ||
                other.className;


            if (
                other.year === targetYear &&
                other.examName === targetExam &&
                otherClass === targetClass
            ) {

                const calculated =
                    calculateStudentResult(
                        other
                    );


                // শুধু PASS শিক্ষার্থী
                // মেধাক্রমে থাকবে

                if (
                    calculated.result === "PASS"
                ) {

                    candidates.push({

                        roll: other.roll,

                        finalGPA:
                            calculated.finalGPA,

                        totalMarks:
                            calculated.totalMarks

                    });

                }

            }

        }
    );


    // ==================================
    // SORT
    // ==================================

    candidates.sort(function(a, b) {

        // প্রথমে GPA বেশি

        if (
            b.finalGPA !==
            a.finalGPA
        ) {

            return (
                b.finalGPA -
                a.finalGPA
            );

        }


        // GPA সমান হলে মোট নম্বর বেশি

        return (
            b.totalMarks -
            a.totalMarks
        );

    });


    // ==================================
    // RANK
    // ==================================

    let position = null;


    for (
        let i = 0;
        i < candidates.length;
        i++
    ) {

        if (
            candidates[i].roll ===
            student.roll
        ) {

            position = i + 1;

            break;

        }

    }


    return position;

}


// ======================================
// RESULT SEARCH
// ======================================

function searchResult() {

    const year =
        document.getElementById(
            "examYear"
        ).value;


    const examName =
        document.getElementById(
            "examName"
        ).value;


    const className =
        document.getElementById(
            "examClass"
        ).value;


    const roll =
        document.getElementById(
            "rollNumber"
        ).value.trim();


    const message =
        document.getElementById(
            "resultMessage"
        );


    const output =
        document.getElementById(
            "resultOutput"
        );


    message.innerHTML = "";

    output.innerHTML = "";


    // ==================================
    // VALIDATION
    // ==================================

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


    // ==================================
    // KEY
    // ==================================

    const key =
        year +
        "|" +
        examName +
        "|" +
        className +
        "|" +
        roll;


    const student =
        students[key];


    if (!student) {

        message.innerHTML =
            "❌ এই তথ্যের কোনো ফলাফল পাওয়া যায়নি।";

        message.style.color =
            "red";

        return;

    }


    // ==================================
    // CALCULATE
    // ==================================

    const calculated =
        calculateStudentResult(
            student
        );


    // ==================================
    // MERIT
    // ==================================

    const meritPosition =
        calculated.result === "PASS"
            ? getMeritPosition(student)
            : null;


    // ==================================
    // RESULT TABLE ROWS
    // ==================================

    let rows = "";


    subjects.forEach(
        function(subject) {

            const data =
                student.marks[
                    subject.name
                ] || {

                    mcq: 0,
                    cq: 0,
                    practical: 0

                };


            const mcq =
                Number(data.mcq || 0);


            const cq =
                Number(data.cq || 0);


            const practical =
                Number(
                    data.practical || 0
                );


            const total =
                mcq +
                cq +
                practical;


            const gradeInfo =
                getGrade(
                    total,
                    subject.fullMarks
                );


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


            const grade =
                subjectPass
                    ? gradeInfo.grade
                    : "F";


            const point =
                subjectPass
                    ? gradeInfo.point
                    : 0;


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
                        ${grade}
                    </td>

                    <td>
                        ${point.toFixed(2)}
                    </td>

                </tr>

            `;

        }
    );


    // ======================================
    // MESSAGE
    // ======================================

    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";


    message.style.color =
        "#087f4f";


    // ======================================
    // MERIT TEXT
    // ======================================

    let meritText =
        "নির্ধারিত নয়";


    if (meritPosition !== null) {

        meritText =
            meritPosition;

    }


    // ======================================
    // DISPLAY
    // ======================================

    output.innerHTML = `

        <div class="result-summary">

            <h3>
                ${student.name}
            </h3>


            <p>

                <strong>
                    সন:
                </strong>

                ${student.year}

                &nbsp; | &nbsp;

                <strong>
                    পরীক্ষা:
                </strong>

                ${student.examName}

            </p>


            <p>

                <strong>
                    শ্রেণি:
                </strong>

                ${student.className}

                &nbsp; | &nbsp;

                <strong>
                    রোল:
                </strong>

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

                    ${rows}

                </tbody>


                <tfoot>

                    <tr>

                        <th colspan="5">
                            মোট প্রাপ্ত নম্বর
                        </th>

                        <th>
                            ${calculated.totalMarks}
                        </th>

                        <th colspan="2">
                            ${calculated.totalFullMarks}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            আবশ্যিক বিষয়ের GPA
                        </th>

                        <th>
                            ${calculated.compulsoryGPA.toFixed(2)}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            কৃষির অতিরিক্ত পয়েন্ট
                        </th>

                        <th>
                            ${calculated.agricultureBonus.toFixed(2)}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            চূড়ান্ত GPA
                        </th>

                        <th>
                            ${calculated.finalGPA.toFixed(2)}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            ফেল বিষয় সংখ্যা
                        </th>

                        <th>
                            ${calculated.failSubjectCount}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            মেধাক্রম
                        </th>

                        <th>
                            ${meritText}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            ফলাফল
                        </th>

                        <th class="${
                            calculated.result === "PASS"
                                ? "result-pass"
                                : "result-fail"
                        }">

                            ${calculated.result}

                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            Remarks
                        </th>

                        <th>
                            ${calculated.remarks}
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
    function() {

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

    }
);
