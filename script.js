// ==========================================
// ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
// ONLINE RESULT SYSTEM
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
// PASS MARK
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


    // ======================================
    // CALCULATION VARIABLES
    // ======================================

    let compulsoryGroups = {};

    let hasFail = false;

    let failSubjectCount = 0;

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


        // ==================================
        // AGRICULTURE BONUS
        // ==================================

        if (subject.optional) {

            const percentage =
                (total / subject.fullMarks) * 100;

            /*
             * কৃষিতে ৪০%-এর বেশি হলে
             * ২ পয়েন্টের বেশি অংশ
             * অতিরিক্ত GPA হিসেবে যোগ হবে।
             */

            if (percentage > 40) {

                agricultureBonus =
                    Math.max(
                        0,
                        gradeInfo.point - 2
                    );

            }

        }


        // ==================================
        // COMPULSORY GPA
        // ==================================

        else {

            if (!compulsoryGroups[subject.group]) {

                compulsoryGroups[subject.group] = [];

            }

            compulsoryGroups[
                subject.group
            ].push(gradeInfo.point);

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


    // ======================================
    // COMPULSORY GPA
    // ======================================

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

            compulsoryPointTotal += groupGPA;

            compulsoryGroupCount++;

        }
    );


    /*
     * এখানে মোট GPA-এর যোগফল দেখানো হবে না।
     *
     * শুধু আবশ্যিক বিষয়ের GPA-এর গড়
     * দেখানো হবে।
     */

    let compulsoryGPA = 0;

    if (compulsoryGroupCount > 0) {

        compulsoryGPA =
            compulsoryPointTotal /
            compulsoryGroupCount;

    }


    // ======================================
    // FINAL GPA
    // ======================================

    let finalGPA =
        compulsoryGPA +
        agricultureBonus;

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

    if (hasFail) {

        remarks =
            "ফেল — পুনরায় পরীক্ষার প্রয়োজন।";

    } else if (finalGPA >= 5) {

        remarks =
            "অত্যন্ত ভালো ফলাফল।";

    } else if (finalGPA >= 4) {

        remarks =
            "খুব ভালো ফলাফল।";

    } else if (finalGPA >= 3) {

        remarks =
            "ভালো ফলাফল।";

    } else {

        remarks =
            "উত্তীর্ণ। আরও ভালো করার সুযোগ আছে।";

    }


    // ======================================
    // MERIT POSITION
    // ======================================

    /*
     * একই পরীক্ষার শিক্ষার্থীদের মধ্যে
     * GPA বেশি হলে আগে।
     * GPA সমান হলে মোট নম্বর বেশি হলে আগে।
     *
     * বর্তমানে ডেমোতে একজন শিক্ষার্থী,
     * তাই তার মেধাক্রম ১।
     */

    let meritPosition = 1;

    const sameExamStudents =
        Object.values(students).filter(function(s) {

            return (
                s.year === student.year &&
                s.examName === student.examName &&
                s.className === student.className
            );

        });


    /*
     * ভবিষ্যতে একাধিক শিক্ষার্থী যোগ হলে
     * এখানে প্রকৃত মেধাক্রম গণনা করা যাবে।
     */

    if (sameExamStudents.length === 1) {

        meritPosition = 1;

    }


    // ======================================
    // MESSAGE
    // ======================================

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
                            কৃষির অতিরিক্ত GPA
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
                            মেধাক্রম
                        </th>

                        <th>
                            ${meritPosition}
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


        <button
            type="button"
            class="print-button"
            onclick="printMarksheet()">

            🖨️ মার্কশিট প্রিন্ট করুন

        </button>


        <!-- PRINT MARKSHEET -->

        <div class="marksheet">

            <div style="
                border:2px solid #b8860b;
                padding:20px;
                min-height:1050px;
                position:relative;
                overflow:hidden;
            ">

                <!-- WATERMARK -->

                <div style="
                    position:absolute;
                    top:42%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    font-size:150px;
                    opacity:0.08;
                    z-index:0;
                    white-space:nowrap;
                ">
                    🕌
                </div>


                <div style="
                    position:relative;
                    z-index:1;
                    text-align:center;
                ">

                    <h1 style="
                        color:#075e3b;
                        margin-bottom:4px;
                    ">
                        Abdullah Hat Islamia
                    </h1>

                    <h2 style="
                        color:#075e3b;
                        margin-bottom:4px;
                    ">
                        Fazil (Degree) Madrasah
                    </h2>

                    <p>
                        নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
                    </p>

                    <h2 style="
                        margin-top:18px;
                        border-bottom:2px solid #b8860b;
                        display:inline-block;
                        padding-bottom:5px;
                    ">
                        ${student.examName} — মার্কশিট
                    </h2>

                </div>


                <div style="
                    position:relative;
                    z-index:1;
                    margin-top:25px;
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    gap:8px;
                    border:1px solid #777;
                    padding:12px;
                ">

                    <div>
                        <strong>শিক্ষার্থীর নাম:</strong>
                        ${student.name}
                    </div>

                    <div>
                        <strong>রোল:</strong>
                        ${student.roll}
                    </div>

                    <div>
                        <strong>শ্রেণি:</strong>
                        ${student.className}
                    </div>

                    <div>
                        <strong>সন:</strong>
                        ${student.year}
                    </div>

                </div>


                <table style="
                    position:relative;
                    z-index:1;
                    width:100%;
                    border-collapse:collapse;
                    margin-top:18px;
                ">

                    <thead>

                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                বিষয়
                            </th>

                            <th style="border:1px solid #555;padding:7px;">
                                পূর্ণমান
                            </th>

                            <th style="border:1px solid #555;padding:7px;">
                                MCQ
                            </th>

                            <th style="border:1px solid #555;padding:7px;">
                                CQ
                            </th>

                            <th style="border:1px solid #555;padding:7px;">
                                Practical
                            </th>

                            <th style="border:1px solid #555;padding:7px;">
                                মোট
                            </th>

                            <th style="border:1px solid #555;padding:7px;">
                                গ্রেড
                            </th>

                            <th style="border:1px solid #555;padding:7px;">
                                GPA
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        ${rows}

                    </tbody>

                </table>


                <div style="
                    position:relative;
                    z-index:1;
                    margin-top:18px;
                ">

                    <table style="
                        width:100%;
                        border-collapse:collapse;
                    ">

                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                মোট প্রাপ্ত নম্বর
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${totalMarks}
                            </td>

                            <th style="border:1px solid #555;padding:7px;">
                                মোট পূর্ণমান
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${totalFullMarks}
                            </td>

                        </tr>


                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                আবশ্যিক বিষয়ের GPA
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${compulsoryGPA.toFixed(2)}
                            </td>

                            <th style="border:1px solid #555;padding:7px;">
                                কৃষির অতিরিক্ত GPA
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${agricultureBonus.toFixed(2)}
                            </td>

                        </tr>


                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                ফেল বিষয় সংখ্যা
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${failSubjectCount}
                            </td>

                            <th style="border:1px solid #555;padding:7px;">
                                মেধাক্রম
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${meritPosition}
                            </td>

                        </tr>


                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                ফলাফল
                            </th>

                            <td style="
                                border:1px solid #555;
                                padding:7px;
                                text-align:center;
                                font-weight:bold;
                            ">
                                ${result}
                            </td>

                            <th style="border:1px solid #555;padding:7px;">
                                Remarks
                            </th>

                            <td style="
                                border:1px solid #555;
                                padding:7px;
                                text-align:center;
                            ">
                                ${remarks}
                            </td>

                        </tr>

                    </table>

                </div>


                <div style="
                    position:relative;
                    z-index:1;
                    display:flex;
                    justify-content:space-between;
                    margin-top:90px;
                    text-align:center;
                ">

                    <div>
                        ____________________<br>
                        শ্রেণি শিক্ষকের স্বাক্ষর
                    </div>

                    <div>
                        ____________________<br>
                        অধ্যক্ষের স্বাক্ষর
                    </div>

                </div>

            </div>

        </div>

    `;

}


// ==========================================
// PRINT MARKSHEET
// ==========================================

function printMarksheet() {

    const marksheet =
        document.querySelector(".marksheet");

    if (!marksheet) {

        alert("মার্কশিট প্রস্তুত হয়নি।");

        return;
    }

    marksheet.style.display = "block";

    window.print();

}


// ==========================================
// PAGE LOADED
// ==========================================

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

// ==========================================
// MERIT LIST
// ==========================================

function generateMeritList() {

    const year =
        document.getElementById("examYear")?.value || "";

    const examName =
        document.getElementById("examName")?.value || "";

    const className =
        document.getElementById("examClass")?.value || "";


    const tableBody =
        document.getElementById("meritTableBody");

    const meritYear =
        document.getElementById("meritYear");

    const meritExamName =
        document.getElementById("meritExamName");

    const meritClass =
        document.getElementById("meritClass");


    if (!tableBody) {
        return;
    }


    if (
        year === "" ||
        examName === "" ||
        className === ""
    ) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="9">
                    ⚠️ সন, পরীক্ষা ও শ্রেণি নির্বাচন করুন।
                </td>
            </tr>
        `;

        return;
    }


    // ======================================
    // HEADING
    // ======================================

    meritYear.textContent =
        year;

    meritExamName.textContent =
        examName;

    meritClass.textContent =
        className;


    // ======================================
    // STUDENT FILTER
    // ======================================

    const list = [];


    Object.keys(students).forEach(function(key) {

        const student =
            students[key];


        if (
            String(student.year) !== String(year)
        ) {
            return;
        }


        if (
            student.examName !== examName
        ) {
            return;
        }


        // className-এর প্রকৃত value
        // যেমন dakhil10

        const studentClass =
            student.className;


        if (
            className !==
            getClassCode(studentClass)
        ) {
            return;
        }


        // ==================================
        // STUDENT CALCULATION
        // ==================================

        let totalMarks = 0;

        let failSubjects = 0;

        let absent = false;

        let hasFail = false;

        let compulsoryGroups = {};

        let agricultureBonus = 0;


        subjects.forEach(function(subject) {

            const data =
                student.marks[subject.name];


            // ==============================
            // ABSENT
            // ==============================

            if (!data) {

                absent = true;

                return;

            }


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


            totalMarks += total;


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

                failSubjects++;

                hasFail = true;

            }


            const gradeInfo =
                getGrade(
                    total,
                    subject.fullMarks
                );


            // ==============================
            // AGRICULTURE BONUS
            // ==============================

            if (subject.optional) {

                const percentage =
                    (total /
                    subject.fullMarks) *
                    100;


                if (percentage > 40) {

                    agricultureBonus =
                        Math.max(
                            0,
                            gradeInfo.point - 2
                        );

                }

            }


            // ==============================
            // COMPULSORY GROUP
            // ==============================

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

        });


        // ==================================
        // ABSENT
        // ==================================

        if (absent) {

            list.push({

                student: student,

                totalMarks: totalMarks,

                finalGPA: 0,

                result: "ABSENT",

                failSubjects: 0,

                absent: true

            });

            return;

        }


        // ==================================
        // GPA
        // ==================================

        let compulsoryPointTotal = 0;

        let compulsoryGroupCount = 0;


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


            compulsoryGroupCount++;

        });


        let finalGPA = 0;


        if (
            compulsoryGroupCount > 0
        ) {

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


        // ==================================
        // PUSH STUDENT
        // ==================================

        list.push({

            student: student,

            totalMarks: totalMarks,

            finalGPA: finalGPA,

            result: result,

            failSubjects: failSubjects,

            absent: false

        });

    });


    // ======================================
    // SORT
    // ======================================

    list.sort(function(a, b) {

        // PASS আগে
        if (
            a.result === "PASS" &&
            b.result !== "PASS"
        ) {
            return -1;
        }


        if (
            a.result !== "PASS" &&
            b.result === "PASS"
        ) {
            return 1;
        }


        // GPA
        if (
            b.finalGPA !== a.finalGPA
        ) {

            return (
                b.finalGPA -
                a.finalGPA
            );

        }


        // নম্বর
        if (
            b.totalMarks !==
            a.totalMarks
        ) {

            return (
                b.totalMarks -
                a.totalMarks
            );

        }


        // Roll
        return String(
            a.student.roll
        ).localeCompare(
            String(b.student.roll),
            undefined,
            {
                numeric: true
            }
        );

    });


    // ======================================
    // SUMMARY
    // ======================================

    const totalStudents =
        list.length;


    const totalPassed =
        list.filter(function(item) {

            return item.result === "PASS";

        }).length;


    const totalAbsent =
        list.filter(function(item) {

            return item.result === "ABSENT";

        }).length;


    const totalFailed =
        list.filter(function(item) {

            return item.result === "FAIL";

        }).length;


    document.getElementById(
        "totalStudents"
    ).textContent =
        totalStudents;


    document.getElementById(
        "totalPassed"
    ).textContent =
        totalPassed;


    document.getElementById(
        "totalAbsent"
    ).textContent =
        totalAbsent;


    document.getElementById(
        "totalFailed"
    ).textContent =
        totalFailed;


    // ======================================
    // MERIT
    // ======================================

    let meritPosition = 0;

    let previousGPA = null;

    let previousMarks = null;


    let html = "";


    list.forEach(function(item, index) {

        const student =
            item.student;


        let merit = "—";


        if (
            item.result === "PASS"
        ) {

            if (
                item.finalGPA !==
                previousGPA ||
                item.totalMarks !==
                previousMarks
            ) {

                meritPosition =
                    index + 1;

            }


            merit =
                meritPosition;


            previousGPA =
                item.finalGPA;

            previousMarks =
                item.totalMarks;

        }


        // ==================================
        // REMARKS
        // ==================================

        let remarks = "";


        if (
            item.result === "ABSENT"
        ) {

            remarks =
                "অনুপস্থিত";

        }

        else if (
            item.result === "FAIL"
        ) {

            remarks =
                "ফেল — " +
                item.failSubjects +
                "টি বিষয়ে";

        }

        else if (
            item.finalGPA >= 5
        ) {

            remarks =
                "Excellent";

        }

        else if (
            item.finalGPA >= 4
        ) {

            remarks =
                "Very Good";

        }

        else if (
            item.finalGPA >= 3
        ) {

            remarks =
                "Good";

        }

        else {

            remarks =
                "Passed";

        }


        html += `

            <tr>

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${student.studentId || "—"}
                </td>

                <td>
                    ${student.roll}
                </td>

                <td>
                    ${
                        item.result === "ABSENT"
                            ? "—"
                            : item.finalGPA.toFixed(2)
                    }
                </td>

                <td>
                    ${item.totalMarks}
                </td>

                <td class="${
                    item.result === "PASS"
                        ? "result-pass"
                        : "result-fail"
                }">

                    ${item.result}

                </td>

                <td>
                    ${item.failSubjects}
                </td>

                <td>
                    ${merit}
                </td>

                <td>
                    ${remarks}
                </td>

            </tr>

        `;

    });


    tableBody.innerHTML =
        html ||
        `
            <tr>
                <td colspan="9">
                    কোনো শিক্ষার্থী পাওয়া যায়নি।
                </td>
            </tr>
        `;

}


// ==========================================
// CLASS CODE
// ==========================================

function getClassCode(className) {

    const map = {

        "নূরানী ১ম শ্রেণি":
            "nurani1",

        "নূরানী ২য় শ্রেণি":
            "nurani2",

        "নূরানী ৩য় শ্রেণি":
            "nurani3",

        "ইবতেদায়ী ৪র্থ শ্রেণি":
            "ebtedayi4",

        "ইবতেদায়ী ৫ম শ্রেণি":
            "ebtedayi5",

        "দাখিল ৬ষ্ঠ শ্রেণি":
            "dakhil6",

        "দাখিল ৭ম শ্রেণি":
            "dakhil7",

        "দাখিল ৮ম শ্রেণি":
            "dakhil8",

        "দাখিল ৯ম শ্রেণি":
            "dakhil9",

        "দাখিল ১০ম শ্রেণি":
            "dakhil10",

        "আলিম ১ম বর্ষ":
            "alim1",

        "আলিম ২য় বর্ষ":
            "alim2",

        "ফাজিল ১ম বর্ষ":
            "fazil1",

        "ফাজিল ২য় বর্ষ":
            "fazil2",

        "ফাজিল ৩য় বর্ষ":
            "fazil3"

    };


    return map[className] || className;

}


// ==========================================
// PRINT MERIT LIST
// ==========================================

function printMeritList() {

    const content =
        document.getElementById(
            "meritList"
        );


    if (!content) {
        return;
    }


    const printWindow =
        window.open(
            "",
            "_blank"
        );


    printWindow.document.write(`

        <!DOCTYPE html>

        <html lang="bn">

        <head>

            <meta charset="UTF-8">

            <title>
                Merit List
            </title>

            <style>

                body {

                    font-family:
                        Arial,
                        "Noto Sans Bengali",
                        sans-serif;

                    margin: 20px;

                }

                h2,
                h3,
                p {

                    text-align: center;

                    margin: 5px;

                }

                table {

                    width: 100%;

                    border-collapse:
                        collapse;

                    margin-top: 20px;

                }

                th,
                td {

                    border:
                        1px solid #000;

                    padding: 7px;

                    text-align: center;

                }

                th {

                    background:
                        #eeeeee;

                }

                .result-pass {

                    font-weight: bold;

                }

                .result-fail {

                    font-weight: bold;

                }

                @media print {

                    body {

                        margin: 10mm;

                    }

                }

            </style>

        </head>

        <body>

            ${content.innerHTML}

        </body>

        </html>

    `);


    printWindow.document.close();


    printWindow.focus();


    setTimeout(function() {

        printWindow.print();

        printWindow.close();

    }, 500);

}


// ==========================================
// AUTO GENERATE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const year =
            document.getElementById(
                "examYear"
            );

        const exam =
            document.getElementById(
                "examName"
            );

        const classSelect =
            document.getElementById(
                "examClass"
            );


        if (year) {

            year.addEventListener(
                "change",
                generateMeritList
            );

        }


        if (exam) {

            exam.addEventListener(
                "change",
                generateMeritList
            );

        }


        if (classSelect) {

            classSelect.addEventListener(
                "change",
                generateMeritList
            );

        }

    }
);
