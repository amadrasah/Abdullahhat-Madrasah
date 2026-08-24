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

    },

    "2026|বার্ষিক পরীক্ষা|dakhil10|102": {

        name: "মোঃ হাসান",
        roll: "102",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        examName: "বার্ষিক পরীক্ষা",

        marks: {

            "কুরআন মাজিদ": { mcq: 0, cq: 72, practical: 0 },
            "হাদীস শরিফ": { mcq: 0, cq: 68, practical: 0 },
            "আকাইদ ও ফিকহ": { mcq: 0, cq: 81, practical: 0 },
            "আরবী ১ম": { mcq: 0, cq: 85, practical: 0 },
            "আরবী ২য়": { mcq: 0, cq: 74, practical: 0 },
            "ইংরেজি ১ম": { mcq: 0, cq: 70, practical: 0 },
            "ইংরেজি ২য়": { mcq: 0, cq: 68, practical: 0 },

            "বাংলা ১ম": { mcq: 22, cq: 50, practical: 0 },
            "বাংলা ২য়": { mcq: 20, cq: 48, practical: 0 },

            "গণিত": { mcq: 24, cq: 55, practical: 0 },

            "ইসলামের ইতিহাস": {
                mcq: 23,
                cq: 52,
                practical: 0
            },

            "ICT": {
                mcq: 20,
                cq: 38,
                practical: 22
            },

            "কৃষি": {
                mcq: 0,
                cq: 72,
                practical: 0
            }

        }

    },

    "2026|বার্ষিক পরীক্ষা|dakhil10|103": {

        name: "সুমাইয়া আক্তার",
        roll: "103",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        examName: "বার্ষিক পরীক্ষা",

        marks: {

            "কুরআন মাজিদ": { mcq: 0, cq: 95, practical: 0 },
            "হাদীস শরিফ": { mcq: 0, cq: 89, practical: 0 },
            "আকাইদ ও ফিকহ": { mcq: 0, cq: 92, practical: 0 },
            "আরবী ১ম": { mcq: 0, cq: 96, practical: 0 },
            "আরবী ২য়": { mcq: 0, cq: 90, practical: 0 },
            "ইংরেজি ১ম": { mcq: 0, cq: 91, practical: 0 },
            "ইংরেজি ২য়": { mcq: 0, cq: 88, practical: 0 },

            "বাংলা ১ম": { mcq: 28, cq: 65, practical: 0 },
            "বাংলা ২য়": { mcq: 27, cq: 63, practical: 0 },

            "গণিত": { mcq: 29, cq: 66, practical: 0 },

            "ইসলামের ইতিহাস": {
                mcq: 28,
                cq: 65,
                practical: 0
            },

            "ICT": {
                mcq: 24,
                cq: 47,
                practical: 24
            },

            "কৃষি": {
                mcq: 0,
                cq: 94,
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

    if (percentage >= 80)
        return { grade: "A+", point: 5.00 };

    if (percentage >= 70)
        return { grade: "A", point: 4.00 };

    if (percentage >= 60)
        return { grade: "A-", point: 3.50 };

    if (percentage >= 50)
        return { grade: "B", point: 3.00 };

    if (percentage >= 40)
        return { grade: "C", point: 2.00 };

    if (percentage >= 33)
        return { grade: "D", point: 1.00 };

    return { grade: "F", point: 0.00 };
}


// ======================================
// PART PASS
// ======================================

function partPassed(mark, fullMarks) {

    if (fullMarks === 0)
        return true;

    return mark >= Math.ceil(fullMarks * 0.33);
}


// ======================================
// CALCULATE STUDENT
// ======================================

function calculateStudent(student) {

    let groups = {};
    let hasFail = false;
    let failSubjects = 0;

    let totalMarks = 0;
    let totalFullMarks = 0;

    let agricultureBonus = 0;

    let rows = "";

    subjects.forEach(function(subject) {

        const data =
            student.marks[subject.name] || {
                mcq: 0,
                cq: 0,
                practical: 0
            };

        const mcq = Number(data.mcq || 0);
        const cq = Number(data.cq || 0);
        const practical = Number(data.practical || 0);

        const total =
            mcq + cq + practical;

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
            failSubjects++;

        }

        const gradeInfo =
            getGrade(
                total,
                subject.fullMarks
            );


        // কৃষি
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


        // আবশ্যিক বিষয়
        else {

            if (!groups[subject.group]) {
                groups[subject.group] = [];
            }

            groups[subject.group].push(
                gradeInfo.point
            );

        }


        totalMarks += total;
        totalFullMarks += subject.fullMarks;


        rows += `
            <tr>
                <td>${subject.name}</td>

                <td>${subject.fullMarks}</td>

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

                <td>${total}</td>

                <td>${gradeInfo.grade}</td>

                <td>${gradeInfo.point.toFixed(2)}</td>

            </tr>
        `;

    });


    // ======================================
    // GROUP GPA
    // ======================================

    let compulsoryGPA = 0;
    let compulsoryGroupCount = 0;

    Object.keys(groups).forEach(function(group) {

        const points = groups[group];

        let sum = 0;

        points.forEach(function(point) {
            sum += point;
        });

        const groupGPA =
            sum / points.length;

        compulsoryGPA += groupGPA;

        compulsoryGroupCount++;

    });


    // ======================================
    // FINAL GPA
    // ======================================

    let finalGPA = 0;

    if (compulsoryGroupCount > 0) {

        finalGPA =
            (
                compulsoryGPA +
                agricultureBonus
            ) /
            compulsoryGroupCount;

    }

    if (finalGPA > 5)
        finalGPA = 5;

    if (hasFail)
        finalGPA = 0;


    const result =
        hasFail ? "FAIL" : "PASS";


    // ======================================
    // REMARKS
    // ======================================

    let remarks = "";

    if (result === "FAIL") {

        remarks =
            "দুঃখিত, " +
            failSubjects +
            "টি বিষয়ে অকৃতকার্য।";

    }
    else if (finalGPA >= 5) {

        remarks = "অসাধারণ ফলাফল।";

    }
    else if (finalGPA >= 4) {

        remarks = "খুব ভালো ফলাফল।";

    }
    else if (finalGPA >= 3) {

        remarks = "ভালো ফলাফল।";

    }
    else {

        remarks = "উত্তীর্ণ।";

    }


    return {

        rows,
        totalMarks,
        totalFullMarks,
        compulsoryGPA,
        agricultureBonus,
        finalGPA,
        result,
        failSubjects,
        remarks

    };

}


// ======================================
// MERIT POSITION
// ======================================

function getMeritList(year, examName, className) {

    const list = [];

    Object.keys(students).forEach(function(key) {

        const student = students[key];

        if (
            student.year === year &&
            student.examName === examName &&
            key.includes("|" + className + "|")
        ) {

            const calculation =
                calculateStudent(student);

            if (calculation.result === "PASS") {

                list.push({

                    roll: student.roll,

                    gpa: calculation.finalGPA,

                    total: calculation.totalMarks

                });

            }

        }

    });


    list.sort(function(a, b) {

        if (b.gpa !== a.gpa) {
            return b.gpa - a.gpa;
        }

        return b.total - a.total;

    });


    return list;

}


// ======================================
// SEARCH RESULT
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


    const key =
        year + "|" +
        examName + "|" +
        className + "|" +
        roll;


    const student =
        students[key];


    if (!student) {

        message.innerHTML =
            "❌ এই তথ্যের কোনো ফলাফল পাওয়া যায়নি।";

        message.style.color = "red";

        return;

    }


    const calculation =
        calculateStudent(student);


    // ======================================
    // MERIT
    // ======================================

    const meritList =
        getMeritList(
            year,
            examName,
            className
        );


    let meritPosition = "-";

    const index =
        meritList.findIndex(function(item) {

            return item.roll === student.roll;

        });


    if (index !== -1) {

        meritPosition =
            index + 1;

    }


    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";

    message.style.color =
        "#087f4f";


    // ======================================
    // DISPLAY
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


                    <tr>
                        <th colspan="7">
                            আবশ্যিক বিষয়ের GPA
                        </th>

                        <th>
                            ${calculation.compulsoryGPA.toFixed(2)}
                        </th>
                    </tr>


                    <tr>
                        <th colspan="7">
                            কৃষির অতিরিক্ত GPA
                        </th>

                        <th>
                            ${calculation.agricultureBonus.toFixed(2)}
                        </th>
                    </tr>


                    <tr>
                        <th colspan="7">
                            ফেল বিষয় সংখ্যা
                        </th>

                        <th>
                            ${calculation.failSubjects}
                        </th>
                    </tr>


                    <tr>
                        <th colspan="7">
                            চূড়ান্ত GPA
                        </th>

                        <th>
                            ${calculation.finalGPA.toFixed(2)}
                        </th>
                    </tr>


                    <tr>
                        <th colspan="7">
                            মেধাক্রম
                        </th>

                        <th>
                            ${meritPosition}
                        </th>
                    </tr>


                    <tr>
                        <th colspan="7">
                            ফলাফল
                        </th>

                        <th class="${
                            calculation.result === "PASS"
                                ? "result-pass"
                                : "result-fail"
                        }">

                            ${calculation.result}

                        </th>
                    </tr>


                    <tr>
                        <th colspan="7">
                            মন্তব্য
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
