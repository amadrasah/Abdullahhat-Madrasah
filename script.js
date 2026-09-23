/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   COMPLETE SCHOOL MANAGEMENT / RESULT SYSTEM
   BULK MARK ENTRY VERSION
   ========================================================= */


/* =========================================================
   1. BASIC CONFIGURATION
   ========================================================= */

const CLASS_LIST = {

    nurani1: "নূরানী ১ম জামাত",
    nurani2: "নূরানী ২য় জামাত",
    nurani3: "নূরানী ৩য় জামাত",

    ebtedayi4: "ইবতেদায়ী ৪র্থ শ্রেণি",
    ebtedayi5: "ইবতেদায়ী ৫ম শ্রেণি",

    dakhil6: "দাখিল ৬ষ্ঠ শ্রেণি",
    dakhil7: "দাখিল ৭ম শ্রেণি",
    dakhil8: "দাখিল ৮ম শ্রেণি",
    dakhil9: "দাখিল ৯ম শ্রেণি",
    dakhil10: "দাখিল ১০ম শ্রেণি",

    alim1: "আলিম ১ম বর্ষ",
    alim2: "আলিম ২য় বর্ষ",

    fazil1: "ফাজিল ১ম বর্ষ",
    fazil2: "ফাজিল ২য় বর্ষ",
    fazil3: "ফাজিল ৩য় বর্ষ"

};


const EXAMS = [

    "অর্ধবার্ষিক পরীক্ষা",
    "প্রাক-নির্বাচনী পরীক্ষা",
    "নির্বাচনী পরীক্ষা",
    "১ম টিউটোরিয়াল",
    "২য় টিউটোরিয়াল",
    "৩য় টিউটোরিয়াল",
    "বার্ষিক পরীক্ষা"

];


const SUBJECTS = [

    {
        name: "কুরআন মাজিদ",
        group: "quran-hadith",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "হাদীস শরিফ",
        group: "quran-hadith",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "আকাইদ ও ফিকহ",
        group: "aqaid-fiqh",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "আরবী ১ম",
        group: "arabic",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "আরবী ২য়",
        group: "arabic",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "ইংরেজি ১ম",
        group: "english",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "ইংরেজি ২য়",
        group: "english",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: false
    },

    {
        name: "বাংলা ১ম",
        group: "bangla",
        full: 100,
        mcq: 30,
        cq: 70,
        practical: 0,
        optional: false
    },

    {
        name: "বাংলা ২য়",
        group: "bangla",
        full: 100,
        mcq: 30,
        cq: 70,
        practical: 0,
        optional: false
    },

    {
        name: "গণিত",
        group: "math",
        full: 100,
        mcq: 30,
        cq: 70,
        practical: 0,
        optional: false
    },

    {
        name: "ইসলামের ইতিহাস",
        group: "islamic-history",
        full: 100,
        mcq: 30,
        cq: 70,
        practical: 0,
        optional: false
    },

    {
        name: "ICT",
        group: "ict",
        full: 100,
        mcq: 25,
        cq: 50,
        practical: 25,
        optional: false
    },

    {
        name: "কৃষি",
        group: "agriculture",
        full: 100,
        mcq: 0,
        cq: 100,
        practical: 0,
        optional: true
    }

];


/* =========================================================
   2. LOCAL STORAGE
   ========================================================= */

let admissionStudents =
    JSON.parse(
        localStorage.getItem("madrasah_students") || "[]"
    );


let marksData =
    JSON.parse(
        localStorage.getItem("madrasah_marks") || "[]"
    );


/* =========================================================
   3. STORAGE SAVE
   ========================================================= */

function saveStudents() {

    localStorage.setItem(
        "madrasah_students",
        JSON.stringify(admissionStudents)
    );

}


function saveMarksData() {

    localStorage.setItem(
        "madrasah_marks",
        JSON.stringify(marksData)
    );

}


/* =========================================================
   4. MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const menu =
        document.getElementById("menu");

    if (menu) {

        menu.classList.toggle("active");

    }

}


/* =========================================================
   5. CLASS DROPDOWN
   ========================================================= */

function fillClassSelect(id, firstText) {

    const select =
        document.getElementById(id);

    if (!select) return;

    const oldValue =
        select.value;

    select.innerHTML =
        `<option value="">${firstText}</option>`;

    Object.keys(CLASS_LIST).forEach(
        function(code) {

            const option =
                document.createElement("option");

            option.value =
                code;

            option.textContent =
                CLASS_LIST[code];

            select.appendChild(option);

        }
    );

    if (
        Object.keys(CLASS_LIST)
            .includes(oldValue)
    ) {

        select.value =
            oldValue;

    }

}


/* =========================================================
   6. YEAR MANAGEMENT
   একটি জায়গা থেকে সব সন নিয়ন্ত্রণ
========================================================= */

// এখানে শুধু একবার সন লিখলেই
// সব Year dropdown-এ চলে যাবে।

let YEARS =
    JSON.parse(
        localStorage.getItem("madrasah_years")
    ) || [
        "2025",
        "2026",
        "2027",
        "2028"
    ];


// =========================================================
// সব Year Dropdown-এর ID
// =========================================================

const YEAR_SELECT_IDS = [

    "studentSearchYear",
    "admissionYear",
    "studentListYear",
    "dashboardYear",
    "marksYear",
    "examYear",
    "meritYear"

];


// =========================================================
// Year Dropdown তৈরি
// =========================================================

function fillYearSelect(id, firstText) {

    const select =
        document.getElementById(id);

    if (!select) return;

    const oldValue =
        select.value;

    select.innerHTML =
        `<option value="">${firstText}</option>`;


    YEARS.forEach(function(year) {

        const option =
            document.createElement("option");

        option.value =
            year;

        option.textContent =
            year;

        select.appendChild(option);

    });


    if (YEARS.includes(oldValue)) {

        select.value =
            oldValue;

    }

}


// =========================================================
// সব Year Dropdown একসাথে আপডেট
// =========================================================

function loadAllYears() {

    YEAR_SELECT_IDS.forEach(function(id) {

        const select =
            document.getElementById(id);

        if (!select) return;


        const firstText =
            select.options[0]
                ? select.options[0].textContent
                : "সন নির্বাচন করুন";


        fillYearSelect(
            id,
            firstText
        );

    });

    // Income & Expense-এর Year dropdown-ও একই YEARS তালিকা ব্যবহার করবে
    if (typeof fillIncomeExpenseYears === "function") {
        fillIncomeExpenseYears();
    }

}


// =========================================================
// নতুন সন যোগ
// =========================================================

function addNewYear() {

    const newYear =
        prompt(
            "নতুন সন লিখুন:\nযেমন: 2029"
        );


    if (!newYear) return;


    const year =
        newYear.trim();


    // ৪ সংখ্যার সন কিনা
    if (!/^\d{4}$/.test(year)) {

        alert(
            "দয়া করে ৪ সংখ্যার সন লিখুন।\nযেমন: 2029"
        );

        return;

    }


    // আগে আছে কিনা
    if (YEARS.includes(year)) {

        alert(
            "এই সন আগে থেকেই আছে।"
        );

        return;

    }


    // নতুন সন যোগ
    YEARS.push(year);


    // ছোট থেকে বড়
    YEARS.sort(function(a, b) {

        return Number(a) - Number(b);

    });


    // Local Storage-এ সংরক্ষণ
    localStorage.setItem(
        "madrasah_years",
        JSON.stringify(YEARS)
    );


    // সব জায়গায় Year আপডেট
    loadAllYears();


    alert(
        year +
        " সন সফলভাবে যোগ হয়েছে।"
    );

}


/* =========================================================
   7. EXAM DROPDOWN
   ========================================================= */

function fillExamSelect(id, firstText) {

    const select =
        document.getElementById(id);

    if (!select) return;

    const oldValue =
        select.value;

    select.innerHTML =
        `<option value="">${firstText}</option>`;

    EXAMS.forEach(
        function(exam) {

            const option =
                document.createElement("option");

            option.value =
                exam;

            option.textContent =
                exam;

            select.appendChild(option);

        }
    );

    if (EXAMS.includes(oldValue)) {

        select.value =
            oldValue;

    }

}


/* =========================================================
   8. INITIALIZE DROPDOWNS
   ========================================================= */

function initializeDropdowns() {

    fillYearSelect(
        "admissionYear",
        "সন নির্বাচন করুন"
    );

    fillClassSelect(
        "admissionClass",
        "শ্রেণি নির্বাচন করুন"
    );


    fillYearSelect(
        "studentSearchYear",
        "সব সন"
    );

    fillClassSelect(
        "studentSearchClass",
        "সব শ্রেণি"
    );


    fillYearSelect(
        "studentListYear",
        "সব সন"
    );

    fillClassSelect(
        "studentListClass",
        "সব শ্রেণি"
    );


    fillYearSelect(
        "dashboardYear",
        "সন নির্বাচন করুন"
    );

    fillClassSelect(
        "dashboardClass",
        "শ্রেণি নির্বাচন করুন"
    );


    fillYearSelect(
        "marksYear",
        "সন নির্বাচন করুন"
    );

    fillClassSelect(
        "marksClass",
        "শ্রেণি নির্বাচন করুন"
    );

    fillExamSelect(
        "marksExam",
        "পরীক্ষা নির্বাচন করুন"
    );


    fillYearSelect(
        "examYear",
        "সন নির্বাচন করুন"
    );

    fillClassSelect(
        "examClass",
        "শ্রেণি নির্বাচন করুন"
    );

    fillExamSelect(
        "examName",
        "পরীক্ষা নির্বাচন করুন"
    );


    fillYearSelect(
        "meritYear",
        "সন নির্বাচন করুন"
    );

    fillClassSelect(
        "meritClass",
        "শ্রেণি নির্বাচন করুন"
    );

    fillExamSelect(
        "meritExam",
        "পরীক্ষা নির্বাচন করুন"
    );

}


/* =========================================================
   9. ADMISSION - STUDENT ID
   ========================================================= */

function generateStudentId() {

    const year =
        document.getElementById(
            "admissionYear"
        )?.value || "";

    const classCode =
        document.getElementById(
            "admissionClass"
        )?.value || "";

    if (!year || !classCode) return;

    const students =
        admissionStudents.filter(
            function(student) {

                return (
                    String(student.year) ===
                    String(year) &&
                    student.classCode ===
                    classCode
                );

            }
        );

    let number =
        students.length + 1;

    let id;

    do {

        id =
            String(year) +
            classCode.replace(
                /\D/g,
                ""
            ) +
            String(number).padStart(
                3,
                "0"
            );

        number++;

    } while (
        admissionStudents.some(
            function(student) {

                return (
                    student.studentId ===
                    id
                );

            }
        )
    );

    const input =
        document.getElementById(
            "admissionStudentId"
        );

    if (input) {

        input.value =
            id;

    }

    generateAdmissionRoll();

}


/* =========================================================
   10. AUTO ROLL
   ========================================================= */

function generateAdmissionRoll() {

    const year =
        document.getElementById(
            "admissionYear"
        )?.value || "";

    const classCode =
        document.getElementById(
            "admissionClass"
        )?.value || "";

    if (!year || !classCode) return;

    const list =
        admissionStudents.filter(
            function(student) {

                return (
                    String(student.year) ===
                    String(year) &&
                    student.classCode ===
                    classCode
                );

            }
        );

    let maxRoll =
        0;

    list.forEach(
        function(student) {

            const roll =
                parseInt(
                    student.roll,
                    10
                ) || 0;

            if (roll > maxRoll) {

                maxRoll =
                    roll;

            }

        }
    );

    const input =
        document.getElementById(
            "admissionRoll"
        );

    if (input) {

        input.value =
            maxRoll + 1;

    }

}


/* =========================================================
   11. ADMISSION SAVE
   ========================================================= */

function saveAdmissionData() {

    const value =
        function(id) {

            return (
                document.getElementById(id)
                ?.value || ""
            );

        };

    const year =
        value("admissionYear");

    const classCode =
        value("admissionClass");

    const studentId =
        value("admissionStudentId");

    const name =
        document.getElementById(
            "admissionName"
        )?.value.trim() || "";

    const roll =
        value("admissionRoll");

    const father =
        document.getElementById(
            "admissionFather"
        )?.value.trim() || "";

    const mother =
        document.getElementById(
            "admissionMother"
        )?.value.trim() || "";

    const dob =
        value("admissionDob");

    const gender =
        value("admissionGender");

    const mobile =
        document.getElementById(
            "admissionMobile"
        )?.value.trim() || "";

    const address =
        document.getElementById(
            "admissionAddress"
        )?.value.trim() || "";

    const admissionDate =
        value("admissionDate");

    const editId =
        value("admissionEditId");

    const photo =
        value("admissionPhotoData");


    if (
        !year ||
        !classCode ||
        !name
    ) {

        showAdmissionMessage(
            "⚠️ সন, শ্রেণি ও শিক্ষার্থীর নাম অবশ্যই দিতে হবে।",
            "red"
        );

        return false;

    }


    const student = {

        id:
            editId ||
            Date.now().toString(),

        year:
            year,

        classCode:
            classCode,

        className:
            CLASS_LIST[classCode],

        studentId:
            studentId,

        name:
            name,

        roll:
            roll,

        fatherName:
            father,

        motherName:
            mother,

        birthDate:
            dob,

        gender:
            gender,

        mobile:
            mobile,

        address:
            address,

        admissionDate:
            admissionDate,

        photo:
            photo

    };


    if (editId) {

        const index =
            admissionStudents.findIndex(
                function(item) {

                    return (
                        item.id ===
                        editId
                    );

                }
            );

        if (index !== -1) {

            admissionStudents[index] =
                student;

        }

        showAdmissionMessage(
            "✅ শিক্ষার্থীর তথ্য Update হয়েছে।",
            "green"
        );

    }

    else {

        const duplicate =
            admissionStudents.some(
                function(item) {

                    return (
                        item.studentId &&
                        item.studentId ===
                        studentId
                    );

                }
            );

        if (
            studentId &&
            duplicate
        ) {

            showAdmissionMessage(
                "⚠️ এই Student ID ইতোমধ্যে আছে।",
                "red"
            );

            return false;

        }

        admissionStudents.push(
            student
        );

        showAdmissionMessage(
            "✅ শিক্ষার্থীর তথ্য সফলভাবে Save হয়েছে।",
            "green"
        );

    }


    saveStudents();

    clearAdmissionForm();

    displayAdmissionStudents();

    showAdmissionStudents();

    updateMarksStudentList();

    updateDashboard();

    return false;

}


/* =========================================================
   12. ADMISSION MESSAGE
   ========================================================= */

function showAdmissionMessage(
    text,```    color
) {

    const box =
        document.getElementById(
            "admissionMessage"
        );

    if (!box) return;

    box.textContent =
        text;

    box.style.color =
        color;

    box.style.fontWeight =
        "bold";

}


/* =========================================================
   13. CLEAR ADMISSION FORM
   ========================================================= */

function clearAdmissionForm() {

    const form =
        document.getElementById(
            "admissionForm"
        );

    if (form) {

        form.reset();

    }

    [
        "admissionStudentId",
        "admissionRoll",
        "admissionEditId"
    ].forEach(
        function(id) {

            const element =
                document.getElementById(id);

            if (element) {

                element.value =
                    "";

            }

        }
    );


    const button =
        document.getElementById(
            "admissionSaveButton"
        );

    if (button) {

        button.textContent =
            "💾 Save";

    }


    const cancel =
        document.getElementById(
            "admissionCancelButton"
        );        body.innerHTML = `

            <tr>

                <td colspan="8">
                    কোনো শিক্ষার্থী পাওয়া যায়নি।
                </td>

            </tr>

        `;

    }

}


/* =========================================================
   18. STUDENT SEARCH
   ========================================================= */

function showAdmissionStudents() {

    const year =
        document.getElementById(
            "studentSearchYear"
        )?.value || "";

    const classCode =
        document.getElementById(
            "studentSearchClass"
        )?.value || "";

    const output =
        document.getElementById(
            "studentSearchOutput"
        );

    const message =
        document.getElementById(
            "studentSearchMessage"
        );

    if (!output) return;


    let list =
        admissionStudents.slice();


    if (year) {

        list =
            list.filter(
                function(student) {

                    return (
                        String(student.year) ===
                        String(year)
                    );

                }
            );

    }


    if (classCode) {

        list =
            list.filter(
                function(student) {

                    return (
                        student.classCode ===
                        classCode
                    );

                }
            );

    }


    if (message) {

        message.innerHTML =
            "মোট " +
            list.length +
            " জন শিক্ষার্থী পাওয়া গেছে।";

    }


    if (!list.length) {

        output.innerHTML =
            "<p>কোনো শিক্ষার্থী পাওয়া যায়নি।";

        return;

    }


    let html = `

        <table class="result-table">

            <thead>

                <tr>

                    <th>Student ID</th>
                    <th>রোল</th>
                    <th>নাম</th>
                    <th>শ্রেণি</th>
                    <th>পিতার নাম</th>
                    <th>মোবাইল</th>

                </tr>

            </thead>

            <tbody>

    `;


    list.forEach(
        function(student) {

            html += `

                <tr>

                    <td>
                        ${escapeHTML(
                            student.studentId || "—"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            student.roll || "—"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            student.name || "—"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            student.className || "—"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            student.fatherName || "—"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            student.mobile || "—"                const placeholder =
                    item[2];


                const element =
                    document.getElementById(id);


                if (!element) return;


                element.disabled =
                    max === 0;

                element.max =
                    max;

                element.placeholder =
                    max === 0
                        ? placeholder + " নেই"
                        : placeholder +
                          ": 0-" +
                          max;

            }
        );

    }


    renderBulkMarkButtons();

}


/* =========================================================
   23. BULK MARK BUTTONS
   ========================================================= */

function renderBulkMarkButtons() {

    let box =
        document.getElementById(
            "bulkMarkButtons"
        );


    const subjectName =
        document.getElementById(
            "marksSubject"
        )?.value || "";


    const subject =
        SUBJECTS.find(
            function(item) {

                return (
                    item.name ===
                    subjectName
                );

            }
        );


    const anchor =
        document.getElementById(
            "marksSubject"
        );


    if (!anchor) return;


    if (!box) {

        box =
            document.createElement(
                "div"
            );

        box.id =
            "bulkMarkButtons";

        anchor.parentElement?.insertAdjacentElement(
            "afterend",
            box
        );

    }


    box.innerHTML =
        "";


    box.style.marginTop =
        "12px";


    if (!subject) return;


    const title =
        document.createElement(
            "div"
        );


    title.textContent =
        "নম্বরের ধরন নির্বাচন করুন";


    title.style.fontWeight =
        "bold";


    title.style.margin =
        "10px 0";


    box.appendChild(
        title
    );


    const buttons = [

        [
            "mcq",
            "📝 MCQ নম্বর",
            subject.mcq
        ],

        [
            "cq",
            "📘 CQ নম্বর",
            subject.cq
        ],

        [
            "practical",
            "🔬 Practical নম্বর",
            subject.practical
        ]

    ];


    buttons.forEach(
        function(item) {

            const type =
                item[0];

            const text =
                item[1];

            const max =
                item[2];


            if (max > 0) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.textContent =
                    text;


                button.style.margin =
                    "4px";


                button.onclick =
                    function() {

                        openBulkMarkSheet(
                            type
                        );

                    };


                box.appendChild(
                    button
                );

            }

        }
    );


    const oldStudent =
        document.getElementById(
            "marksStudent"
        );


    if (oldStudent) {

        oldStudent.style.display =
            "none";

    }


    [
        "marksMCQ",
        "marksCQ",
        "marksPractical"
    ].forEach(
        function(id) {

            const element =
                document.getElementById(id);


            if (element) {

                element.style.display =
                    "none";


                if (
                    element.parentElement
                ) {

                    element.parentElement.style.display =
                        "none";

                }

            }

        }
    );


    hideOldMarkSaveButton();

}


/* =========================================================
   24. HIDE OLD SINGLE SAVE BUTTON
   ========================================================= */

function hideOldMarkSaveButton() {

    document.querySelectorAll(
        "button,input[type=submit]"
    ).forEach(
        function(button) {

            const text =
                (
                    button.textContent ||
                    button.value ||
                    ""
                ).trim();


            if (
                text.includes(
                    "নম্বর সংরক্ষণ"
                ) &&
                button.id !==
                    "bulkSaveMarksButton"
            ) {

                button.style.display =
                    "none";

            }

        }
    );

}


/* =========================================================
   25. OPEN BULK MARK SHEET
   ========================================================= */

function openBulkMarkSheet(type) {

    const                            (০-${max})
                        </th>

                    </tr>

                </thead>

                <tbody>

    `;


    students.forEach(
        function(student, index) {

            const mark =
                findStoredPartMark(
                    student.studentId,
                    year,
                    exam,
                    subjectName,
                    type
                );


            html += `

                <tr>

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        ${escapeHTML(
                            student.roll || "—"
                        )}
                    </td>

                    <td style="text-align:left;">

                        ${escapeHTML(
                            student.name || "—"
                        )}

                    </td>

                    <td>

                        <input
                            class="bulk-mark-input"
                            data-student-id="${escapeHTML(
                                student.studentId
                            )}"
                            data-type="${type}"
                            type="number"
                            min="0"
                            max="${max}"
                            step="1"
                            value="${
                                mark === null
                                    ? ""
                                    : mark
                            }"
                            placeholder="0-${max}"
                            style="
                                width:110px;
                                text-align:center;
                            "
                        >

                    </td>

                </tr>

            `;

        }
    );


    html += `

                </tbody>

            </table>

        </div>


        <button
            type="button"
            id="bulkSaveMarksButton"
            onclick="saveBulkMarks('${type}')"
        >

            💾 ${partName}
            নম্বর সংরক্ষণ করুন

        </button>


        <div
            id="bulkMarksMessage"
            style="
                margin-top:10px;
                font-weight:bold;
            "
        ></div>

    `;


    output.innerHTML =
        html;


    output.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   26. BULK OUTPUT AREA
   ========================================================= */

function getBulkOutput() {

    let output =
        document.getElementById(
            "bulkMarkOutput"
        );


    if (!output) {

        output =
            document.createElement(
                "div"
            );


        output.id =
            "bulkMarkOutput";


        output.style.marginTop =
            "18px";


        const buttons =
            document.getElementById(
                "bulkMarkButtons"
            );


        if (buttons) {

            buttons.parentElement?.appendChild(
                output                student.name;

            data.roll =
                student.roll;


            data[type] =
                raw === ""
                    ? 0
                    : Number(raw);


            if (index >= 0) {

                marksData[index] =
                    data;

            }

            else {

                marksData.push(
                    data
                );

            }

        }
    );


    saveMarksData();

    renderMarksTable();


    if (message) {

        message.style.color =
            "green";

        message.textContent =
            "✅ এই অংশের সব শিক্ষার্থীর নম্বর সংরক্ষণ হয়েছে।";

    }

}


/* =========================================================
   29. OLD SAVE FUNCTION
   ========================================================= */

function saveMarks() {

    return;

}


/* =========================================================
   30. MARKS MESSAGE
   ========================================================= */

function showMarksMessage(
    text,
    color
) {

    const box =
        document.getElementById(
            "marksMessage"
        );


    if (!box) return;


    box.textContent =
        text;

    box.style.color =
        color;

    box.style.fontWeight =
        "bold";

}


/* =========================================================
   31. MARKS TABLE
   ========================================================= */

function renderMarksTable() {

    const body =
        document.getElementById(
            "marksTable"
        );


    if (!body) return;


    body.innerHTML =
        "";


    const year =
        document.getElementById(
            "marksYear"
        )?.value || "";


    const exam =
        document.getElementById(
            "marksExam"
        )?.value || "";


    const classCode =
        document.getElementById(
            "marksClass"
        )?.value || "";


    let list =
        marksData.slice();


    if (year) {

        list =
            list.filter(
                function(item) {

                    return (
                        String(item.year) ===
                        String(year)
                    );

                }
            );

    }


    if (exam) {

        list =
            list.filter(
                function(item) {

                    return (
                        item.exam ===
                        exam
                    );

                }
            );

    }


    if (classCode) {

        list =
            list.filter(
                function(item) {

                    return (
                        item.classCode ===
                        classCode
                    );

                }
            );

    }


    list.forEach(
        function(item) {

            const total =
                Number(item.mcq || 0) +
                Number(item.cq || 0) +
                Number(item.practical || 0);


            const tr =
                document.createElement(
                    "tr"
                );


            tr.innerHTML = `

                <td>
                    ${escapeHTML(
                        item.studentName
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        item.roll
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        item.subject
                    )}
                </td>

                <td>
                    ${item.mcq || 0}
                </td>

                <td>
                    ${item.cq || 0}
                </td>

                <td>
                    ${item.practical || 0}
                </td>

                <td>
                    ${total}
                </td>

                <td>

                    <button
                        type="button"
                        onclick="deleteMarks('${item.id}')"
                    >

                        🗑️ Delete

                    </button>

                </td>

            `;


            body.appendChild(tr);            const practical =
                item
                    ? Number(
                        item.practical || 0
                    )
                    : 0;


            const total =
                mcq +
                cq +
                practical;


            totalMarks +=
                total;

            totalFull +=
                subject.full;


            const pass =
                passedPart(
                    mcq,
                    subject.mcq
                ) &&
                passedPart(
                    cq,
                    subject.cq
                ) &&
                passedPart(
                    practical,
                    subject.practical
                );


            if (
                !subject.optional &&
                !pass
            ) {

                failedSubjects++;

            }


            const grade =
                getGrade(
                    total,
                    subject.full
                );


            if (
                subject.optional
            ) {

                if (
                    total >
                    subject.full * 0.40
                ) {

                    agricultureBonus =
                        Math.max(
                            0,
                            grade.point - 2
                        );

                }

            }

            else {

                if (
                    !groups[
                        subject.group
                    ]
                ) {

                    groups[
                        subject.group
                    ] = [];

                }


                groups[
                    subject.group
                ].push(
                    grade.point
                );

            }

        }
    );


    let groupTotal =
        0;

    let groupCount =
        0;


    Object.values(groups)
        .forEach(
            function(points) {

                if (!points.length) {

                    return;

                }


                const average =
                    points.reduce(
                        function(a, b) {

                            return a + b;

                        },
                        0
                    ) /
                    points.length;


                groupTotal +=
                    average;

                groupCount++;

            }
        );


    const compulsoryGPA =
        groupCount
            ? groupTotal / groupCount
            : 0;


                       <tr>

                        <th colspan="7">
                            ফেল বিষয় সংখ্যা
                        </th>

                        <th>
                            ${calculation.failedSubjects}
                        </th>

                    </tr>


                    <tr>

                        <th colspan="7">
                            মেধাক্রম
                        </th>

                        <th>
                            ${merit}
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

                        <th>
                            ${calculation.result}
                        </th>

                    </tr>

                </tfoot>

            </table>

        </div>


        <button
            type="button"
            onclick="printResult()"
        >

            🖨️ মার্কশিট প্রিন্ট করুন

        </button>

    `;

}


/* =========================================================
   37. BUILD RESULT ROWS
   ========================================================= */

function buildResultRows(
    student,
    year,
    exam
) {

    let html =
        "";


    SUBJECTS.forEach(
        function(subject) {

            const item =
                marksData.find(
                    function(mark) {

                        return (
                            String(mark.year) ===
                            String(year) &&
                            mark.exam ===
                            exam &&
                            mark.studentId ===
                                student.studentId &&
                            mark.subject ===
                                subject.name
                        );

                    }
                );


            const mcq =
                item
                    ? Number(item.mcq || 0)
                    : 0;


            const cq =
                item
                    ? Number(item.cq || 0)
                    : 0;


            const practical =
                item
                    ? Number(
                        item.practical || 0
                    )
                    : 0;


            const total =
                mcq +
                cq +
                practical;


            const grade =
                getGrade(
                               ${escapeHTML(
                CLASS_LIST[classCode]
            )}

        </h3>


        <p style="text-align:center;">

            ${year}
            —
            ${escapeHTML(exam)}

        </p>


        <div style="overflow-x:auto;">

            <table class="result-table">

                <thead>

                    <tr>

                        <th>ক্রম</th>
                        <th>Student ID</th>
                        <th>রোল</th>
                        <th>নাম</th>
                        <th>GPA</th>
                        <th>মোট নম্বর</th>
                        <th>ফলাফল</th>
                        <th>ফেল বিষয়</th>
                        <th>মেধাক্রম</th>

                    </tr>

                </thead>

                <tbody>

    `;


    list.forEach(
        function(item, index) {

            let position =
                "—";


            if (
                item.result.result ===
                "PASS"
            ) {

                if (
                    item.result.finalGPA !==
                    previousGPA ||
                    item.result.totalMarks !==
                    previousMarks
                ) {

                    merit =
                        index + 1;

                }


                position =
                    merit;


                previousGPA =
                    item.result.finalGPA;

                previousMarks =
                    item.result.totalMarks;

            }


            html += `

                <tr>

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        ${escapeHTML(
                            item.student.studentId ||
                            "—"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            item.student.roll ||
                            "—"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            item.student.name ||
                            "—"
                        )}
                    </td>

                    <td>

                        ${
                            item.result.result ===
                            "PASS"

                                ? item.result.finalGPA.toFixed(2)

                                : "—"

                        }

                    </td>

                    <td>
                        ${item.result.totalMarks}
                    </td>

                    <td>
                        ${item.result.result}
                    </td>

                    <td>
                        ${item.result.failedSubjects}
                    </td>

                    <td>
                        ${position}
                    </td>

                </tr>

            `;

        }
    );


    html += `

                </tbody>

            </table>

        </div>


        <br>


        <button
            type="button"
            onclick="printMeritList()"
        >

            🖨️ মেধা তালিকা প্রিন্ট

        </button>

    `;


    output.innerHTML =
        html;


    if (message) {

        message.innerHTML =
            "✅ মেধা তালিকা তৈরি হয়েছে।";

        message.style.color =
            "green";

    }

}


/* =========================================================
   40. PRINT MERIT
   ========================================================= */

function printMeritList() {

    const output =
        document.getElementById(
            "meritOutput"
        );


    if (!output) return;


    printHTML(
        output.innerHTML,
        "মেধা তালিকা"
    );

}


/* =========================================================
   41. PRINT RESULT
   ========================================================= */

function printResult() {

    const output =
        document.getElementById(
            "resultOutput"
        );


    if (!output) return;


    printHTML(
        output.innerHTML,
        "ফলাফল"
    );

}


/* =========================================================
   42. PRINT FUNCTION
   ========================================================= */

function printHTML(
    content,
    title
) {

    const win =
        window.open(
            "",
            "_blank"
        );


    if (!win) {

        alert(
            "Popup Blocked হয়েছে। Browser থেকে popup অনুমতি দিন।"
        );

        return;

    }


    win.document.write(`

        <!DOCTYPE html>

        <html lang="bn">

        <head>

            <meta charset="UTF-8">

            <title>
                ${title}
            </title>

            <style>

                body {

                    font-family:
                        Arial,
                        "Noto Sans Bengali",
                        sans-serif;

                    margin:
                        20px;

                }

                table {

                    width:
                        100%;

                    border-collapse:
                        collapse;

                }

                th,
                td {

                    border:
                        1px solid #000;

                    padding:
                        7px;

                    text-align:
                        center;

                }

                h1,
                h2,
                h3,
                p {

                    text-align:
                        center;

                }

                button {

                    display:
                        none;

                }

                @media print {

                    body {

                        margin:
                            10mm;

                    }

                }

            </style>

        </head>

        <body>

            <h2>
                Abdullah Hat Islamia
            </h2>

            <h3>
                Fazil (Degree) Madrasah
            </h3>

            <p>
                নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
            </p>

            ${content}

        </body>

        </html>

    `);


    win.document.close();

    win.focus();


    setTimeout(
        function() {

            win.print();

            win.close();

        },
        500
    );

}


/* =========================================================
   43. DASHBOARD
   ========================================================= */

function showDashboard() {

    const year =
        document.getElementById(
            "dashboardYear"
        )?.value || "";


    const classCode =
        document.getElementById(
            "dashboardClass"
        )?.value || "";


    const output =
        document.getElementById(
            "dashboardOutput"
        );


    const message =
        document.getElementById(
            "dashboardMessage"
        );


    if (!output) return;


    if (!year) {

        if (message) {

            message.innerHTML =
                "⚠️ সন নির্বাচন করুন।";

            message.style.color =
                "red";

        }

        return;

    }


    let students =
        admissionStudents.filter(
            function(student) {

                return (
                    String(student.year) ===
                    String(year)
                );

            }
        );


    if (classCode) {

        students =
            students.filter(
                function(student) {

                    return (
                        student.classCode ===
                        classCode
                    );

                }
            );

    }


    const total =
        students.length;


    const male =
        students.filter(
            function(student) {

                return (
                    student.gender ===
                    "পুরুষ"
                );

            }
        ).length;


    const female =
        students.filter(
            function(student) {

                return (
                    student.gender ===
                    "নারী"
                );

            }
        ).    const classCards =
        Object.keys(CLASS_LIST)
            .map(
                function(code) {

                    const count =
                        admissionStudents.filter(
                            function(student) {

                                return (
                                    String(student.year) ===
                                    String(year) &&
                                    student.classCode ===
                                    code
                                );

                            }
                        ).length;


                    return `

                        <div class="card">

                            <h3>
                                ${CLASS_LIST[code]}
                            </h3>

                            <p>
                                ${count} জন
                            </p>

                        </div>

                    `;

                }
            )
            .join("");


    let totalMarksRecords =
        0;


    marksData.forEach(
        function(mark) {

            if (
                String(mark.year) ===
                String(year)
            ) {

                if (
                    !classCode ||
                    mark.classCode ===
                    classCode
                ) {

                    totalMarksRecords++;

                }

            }

        }
    );


    output.innerHTML = `

        <div class="cards">

            <div class="card">

                <h3>
                    👨‍🎓 মোট শিক্ষার্থী
                </h3>

                <p>
                    ${total} জন
                </p>

            </div>


            <div class="card">

                <h3>
                    👨 পুরুষ
                </h3>

                <p>
                    ${male} জন
                </p>

            </div>


            <div class="card">

                <h3>
                    👩 নারী
                </h3>

                <p>
                    ${female} জন
                </p>

            </div>


            <div class="card">

                <h3>
                    ✍️ সংরক্ষিত নম্বর
                </h3>

                <p>
                    ${totalMarksRecords} টি
                </p>

            </div>

        </div>


        <hr>


        <h3 style="text-align:center;">

            📚 শ্রেণিভিত্তিক শিক্ষার্থী

        </h3>


        <div class="cards">

            ${classCards}

        </div>

    `;


    if (message) {

        message.innerHTML =
            "✅ Dashboard প্রস্তুত।";

        message.style.color =
            "green";

    }

}


/* =========================================================
   44. UPDATE DASHBOARD
   ========================================================= */

function updateDashboard() {

    const year =
        document.getElementById(
            "dashboardYear"
        )?.value;


    if (year) {

        showDashboard();

    }

}


/* =========================================================
   45. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(
        value ?? ""
    )

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   46. DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* DROPDOWNS */

        initializeDropdowns();


        /* ADMISSION */

        const admissionYear =
            document.getElementById(
                "admissionYear"
            );


        const admissionClass =
            document.getElementById(
                "admissionClass"
            );


        if (admissionYear) {

            admissionYear.addEventListener(
                "change",
                generateStudentId
            );

        }


        if (admissionClass) {

            admissionClass.addEventListener(
                "change",
                generateStudentId
            );

        }


        const admissionForm =
            document.getElementById(
                "admissionForm"
            );


        if (admissionForm) {

            admissionForm.addEventListener(
                "submit",
                function(event) {

                    event.preventDefault();

                    saveAdmissionData();

                }
            );

        }


        const photo =
            document.getElementById(
                "admissionPhoto"
            );


        if (photo) {

            photo.addEventListener(
                "change",
                admissionPhotoUpload
            );

        }                showDashboard
            );

        }


        /* DISPLAY */

        displayAdmissionStudents();

        showAdmissionStudents();

        updateMarksStudentList();

        updateSubjectList();

    }
);


/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL MADRASAH
   INCOME & EXPENSE MANAGEMENT
   COMPLETE VERSION
========================================================= */


/* =========================================================
   1. STORAGE
========================================================= */

let incomeExpenseData = [];

try {

    incomeExpenseData = JSON.parse(
        localStorage.getItem(
            "madrasah_income_expense"
        ) || "[]"
    );

    if (!Array.isArray(incomeExpenseData)) {
        incomeExpenseData = [];
    }

} catch (error) {

    console.error(
        "Income Expense data error:",
        error
    );

    incomeExpenseData = [];

}


/* =========================================================
   2. INCOME CATEGORIES
========================================================= */

const INCOME_CATEGORIES = [

    "মাসিক বেতন",
    "পরীক্ষার ফি",
    "প্রথম টিউটোরিয়াল",
    "দ্বিতীয় টিউটোরিয়াল",
    "তৃতীয় টিউটোরিয়াল",
    "ভর্তি ফি",
    "সেশন চার্জ",
    "বেতন বকেয়া",
    "পুনঃভর্তি ফি",
    "প্রশংসাপত্র/সনদ ফি",
    "টিসি ফি",
    "রেজিস্ট্রেশন ফি",
    "ফরম পূরণ ফি",
    "ক্রীড়া ও সাংস্কৃতিক ফি",
    "আইডি কার্ড ফি",
    "উন্নয়ন ফি",
    "সরকারি অনুদান",
    "বেসরকারি অনুদান",
    "দান",
    "অন্যান্য আয়"

];


/* =========================================================
   3. EXPENSE CATEGORIES
========================================================= */

const EXPENSE_CATEGORIES = [

    "শিক্ষক-কর্মচারী বেতন",
    "বিদ্যুৎ বিল",
    "পানি বিল",
    "ইন্টারনেট বিল",
    "পরীক্ষার খরচ",
    "শিক্ষা উপকরণ",
    "অফিস খরচ",
    "মেরামত ও রক্ষণাবেক্ষণ",
    "পরিবহন খরচ",
    "অনুষ্ঠান খরচ",
    "স্টেশনারি",
    "কর ও ফি",
    "অন্যান্য"

];


/* =========================================================
   4. SAVE DATA
========================================================= */

function saveIncomeExpenseData() {

    localStorage.setItem(
        "madrasah_income_expense",
        JSON.stringify(
            incomeExpenseData
        )
    );

}


/* =========================================================
   5.        const firstOption =
            document.createElement(
                "option"
            );

        firstOption.value = "";

        firstOption.textContent =
            "শ্রেণি নির্বাচন করুন";

        select.appendChild(
            firstOption
        );


        if (
            typeof CLASS_LIST ===
            "undefined"
        ) {

            return;

        }


        Object.keys(CLASS_LIST)
            .forEach(
                function(code) {

                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        code;

                    option.textContent =
                        CLASS_LIST[code];

                    select.appendChild(
                        option
                    );

                }
            );


        if (oldValue) {

            select.value =
                oldValue;

        }

    });

}


/* =========================================================
   10. STUDENT SEARCH
========================================================= */

function fillIncomeStudents(
    classId
) {

    const nameInput =
        document.getElementById(
            "incomeStudentName"
        );


    const idInput =
        document.getElementById(
            "incomeStudentId"
        );


    if (nameInput) {

        nameInput.value = "";

    }


    if (idInput) {

        idInput.value = "";

    }

}


/* =========================================================
   11. FIND STUDENT BY CLASS + ROLL
========================================================= */

function findIncomeStudent() {

    const classId =
        document.getElementById(
            "incomeClass"
        )?.value || "";


    const roll =
        document.getElementById(
            "incomeRoll"
        )?.value.trim() || "";


    const nameInput =
                   studentId,

        amount:
            amount,

        date:
            new Date().toISOString()

    };


    incomeExpenseData.push(
        entry
    );


    saveIncomeExpenseData();


    alert(
        "আয় সফলভাবে সংরক্ষণ হয়েছে।"
    );


    clearIncomeForm();

    renderIncomeExpenseSummary();

    renderIncomeExpenseTable();

}


/* =========================================================
   15. SUBMIT EXPENSE
========================================================= */

function submitExpense() {

    const year =
        document.getElementById(
            "expenseYear"
        )?.value || "";


    const month =
        document.getElementById(
            "expenseMonth"
        )?.value || "";


    const category =
        document.getElementById(
            "expenseHead"
        )?.value || "";


    const amount =
        Number(
            document.getElementById(
                "expenseAmount"
            )?.value || 0
        );


    if (!year) {

        alert(
            "সন নির্বাচন করুন।"
        );

        return;

    }


    if (!month) {

        alert(
            "মাস নির্বাচন করুন।"
        );

        return;

    }


    if (!category) {

        alert(
            "ব্যয়ের খাত নির্বাচন করুন।"
        );

        return;

    }


    if (
        !amount ||
        amount <= 0
    ) {

        alert(
            "টাকার পরিমাণ লিখুন।"
        );

        return;

    }


    const entry = {

        id:
            Date.now().toString(),

        type:
            "expense",

        year:
            year,

        month:
            month,

        category:
            category,

        amount:
            amount,

        date:
            new Date().toISOString()

    };


    incomeExpenseData.push(
        entry
    );


    saveIncomeExpenseData();


    alert(
        "ব্যয় সফলভাবে সংরক্ষণ হয়েছে।"
    );


    clearExpenseForm();

    renderIncomeExpenseSummary();

    renderIncomeExpenseTable();

}


/* =========================================================
   16. CLEAR INCOME FORM
========================================================= */

function clearIncomeForm() {

    const ids = [

        "incomeYear",
        "incomeMonth",
        "incomeHead",
        "incomeClass",
        "incomeRoll",
        "incomeStudentName",
        "incomeStudentId",
        "incomeAmount"

    ];


    ids.forEach(function(id) {

        const element =
            document.getElementById(id);

        if (!element) return;

        element.value = "";

    });

}


/* =========================================================
   17. CLEAR EXPENSE FORM
========================================================= */

function clearExpenseForm() {

    const ids = [

        "expenseYear",
        "expenseMonth",
        "expenseHead",
        "expenseAmount"

    ];


    ids.forEach(function(id) {

        const element =
            document.getElementById(id);

        if (!element) return;

        element.value = "";

    });

}


/* =========================================================
   18. SUMMARY
========================================================= */

function renderIncomeExpenseSummary() {

    const box =
        document.getElementById(
            "incomeExpenseSummary"
        );


    if (!box) return;


    let totalIncome = 0;

    let totalExpense = 0;


    incomeExpenseData.forEach(
        function(item) {

            const amount =
                Number(
                    item.amount || 0
                );


            if (
                item.type ===
                "income"
            ) {

                totalIncome +=
                    amount;

            }


            if (
                item.type ===
                "expense"
            ) {

                totalExpense +=
                    amount;

            }

        }
    );


    const balance =
        totalIncome -
        totalExpense;


    box.innerHTML = `

        <div style="
            display:grid;
            grid-template-columns:
            repeat(auto-fit,minmax(180px,1fr));
            gap:10px;
        ">

            <div style="
                padding:15px;
                border:1px solid #ddd;
                border-radius:8px;
            ">

                <strong>
                    মোট আয়
                </strong>

                <br>

                ${totalIncome.toLocaleString(
                    "bn-BD"
                )}
                টাকা

            </div>


            <div style="
                padding:15px;
                border:1px solid #ddd;
               
