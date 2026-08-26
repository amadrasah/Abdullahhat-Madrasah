/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   COMPLETE SCHOOL MANAGEMENT / RESULT SYSTEM
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
   3. SAVE STORAGE
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
   5. CLASS SELECT OPTION
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
   6. YEAR SELECT OPTION
   ========================================================= */

function fillYearSelect(id, firstText) {

    const select =
        document.getElementById(id);

    if (!select) return;


    const oldValue =
        select.value;


    select.innerHTML =
        `<option value="">${firstText}</option>`;


    const currentYear =
        new Date().getFullYear();


    for (
        let year = currentYear - 5;
        year <= currentYear + 2;
        year++
    ) {

        const option =
            document.createElement("option");

        option.value =
            year;

        option.textContent =
            year;

        select.appendChild(option);

    }


    if (oldValue) {

        select.value =
            oldValue;

    }

}


/* =========================================================
   7. INITIALIZE ALL DROPDOWNS
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


    fillYearSelect(
        "examYear",
        "সন নির্বাচন করুন"
    );

    fillClassSelect(
        "examClass",
        "শ্রেণি নির্বাচন করুন"
    );


    fillYearSelect(
        "meritYear",
        "সন নির্বাচন করুন"
    );

    fillClassSelect(
        "meritClass",
        "শ্রেণি নির্বাচন করুন"
    );

}


/* =========================================================
   8. ADMISSION - STUDENT ID
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


    if (
        !year ||
        !classCode
    ) {

        return;

    }


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
                    student.studentId === id
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
   9. ADMISSION - AUTO ROLL
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


    if (
        !year ||
        !classCode
    ) {

        return;

    }


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
   10. ADMISSION FORM SAVE
   ========================================================= */

function saveAdmissionData() {

    const year =
        document.getElementById(
            "admissionYear"
        )?.value || "";


    const classCode =
        document.getElementById(
            "admissionClass"
        )?.value || "";


    const studentId =
        document.getElementById(
            "admissionStudentId"
        )?.value || "";


    const name =
        document.getElementById(
            "admissionName"
        )?.value.trim() || "";


    const roll =
        document.getElementById(
            "admissionRoll"
        )?.value || "";


    const father =
        document.getElementById(
            "admissionFather"
        )?.value.trim() || "";


    const mother =
        document.getElementById(
            "admissionMother"
        )?.value.trim() || "";


    const dob =
        document.getElementById(
            "admissionDob"
        )?.value || "";


    const gender =
        document.getElementById(
            "admissionGender"
        )?.value || "";


    const mobile =
        document.getElementById(
            "admissionMobile"
        )?.value.trim() || "";


    const address =
        document.getElementById(
            "admissionAddress"
        )?.value.trim() || "";


    const admissionDate =
        document.getElementById(
            "admissionDate"
        )?.value || "";


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


    const editId =
        document.getElementById(
            "admissionEditId"
        )?.value || "";


    const photo =
        document.getElementById(
            "admissionPhotoData"
        )?.value || "";


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

                    return item.id === editId;

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
   11. ADMISSION MESSAGE
   ========================================================= */

function showAdmissionMessage(
    text,
    color
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
   12. CLEAR ADMISSION
   ========================================================= */

function clearAdmissionForm() {

    const form =
        document.getElementById(
            "admissionForm"
        );


    if (form) {

        form.reset();

    }


    const id =
        document.getElementById(
            "admissionStudentId"
        );


    const roll =
        document.getElementById(
            "admissionRoll"
        );


    const edit =
        document.getElementById(
            "admissionEditId"
        );


    if (id) id.value = "";

    if (roll) roll.value = "";

    if (edit) edit.value = "";


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
        );


    if (cancel) {

        cancel.style.display =
            "none";

    }

}


/* =========================================================
   13. CANCEL ADMISSION EDIT
   ========================================================= */

function cancelAdmissionEdit() {

    clearAdmissionForm();

    showAdmissionMessage(
        "",
        ""
    );

}


/* =========================================================
   14. EDIT STUDENT
   ========================================================= */

function editAdmissionStudent(id) {

    const student =
        admissionStudents.find(
            function(item) {

                return item.id === id;

            }
        );


    if (!student) return;


    document.getElementById(
        "admissionYear"
    ).value =
        student.year;


    document.getElementById(
        "admissionClass"
    ).value =
        student.classCode;


    document.getElementById(
        "admissionStudentId"
    ).value =
        student.studentId || "";


    document.getElementById(
        "admissionName"
    ).value =
        student.name || "";


    document.getElementById(
        "admissionRoll"
    ).value =
        student.roll || "";


    document.getElementById(
        "admissionFather"
    ).value =
        student.fatherName || "";


    document.getElementById(
        "admissionMother"
    ).value =
        student.motherName || "";


    document.getElementById(
        "admissionDob"
    ).value =
        student.birthDate || "";


    document.getElementById(
        "admissionGender"
    ).value =
        student.gender || "";


    document.getElementById(
        "admissionMobile"
    ).value =
        student.mobile || "";


    document.getElementById(
        "admissionAddress"
    ).value =
        student.address || "";


    document.getElementById(
        "admissionDate"
    ).value =
        student.admissionDate || "";


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
        ).appendChild(edit);

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
   15. DELETE STUDENT
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


    /* Delete student's marks too */

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
   16. ADMISSION LIST
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
                    ${escapeHTML(student.studentId || "—")}
                </td>

                <td>
                    ${escapeHTML(student.roll || "—")}
                </td>

                <td>
                    ${escapeHTML(student.name || "—")}
                </td>

                <td>
                    ${escapeHTML(student.className || "—")}
                </td>

                <td>
                    ${escapeHTML(student.fatherName || "—")}
                </td>

                <td>
                    ${escapeHTML(student.mobile || "—")}
                </td>

                <td>
                    ${escapeHTML(student.admissionDate || "—")}
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
   17. STUDENT SEARCH
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
            "<p>কোনো শিক্ষার্থী পাওয়া যায়নি।</p>";

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
                        ${escapeHTML(student.studentId || "—")}
                    </td>

                    <td>
                        ${escapeHTML(student.roll || "—")}
                    </td>

                    <td>
                        ${escapeHTML(student.name || "—")}
                    </td>

                    <td>
                        ${escapeHTML(student.className || "—")}
                    </td>

                    <td>
                        ${escapeHTML(student.fatherName || "—")}
                    </td>

                    <td>
                        ${escapeHTML(student.mobile || "—")}
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
   18. PHOTO UPLOAD
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
                ).appendChild(input);

            }


            input.value =
                e.target.result;

        };


    reader.readAsDataURL(file);

}


/* =========================================================
   19. MARKS - STUDENT LIST
   ========================================================= */

function updateMarksStudentList() {

    const year =
        document.getElementById(
            "marksYear"
        )?.value || "";


    const classCode =
        document.getElementById(
            "marksClass"
        )?.value || "";


    const select =
        document.getElementById(
            "marksStudent"
        );


    if (!select) return;


    select.innerHTML = `

        <option value="">
            শিক্ষার্থী নির্বাচন করুন
        </option>

    `;


    if (
        !year ||
        !classCode
    ) {

        return;

    }


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
                    Number(a.roll || 0) -
                    Number(b.roll || 0)
                );

            }
        )
        .forEach(
            function(student) {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    student.studentId;

                option.textContent =
                    student.roll +
                    " — " +
                    student.name;

                select.appendChild(
                    option
                );

            }
        );

}


/* =========================================================
   20. MARKS - SUBJECT LIST
   ========================================================= */

function updateSubjectList() {

    const select =
        document.getElementById(
            "marksSubject"
        );


    if (!select) return;


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


    updateMarksInputs();

}


/* =========================================================
   21. MARKS - INPUT SETTINGS
   ========================================================= */

function updateMarksInputs() {

    const subjectName =
        document.getElementById(
            "marksSubject"
        )?.value || "";


    const subject =
        SUBJECTS.find(
            function(item) {

                return item.name ===
                    subjectName;

            }
        );


    const mcq =
        document.getElementById(
            "marksMCQ"
        );


    const cq =
        document.getElementById(
            "marksCQ"
        );


    const practical =
        document.getElementById(
            "marksPractical"
        );


    if (!subject) {

        if (mcq) {

            mcq.value = "";

            mcq.placeholder =
                "MCQ নম্বর";

        }


        if (cq) {

            cq.value = "";

            cq.placeholder =
                "CQ নম্বর";

        }


        if (practical) {

            practical.value = "";

            practical.placeholder =
                "Practical নম্বর";

        }


        return;

    }


    if (mcq) {

        mcq.disabled =
            subject.mcq === 0;

        mcq.max =
            subject.mcq;

        mcq.placeholder =
            subject.mcq === 0
                ? "MCQ নেই"
                : "MCQ: 0-" + subject.mcq;

        if (subject.mcq === 0) {

            mcq.value = "";

        }

    }


    if (cq) {

        cq.disabled =
            subject.cq === 0;

        cq.max =
            subject.cq;

        cq.placeholder =
            subject.cq === 0
                ? "CQ নেই"
                : "CQ: 0-" + subject.cq;

        if (subject.cq === 0) {

            cq.value = "";

        }

    }


    if (practical) {

        practical.disabled =
            subject.practical === 0;

        practical.max =
            subject.practical;

        practical.placeholder =
            subject.practical === 0
                ? "Practical নেই"
                : "Practical: 0-" +
                  subject.practical;

        if (subject.practical === 0) {

            practical.value = "";

        }

    }


    loadExistingMarks();

}


/* =========================================================
   22. LOAD EXISTING MARKS
========================================================= */

function loadExistingMarks() {

    const year =
        document.getElementById(
            "marksYear"
        )?.value || "";


    const exam =
        document.getElementById(
            "marksExam"
        )?.value || "";


    const studentId =
        document.getElementById(
            "marksStudent"
        )?.value || "";


    const subject =
        document.getElementById(
            "marksSubject"
        )?.value || "";


    if (
        !year ||
        !exam ||
        !studentId ||
        !subject
    ) {

        return;

    }


    const item =
        marksData.find(
            function(mark) {

                return (
                    String(mark.year) ===
                    String(year) &&
                    mark.exam === exam &&
                    mark.studentId === studentId &&
                    mark.subject === subject
                );

            }
        );


    const mcq =
        document.getElementById(
            "marksMCQ"
        );


    const cq =
        document.getElementById(
            "marksCQ"
        );


    const practical =
        document.getElementById(
            "marksPractical"
        );


    if (item) {

        if (mcq) {

            mcq.value =
                item.mcq || "";

        }


        if (cq) {

            cq.value =
                item.cq || "";

        }


        if (practical) {

            practical.value =
                item.practical || "";

        }

    }

    else {

        if (mcq) mcq.value = "";

        if (cq) cq.value = "";

        if (practical) practical.value = "";

    }

}


/* =========================================================
   23. SAVE MARKS
   ========================================================= */

function saveMarks() {

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


    const studentId =
        document.getElementById(
            "marksStudent"
        )?.value || "";


    const subjectName =
        document.getElementById(
            "marksSubject"
        )?.value || "";


    if (
        !year ||
        !exam ||
        !classCode ||
        !studentId ||
        !subjectName
    ) {

        showMarksMessage(
            "⚠️ সন, পরীক্ষা, শ্রেণি, শিক্ষার্থী ও বিষয় নির্বাচন করুন।",
            "red"
        );

        return;

    }


    const subject =
        SUBJECTS.find(
            function(item) {

                return item.name ===
                    subjectName;

            }
        );


    if (!subject) return;


    const mcq =
        Number(
            document.getElementById(
                "marksMCQ"
            )?.value || 0
        );


    const cq =
        Number(
            document.getElementById(
                "marksCQ"
            )?.value || 0
        );


    const practical =
        Number(
            document.getElementById(
                "marksPractical"
            )?.value || 0
        );


    if (
        mcq < 0 ||
        mcq > subject.mcq
    ) {

        showMarksMessage(
            "⚠️ MCQ নম্বর সঠিক নয়।",
            "red"
        );

        return;

    }


    if (
        cq < 0 ||
        cq > subject.cq
    ) {

        showMarksMessage(
            "⚠️ CQ নম্বর সঠিক নয়।",
            "red"
        );

        return;

    }


    if (
        practical < 0 ||
        practical > subject.practical
    ) {

        showMarksMessage(
            "⚠️ Practical নম্বর সঠিক নয়।",
            "red"
        );

        return;

    }


    const student =
        admissionStudents.find(
            function(item) {

                return (
                    item.studentId ===
                    studentId
                );

            }
        );


    if (!student) {

        showMarksMessage(
            "❌ শিক্ষার্থী পাওয়া যায়নি।",
            "red"
        );

        return;

    }


    const existingIndex =
        marksData.findIndex(
            function(mark) {

                return (
                    String(mark.year) ===
                    String(year) &&
                    mark.exam === exam &&
                    mark.studentId === studentId &&
                    mark.subject === subjectName
                );

            }
        );


    const data = {

        id:
            existingIndex >= 0
                ? marksData[existingIndex].id
                : Date.now().toString(),

        year:
            year,

        exam:
            exam,

        classCode:
            classCode,

        className:
            CLASS_LIST[classCode],

        studentId:
            studentId,

        studentName:
            student.name,

        roll:
            student.roll,

        subject:
            subjectName,

        mcq:
            mcq,

        cq:
            cq,

        practical:
            practical

    };


    if (existingIndex >= 0) {

        marksData[existingIndex] =
            data;

    }

    else {

        marksData.push(
            data
        );

    }


    saveMarksData();

    renderMarksTable();

    updateDashboard();


    showMarksMessage(
        "✅ নম্বর সফলভাবে সংরক্ষণ হয়েছে।",
        "green"
    );

}


/* =========================================================
   24. MARKS MESSAGE
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
   25. MARKS TABLE
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
                    ${escapeHTML(item.studentName)}
                </td>

                <td>
                    ${escapeHTML(item.roll)}
                </td>

                <td>
                    ${escapeHTML(item.subject)}
                </td>

                <td>
                    ${item.mcq}
                </td>

                <td>
                    ${item.cq}
                </td>

                <td>
                    ${item.practical}
                </td>

                <td>
                    ${total}
                </td>

                <td>

                    <button
                        type="button"
                        onclick="deleteMarks('${item.id}')">

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
                    কোনো সংরক্ষিত নম্বর নেই।
                </td>

            </tr>

        `;

    }

}


/* =========================================================
   26. DELETE MARKS
   ========================================================= */

function deleteMarks(id) {

    if (
        !confirm(
            "এই নম্বরটি Delete করবেন?"
        )
    ) {

        return;

    }


    marksData =
        marksData.filter(
            function(item) {

                return item.id !== id;

            }
        );


    saveMarksData();

    renderMarksTable();

    updateDashboard();

}


/* =========================================================
   27. GRADE
   ========================================================= */

function getGrade(mark, full) {

    if (!full) {

        return {
            grade: "-",
            point: 0
        };

    }


    const percentage =
        (mark / full) * 100;


    if (percentage >= 80) {

        return {
            grade: "A+",
            point: 5
        };

    }


    if (percentage >= 70) {

        return {
            grade: "A",
            point: 4
        };

    }


    if (percentage >= 60) {

        return {
            grade: "A-",
            point: 3.5
        };

    }


    if (percentage >= 50) {

        return {
            grade: "B",
            point: 3
        };

    }


    if (percentage >= 40) {

        return {
            grade: "C",
            point: 2
        };

    }


    if (percentage >= 33) {

        return {
            grade: "D",
            point: 1
        };

    }


    return {
        grade: "F",
        point: 0
    };

}


/* =========================================================
   28. PASS CHECK
   ========================================================= */

function passedPart(mark, full) {

    if (full === 0) {

        return true;

    }


    return (
        mark >=
        Math.ceil(full * 0.33)
    );

}


/* =========================================================
   29. CALCULATE RESULT
   ========================================================= */

function calculateResult(
    student,
    year,
    exam
) {

    const groups = {};

    let totalMarks = 0;

    let totalFull = 0;

    let failedSubjects = 0;

    let agricultureBonus = 0;


    SUBJECTS.forEach(
        function(subject) {

            const item =
                marksData.find(
                    function(mark) {

                        return (
                            String(mark.year) ===
                            String(year) &&
                            mark.exam === exam &&
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
                    ? Number(item.practical || 0)
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

                if (!groups[subject.group]) {

                    groups[subject.group] =
                        [];

                }


                groups[subject.group].push(
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

                if (!points.length)
                    return;


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


    let finalGPA =
        compulsoryGPA +
        agricultureBonus;


    if (finalGPA > 5) {

        finalGPA = 5;

    }


    const result =
        failedSubjects > 0
            ? "FAIL"
            : "PASS";


    if (result === "FAIL") {

        finalGPA = 0;

    }


    return {

        totalMarks:
            totalMarks,

        totalFull:
            totalFull,

        compulsoryGPA:
            compulsoryGPA,

        agricultureBonus:
            agricultureBonus,

        finalGPA:
            finalGPA,

        failedSubjects:
            failedSubjects,

        result:
            result

    };

}


/* =========================================================
   30. RESULT SEARCH
   ========================================================= */

function searchResult() {

    const year =
        document.getElementById(
            "examYear"
        )?.value || "";


    const exam =
        document.getElementById(
            "examName"
        )?.value || "";


    const classCode =
        document.getElementById(
            "examClass"
        )?.value || "";


    const roll =
        document.getElementById(
            "rollNumber"
        )?.value.trim() || "";


    const message =
        document.getElementById(
            "resultMessage"
        );


    const output =
        document.getElementById(
            "resultOutput"
        );


    if (message)
        message.innerHTML = "";


    if (output)
        output.innerHTML = "";


    if (
        !year ||
        !exam ||
        !classCode ||
        !roll
    ) {

        if (message) {

            message.innerHTML =
                "⚠️ সন, পরীক্ষা, শ্রেণি ও রোল পূরণ করুন।";

            message.style.color =
                "red";

        }

        return;

    }


    const student =
        admissionStudents.find(
            function(item) {

                return (
                    String(item.year) ===
                    String(year) &&
                    item.classCode ===
                    classCode &&
                    String(item.roll) ===
                    String(roll)
                );

            }
        );


    if (!student) {

        if (message) {

            message.innerHTML =
                "❌ এই রোলের শিক্ষার্থী পাওয়া যায়নি।";

            message.style.color =
                "red";

        }

        return;

    }


    const calculation =
        calculateResult(
            student,
            year,
            exam
        );


    const rows =
        buildResultRows(
            student,
            year,
            exam
        );


    const merit =
        getMeritPosition(
            student,
            year,
            exam
        );


    const remarks =
        calculation.result === "FAIL"
            ? "ফেল — পুনরায় পরীক্ষার প্রয়োজন।"
            : calculation.finalGPA >= 5
                ? "অত্যন্ত ভালো ফলাফল।"
                : calculation.finalGPA >= 4
                    ? "খুব ভালো ফলাফল।"
                    : calculation.finalGPA >= 3
                        ? "ভালো ফলাফল।"
                        : "উত্তীর্ণ।";


    if (message) {

        message.innerHTML =
            "✅ ফলাফল পাওয়া গেছে।";

        message.style.color =
            "green";

    }


    if (!output) return;


    output.innerHTML = `

        <div class="result-summary">

            <h3>
                ${escapeHTML(student.name)}
            </h3>

            <p>
                সন: ${year}
                &nbsp; | &nbsp;
                পরীক্ষা: ${escapeHTML(exam)}
            </p>

            <p>
                শ্রেণি:
                ${escapeHTML(student.className)}
                &nbsp; | &nbsp;
                রোল: ${escapeHTML(student.roll)}
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
                            ${calculation.totalMarks}
                        </th>
                        <th colspan="2">
                            ${calculation.totalFull}
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
                            চূড়ান্ত GPA
                        </th>
                        <th>
                            ${calculation.finalGPA.toFixed(2)}
                        </th>
                    </tr>

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
            onclick="printResult()">

            🖨️ মার্কশিট প্রিন্ট করুন

        </button>

    `;

}


/* =========================================================
   31. BUILD RESULT ROWS
   ========================================================= */

function buildResultRows(
    student,
    year,
    exam
) {

    let html = "";


    SUBJECTS.forEach(
        function(subject) {

            const item =
                marksData.find(
                    function(mark) {

                        return (
                            String(mark.year) ===
                            String(year) &&
                            mark.exam === exam &&
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
                    ? Number(item.practical || 0)
                    : 0;


            const total =
                mcq +
                cq +
                practical;


            const grade =
                getGrade(
                    total,
                    subject.full
                );


            html += `

                <tr>

                    <td>
                        ${escapeHTML(subject.name)}
                    </td>

                    <td>
                        ${subject.full}
                    </td>

                    <td>
                        ${
                            subject.mcq
                                ? mcq
                                : "-"
                        }
                    </td>

                    <td>
                        ${
                            subject.cq
                                ? cq
                                : "-"
                        }
                    </td>

                    <td>
                        ${
                            subject.practical
                                ? practical
                                : "-"
                        }
                    </td>

                    <td>
                        ${total}
                    </td>

                    <td>
                        ${grade.grade}
                    </td>

                    <td>
                        ${grade.point.toFixed(2)}
                    </td>

                </tr>

            `;

        }
    );


    return html;

}


/* =========================================================
   32. MERIT POSITION
   ========================================================= */

function getMeritPosition(
    student,
    year,
    exam
) {

    const list = [];


    admissionStudents
        .filter(
            function(item) {

                return (
                    String(item.year) ===
                    String(year) &&
                    item.classCode ===
                    student.classCode
                );

            }
        )
        .forEach(
            function(item) {

                const result =
                    calculateResult(
                        item,
                        year,
                        exam
                    );


                if (
                    result.result ===
                    "PASS"
                ) {

                    list.push({

                        student:
                            item,

                        gpa:
                            result.finalGPA,

                        marks:
                            result.totalMarks

                    });

                }

            }
        );


    list.sort(
        function(a, b) {

            if (
                b.gpa !== a.gpa
            ) {

                return b.gpa -
                    a.gpa;

            }


            if (
                b.marks !== a.marks
            ) {

                return b.marks -
                    a.marks;

            }


            return (
                Number(a.student.roll) -
                Number(b.student.roll)
            );

        }
    );


    const index =
        list.findIndex(
            function(item) {

                return (
                    item.student.studentId ===
                    student.studentId
                );

            }
        );


    return index === -1
        ? "—"
        : index + 1;

}


/* =========================================================
   33. MERIT LIST
   ========================================================= */

function showMeritList() {

    const year =
        document.getElementById(
            "meritYear"
        )?.value || "";


    const exam =
        document.getElementById(
            "meritExam"
        )?.value || "";


    const classCode =
        document.getElementById(
            "meritClass"
        )?.value || "";


    const message =
        document.getElementById(
            "meritMessage"
        );


    const output =
        document.getElementById(
            "meritOutput"
        );


    if (!output) return;


    if (
        !year ||
        !exam ||
        !classCode
    ) {

        if (message) {

            message.innerHTML =
                "⚠️ সন, পরীক্ষা ও শ্রেণি নির্বাচন করুন।";

            message.style.color =
                "red";

        }

        return;

    }


    const list = [];


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
        .forEach(
            function(student) {

                const result =
                    calculateResult(
                        student,
                        year,
                        exam
                    );


                list.push({

                    student:
                        student,

                    result:
                        result

                });

            }
        );


    list.sort(
        function(a, b) {

            if (
                a.result.result ===
                "PASS" &&
                b.result.result !==
                "PASS"
            ) {

                return -1;

            }


            if (
                a.result.result !==
                "PASS" &&
                b.result.result ===
                "PASS"
            ) {

                return 1;

            }


            if (
                b.result.finalGPA !==
                a.result.finalGPA
            ) {

                return (
                    b.result.finalGPA -
                    a.result.finalGPA
                );

            }


            if (
                b.result.totalMarks !==
                a.result.totalMarks
            ) {

                return (
                    b.result.totalMarks -
                    a.result.totalMarks
                );

            }


            return (
                Number(a.student.roll) -
                Number(b.student.roll)
            );

        }
    );


    let merit = 0;

    let previousGPA = null;

    let previousMarks = null;


    let html = `

        <h3 style="text-align:center;">
            ${escapeHTML(CLASS_LIST[classCode])}
        </h3>

        <p style="text-align:center;">
            ${year} — ${escapeHTML(exam)}
        </p>

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
                        ${escapeHTML(item.student.studentId || "—")}
                    </td>

                    <td>
                        ${escapeHTML(item.student.roll || "—")}
                    </td>

                    <td>
                        ${escapeHTML(item.student.name || "—")}
                    </td>

                    <td>
                        ${
                            item.result.result === "PASS"
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

        <br>

        <button
            type="button"
            onclick="printMeritList()">

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
   34. PRINT MERIT LIST
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
   35. PRINT RESULT
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
   36. PRINT FUNCTION
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

                    margin:20px;

                }

                table {

                    width:100%;

                    border-collapse:
                        collapse;

                }

                th,
                td {

                    border:
                        1px solid #000;

                    padding:7px;

                    text-align:center;

                }

                h1,
                h2,
                h3,
                p {

                    text-align:center;

                }

                button {

                    display:none;

                }

                @media print {

                    body {

                        margin:10mm;

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
   37. DASHBOARD
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
            function(s) {

                return s.gender ===
                    "পুরুষ";

            }
        ).length;


    const female =
        students.filter(
            function(s) {

                return s.gender ===
                    "নারী";

            }
        ).length;


    const classCards =
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


    let totalMarksRecords = 0;


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
   38. UPDATE DASHBOARD
   ========================================================= */

function updateDashboard() {

    const year =
        document.getElementById(
            "dashboardYear"
        )?.value;


    const classCode =
        document.getElementById(
            "dashboardClass"
        )?.value;


    if (year) {

        showDashboard();

    }

}


/* =========================================================
   39. ESCAPE HTML
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
   40. DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* =====================================
           DROPDOWNS
        ===================================== */

        initializeDropdowns();


        /* =====================================
           ADMISSION YEAR / CLASS
        ===================================== */

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


        /* =====================================
           ADMISSION FORM
        ===================================== */

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


        /* =====================================
           PHOTO
        ===================================== */

        const photo =
            document.getElementById(
                "admissionPhoto"
            );


        if (photo) {

            photo.addEventListener(
                "change",
                admissionPhotoUpload
            );

        }


        /* =====================================
           ADMISSION LIST
        ===================================== */

        const listYear =
            document.getElementById(
                "studentListYear"
            );


        const listClass =
            document.getElementById(
                "studentListClass"
            );


        if (listYear) {

            listYear.addEventListener(
                "change",
                displayAdmissionStudents
            );

        }


        if (listClass) {

            listClass.addEventListener(
                "change",
                displayAdmissionStudents
            );

        }


        /* =====================================
           STUDENT SEARCH
        ===================================== */

        const searchYear =
            document.getElementById(
                "studentSearchYear"
            );


        const searchClass =
            document.getElementById(
                "studentSearchClass"
            );


        if (searchYear) {

            searchYear.addEventListener(
                "change",
                showAdmissionStudents
            );

        }


        if (searchClass) {

            searchClass.addEventListener(
                "change",
                showAdmissionStudents
            );

        }


        /* =====================================
           MARKS
        ===================================== */

        const marksYear =
            document.getElementById(
                "marksYear"
            );


        const marksClass =
            document.getElementById(
                "marksClass"
            );


        const marksExam =
            document.getElementById(
                "marksExam"
            );


        const marksStudent =
            document.getElementById(
                "marksStudent"
            );


        const marksSubject =
            document.getElementById(
                "marksSubject"
            );


        if (marksYear) {

            marksYear.addEventListener(
                "change",
                function() {

                    updateMarksStudentList();

                    renderMarksTable();

                }
            );

        }


        if (marksClass) {

            marksClass.addEventListener(
                "change",
                function() {

                    updateMarksStudentList();

                    renderMarksTable();

                }
            );

        }


        if (marksExam) {

            marksExam.addEventListener(
                "change",
                renderMarksTable
            );

        }


        if (marksStudent) {

            marksStudent.addEventListener(
                "change",
                loadExistingMarks
            );

        }


        if (marksSubject) {

            marksSubject.addEventListener(
                "change",
                updateMarksInputs
            );

        }


        updateSubjectList();

        renderMarksTable();


        /* =====================================
           RESULT CLASS
        ===================================== */

        const examClass =
            document.getElementById(
                "examClass"
            );


        if (examClass) {

            examClass.addEventListener(
                "change",
                function() {

                    /* nothing */

                }
            );

        }


        /* =====================================
           DASHBOARD
        ===================================== */

        const dashboardYear =
            document.getElementById(
                "dashboardYear"
            );


        const dashboardClass =
            document.getElementById(
                "dashboardClass"
            );


        if (dashboardYear) {

            dashboardYear.addEventListener(
                "change",
                showDashboard
            );

        }


        if (dashboardClass) {

            dashboardClass.addEventListener(
                "change",
                showDashboard
            );

        }


        /* =====================================
           MERIT
        ===================================== */

        const meritYear =
            document.getElementById(
                "meritYear"
            );


        const meritExam =
            document.getElementById(
                "meritExam"
            );


        const meritClass =
            document.getElementById(
                "meritClass"
            );


        if (meritYear) {

            meritYear.addEventListener(
                "change",
                function() {

                    /* wait for button */

                }
            );

        }


        if (meritExam) {

            meritExam.addEventListener(
                "change",
                function() {

                    /* wait for button */

                }
            );

        }


        if (meritClass) {

            meritClass.addEventListener(
                "change",
                function() {

                    /* wait for button */

                }
            );

        }


        /* =====================================
           DISPLAY
        ===================================== */

        displayAdmissionStudents();

        showAdmissionStudents();

        updateMarksStudentList();

        updateSubjectList();


    }
);
