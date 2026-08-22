// Abdullah Hat Islamia Fazil (Degree) Madrasah
// Website JavaScript


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
// DEMO RESULT DATA
// ===============================

const students = {

    "101": {
        name: "আব্দুল্লাহ",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        bangla: 82,
        english: 76,
        mathematics: 88,
        islam: 91,
        science: 79
    },

    "102": {
        name: "মোঃ হাসান",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        bangla: 72,
        english: 68,
        mathematics: 81,
        islam: 85,
        science: 74
    },

    "103": {
        name: "সুমাইয়া আক্তার",
        className: "দাখিল ১০ম শ্রেণি",
        year: "2026",
        bangla: 95,
        english: 89,
        mathematics: 92,
        islam: 96,
        science: 90
    }

};


// ===============================
// RESULT SEARCH
// ===============================

function searchResult() {

    const roll = document.getElementById("rollNumber").value.trim();

    const message = document.getElementById("resultMessage");

    const output = document.getElementById("resultOutput");


    output.innerHTML = "";
    message.innerHTML = "";


    if (roll === "") {

        message.innerHTML =
            "⚠️ অনুগ্রহ করে রোল নম্বর লিখুন।";

        message.style.color = "red";

        return;
    }


    const student = students[roll];


    if (!student) {

        message.innerHTML =
            "❌ এই রোল নম্বরের কোনো ফলাফল পাওয়া যায়নি।";

        message.style.color = "red";

        return;
    }


    // মোট নম্বর
    const total =
        student.bangla +
        student.english +
        student.mathematics +
        student.islam +
        student.science;


    // গড়
    const average = total / 5;


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


    // ফলাফল
    const result =
        average >= 33 ? "PASS" : "FAIL";


    message.innerHTML =
        "✅ ফলাফল পাওয়া গেছে";

    message.style.color = "#087f4f";


    output.innerHTML = `

        <h3>${student.name}</h3>

        <p>
            <strong>রোল:</strong> ${roll}
            &nbsp;&nbsp;
            <strong>শ্রেণি:</strong> ${student.className}
            &nbsp;&nbsp;
            <strong>সন:</strong> ${student.year}
        </p>


        <table class="result-table">

            <tr>
                <th>বিষয়</th>
                <th>প্রাপ্ত নম্বর</th>
            </tr>

            <tr>
                <td>বাংলা</td>
                <td>${student.bangla}</td>
            </tr>

            <tr>
                <td>ইংরেজি</td>
                <td>${student.english}</td>
            </tr>

            <tr>
                <td>গণিত</td>
                <td>${student.mathematics}</td>
            </tr>

            <tr>
                <td>ইসলাম শিক্ষা</td>
                <td>${student.islam}</td>
            </tr>

            <tr>
                <td>বিজ্ঞান</td>
                <td>${student.science}</td>
            </tr>

            <tr>
                <th>মোট</th>
                <th>${total}</th>
            </tr>

            <tr>
                <th>GPA</th>
                <th>${gpa.toFixed(2)}</th>
            </tr>

            <tr>
                <th>ফলাফল</th>
                <th class="${result === "PASS" ? "result-pass" : "result-fail"}">
                    ${result}
                </th>
            </tr>

        </table>

    `;

}


// ===============================
// PAGE LOADED
// ===============================

document.addEventListener("DOMContentLoaded", function () {


    // Navigation
    const navLinks =
        document.querySelectorAll("#menu a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const menu =
                document.getElementById("menu");

            if (menu) {
                menu.classList.remove("active");
            }

        });

    });


    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
