/* ============================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   STUDENT PROFILE MODULE
   ------------------------------------------------------------
   আলাদা ফাইল
   মূল script(3).js পরিবর্তন করবে না
   ============================================================ */

(function () {

    "use strict";

    const STUDENT_STORAGE =
        "madrasah_students";

    const CLASS_STORAGE =
        "madrasah_years";


    /* ========================================================
       STUDENT DATA
       ======================================================== */

    function getStudents() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    STUDENT_STORAGE
                ) || "[]"
            );

        } catch (error) {

            return [];

        }

    }


    /* ========================================================
       CLASS / YEAR
       ======================================================== */

    function getYears() {

        try {

            const years = JSON.parse(
                localStorage.getItem(
                    CLASS_STORAGE
                )
            );

            if (
                Array.isArray(years) &&
                years.length
            ) {
                return years;
            }

        } catch (error) {}

        return [
            "2025",
            "2026",
            "2027",
            "2028"
        ];
    }


    /* ========================================================
       CLASS LIST
       ======================================================== */

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


    /* ========================================================
       ESCAPE
       ======================================================== */

    function escapeHTML(value) {

        return String(
            value ?? ""
        )
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    }


    /* ========================================================
       STYLE
       ======================================================== */

    function addStyle() {

        if (
            document.getElementById(
                "studentProfileStyle"
            )
        ) {
            return;
        }

        const style =
            document.createElement("style");

        style.id =
            "studentProfileStyle";

        style.textContent = `

        .student-profile-wrapper {
            max-width:1100px;
            margin:0 auto;
        }

        .student-profile-box {
            background:#fff;
            border:1px solid #ddd;
            border-radius:12px;
            padding:20px;
            box-shadow:0 3px 12px rgba(0,0,0,.06);
        }

        .student-profile-search {
            display:grid;
            grid-template-columns:
                repeat(4, minmax(0,1fr));
            gap:10px;
            margin-bottom:20px;
        }

        .student-profile-search input,
        .student-profile-search select {
            width:100%;
            box-sizing:border-box;
            padding:11px;
            border:1px solid #ccc;
            border-radius:6px;
            font-family:inherit;
        }

        .student-profile-search button {
            border:0;
            border-radius:6px;
            background:#075e3a;
            color:#fff;
            padding:11px;
            cursor:pointer;
            font-size:15px;
        }

        .student-profile-card {
            display:none;
            border:2px solid #075e3a;
            border-radius:10px;
            padding:20px;
            margin-top:20px;
        }

        .student-profile-header {
            display:flex;
            align-items:center;
            gap:20px;
            border-bottom:1px solid #ddd;
            padding-bottom:15px;
            margin-bottom:15px;
        }

        .student-profile-photo {
            width:100px;
            height:120px;
            object-fit:cover;
            border:1px solid #aaa;
            border-radius:6px;
            background:#f5f5f5;
        }

        .student-profile-name {
            color:#075e3a;
            margin:0 0 5px 0;
        }

        .student-profile-id {
            color:#555;
            font-weight:bold;
        }

        .student-profile-grid {
            display:grid;
            grid-template-columns:
                repeat(2, minmax(0,1fr));
            gap:10px;
        }

        .student-profile-item {
            padding:10px;
            border:1px solid #e2e2e2;
            border-radius:6px;
            background:#fafafa;
        }

        .student-profile-item strong {
            display:block;
            color:#075e3a;
            margin-bottom:4px;
        }

        .student-profile-print {
            margin-top:15px;
            border:0;
            border-radius:6px;
            background:#d4a017;
            color:#fff;
            padding:10px 18px;
            cursor:pointer;
        }

        .student-profile-message {
            padding:12px;
            margin-top:10px;
            border-radius:6px;
            background:#f5f5f5;
        }

        @media(max-width:700px) {

            .student-profile-search {
                grid-template-columns:1fr;
            }

            .student-profile-grid {
                grid-template-columns:1fr;
            }

            .student-profile-header {
                flex-direction:column;
                text-align:center;
            }

        }

        @media print {

            body * {
                visibility:hidden;
            }

            #studentProfileCard,
            #studentProfileCard * {
                visibility:visible;
            }

            #studentProfileCard {
                position:absolute;
                left:0;
                top:0;
                width:100%;
                box-shadow:none;
            }

            .student-profile-print {
                display:none;
            }

        }

        `;

        document.head.appendChild(style);

    }


    /* ========================================================
       BUILD PROFILE SECTION
       ======================================================== */

    function createProfileSection() {

        if (
            document.getElementById(
                "studentProfileSection"
            )
        ) {
            return;
        }

        const dashboard =
            document.getElementById(
                "dashboard"
            );

        if (!dashboard) {
            return;
        }


        const section =
            document.createElement("div");

        section.id =
            "studentProfileSection";

        section.style.display =
            "none";

        section.innerHTML = `

            <div
                class="student-profile-wrapper"
                style="margin-top:25px;"
            >

                <div
                    class="student-profile-box"
                >

                    <h3
                        style="
                            color:#075e3a;
                            margin-top:0;
                        "
                    >
                        👤 Student Profile
                    </h3>


                    <div
                        class="
                            student-profile-search
                        "
                    >

                        <select
                            id="spYear"
                        >
                            <option value="">
                                সন নির্বাচন করুন
                            </option>
                        </select>


                        <select
                            id="spClass"
                        >
                            <option value="">
                                শ্রেণি নির্বাচন করুন
                            </option>
                        </select>


                        <input
                            type="text"
                            id="spRoll"
                            placeholder="রোল লিখুন"
                        >


                        <button
                            type="button"
                            id="spSearchButton"
                        >
                            🔍 শিক্ষার্থী খুঁজুন
                        </button>

                    </div>


                    <div
                        id="spMessage"
                        class="
                            student-profile-message
                        "
                        style="display:none;"
                    ></div>


                    <div
                        id="studentProfileCard"
                        class="
                            student-profile-card
                        "
                    ></div>

                </div>

            </div>

        `;


        dashboard.appendChild(
            section
        );


        fillYearDropdown();

        fillClassDropdown();


        document
            .getElementById(
                "spSearchButton"
            )
            .addEventListener(
                "click",
                findStudent
            );


        document
            .getElementById(
                "spRoll"
            )
            .addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        findStudent();

                    }

                }
            );

    }


    /* ========================================================
       YEAR DROPDOWN
       ======================================================== */

    function fillYearDropdown() {

        const select =
            document.getElementById(
                "spYear"
            );

        if (!select) {
            return;
        }

        const years =
            getYears();

        years.forEach(
            function (year) {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    year;

                option.textContent =
                    year;

                select.appendChild(
                    option
                );

            }
        );

    }


    /* ========================================================
       CLASS DROPDOWN
       ======================================================== */

    function fillClassDropdown() {

        const select =
            document.getElementById(
                "spClass"
            );

        if (!select) {
            return;
        }

        Object.keys(
            CLASS_LIST
        ).forEach(
            function (code) {

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

    }


    /* ========================================================
       FIND STUDENT
       ======================================================== */

    function findStudent() {

        const year =
            document.getElementById(
                "spYear"
            )?.value || "";

        const classCode =
            document.getElementById(
                "spClass"
            )?.value || "";

        const roll =
            document.getElementById(
                "spRoll"
            )?.value.trim() || "";


        const message =
            document.getElementById(
                "spMessage"
            );

        const card =
            document.getElementById(
                "studentProfileCard"
            );


        if (message) {
            message.style.display =
                "none";
        }

        if (card) {
            card.style.display =
                "none";
        }


        if (
            !year ||
            !classCode ||
            !roll
        ) {

            showMessage(
                "⚠️ সন, শ্রেণি ও রোল নির্বাচন করুন।"
            );

            return;

        }


        const students =
            getStudents();


        const student =
            students.find(
                function (item) {

                    const sameYear =
                        String(
                            item.year
                        ) ===
                        String(year);


                    const sameClass =
                        String(
                            item.classCode
                        ) ===
                        String(classCode);


                    const sameRoll =
                        String(
                            item.roll
                        ) ===
                        String(roll);


                    return (
                        sameYear &&
                        sameClass &&
                        sameRoll
                    );

                }
            );


        if (!student) {

            showMessage(
                "❌ এই সন, শ্রেণি ও রোল অনুযায়ী শিক্ষার্থী পাওয়া যায়নি।"
            );

            return;

        }


        renderStudent(
            student
        );

    }


    /* ========================================================
       SHOW MESSAGE
       ======================================================== */

    function showMessage(text) {

        const message =
            document.getElementById(
                "spMessage"
            );

        if (!message) {
            return;
        }

        message.textContent =
            text;

        message.style.display =
            "block";

    }


    /* ========================================================
       RENDER PROFILE
       ======================================================== */

    function renderStudent(student) {

        const card =
            document.getElementById(
                "studentProfileCard"
            );

        if (!card) {
            return;
        }


        const photo =
            student.photo
                ? `
                    <img
                        src="${student.photo}"
                        class="
                            student-profile-photo
                        "
                        alt="শিক্ষার্থীর ছবি"
                    >
                `
                : `
                    <div
                        class="
                            student-profile-photo
                        "
                        style="
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            font-size:45px;
                        "
                    >
                        👨‍🎓
                    </div>
                `;


        const className =
            student.className ||
            CLASS_LIST[
                student.classCode
            ] ||
            "";


        card.innerHTML = `

            <div
                class="
                    student-profile-header
                "
            >

                ${photo}

                <div>

                    <h2
                        class="
                            student-profile-name
                        "
                    >
                        ${escapeHTML(
                            student.name ||
                            "-"
                        )}
                    </h2>

                    <div
                        class="
                            student-profile-id
                        "
                    >
                        Student ID:
                        ${escapeHTML(
                            student.studentId ||
                            "-"
                        )}
                    </div>

                    <div>
                        ${escapeHTML(
                            className
                        )}
                        —
                        রোল:
                        ${escapeHTML(
                            student.roll ||
                            "-"
                        )}
                    </div>

                </div>

            </div>


            <div
                class="
                    student-profile-grid
                "
            >

                ${profileItem(
                    "সন",
                    student.year
                )}

                ${profileItem(
                    "শ্রেণি",
                    className
                )}

                ${profileItem(
                    "রোল",
                    student.roll
                )}

                ${profileItem(
                    "Student ID",
                    student.studentId
                )}

                ${profileItem(
                    "পিতার নাম",
                    student.fatherName
                )}

                ${profileItem(
                    "মাতার নাম",
                    student.motherName
                )}

                ${profileItem(
                    "জন্মতারিখ",
                    student.birthDate
                )}

                ${profileItem(
                    "লিঙ্গ",
                    student.gender
                )}

                ${profileItem(
                    "মোবাইল",
                    student.mobile
                )}

                ${profileItem(
                    "ঠিকানা",
                    student.address
                )}

                ${profileItem(
                    "ভর্তির তারিখ",
                    student.admissionDate
                )}

            </div>


            <button
                type="button"
                class="student-profile-print"
                onclick="
                    window.printStudentProfile()
                "
            >
                🖨️ Profile Print
            </button>

        `;


        card.style.display =
            "block";

    }


    /* ========================================================
       PROFILE ITEM
       ======================================================== */

    function profileItem(
        title,
        value
    ) {

        return `

            <div
                class="
                    student-profile-item
                "
            >

                <strong>
                    ${escapeHTML(
                        title
                    )}
                </strong>

                ${escapeHTML(
                    value || "-"
                )}

            </div>

        `;

    }


    /* ========================================================
       PRINT
       ======================================================== */

    function printStudentProfile() {

        const card =
            document.getElementById(
                "studentProfileCard"
            );

        if (!card) {
            return;
        }

        if (
            card.style.display ===
            "none"
        ) {

            alert(
                "প্রথমে একজন শিক্ষার্থী নির্বাচন করুন।"
            );

            return;

        }

        window.print();

    }


    /* ========================================================
       SHOW / HIDE MODULE
       ======================================================== */

    function openStudentProfile() {

        createProfileSection();

        const section =
            document.getElementById(
                "studentProfileSection"
            );

        if (!section) {
            return;
        }

        section.style.display =
            "block";

        section.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }


    function closeStudentProfile() {

        const section =
            document.getElementById(
                "studentProfileSection"
            );

        if (section) {

            section.style.display =
                "none";

        }

    }


    /* ========================================================
       GLOBAL
       ======================================================== */

    window.openStudentProfile =
        openStudentProfile;

    window.closeStudentProfile =
        closeStudentProfile;

    window.printStudentProfile =
        printStudentProfile;


    /* ========================================================
       INIT
       ======================================================== */

    function init() {

        addStyle();

        createProfileSection();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }

})();
