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


/* =========================================================
   সব Year Dropdown-এর ID
========================================================= */

const YEAR_SELECT_IDS = [

    "studentSearchYear",
    "admissionYear",
    "studentListYear",
    "dashboardYear",
    "marksYear",
    "examYear",
    "meritYear"

];


/* =========================================================
   Year Dropdown তৈরি
========================================================= */

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


/* =========================================================
   সব Year Dropdown একসাথে আপডেট
========================================================= */

function loadAllYears() {

    /* মূল Year dropdown */
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


    /* Income & Expense-এর Year */
    fillIncomeExpenseYears();

}



/* =========================================================
   নতুন সন যোগ
========================================================= */

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


    YEARS.push(year);

    YEARS.sort();

    localStorage.setItem(
        "madrasah_years",
        JSON.stringify(YEARS)
    );


    loadAllYears();


    alert(
        "নতুন সন সফলভাবে যোগ হয়েছে: " +
        year
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
                    String(
                        student.studentId
                    ) === String(id)
                );

            }
        )
    );


    const studentId =
        document.getElementById(
            "studentId"
        );

    if (studentId) {

        studentId.value =
            id;

    }

}
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

   /* =========================================================
   15. EDIT STUDENT
   ========================================================= */

function editAdmissionStudent(id) {

    const student =
        admissionStudents.find(
            function(item) {

                return item.id === id;

            }
        );

    if (!student) return;


    const setValue =
        function(id, value) {

            const element =
                document.getElementById(id);

            if (element) {

                element.value =
                    value || "";

            }

        };


    setValue(
        "admissionYear",
        student.year
    );

    setValue(
        "admissionClass",
        student.classCode
    );

    setValue(
        "admissionStudentId",
        student.studentId
    );

    setValue(
        "admissionName",
        student.name
    );

    setValue(
        "admissionRoll",
        student.roll
    );

    setValue(
        "admissionFather",
        student.fatherName
    );

    setValue(
        "admissionMother",
        student.motherName
    );

    setValue(
        "admissionDob",
        student.birthDate
    );

    setValue(
        "admissionGender",
        student.gender
    );

    setValue(
        "admissionMobile",
        student.mobile
    );

    setValue(
        "admissionAddress",
        student.address
    );

    setValue(
        "admissionDate",
        student.admissionDate
    );


    let edit =
        document.getElementById(
            "admissionEditId"
        );

    if (!edit) {

        edit =
            document.createElement(
                "input"
            );

        edit.type =
            "hidden";

        edit.id =
            "admissionEditId";

        document.getElementById(
            "admissionForm"
        )?.appendChild(edit);

    }


    edit.value =
        student.id;


    const button =
        document.getElementById(
            "admissionSaveButton"
        );

    if (button) {

        button.textContent =
            "✏️ Update";

    }


    const cancel =
        document.getElementById(
            "admissionCancelButton"
        );

    if (cancel) {

        cancel.style.display =
            "inline-block";

    }


    location.hash =
        "admission";

}


/* =========================================================
   16. DELETE STUDENT
   ========================================================= */

function deleteAdmissionStudent(id) {

    if (
        !confirm(
            "⚠️ এই শিক্ষার্থীর তথ্য Delete করবেন?"
        )
    ) {

        return;

    }


    const student =
        admissionStudents.find(
            function(item) {

                return item.id === id;

            }
        );


    admissionStudents =
        admissionStudents.filter(
            function(item) {

                return item.id !== id;

            }
        );


    if (student) {

        marksData =
            marksData.filter(
                function(mark) {

                    return (
                        mark.studentId !==
                        student.studentId
                    );

                }
            );

    }


    saveStudents();

    saveMarksData();

    displayAdmissionStudents();

    showAdmissionStudents();

    updateMarksStudentList();

    renderMarksTable();
       updateDashboard();

    alert(
        "✅ শিক্ষার্থীর তথ্য Delete হয়েছে।"
    );

}


/* =========================================================
   17. ADMISSION LIST
   ========================================================= */

function displayAdmissionStudents() {

    const year =
        document.getElementById(
            "studentListYear"
        )?.value || "";

    const classCode =
        document.getElementById(
            "studentListClass"
        )?.value || "";

    const body =
        document.getElementById(
            "admissionStudentTable"
        );

    if (!body) return;


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


    const total =
        document.getElementById(
            "admissionTotalStudents"
        );

    if (total) {

        total.textContent =
            "মোট শিক্ষার্থী: " +
            list.length +
            " জন";

    }


    body.innerHTML =
        "";


    list.forEach(
        function(student) {

            const tr =
                document.createElement(
                    "tr"
                );


            tr.innerHTML = `

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
                        student.mobile || "—"
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        student.admissionDate || "—"
                    )}
                </td>

                <td>

                    <button
                        type="button"
                        onclick="editAdmissionStudent('${student.id}')">

                        ✏️ Edit

                    </button>

                    <button
                        type="button"
                        onclick="deleteAdmissionStudent('${student.id}')">

                        🗑️ Delete

                    </button>

                </td>

            `;


            body.appendChild(tr);

        }
    );


    if (!list.length) {

        body.innerHTML = `

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
                            student.mobile || "—"
                        )}
                    </td>

                </tr>

            `;

        }
    );


    html += `

            </tbody>

        </table>

    `;


    output.innerHTML =
        html;

}


/* =========================================================
   19. PHOTO UPLOAD
   ========================================================= */

function admissionPhotoUpload(event) {

    const file =
        event.target.files[0];

    if (!file) return;


    const reader =
        new FileReader();


    reader.onload =
        function(e) {

            let input =
                document.getElementById(
                    "admissionPhotoData"
                );


            if (!input) {

                input =
                    document.createElement(
                        "input"
                    );

                input.type =
                    "hidden";

                input.id =
                    "admissionPhotoData";

                document.getElementById(
                    "admissionForm"
                )?.appendChild(input);

            }


            input.value =
                e.target.result;

        };


    reader.readAsDataURL(file);

}


/* =========================================================
   20. BULK MARK ENTRY
   =========================================================
   
   এখানে আর শিক্ষার্থী নির্বাচন করতে হবে না।

   সন
   পরীক্ষা
   শ্রেণি
   বিষয়

   নির্বাচন করার পর:

   MCQ / CQ / Practical
   /* =========================================================
   যে অংশে ক্লিক করা হবে,
   সেই শ্রেণির সকল শিক্ষার্থীর
   রোল + নাম + নম্বর দেওয়ার ঘর
   একসাথে দেখা যাবে।
   
   ========================================================= */


/* =========================================================
   HIDE OLD STUDENT SELECT
   ========================================================= */

function updateMarksStudentList() {

    const select =
        document.getElementById(
            "marksStudent"
        );


    if (select) {

        select.value =
            "";

        select.style.display =
            "none";


        const parent =
            select.parentElement;


        if (parent) {

            const labels =
                parent.querySelectorAll(
                    "label"
                );


            labels.forEach(
                function(label) {

                    if (
                        (
                            label.textContent ||
                            ""
                        ).includes(
                            "শিক্ষার্থী"
                        )
                    ) {

                        label.style.display =
                            "none";

                    }

                }
            );

        }

    }


    renderBulkMarkButtons();

}


/* =========================================================
   21. SUBJECT LIST
   ========================================================= */

function updateSubjectList() {

    const select =
        document.getElementById(
            "marksSubject"
        );

    if (!select) return;


    const oldValue =
        select.value;


    select.innerHTML = `

        <option value="">
            বিষয় নির্বাচন করুন
        </option>

    `;


    SUBJECTS.forEach(
        function(subject) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                subject.name;


            option.textContent =
                subject.name +
                (
                    subject.optional
                        ? " (ঐচ্ছিক)"
                        : ""
                );


            select.appendChild(
                option
            );

        }
    );


    if (
        SUBJECTS.some(
            function(subject) {

                return (
                    subject.name ===
                    oldValue
                );

            }
        )
    ) {

        select.value =
            oldValue;

    }


    updateMarksInputs();

}


/* =========================================================
   22. OLD MARK INPUTS HIDE
   ========================================================= */

function updateMarksInputs() {

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


    [
        "marksMCQ",
        "marksCQ",
        "marksPractical"
    ].forEach(
        function(id) {

            const element =
                document.getElementById(id);


            if (!element) return;


            element.value =
                "";

            element.disabled =
                true;

        }
    );


    if (subject) {

        const settings = [

            [
                "marksMCQ",
                subject.mcq,
                "MCQ নম্বর"
            ],

            [
                "marksCQ",
                subject.cq,
                "CQ নম্বর"
            ],

            [
                "marksPractical",
                subject.practical,
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


    const subjectName =
        document.getElementById(
            "marksSubject"
        )?.value || "";


    if (
        !year ||
        !exam ||
        !classCode ||
        !subjectName
    ) {

        alert(
            "⚠️ সন, পরীক্ষা, শ্রেণি ও বিষয় নির্বাচন করুন।"
        );

        return;

    }


    const subject =
        SUBJECTS.find(
            function(item) {

                return (
                    item.name ===
                    subjectName
                );

            }
        );


    if (!subject) {

        alert(
            "⚠️ বিষয় পাওয়া যায়নি।"
        );

        return;

    }


    const maxMarks =
        type === "mcq"
            ? subject.mcq
            : type === "cq"
                ? subject.cq
                : subject.practical;


    if (!maxMarks) {

        alert(
            "⚠️ এই বিষয়ের জন্য " +
            type.toUpperCase() +
            " নম্বর নেই।"
        );

        return;

    }


    const students =
        admissionStudents
            .filter(
                function(student) {

                    return (
                        String(student.year) ===
                        String(year) &&
                        student.classCode ===
                        classCode
                    );

                }
            )
            .sort(
                function(a, b) {

                    return (
                        (parseInt(a.roll, 10) || 0) -
                        (parseInt(b.roll, 10) || 0)
                    );

                }
            );


    if (!students.length) {

        alert(
            "⚠️ এই সন ও শ্রেণিতে কোনো শিক্ষার্থী পাওয়া যায়নি।"
        );

        return;

    }


    let oldSheet =
        document.getElementById(
            "bulkMarkSheet"
        );


    if (oldSheet) {

        oldSheet.remove();

    }


    const sheet =
        document.createElement(
            "div"
        );


    sheet.id =
        "bulkMarkSheet";


    sheet.style.marginTop =
        "15px";

    sheet.style.padding =
        "15px";

    sheet.style.border =
        "1px solid #ccc";

    sheet.style.borderRadius =
        "8px";

    sheet.style.background =
        "#fff";


    let html = `

        <div style="
            margin-bottom:12px;
            font-weight:bold;
            font-size:18px;
        ">

            ${escapeHTML(
                CLASS_LIST[classCode] || ""
            )}

            — ${escapeHTML(subjectName)}

            — ${escapeHTML(exam)}

            — ${escapeHTML(year)}

        </div>


        <div style="
            margin-bottom:12px;
            font-weight:bold;
        ">

            ${type === "mcq"
                ? "📝 MCQ"
                : type === "cq"
                    ? "📘 CQ"
                    : "🔬 Practical"
            }

            — পূর্ণমান: ${maxMarks}

        </div>


        <table class="result-table">

            <thead>

                <tr>

                    <th>রোল</th>

                    <th>Student ID</th>

                    <th>শিক্ষার্থীর নাম</th>

                    <th>

                       /* =========================================================
   25. OPEN BULK MARK SHEET
   ========================================================= */

function openBulkMarkSheet(type) {

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


    const output =
        getBulkOutput();


    if (
        !year ||
        !exam ||
        !classCode ||
        !subject
    ) {

        output.innerHTML = `

            <div
                style="
                    color:red;
                    font-weight:bold;
                    padding:10px;
                "
            >

                ⚠️ আগে সন, পরীক্ষা, শ্রেণি ও বিষয় নির্বাচন করুন।

            </div>

        `;

        return;

    }


    const max =
        subject[type];


    if (!max) {

        output.innerHTML = `

            <div
                style="
                    color:red;
                    font-weight:bold;
                    padding:10px;
                "
            >

                ⚠️ এই বিষয়ে এই অংশের নম্বর নেই।

            </div>

        `;

        return;

    }


    let students =
        admissionStudents.filter(
            function(student) {

                return (
                    String(student.year)
                    
