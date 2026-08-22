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
// DEMO RESULT DATABASE
// ===============================

const students = {
const students = {

    "2026-dakhil10-101": {
        name: "আব্দুল্লাহ",
        roll: "101",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",

        subjects: [
            ["বাংলা", 82],
            ["ইংরেজি", 76],
            ["গণিত", 88],
            ["ইসলাম শিক্ষা", 91],
            ["বিজ্ঞান", 79]
        ]
    },

    "2026-dakhil10-102": {
        name: "মোঃ হাসান",
        roll: "102",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",

        subjects: [
            ["বাংলা", 72],
            ["ইংরেজি", 68],
            ["গণিত", 81],
            ["ইসলাম শিক্ষা", 85],
            ["বিজ্ঞান", 74]
        ]
    },

    "2026-dakhil10-103": {
        name: "সুমাইয়া আক্তার",
        roll: "103",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",

        subjects: [
            ["বাংলা", 95],
            ["ইংরেজি", 89],
            ["গণিত", 92],
            ["ইসলাম শিক্ষা", 96],
            ["বিজ্ঞান", 90]
        ]
    }

};


// ===============================
// RESULT SEARCH
// ===============================

function searchResult() {

    const year =
        document.getElementById("examYear").value;

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


    // Check input

    if (year === "" || className === "" || roll === "") {

        message.innerHTML =
            "⚠️ সন, শ্রেণি ও রোল নম্বর নির্বাচন/লিখুন।";

        message.style.color = "red";

        return;

    }


    // Search

    const key =
        year + "-" + className + "-" + roll;

    const student =
        students[key];


    if (!student) {

        message.innerHTML =
            "❌ এই তথ্যের কোনো ফলাফল পাওয়া যায়নি।";

        message.style.color = "red";

        return;

    }


    // Total

    let total = 0;

    student.subjects.forEach(function(subject) {

        total += subject[1];

    });


    // Average

    const average =
        total / student.subjects.length;


    // GPA

    let gpa;

    if (average >= 80) {
        gpa = 5.00;
    }
    else if (average >= 70) {
        gpa = 4.00;
    }
    else if (average >= 60) {
        gpa = 3.50;
    }
    else if (average >= 50) {
        gpa = 3.00;
    }
    else if (average >= 40) {
        gpa = 2.00;
    }
    else if (average >= 33) {
        gpa = 1.00;
    }
    else {
        gpa = 0.00;
    }


    // Pass / Fail

    const result =
        average >= 33 ? "PASS" : "FAIL";


    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";

    message.style.color = "#087f4f";


    // Build subject rows

    let rows = "";

    student.subjects.forEach(function(subject) {

        rows += `
            <tr>
                <td>${subject[0]}</td>
                <td>${subject[1]}</td>
            </tr>
        `;

    });


    // Display result

    output.innerHTML = `

        <h3>${student.name}</h3>

        <p>
            <strong>রোল:</strong> ${student.roll}
            &nbsp; | &nbsp;
            <strong>শ্রেণি:</strong> ${student.className}
            &nbsp; | &nbsp;
            <strong>সন:</strong> ${student.year}
        </p>


        <table class="result-table">

            <tr>
                <th>বিষয়</th>
                <th>প্রাপ্ত নম্বর</th>
            </tr>

            ${rows}

            <tr>
                <th>মোট নম্বর</th>
                <th>${total}</th>
            </tr>

            <tr>
                <th>গড়</th>
                <th>${average.toFixed(2)}</th>
            </tr>

            <tr>
                <th>GPA</th>
                <th>${gpa.toFixed(2)}</th>
            </tr>

            <tr>
                <th>ফলাফল</th>

                <th class="${result === "PASS"
                    ? "result-pass"
                    : "result-fail"}">

                    ${result}

                </th>

            </tr>

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
