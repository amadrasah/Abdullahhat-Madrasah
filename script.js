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
// DEMO STUDENT DATABASE
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

function calculateStudent(student) {

    let compulsoryGroups = {};

    let agricultureBonus = 0;

    let totalMarks = 0;

    let totalFullMarks = 0;

    let failSubjectCount = 0;

    let hasFail = false;


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
        // FAIL SUBJECT
        // -------------------------------

        if (
            !subject.optional &&
            !subjectPass
        ) {

            hasFail = true;

            failSubjectCount++;

        }


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


        totalMarks += total;

        totalFullMarks +=
            subject.fullMarks;

    });


    // ======================================
    // COMPULSORY GPA
    // ======================================

    let compulsoryPointTotal = 0;

    let compulsoryGroupCount = 0;


    Object.keys(compulsoryGroups)
        .forEach(function(group) {

            const points =
                compulsoryGroups[group];


            let groupTotal = 0;


            points.forEach(function(point) {

                groupTotal += point;

            });


            const groupGPA =
                groupTotal / points.length;


            compulsoryPointTotal +=
                groupGPA;


            compulsoryGroupCount++;

        });


    let compulsoryGPA = 0;


    if (compulsoryGroupCount > 0) {

        compulsoryGPA =
            compulsoryPointTotal /
            compulsoryGroupCount;

    }


    // ======================================
    // FINAL GPA
    // ======================================
    //
    // কৃষি divisor-এ থাকবে না।
    //
    // (আবশ্যিক GPA-এর মোট যোগফল
    // + কৃষির অতিরিক্ত GPA)
    // ÷ আবশ্যিক গ্রুপ সংখ্যা
    //
    // এখানে শুধু final GPA দেখানো হবে।
    // ======================================

    let finalGPA = 0;


    if (compulsoryGroupCount > 0) {

        finalGPA =
            (
                compulsoryPointTotal +
                agricultureBonus
            ) /
            compulsoryGroupCount;

    }


    if (finalGPA > 5) {
        finalGPA = 5;
    }


    if (hasFail) {
        finalGPA = 0;
    }


    const result =
        hasFail
            ? "FAIL"
            : "PASS";


    // ======================================
    // REMARKS
    // ======================================

    let remarks = "";


    if (result === "FAIL") {

        if (failSubjectCount === 1) {

            remarks =
                "১টি বিষয়ে অকৃতকার্য";

        }
        else {

            remarks =
                failSubjectCount +
                "টি বিষয়ে অকৃতকার্য";

        }

    }
    else if (finalGPA >= 5) {

        remarks =
            "অসাধারণ ফলাফল";

    }
    else if (finalGPA >= 4) {

        remarks =
            "খুব ভালো ফলাফল";

    }
    else if (finalGPA >= 3) {

        remarks =
            "ভালো ফলাফল";

    }
    else if (finalGPA >= 2) {

        remarks =
            "সন্তোষজনক ফলাফল";

    }
    else {

        remarks =
            "উন্নতির প্রয়োজন";

    }


    return {

        compulsoryGPA:
            compulsoryGPA,

        finalGPA:
            finalGPA,

        agricultureBonus:
            agricultureBonus,

        totalMarks:
            totalMarks,

        totalFullMarks:
            totalFullMarks,

        failSubjectCount:
            failSubjectCount,

        hasFail:
            hasFail,

        result:
            result,

        remarks:
            remarks

    };

}


// ======================================
// MERIT POSITION
// ======================================

function getMeritPosition(student) {

    const currentResult =
        calculateStudent(student);


    const allResults = [];


    Object.keys(students)
        .forEach(function(key) {

            const s =
                students[key];


            // একই সন
            // একই পরীক্ষা
            // একই শ্রেণি

            if (
                s.year !== student.year ||
                s.examName !== student.examName ||
                s.className !== student.className
            ) {

                return;

            }


            const result =
                calculateStudent(s);


            // শুধু PASS শিক্ষার্থী
            if (result.result !== "PASS") {

                return;

            }


            allResults.push({

                roll:
                    s.roll,

                gpa:
                    result.finalGPA,

                total:
                    result.totalMarks

            });

        });


    // ==================================
    // SORT
    // GPA বেশি আগে
    // GPA সমান হলে মোট নম্বর বেশি আগে
    // ==================================

    allResults.sort(function(a, b) {

        if (b.gpa !== a.gpa) {

            return b.gpa - a.gpa;

        }


        if (b.total !== a.total) {

            return b.total - a.total;

        }


        return Number(a.roll) -
               Number(b.roll);

    });


    const index =
        allResults.findIndex(function(item) {

            return item.roll === student.roll;

        });


    if (index === -1) {

        return "-";

    }


    return index + 1;

}


// ======================================
// RESULT SEARCH
// ======================================

function searchResult() {

    const year =
        document.getElementById(
            "examYear"
        ).value;


    const examNameElement =
        document.getElementById(
            "examName"
        );


    const examName =
        examNameElement
            ? examNameElement.value
            : "";


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
    // INPUT CHECK
    // ==================================

    if (
        year === "" ||
        examName === "" ||
        className === "" ||
        roll === ""
    ) {

        message.innerHTML =
            "⚠️ সন, পরীক্ষার নাম, শ্রেণি ও রোল নম্বর পূরণ করুন।";

        message.style.color =
            "red";

        return;

    }


    // ==================================
    // SEARCH KEY
    // ==================================

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

        message.style.color =
            "red";

        return;

    }


    // ==================================
    // CALCULATE
    // ==================================

    const resultData =
        calculateStudent(student);


    const meritPosition =
        getMeritPosition(student);


    // ==================================
    // MESSAGE
    // ==================================

    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";

    message.style.color =
        "#087f4f";


    // ==================================
    // SUBJECT ROWS
    // ==================================

    let rows = "";


    subjects.forEach(function(subject) {

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
            Number(data.practical || 0);


        const total =
            mcq +
            cq +
            practical;


        const gradeInfo =
            getGrade(
                total,
                subject.fullMarks
            );


        const subjectPass =
            partPassed(
                mcq,
                subject.mcqFull
            ) &&
            partPassed(
                cq,
                subject.cqFull
            ) &&
            partPassed(
                practical,
                subject.practicalFull
            );


        let statusText =
            subjectPass
                ? ""
                : "ফেল";


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


                <td class="${
                    subjectPass
                        ? ""
                        : "result-fail"
                }">

                    ${statusText}

                </td>

            </tr>

        `;

    });


    // ==================================
    // DISPLAY RESULT
    // ==================================

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

                        <th>বিষয়</th>

                        <th>পূর্ণমান</th>

                        <th>MCQ</th>

                        <th>CQ</th>

                        <th>Practical</th>

                        <th>মোট</th>

                        <th>গ্রেড</th>

                        <th>পয়
