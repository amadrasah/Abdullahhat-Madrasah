/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   COMPLETE ONLINE MANAGEMENT & RESULT SYSTEM
   ========================================================= */


/* =========================================================
   1. MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }

}


/* =========================================================
   2. CLASS CONFIGURATION
   ========================================================= */

const admissionClasses = {

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


/* =========================================================
   3. SUBJECT CONFIGURATION
   ========================================================= */

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


/* =========================================================
   4. LOCAL STORAGE
   ========================================================= */

let admissionStudents =
    JSON.parse(
        localStorage.getItem("admissionStudents") || "[]"
    );


let examMarks =
    JSON.parse(
        localStorage.getItem("examMarks") || "[]"
    );


/* =========================================================
   5. STORAGE SAVE
   ========================================================= */

function saveAdmissionStorage() {

    localStorage.setItem(
        "admissionStudents",
        JSON.stringify(admissionStudents)
    );

}


function saveExamStorage() {

    localStorage.setItem(
        "examMarks",
        JSON.stringify(examMarks)
    );

}


/* =========================================================
   6. CLASS CODE
   ========================================================= */

function getClassCode(className) {

    const map = {

        "নূরানী ১ম জামাত": "nurani1",
        "নূরানী ১ম শ্রেণি": "nurani1",

        "নূরানী ২য় জামাত": "nurani2",
        "নূরানী ২য় শ্রেণি": "nurani2",

        "নূরানী ৩য় জামাত": "nurani3",
        "নূরানী ৩য় শ্রেণি": "nurani3",

        "ইবতেদায়ী ৪র্থ শ্রেণি": "ebtedayi4",
        "ইবতেদায়ী ৫ম শ্রেণি": "ebtedayi5",

        "দাখিল ৬ষ্ঠ শ্রেণি": "dakhil6",
        "দাখিল ৭ম শ্রেণি": "dakhil7",
        "দাখিল ৮ম শ্রেণি": "dakhil8",
        "দাখিল ৯ম শ্রেণি": "dakhil9",
        "দাখিল ১০ম শ্রেণি": "dakhil10",

        "আলিম ১ম বর্ষ": "alim1",
        "আলিম ২য় বর্ষ": "alim2",

        "ফাজিল ১ম বর্ষ": "fazil1",
        "ফাজিল ২য় বর্ষ": "fazil2",
        "ফাজিল ৩য় বর্ষ": "fazil3"

    };

    return map[className] || className;

}


/* =========================================================
   7. GRADE / GPA
   ========================================================= */

function getGrade(mark, fullMarks) {

    if (fullMarks === 0) {

        return {
            grade: "-",
            point: 0
        };

    }

    const percentage =
        (Number(mark) / Number(fullMarks)) * 100;


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
   8. 33% PASS SYSTEM
   ========================================================= */

function partPassed(mark, fullMarks) {

    if (Number(fullMarks) === 0) {

        return true;

    }

    return (
        Number(mark) >=
        Math.ceil(Number(fullMarks) * 0.33)
    );

}


/* =========================================================
   9. ADMISSION - AUTO STUDENT ID
   ========================================================= */

function generateStudentId() {

    const year =
        document.getElementById("admissionYear")?.value || "";

    const classCode =
        document.getElementById("admissionClass")?.value || "";


    if (!year || !classCode) {

        return;

    }


    const students =
        admissionStudents.filter(function(student) {

            return (
                String(student.year) === String(year) &&
                student.classCode === classCode
            );

        });


    let number = students.length + 1;


    let studentId =
        String(year) +
        String(number).padStart(3, "0");


    while (
        admissionStudents.some(function(student) {

            return student.studentId === studentId;

        })
    ) {

        number++;

        studentId =
            String(year) +
            String(number).padStart(3, "0");

    }


    const input =
        document.getElementById(
            "admissionStudentId"
        );


    if (input) {

        input.value = studentId;

    }


    generateAdmissionRoll();

}


/* =========================================================
   10. AUTO ROLL
   ========================================================= */

function generateAdmissionRoll() {

    const year =
        document.getElementById("admissionYear")?.value || "";

    const classCode =
        document.getElementById("admissionClass")?.value || "";


    if (!year || !classCode) {

        return;

    }


    const students =
        admissionStudents.filter(function(student) {

            return (
                String(student.year) === String(year) &&
                student.classCode === classCode
            );

        });


    let maxRoll = 0;


    students.forEach(function(student) {

        const roll =
            Number(student.roll || 0);

        if (roll > maxRoll) {

            maxRoll = roll;

        }

    });


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
   11. SAVE ADMISSION
   ========================================================= */

function saveAdmissionData() {

    const year =
        document.getElementById("admissionYear")?.value || "";

    const classCode =
        document.getElementById("admissionClass")?.value || "";

    const studentId =
        document.getElementById("admissionStudentId")?.value.trim() || "";

    const name =
        document.getElementById("admissionName")?.value.trim() || "";

    const roll =
        document.getElementById("admissionRoll")?.value.trim() || "";

    const fatherName =
        document.getElementById("admissionFather")?.value.trim() || "";

    const motherName =
        document.getElementById("admissionMother")?.value.trim() || "";

    const birthDate =
        document.getElementById("admissionBirthDate")?.value || "";

    const gender =
        document.getElementById("admissionGender")?.value || "";

    const mobile =
        document.getElementById("admissionMobile")?.value.trim() || "";

    const address =
        document.getElementById("admissionAddress")?.value.trim() || "";

    const admissionDate =
        document.getElementById("admissionDate")?.value || "";

    const photo =
        document.getElementById("admissionPhotoData")?.value || "";

    const editId =
        document.getElementById("admissionEditId")?.value || "";


    if (
        !year ||
        !classCode ||
        !name ||
        !fatherName ||
        !motherName ||
        !birthDate ||
        !gender ||
        !mobile ||
        !address ||
        !admissionDate
    ) {

        alert(
            "⚠️ প্রয়োজনীয় সব তথ্য পূরণ করুন।"
        );

        return;

    }


    /* EDIT */

    if (editId) {

        const index =
            admissionStudents.findIndex(
                function(student) {

                    return student.id === editId;

                }
            );


        if (index !== -1) {

            admissionStudents[index] = {

                ...admissionStudents[index],

                year,
                classCode,

                className:
                    admissionClasses[classCode],

                studentId,
                name,
                roll,
                fatherName,
                motherName,
                birthDate,
                gender,
                mobile,
                address,
                admissionDate,
                photo

            };

        }


        saveAdmissionStorage();

        alert(
            "✅ শিক্ষার্থীর তথ্য Update হয়েছে।"
        );

        clearAdmissionForm();

        displayAdmissionStudents();

        return;

    }


    /* DUPLICATE ID */

    if (
        admissionStudents.some(function(student) {

            return (
                String(student.studentId) ===
                String(studentId)
            );

        })
    ) {

        alert(
            "⚠️ এই Student ID ইতোমধ্যে ব্যবহার করা হয়েছে।"
        );

        return;

    }


    /* ADD */

    admissionStudents.push({

        id:
            Date.now().toString(),

        year,

        classCode,

        className:
            admissionClasses[classCode],

        studentId,
        name,
        roll,
        fatherName,
        motherName,
        birthDate,
        gender,
        mobile,
        address,
        admissionDate,
        photo

    });


    saveAdmissionStorage();


    alert(
        "✅ শিক্ষার্থীর তথ্য সফলভাবে Save হয়েছে।"
    );


    clearAdmissionForm();

    displayAdmissionStudents();

}


/* =========================================================
   12. CLEAR ADMISSION FORM
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
        "admissionEditId",
        "admissionPhotoData"
    ].forEach(function(id) {

        const element =
            document.getElementById(id);

        if (element) {

            element.value = "";

        }

    });


    const button =
        document.getElementById(
            "admissionSaveButton"
        );


    if (button) {

        button.textContent =
            "💾 Save";

    }


    const preview =
        document.getElementById(
            "admissionPhotoPreview"
        );


    if (preview) {

        preview.innerHTML = "";

    }

}


/* =========================================================
   13. EDIT ADMISSION
   ========================================================= */

function editAdmissionStudent(id) {

    const student =
        admissionStudents.find(function(item) {

            return item.id === id;

        });


    if (!student) {

        return;

    }


    const fields = {

        admissionYear:
            student.year,

        admissionClass:
            student.classCode,

        admissionStudentId:
            student.studentId,

        admissionName:
            student.name,

        admissionRoll:
            student.roll,

        admissionFather:
            student.fatherName,

        admissionMother:
            student.motherName,

        admissionBirthDate:
            student.birthDate,

        admissionGender:
            student.gender,

        admissionMobile:
            student.mobile,

        admissionAddress:
            student.address,

        admissionDate:
            student.admissionDate,

        admissionPhotoData:
            student.photo || "",

        admissionEditId:
            student.id

    };


    Object.keys(fields).forEach(function(id) {

        const element =
            document.getElementById(id);

        if (element) {

            element.value =
                fields[id];

        }

    });


    const button =
        document.getElementById(
            "admissionSaveButton"
        );


    if (button) {

        button.textContent =
            "✏️ Update করুন";

    }


    const preview =
        document.getElementById(
            "admissionPhotoPreview"
        );


    if (
        preview &&
        student.photo
    ) {

        preview.innerHTML = `

            <img
                src="${student.photo}"
                style="
                    width:100px;
                    height:120px;
                    object-fit:cover;
                    border:1px solid #777;
                    border-radius:5px;
                "
            >

        `;

    }


    window.location.hash =
        "admission";

}


/* =========================================================
   14. DELETE ADMISSION
   ========================================================= */

function deleteAdmissionStudent(id) {

    if (
        !confirm(
            "⚠️ আপনি কি এই শিক্ষার্থীর তথ্য Delete করতে চান?"
        )
    ) {

        return;

    }


    admissionStudents =
        admissionStudents.filter(function(student) {

            return student.id !== id;

        });


    saveAdmissionStorage();

    displayAdmissionStudents();


    alert(
        "✅ শিক্ষার্থীর তথ্য Delete হয়েছে।"
    );

}


/* =========================================================
   15. ADMISSION PHOTO
   ========================================================= */

function admissionPhotoUpload(event) {

    const file =
        event.target.files?.[0];


    if (!file) {

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        function(e) {

            const data =
                e.target.result;


            const hidden =
                document.getElementById(
                    "admissionPhotoData"
                );


            const preview =
                document.getElementById(
                    "admissionPhotoPreview"
                );


            if (hidden) {

                hidden.value = data;

            }


            if (preview) {

                preview.innerHTML = `

                    <img
                        src="${data}"
                        style="
                            width:100px;
                            height:120px;
                            object-fit:cover;
                            border:1px solid #777;
                            border-radius:5px;
                        "
                    >

                `;

            }

        };


    reader.readAsDataURL(file);

}


/* =========================================================
   16. DISPLAY ADMISSION STUDENTS
   ========================================================= */

function displayAdmissionStudents() {

    const body =
        document.getElementById(
            "admissionTableBody"
        );


    if (!body) {

        return;

    }


    const year =
        document.getElementById(
            "admissionListYear"
        )?.value || "";


    const classCode =
        document.getElementById(
            "admissionListClass"
        )?.value || "";


    let list =
        admissionStudents.slice();


    if (year) {

        list =
            list.filter(function(student) {

                return (
                    String(student.year) ===
                    String(year)
                );

            });

    }


    if (classCode) {

        list =
            list.filter(function(student) {

                return (
                    student.classCode ===
                    classCode
                );

            });

    }


    const total =
        document.getElementById(
            "admissionTotalStudents"
        );


    if (total) {

        total.textContent =
            list.length;

    }


    if (!list.length) {

        body.innerHTML = `

            <tr>

                <td colspan="10">

                    কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি।

                </td>

            </tr>

        `;

        return;

    }


    body.innerHTML =
        list.map(function(student, index) {

            return `

                <tr>

                    <td>${index + 1}</td>

                    <td>${student.studentId}</td>

                    <td>${student.roll}</td>

                    <td>${student.name}</td>

                    <td>${student.fatherName}</td>

                    <td>${student.motherName}</td>

                    <td>${student.gender}</td>

                    <td>${student.mobile}</td>

                    <td>${student.className}</td>

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

                </tr>

            `;

        }).join("");

}


/* =========================================================
   17. GET STUDENTS FOR EXAM
   ========================================================= */

function getStudentsForExam(
    year,
    className
) {

    const classCode =
        getClassCode(className);


    return admissionStudents.filter(
        function(student) {

            return (
                String(student.year) ===
                String(year) &&
                student.classCode ===
                classCode
            );

        }
    );

}


/* =========================================================
   18. EXAM MARK KEY
   ========================================================= */

function getExamMarkKey(
    year,
    examName,
    classCode,
    studentId
) {

    return (
        String(year) +
        "|" +
        String(examName) +
        "|" +
        String(classCode) +
        "|" +
        String(studentId)
    );

}


/* =========================================================
   19. GET EXISTING MARK
   ========================================================= */

function getExistingExamMark(
    year,
    examName,
    classCode,
    studentId
) {

    return examMarks.find(function(item) {

        return (
            item.key ===
            getExamMarkKey(
                year,
                examName,
                classCode,
                studentId
            )
        );

    });

}


/* =========================================================
   20. SAVE EXAM MARKS
   ========================================================= */

function saveExamMarks() {

    const year =
        document.getElementById(
            "marksYear"
        )?.value ||
        document.getElementById(
            "examYear"
        )?.value ||
        "";


    const examName =
        document.getElementById(
            "marksExamName"
        )?.value ||
        document.getElementById(
            "examName"
        )?.value ||
        "";


    const classSelect =
        document.getElementById(
            "marksClass"
        ) ||
        document.getElementById(
            "examClass"
        );


    const className =
        classSelect?.value || "";


    const studentId =
        document.getElementById(
            "marksStudentId"
        )?.value || "";


    if (
        !year ||
        !examName ||
        !className ||
        !studentId
    ) {

        alert(
            "⚠️ সন, পরীক্ষা, শ্রেণি ও শিক্ষার্থী নির্বাচন করুন।"
        );

        return;

    }


    const student =
        admissionStudents.find(function(item) {

            return (
                String(item.studentId) ===
                String(studentId)
            );

        });


    if (!student) {

        alert(
            "❌ শিক্ষার্থীর তথ্য পাওয়া যায়নি।"
        );

        return;

    }


    const marks = {};


    let invalid = false;


    subjects.forEach(function(subject) {

        const safe =
            subject.name.replace(
                /[^a-zA-Z0-9]/g,
                ""
            );


        const mcqInput =
            document.querySelector(
                `[data-subject="${subject.name}"][data-part="mcq"]`
            );


        const cqInput =
            document.querySelector(
                `[data-subject="${subject.name}"][data-part="cq"]`
            );


        const practicalInput =
            document.querySelector(
                `[data-subject="${subject.name}"][data-part="practical"]`
            );


        let mcq =
            Number(
                mcqInput?.value || 0
            );


        let cq =
            Number(
                cqInput?.value || 0
            );


        let practical =
            Number(
                practicalInput?.value || 0
            );


        if (
            mcq < 0 ||
            mcq > subject.mcqFull ||
            cq < 0 ||
            cq > subject.cqFull ||
            practical < 0 ||
            practical > subject.practicalFull
        ) {

            invalid = true;

        }


        marks[subject.name] = {

            mcq,
            cq,
            practical

        };

    });


    if (invalid) {

        alert(
            "⚠️ কোনো নম্বর নির্ধারিত পূর্ণমানের বেশি দেওয়া যাবে না।"
        );

        return;

    }


    const key =
        getExamMarkKey(
            year,
            examName,
            getClassCode(className),
            student.studentId
        );


    const record = {

        key,

        year,

        examName,

        classCode:
            getClassCode(className),

        className:
            student.className,

        studentId:
            student.studentId,

        name:
            student.name,

        roll:
            student.roll,

        marks,

        updatedAt:
            new Date().toISOString()

    };


    const index =
        examMarks.findIndex(function(item) {

            return item.key === key;

        });


    if (index === -1) {

        examMarks.push(record);

    }

    else {

        examMarks[index] =
            record;

    }


    saveExamStorage();


    alert(
        "✅ পরীক্ষার নম্বর সফলভাবে Save হয়েছে।"
    );


    calculateExamResult();

}


/* =========================================================
   21. LOAD EXAM STUDENTS
   ========================================================= */

function loadExamStudents() {

    const year =
        document.getElementById(
            "marksYear"
        )?.value ||
        document.getElementById(
            "examYear"
        )?.value ||
        "";


    const classSelect =
        document.getElementById(
            "marksClass"
        ) ||
        document.getElementById(
            "examClass"
        );


    const className =
        classSelect?.value || "";


    const select =
        document.getElementById(
            "marksStudentId"
        );


    if (!select) {

        return;

    }


    select.innerHTML = `

        <option value="">
            শিক্ষার্থী নির্বাচন করুন
        </option>

    `;


    if (
        !year ||
        !className
    ) {

        return;

    }


    const list =
        getStudentsForExam(
            year,
            className
        );


    list.forEach(function(student) {

        const option =
            document.createElement(
                "option"
            );


        option.value =
            student.studentId;


        option.textContent =
            student.roll +
            " - " +
            student.name +
            " (" +
            student.studentId +
            ")";


        select.appendChild(
            option
        );

    });

}


/* =========================================================
   22. LOAD STUDENT MARKS
   ========================================================= */

function loadStudentMarks() {

    const year =
        document.getElementById(
            "marksYear"
        )?.value ||
        document.getElementById(
            "examYear"
        )?.value ||
        "";


    const examName =
        document.getElementById(
            "marksExamName"
        )?.value ||
        document.getElementById(
            "examName"
        )?.value ||
        "";


    const className =
        document.getElementById(
            "marksClass"
        )?.value ||
        document.getElementById(
            "examClass"
        )?.value ||
        "";


    const studentId =
        document.getElementById(
            "marksStudentId"
        )?.value ||
        "";


    if (
        !year ||
        !examName ||
        !className ||
        !studentId
    ) {

        return;

    }


    const existing =
        getExistingExamMark(
            year,
            examName,
            getClassCode(className),
            studentId
        );


    subjects.forEach(function(subject) {

        const mcq =
            document.querySelector(
                `[data-subject="${subject.name}"][data-part="mcq"]`
            );


        const cq =
            document.querySelector(
                `[data-subject="${subject.name}"][data-part="cq"]`
            );


        const practical =
            document.querySelector(
                `[data-subject="${subject.name}"][data-part="practical"]`
            );


        const data =
            existing?.marks?.[subject.name] ||
            {
                mcq: "",
                cq: "",
                practical: ""
            };


        if (mcq) {

            mcq.value =
                subject.mcqFull === 0
                    ? ""
                    : data.mcq ?? "";

        }


        if (cq) {

            cq.value =
                subject.cqFull === 0
                    ? ""
                    : data.cq ?? "";

        }


        if (practical) {

            practical.value =
                subject.practicalFull === 0
                    ? ""
                    : data.practical ?? "";

        }

    });

}


/* =========================================================
   23. CALCULATE EXAM RESULT
   ========================================================= */

function calculateExamResult() {

    const year =
        document.getElementById(
            "marksYear"
        )?.value ||
        document.getElementById(
            "examYear"
        )?.value ||
        "";


    const examName =
        document.getElementById(
            "marksExamName"
        )?.value ||
        document.getElementById(
            "examName"
        )?.value ||
        "";


    const className =
        document.getElementById(
            "marksClass"
        )?.value ||
        document.getElementById(
            "examClass"
        )?.value ||
        "";


    const studentId =
        document.getElementById(
            "marksStudentId"
        )?.value ||
        "";


    if (
        !year ||
        !examName ||
        !className ||
        !studentId
    ) {

        return null;

    }


    const record =
        getExistingExamMark(
            year,
            examName,
            getClassCode(className),
            studentId
        );


    if (!record) {

        return null;

    }


    const student = {

        name:
            record.name,

        roll:
            record.roll,

        studentId:
            record.studentId,

        className:
            record.className,

        year:
            record.year,

        examName:
            record.examName,

        marks:
            record.marks

    };


    return calculateStudentResult(
        student
    );

}


/* =========================================================
   24. CALCULATE STUDENT RESULT
   ========================================================= */

function calculateStudentResult(student) {

    let compulsoryGroups = {};

    let hasFail = false;

    let failSubjectCount = 0;

    let totalMarks = 0;

    let totalFullMarks = 0;

    let agricultureBonus = 0;


    subjects.forEach(function(subject) {

        const data =
            student.marks?.[subject.name] ||
            {
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


        totalMarks += total;

        totalFullMarks +=
            subject.fullMarks;


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


        if (subject.optional) {

            const percentage =
                total /
                subject.fullMarks *
                100;


            if (percentage > 40) {

                agricultureBonus =
                    Math.max(
                        0,
                        gradeInfo.point - 2
                    );

            }

        }


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


    let compulsoryPointTotal = 0;

    let compulsoryGroupCount = 0;


    Object.keys(
        compulsoryGroups
    ).forEach(function(group) {

        const points =
            compulsoryGroups[group];


        const groupGPA =
            points.reduce(
                function(sum, point) {

                    return sum + point;

                },
                0
            ) /
            points.length;


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


    let finalGPA =
        compulsoryGPA +
        agricultureBonus;


    if (finalGPA > 5) {

        finalGPA = 5;

    }


    if (hasFail) {

        finalGPA = 0;

    }


    return {

        compulsoryGPA,

        agricultureBonus,

        finalGPA,

        totalMarks,

        totalFullMarks,

        failSubjectCount,

        hasFail,

        result:
            hasFail
                ? "FAIL"
                : "PASS"

    };

}


/* =========================================================
   25. GET ALL RESULT RECORDS
   ========================================================= */

function getResultStudents(
    year,
    examName,
    className
) {

    const classCode =
        getClassCode(className);


    return examMarks
        .filter(function(record) {

            return (
                String(record.year) ===
                String(year) &&

                record.examName ===
                examName &&

                record.classCode ===
                classCode
            );

        })
        .map(function(record) {

            const student = {

                name:
                    record.name,

                roll:
                    record.roll,

                studentId:
                    record.studentId,

                className:
                    record.className,

                year:
                    record.year,

                examName:
                    record.examName,

                marks:
                    record.marks

            };


            const result =
                calculateStudentResult(
                    student
                );


            return {

                student,

                ...result

            };

        });

}


/* =========================================================
   26. MERIT POSITION
   ========================================================= */

function getStudentMeritPosition(
    student
) {

    const list =
        getResultStudents(
            student.year,
            student.examName,
            student.className
        )
        .filter(function(item) {

            return (
                item.result === "PASS"
            );

        });


    list.sort(function(a, b) {

        if (
            b.finalGPA !==
            a.finalGPA
        ) {

            return (
                b.finalGPA -
                a.finalGPA
            );

        }


        if (
            b.totalMarks !==
            a.totalMarks
        ) {

            return (
                b.totalMarks -
                a.totalMarks
            );

        }


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


    const index =
        list.findIndex(function(item) {

            return (
                String(item.student.studentId) ===
                String(student.studentId)
            );

        });


    return index === -1
        ? "—"
        : index + 1;

}


/* =========================================================
   27. RESULT SEARCH
   ========================================================= */

function searchResult() {

    const year =
        document.getElementById(
            "examYear"
        )?.value || "";


    const examName =
        document.getElementById(
            "examName"
        )?.value || "";


    const className =
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


    if (message) {

        message.innerHTML = "";

    }


    if (output) {

        output.innerHTML = "";

    }


    if (
        !year ||
        !examName ||
        !className ||
        !roll
    ) {

        if (message) {

            message.innerHTML =
                "⚠️ সন, পরীক্ষার নাম, শ্রেণি ও রোল নম্বর পূরণ করুন।";

            message.style.color =
                "red";

        }

        return;

    }


    const classCode =
        getClassCode(className);


    const record =
        examMarks.find(function(item) {

            return (
                String(item.year) ===
                String(year) &&

                item.examName ===
                examName &&

                item.classCode ===
                classCode &&

                String(item.roll) ===
                String(roll)
            );

        });


    if (!record) {

        if (message) {

            message.innerHTML =
                "❌ এই তথ্যের কোনো ফলাফল পাওয়া যায়নি।";

            message.style.color =
                "red";

        }

        return;

    }


    const student = {

        name:
            record.name,

        roll:
            record.roll,

        studentId:
            record.studentId,

        className:
            record.className,

        year:
            record.year,

        examName:
            record.examName,

        marks:
            record.marks

    };


    const calculation =
        calculateStudentResult(
            student
        );


    displayResult(
        student,
        calculation,
        output,
        message
    );

}


/* =========================================================
   28. DISPLAY RESULT
   ========================================================= */

function displayResult(
    student,
    calculation,
    output,
    message
) {

    if (!output) {

        return;

    }


    let rows = "";


    subjects.forEach(function(subject) {

        const data =
            student.marks?.[subject.name] ||
            {
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


    const merit =
        getStudentMeritPosition(
            student
        );


    let remarks = "";


    if (calculation.result === "FAIL") {

        remarks =
            "ফেল — পুনরায় পরীক্ষার প্রয়োজন।";

    }

    else if (calculation.finalGPA >= 5) {

        remarks =
            "অত্যন্ত ভালো ফলাফল।";

    }

    else if (calculation.finalGPA >= 4) {

        remarks =
            "খুব ভালো ফলাফল।";

    }

    else if (calculation.finalGPA >= 3) {

        remarks =
            "ভালো ফলাফল।";

    }

    else {

        remarks =
            "উত্তীর্ণ।";

    }


    if (message) {

        message.innerHTML =
            "✅ ফলাফল পাওয়া গেছে";

        message.style.color =
            "#087f4f";

    }


    output.innerHTML = `

        <div class="result-summary">

            <h3>
                ${student.name}
            </h3>

            <p>

                <strong>Student ID:</strong>
                ${student.studentId}

                &nbsp; | &nbsp;

                <strong>রোল:</strong>
                ${student.roll}

            </p>

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
                            ${calculation.failSubjectCount}
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

                        <th class="${
                            calculation.result === "PASS"
                                ? "result-pass"
                                : "result-fail"
                        }">

                            ${calculation.result}

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


        <div class="marksheet">

            <div style="
                border:2px solid #b8860b;
                padding:20px;
                min-height:1050px;
                position:relative;
                overflow:hidden;
            ">

                <div style="
                    position:absolute;
                    top:42%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    font-size:150px;
                    opacity:0.08;
                    z-index:0;
                ">
                    🕌
                </div>


                <div style="
                    position:relative;
                    z-index:1;
                    text-align:center;
                ">

                    <h1 style="color:#075e3b;">
                        Abdullah Hat Islamia
                    </h1>

                    <h2 style="color:#075e3b;">
                        Fazil (Degree) Madrasah
                    </h2>

                    <p>
                        নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
                    </p>

                    <h2>
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
                        <strong>Student ID:</strong>
                        ${student.studentId}
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
                                ${calculation.totalMarks}
                            </td>

                            <th style="border:1px solid #555;padding:7px;">
                                মোট পূর্ণমান
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${calculation.totalFullMarks}
                            </td>

                        </tr>


                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                আবশ্যিক GPA
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${calculation.compulsoryGPA.toFixed(2)}
                            </td>

                            <th style="border:1px solid #555;padding:7px;">
                                কৃষি Bonus
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${calculation.agricultureBonus.toFixed(2)}
                            </td>

                        </tr>


                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                চূড়ান্ত GPA
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;font-weight:bold;">
                                ${calculation.finalGPA.toFixed(2)}
                            </td>

                            <th style="border:1px solid #555;padding:7px;">
                                ফেল বিষয়
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;">
                                ${calculation.failSubjectCount}
                            </td>

                        </tr>


                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                মেধাক্রম
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;font-weight:bold;">
                                ${merit}
                            </td>

                            <th style="border:1px solid #555;padding:7px;">
                                ফলাফল
                            </th>

                            <td style="border:1px solid #555;padding:7px;text-align:center;font-weight:bold;">
                                ${calculation.result}
                            </td>

                        </tr>


                        <tr>

                            <th style="border:1px solid #555;padding:7px;">
                                Remarks
                            </th>

                            <td colspan="3" style="border:1px solid #555;padding:7px;text-align:center;">
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


/* =========================================================
   29. MERIT LIST
   ========================================================= */

function generateMeritList() {

    const year =
        document.getElementById(
            "examYear"
        )?.value || "";


    const examName =
        document.getElementById(
            "examName"
        )?.value || "";


    const className =
        document.getElementById(
            "examClass"
        )?.value || "";


    const body =
        document.getElementById(
            "meritTableBody"
        );


    if (!body) {

        return;

    }


    if (
        !year ||
        !examName ||
        !className
    ) {

        body.innerHTML = `

            <tr>

                <td colspan="9">
                    ⚠️ সন, পরীক্ষা ও শ্রেণি নির্বাচন করুন।
                </td>

            </tr>

        `;

        return;

    }


    const yearText =
        document.getElementById(
            "meritYear"
        );


    const examText =
        document.getElementById(
            "meritExamName"
        );


    const classText =
        document.getElementById(
            "meritClass"
        );


    if (yearText) {

        yearText.textContent =
            year;

    }


    if (examText) {

        examText.textContent =
            examName;

    }


    if (classText) {

        classText.textContent =
            className;

    }


    const list =
        getResultStudents(
            year,
            examName,
            className
        );


    list.sort(function(a, b) {

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


        if (
            b.finalGPA !==
            a.finalGPA
        ) {

            return (
                b.finalGPA -
                a.finalGPA
            );

        }


        if (
            b.totalMarks !==
            a.totalMarks
        ) {

            return (
                b.totalMarks -
                a.totalMarks
            );

        }


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


    const total =
        list.length;


    const passed =
        list.filter(function(item) {

            return item.result === "PASS";

        }).length;


    const failed =
        list.filter(function(item) {

            return item.result === "FAIL";

        }).length;


    const totalElement =
        document.getElementById(
            "totalStudents"
        );


    const passedElement =
        document.getElementById(
            "totalPassed"
        );


    const failedElement =
        document.getElementById(
            "totalFailed"
        );


    if (totalElement) {

        totalElement.textContent =
            total;

    }


    if (passedElement) {

        passedElement.textContent =
            passed;

    }


    if (failedElement) {

        failedElement.textContent =
            failed;

    }


    let position = 0;

    let previousGPA = null;

    let previousMarks = null;


    body.innerHTML =
        list.map(function(item, index) {

            let merit = "—";


            if (item.result === "PASS") {

                if (
                    item.finalGPA !==
                    previousGPA ||
                    item.totalMarks !==
                    previousMarks
                ) {

                    position =
                        index + 1;

                }


                merit =
                    position;


                previousGPA =
                    item.finalGPA;

                previousMarks =
                    item.totalMarks;

            }


            let remarks = "";


            if (item.result === "FAIL") {

                remarks =
                    "ফেল — " +
                    item.failSubjectCount +
                    "টি বিষয়ে";

            }

            else if (item.finalGPA >= 5) {

                remarks = "Excellent";

            }

            else if (item.finalGPA >= 4) {

                remarks = "Very Good";

            }

            else if (item.finalGPA >= 3) {

                remarks = "Good";

            }

            else {

                remarks = "Passed";

            }


            return `

                <tr>

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        ${item.student.studentId}
                    </td>

                    <td>
                        ${item.student.roll}
                    </td>

                    <td>
                        ${
                            item.result === "FAIL"
                                ? "0.00"
                                : item.finalGPA.toFixed(2)
                        }
                    </td>

                    <td>
                        ${item.totalMarks}
                    </td>

                    <td>
                        ${item.result}
                    </td>

                    <td>
                        ${item.failSubjectCount}
                    </td>

                    <td>
                        ${merit}
                    </td>

                    <td>
                        ${remarks}
                    </td>

                </tr>

            `;

        }).join("");
