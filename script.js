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
// DEMO STUDENT
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

        message.style.color = "red";

        return;
    }


    // ==================================
    // SEARCH STUDENT
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

        message.style.color = "red";

        return;
    }


    // ==================================
    // CALCULATION
    // ==================================

    let compulsoryGroups = {};

    let totalMarks = 0;

    let totalFullMarks = 0;

    let agricultureBonus = 0;

    let failSubjectCount = 0;

    let rows = "";


    // ==================================
    // SUBJECT LOOP
    // ==================================

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


        // ------------------------------
        // PASS CONDITION
        // ------------------------------

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


        if (
            !subject.optional &&
            !subjectPass
        ) {

            failSubjectCount++;

        }


        // ------------------------------
        // GRADE
        // ------------------------------

        const gradeInfo =
            getGrade(
                total,
                subject.fullMarks
            );


        // ------------------------------
        // COMPULSORY GPA
        // ------------------------------

        if (!subject.optional) {

            if (!compulsoryGroups[subject.group]) {

                compulsoryGroups[subject.group] = [];

            }

            compulsoryGroups[
                subject.group
            ].push(gradeInfo.point);

        }


        // ------------------------------
        // AGRICULTURE BONUS
        // ------------------------------

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


        totalMarks += total;

        totalFullMarks +=
            subject.fullMarks;


        // ==================================
        // RESULT TABLE
        // ==================================

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

                <td>
                    ${gradeInfo.point.toFixed(2)}
                </td>

            </tr>

        `;

    });


    // ==================================
    // COMPULSORY GPA
    // ==================================

    let compulsoryPointTotal = 0;

    let compulsoryGroupCount = 0;


    Object.keys(compulsoryGroups).forEach(
        function(group) {

            const points =
                compulsoryGroups[group];


            let groupPoint = 0;


            points.forEach(function(point) {

                groupPoint += point;

            });


            const groupGPA =
                groupPoint / points.length;


            compulsoryPointTotal +=
                groupGPA;


            compulsoryGroupCount++;

        }
    );


    // ==================================
    // FINAL GPA
    // ==================================

    let compulsoryGPA = 0;

    let finalGPA = 0;


    if (compulsoryGroupCount > 0) {

        compulsoryGPA =
            compulsoryPointTotal /
            compulsoryGroupCount;


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


    // ==================================
    // RESULT
    // ==================================

    const hasFail =
        failSubjectCount > 0;


    if (hasFail) {

        finalGPA = 0;

    }


    const result =
        hasFail
            ? "FAIL"
            : "PASS";


    // ==================================
    // REMARKS
    // ==================================

    let remarks = "";


    if (result === "FAIL") {

        remarks =
            "অনুত্তীর্ণ — " +
            failSubjectCount +
            "টি বিষয়ে অকৃতকার্য";

    }

    else if (finalGPA === 5) {

        remarks =
            "চমৎকার ফলাফল";

    }

    else if (finalGPA >= 4) {

        remarks =
            "খুব ভালো ফলাফল";

    }

    else {

        remarks =
            "সন্তোষজনক ফলাফল";

    }


    // ==================================
    // MERIT POSITION
    // ==================================
    //
    // একাধিক শিক্ষার্থী যুক্ত হলে এখানে
    // GPA + মোট নম্বর দিয়ে মেধাক্রম
    // স্বয়ংক্রিয় করা হবে।
    //

    let meritPosition =
        "প্রস্তুত হচ্ছে";


    // ==================================
    // SUCCESS MESSAGE
    // ==================================

    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";

    message.style.color =
        "#087f4f";


    // ==================================
    // DISPLAY RESULT
    // ==================================

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
                        <th>GPA</th>

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
                            আবশ্যিক বিষয়ের GPA
                        </th>

                        <th>
                            ${compulsoryGPA.toFixed(2)}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            কৃষির অতিরিক্ত পয়েন্ট
                        </th>

                        <th>
                            ${agricultureBonus.toFixed(2)}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            ফেল বিষয় সংখ্যা
                        </th>

                        <th>
                            ${failSubjectCount}
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
                            result === "PASS"
                                ? "result-pass"
                                : "result-fail"
                        }">

                            ${result}

                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            Remarks
                        </th>

                        <th>
                            ${remarks}
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

                        menu.classList.remove(
                            "active"
                        );

                    }

                }
            );

        });

    }
);
