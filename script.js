// ==========================================
// Abdullah Hat Islamia Fazil (Degree) Madrasah
// Online Result System
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }

}


// ==========================================
// SUBJECT CONFIGURATION
// ==========================================

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


// ==========================================
// DEMO STUDENT
// ==========================================

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


// ==========================================
// GRADE / GPA
// ==========================================

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


// ==========================================
// PART PASS
// ==========================================

function partPassed(mark, fullMarks) {

    if (fullMarks === 0) {

        return true;

    }


    const passMark =
        Math.ceil(fullMarks * 0.33);


    return mark >= passMark;

}


// ==========================================
// RESULT SEARCH
// ==========================================

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


    // ======================================
    // VALIDATION
    // ======================================

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


    // ======================================
    // SEARCH KEY
    // ======================================

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

        message.style.color = "red";

        return;

    }


    // ======================================
    // VARIABLES
    // ======================================

    let compulsoryGroups = {};

    let hasFail = false;

    let totalMarks = 0;

    let totalFullMarks = 0;

    let agricultureBonus = 0;

    let rows = "";


    // ======================================
    // SUBJECT CALCULATION
    // ======================================

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
            mcq +
            cq +
            practical;


        // ==================================
        // PASS CHECK
        // ==================================

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


        // ==================================
        // FAIL SUBJECT
        // ==================================

        if (
            !subject.optional &&
            !subjectPass
        ) {

            hasFail = true;

        }


        // ==================================
        // GRADE
        // ==================================

        const gradeInfo =
            getGrade(
                total,
                subject.fullMarks
            );


        // ==================================
        // AGRICULTURE BONUS
        // ==================================

        if (subject.optional) {


            const agriculturePercentage =
                (total / subject.fullMarks) * 100;


            if (agriculturePercentage > 40) {

                agricultureBonus =
                    Math.max(
                        0,
                        gradeInfo.point - 2
                    );

            }

        }


        // ==================================
        // COMPULSORY GROUP
        // ==================================

        else {


            if (!compulsoryGroups[subject.group]) {

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


        // ==================================
        // RESULT TABLE ROW
        // ==================================

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


    // ==========================================
    // COMPULSORY GPA
    // ==========================================

    let compulsoryPointTotal = 0;

    let compulsorySubjectCount = 0;


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


            compulsorySubjectCount++;

        }
    );


    // ==========================================
    // COMPULSORY GPA AVERAGE
    // ==========================================

    let compulsoryGPAAverage = 0;


    if (compulsorySubjectCount > 0) {

        compulsoryGPAAverage =
            compulsoryPointTotal /
            compulsorySubjectCount;

    }


    // ==========================================
    // FINAL GPA
    // ==========================================

    let finalGPA = 0;


    if (compulsorySubjectCount > 0) {

        finalGPA =
            (
                compulsoryPointTotal +
                agricultureBonus
            ) /
            compulsorySubjectCount;

    }


    if (finalGPA > 5) {

        finalGPA = 5;

    }


    // ফেল থাকলে GPA 0
    if (hasFail) {

        finalGPA = 0;

    }


    // ==========================================
    // FAIL SUBJECT COUNT
    // ==========================================

    let failSubjectCount = 0;


    subjects.forEach(function(subject) {


        if (subject.optional) {

            return;

        }


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


        if (
            !(
                mcqPass &&
                cqPass &&
                practicalPass
            )
        ) {

            failSubjectCount++;

        }

    });


    // ==========================================
    // RESULT
    // ==========================================

    const result =
        hasFail
            ? "FAIL"
            : "PASS";


    // ==========================================
    // REMARKS
    // ==========================================

    let remarks = "";


    if (hasFail) {

        remarks =
            "ফেল বিষয় রয়েছে।";

    }

    else if (finalGPA >= 5) {

        remarks =
            "অসাধারণ ফলাফল।";

    }

    else if (finalGPA >= 4) {

        remarks =
            "খুব ভালো ফলাফল।";

    }

    else if (finalGPA >= 3) {

        remarks =
            "ভালো ফলাফল।";

    }

    else {

        remarks =
            "আরও ভালো করার চেষ্টা করুন।";

    }


    // ==========================================
    // MERIT POSITION
    // ==========================================

    let meritPosition = "প্রস্তুত হচ্ছে";


    const currentStudents = [];


    Object.keys(students).forEach(
        function(studentKey) {


            const s =
                students[studentKey];


            if (
                s.year !== year ||
                s.examName !== examName ||
                s.className !== student.className
            ) {

                return;

            }


            let sGroups = {};

            let sAgricultureBonus = 0;

            let sFail = false;

            let sTotalMarks = 0;


            subjects.forEach(function(subject) {


                const d =
                    s.marks[subject.name] || {

                        mcq: 0,
                        cq: 0,
                        practical: 0

                    };


                const mcq =
                    Number(d.mcq || 0);


                const cq =
                    Number(d.cq || 0);


                const practical =
                    Number(d.practical || 0);


                const total =
                    mcq +
                    cq +
                    practical;


                sTotalMarks += total;


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


                if (
                    !subject.optional &&
                    !(
                        mcqPass &&
                        cqPass &&
                        practicalPass
                    )
                ) {

                    sFail = true;

                }


                const g =
                    getGrade(
                        total,
                        subject.fullMarks
                    );


                if (subject.optional) {


                    const p =
                        (total / subject.fullMarks) *
                        100;


                    if (p > 40) {

                        sAgricultureBonus =
                            Math.max(
                                0,
                                g.point - 2
                            );

                    }

                }

                else {


                    if (!sGroups[subject.group]) {

                        sGroups[subject.group] = [];

                    }


                    sGroups[subject.group].push(
                        g.point
                    );

                }

            });


            let sPointTotal = 0;

            let sGroupCount = 0;


            Object.keys(sGroups).forEach(
                function(group) {


                    const points =
                        sGroups[group];


                    let gp = 0;


                    points.forEach(function(p) {

                        gp += p;

                    });


                    sPointTotal +=
                        gp / points.length;


                    sGroupCount++;

                }
            );


            let sFinalGPA = 0;


            if (sGroupCount > 0) {

                sFinalGPA =
                    (
                        sPointTotal +
                        sAgricultureBonus
                    ) /
                    sGroupCount;

            }


            if (sFinalGPA > 5) {

                sFinalGPA = 5;

            }


            if (sFail) {

                sFinalGPA = 0;

            }


            currentStudents.push({

                key: studentKey,

                gpa: sFinalGPA,

                total: sTotalMarks

            });

        }
    );


    // ==========================================
    // SORT MERIT
    // ==========================================

    currentStudents.sort(
        function(a, b) {


            if (b.gpa !== a.gpa) {

                return b.gpa - a.gpa;

            }


            return b.total - a.total;

        }
    );


    const currentIndex =
        currentStudents.findIndex(
            function(item) {

                return item.key === key;

            }
        );


    if (currentIndex !== -1) {

        meritPosition =
            currentIndex + 1;

    }


    // ==========================================
    // SUCCESS MESSAGE
    // ==========================================

    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";


    message.style.color =
        "#087f4f";


    // ==========================================
    // DISPLAY RESULT
    // ==========================================

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

                    <th>পয়েন্ট</th>

                </tr>

            </thead>


            <tbody>

                ${rows}

            </tbody>


            <tfoot>


                <!-- TOTAL MARKS -->

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



                <!-- COMPULSORY GPA AVERAGE -->

                <tr>

    <th colspan="7">
        আবশ্যিক বিষয়ের GPA
    </th>

    <th>
        ${compulsoryGPAAverage.toFixed(2)}
    </th>

</tr>



                <!-- AGRICULTURE BONUS -->

                <tr>

                    <th colspan="7">

                        কৃষির অতিরিক্ত GPA

                    </th>


                    <th>

                        ${agricultureBonus.toFixed(2)}

                    </th>

                </tr>



                <!-- FAIL SUBJECT COUNT -->

                <tr>

                    <th colspan="7">

                        ফেল বিষয় সংখ্যা

                    </th>


                    <th>

                        ${failSubjectCount}

                    </th>

                </tr>



                <!-- FINAL GPA -->

                <tr>

                    <th colspan="7">

                        চূড়ান্ত GPA

                    </th>


                    <th>

                        ${finalGPA.toFixed(2)}

                    </th>

                </tr>



                <!-- MERIT -->

                <tr>

                    <th colspan="7">

                        মেধাক্রম

                    </th>


                    <th>

                        ${meritPosition}

                    </th>

                </tr>



                <!-- RESULT -->

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



                <!-- REMARKS -->

                <tr>

                    <th colspan="7">

                        মন্তব্য

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


// ==========================================
// PAGE LOADED
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const navLinks =
            document.querySelectorAll("#menu a");


        navLinks.forEach(
            function(link) {


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

            }
        );

    }
);
