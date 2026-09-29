/* ============================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   ATTENDANCE MODULE
   ------------------------------------------------------------
   আলাদা ফাইল
   মূল script(3).js পরিবর্তন করবে না
   ============================================================ */

(function () {

    "use strict";


    const STUDENT_STORAGE =
        "madrasah_students";

    const ATTENDANCE_STORAGE =
        "madrasah_attendance";


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
       DATA
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


    function getAttendance() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    ATTENDANCE_STORAGE
                ) || "[]"
            );

        } catch (error) {

            return [];

        }

    }


    function saveAttendance(data) {

        localStorage.setItem(
            ATTENDANCE_STORAGE,
            JSON.stringify(data)
        );

    }


    function getYears() {

        try {

            const years =
                JSON.parse(
                    localStorage.getItem(
                        "madrasah_years"
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
       STYLE
       ======================================================== */

    function addStyle() {

        if (
            document.getElementById(
                "attendanceStyle"
            )
        ) {
            return;
        }


        const style =
            document.createElement(
                "style"
            );

        style.id =
            "attendanceStyle";


        style.textContent = `

        .attendance-wrapper {
            max-width:1100px;
            margin:0 auto;
        }

        .attendance-box {
            background:#fff;
            border:1px solid #ddd;
            border-radius:12px;
            padding:20px;
            box-shadow:0 3px 12px rgba(0,0,0,.06);
        }

        .attendance-controls {
            display:grid;
            grid-template-columns:
                repeat(4, minmax(0,1fr));
            gap:10px;
            margin-bottom:20px;
        }

        .attendance-controls
        select,
        .attendance-controls
        input {
            width:100%;
            box-sizing:border-box;
            padding:10px;
            border:1px solid #ccc;
            border-radius:6px;
            font-family:inherit;
        }

        .attendance-controls
        button {
            border:0;
            border-radius:6px;
            background:#075e3a;
            color:#fff;
            padding:10px;
            cursor:pointer;
            font-size:15px;
        }

        .attendance-table-wrapper {
            overflow-x:auto;
        }

        .attendance-table {
            width:100%;
            border-collapse:collapse;
        }

        .attendance-table th,
        .attendance-table td {
            border:1px solid #ddd;
            padding:9px;
            text-align:center;
        }

        .attendance-table th {
            background:#075e3a;
            color:#fff;
        }

        .attendance-present {
            color:#087f23;
            font-weight:bold;
        }

        .attendance-absent {
            color:#c62828;
            font-weight:bold;
        }

        .attendance-actions {
            display:flex;
            gap:8px;
            flex-wrap:wrap;
            margin-top:15px;
        }

        .attendance-save {
            background:#075e3a;
            color:#fff;
        }

        .attendance-report {
            background:#d4a017;
            color:#fff;
        }

        .attendance-actions button {
            border:0;
            padding:10px 16px;
            border-radius:6px;
            cursor:pointer;
        }

        .attendance-summary {
            display:flex;
            gap:12px;
            flex-wrap:wrap;
            margin:15px 0;
        }

        .attendance-summary div {
            padding:10px 16px;
            border-radius:7px;
            background:#f5f5f5;
            border:1px solid #ddd;
        }

        @media(max-width:700px) {

            .attendance-controls {
                grid-template-columns:1fr;
            }

        }

        `;


        document.head.appendChild(
            style
        );

    }


    /* ========================================================
       CREATE SECTION
       ======================================================== */

    function createSection() {

        if (
            document.getElementById(
                "attendanceSection"
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
            document.createElement(
                "div"
            );

        section.id =
            "attendanceSection";

        section.style.display =
            "none";


        section.innerHTML = `

            <div
                class="attendance-wrapper"
                style="margin-top:25px;"
            >

                <div
                    class="attendance-box"
                >

                    <h3
                        style="
                            color:#075e3a;
                            margin-top:0;
                        "
                    >
                        📋 শিক্ষার্থীর উপস্থিতি
                    </h3>


                    <div
                        class="attendance-controls"
                    >

                        <select
                            id="attYear"
                        >
                            <option value="">
                                সন নির্বাচন করুন
                            </option>
                        </select>


                        <select
                            id="attClass"
                        >
                            <option value="">
                                শ্রেণি নির্বাচন করুন
                            </option>
                        </select>


                        <input
                            type="date"
                            id="attDate"
                        >


                        <button
                            type="button"
                            id="attLoadButton"
                        >
                            📋 তালিকা দেখুন
                        </button>

                    </div>


                    <div
                        id="attendanceSummary"
                        class="
                            attendance-summary
                        "
                        style="display:none;"
                    ></div>


                    <div
                        class="
                            attendance-table-wrapper
                        "
                    >

                        <table
                            class="
                                attendance-table
                            "
                        >

                            <thead>

                                <tr>

                                    <th>
                                        ক্রম
                                    </th>

                                    <th>
                                        Student ID
                                    </th>

                                    <th>
                                        রোল
                                    </th>

                                    <th>
                                        শিক্ষার্থীর নাম
                                    </th>

                                    <th>
                                        উপস্থিতি
                                    </th>

                                </tr>

                            </thead>


                            <tbody
                                id="attendanceTableBody"
                            ></tbody>

                        </table>

                    </div>


                    <div
                        class="attendance-actions"
                    >

                        <button
                            type="button"
                            class="attendance-save"
                            id="attSaveButton"
                        >
                            💾 উপস্থিতি সংরক্ষণ
                        </button>


                        <button
                            type="button"
                            class="attendance-report"
                            id="attReportButton"
                        >
                            📊 উপস্থিতির রিপোর্ট
                        </button>

                    </div>


                    <div
                        id="attendanceReport"
                        style="margin-top:20px;"
                    ></div>

                </div>

            </div>

        `;


        dashboard.appendChild(
            section
        );


        fillYears();
        fillClasses();


        document
            .getElementById(
                "attLoadButton"
            )
            .addEventListener(
                "click",
                loadAttendanceStudents
            );


        document
            .getElementById(
                "attSaveButton"
            )
            .addEventListener(
                "click",
                saveTodayAttendance
            );


        document
            .getElementById(
                "attReportButton"
            )
            .addEventListener(
                "click",
                showAttendanceReport
            );


        const dateInput =
            document.getElementById(
                "attDate"
            );

        if (dateInput) {

            dateInput.value =
                new Date()
                    .toISOString()
                    .split("T")[0];

        }

    }


    /* ========================================================
       YEARS
       ======================================================== */

    function fillYears() {

        const select =
            document.getElementById(
                "attYear"
            );

        if (!select) {
            return;
        }


        getYears().forEach(
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
       CLASSES
       ======================================================== */

    function fillClasses() {

        const select =
            document.getElementById(
                "attClass"
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
       LOAD STUDENTS
       ======================================================== */

    function loadAttendanceStudents() {

        const year =
            document.getElementById(
                "attYear"
            )?.value || "";

        const classCode =
            document.getElementById(
                "attClass"
            )?.value || "";

        const date =
            document.getElementById(
                "attDate"
            )?.value || "";


        if (
            !year ||
            !classCode ||
            !date
        ) {

            alert(
                "সন, শ্রেণি ও তারিখ নির্বাচন করুন।"
            );

            return;

        }


        const students =
            getStudents();


        const classStudents =
            students.filter(
                function (student) {

                    return (
                        String(
                            student.year
                        ) ===
                        String(year) &&

                        String(
                            student.classCode
                        ) ===
                        String(classCode)
                    );

                }
            );


        const tbody =
            document.getElementById(
                "attendanceTableBody"
            );


        if (!tbody) {
            return;
        }


        tbody.innerHTML = "";


        if (
            classStudents.length === 0
        ) {

            tbody.innerHTML = `

                <tr>

                    <td
                        colspan="5"
                    >
                        ❌ এই সন ও শ্রেণিতে
                        কোনো শিক্ষার্থী পাওয়া যায়নি।
                    </td>

                </tr>

            `;

            updateSummary();

            return;

        }


        const attendance =
            getAttendance();


        classStudents.forEach(
            function (
                student,
                index
            ) {

                const saved =
                    attendance.find(
                        function (item) {

                            return (

                                String(
                                    item.year
                                ) ===
                                String(year)

                                &&

                                String(
                                    item.classCode
                                ) ===
                                String(classCode)

                                &&

                                String(
                                    item.date
                                ) ===
                                String(date)

                                &&

                                String(
                                    item.studentId
                                ) ===
                                String(
                                    student.studentId
                                )

                            );

                        }
                    );


                const status =
                    saved
                        ? saved.status
                        : "present";


                const tr =
                    document.createElement(
                        "tr"
                    );


                tr.dataset.studentId =
                    student.studentId ||
                    "";


                tr.innerHTML = `

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        ${escapeHTML(
                            student.studentId ||
                            "-"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            student.roll ||
                            "-"
                        )}
                    </td>

                    <td
                        style="text-align:left;"
                    >
                        ${escapeHTML(
                            student.name ||
                            "-"
                        )}
                    </td>

                    <td>

                        <select
                            class="attendance-status"
                        >

                            <option
                                value="present"
                                ${
                                    status ===
                                    "present"
                                    ? "selected"
                                    : ""
                                }
                            >
                                উপস্থিত
                            </option>

                            <option
                                value="absent"
                                ${
                                    status ===
                                    "absent"
                                    ? "selected"
                                    : ""
                                }
                            >
                                অনুপস্থিত
                            </option>

                        </select>

                    </td>

                `;


                tbody.appendChild(
                    tr
                );

            }
        );


        updateSummary();

    }


    /* ========================================================
       SAVE ATTENDANCE
       ======================================================== */

    function saveTodayAttendance() {

        const year =
            document.getElementById(
                "attYear"
            )?.value || "";

        const classCode =
            document.getElementById(
                "attClass"
            )?.value || "";

        const date =
            document.getElementById(
                "attDate"
            )?.value || "";


        if (
            !year ||
            !classCode ||
            !date
        ) {

            alert(
                "সন, শ্রেণি ও তারিখ নির্বাচন করুন।"
            );

            return;

        }


        const rows =
            document.querySelectorAll(
                "#attendanceTableBody tr"
            );


        if (!rows.length) {

            alert(
                "প্রথমে শিক্ষার্থীর তালিকা দেখুন।"
            );

            return;

        }


        const attendance =
            getAttendance();


        rows.forEach(
            function (row) {

                const studentId =
                    row.dataset.studentId;


                if (!studentId) {
                    return;
                }


                const status =
                    row.querySelector(
                        ".attendance-status"
                    )?.value ||
                    "present";


                const oldIndex =
                    attendance.findIndex(
                        function (item) {

                            return (

                                String(
                                    item.year
                                ) ===
                                String(year)

                                &&

                                String(
                                    item.classCode
                                ) ===
                                String(classCode)

                                &&

                                String(
                                    item.date
                                ) ===
                                String(date)

                                &&

                                String(
                                    item.studentId
                                ) ===
                                String(studentId)

                            );

                        }
                    );


                const record = {

                    id:
                        Date.now()
                        .toString()
                        +
                        Math.random()
                            .toString(36)
                            .slice(2),

                    year:
                        year,

                    classCode:
                        classCode,

                    className:
                        CLASS_LIST[
                            classCode
                        ],

                    date:
                        date,

                    studentId:
                        studentId,

                    status:
                        status

                };


                if (
                    oldIndex !== -1
                ) {

                    attendance[
                        oldIndex
                    ] = record;

                } else {

                    attendance.push(
                        record
                    );

                }

            }
        );


        saveAttendance(
            attendance
        );


        updateSummary();


        alert(
            "✅ উপস্থিতির তথ্য সংরক্ষণ হয়েছে।"
        );

    }


    /* ========================================================
       SUMMARY
       ======================================================== */

    function updateSummary() {

        const selects =
            document.querySelectorAll(
                ".attendance-status"
            );


        const summary =
            document.getElementById(
                "attendanceSummary"
            );


        if (!summary) {
            return;
        }


        if (!selects.length) {

            summary.style.display =
                "none";

            return;

        }


        let present = 0;
        let absent = 0;


        selects.forEach(
            function (select) {

                if (
                    select.value ===
                    "present"
                ) {

                    present++;

                } else {

                    absent++;

                }

            }
        );


        summary.innerHTML = `

            <div>
                👥 মোট:
                <strong>
                    ${selects.length}
                </strong>
            </div>

            <div
                class="attendance-present"
            >
                ✅ উপস্থিত:
                ${present}
            </div>

            <div
                class="attendance-absent"
            >
                ❌ অনুপস্থিত:
                ${absent}
            </div>

        `;


        summary.style.display =
            "flex";

    }


    /* ========================================================
       REPORT
       ======================================================== */

    function showAttendanceReport() {

        const year =
            document.getElementById(
                "attYear"
            )?.value || "";

        const classCode =
            document.getElementById(
                "attClass"
            )?.value || "";


        if (
            !year ||
            !classCode
        ) {

            alert(
                "সন ও শ্রেণি নির্বাচন করুন।"
            );

            return;

        }


        const students =
            getStudents().filter(
                function (student) {

                    return (

                        String(
                            student.year
                        ) ===
                        String(year)

                        &&

                        String(
                            student.classCode
                        ) ===
                        String(classCode)

                    );

                }
            );


        const attendance =
            getAttendance();


        const report =
            document.getElementById(
                "attendanceReport"
            );


        if (!report) {
            return;
        }


        if (!students.length) {

            report.innerHTML =
                "কোনো শিক্ষার্থী পাওয়া যায়নি।";

            return;

        }


        let html = `

            <h4
                style="color:#075e3a;"
            >
                📊 উপস্থিতির রিপোর্ট
            </h4>

            <div
                style="overflow-x:auto;"
            >

                <table
                    class="attendance-table"
                >

                    <thead>

                        <tr>

                            <th>
                                ক্রম
                            </th>

                            <th>
                                Student ID
                            </th>

                            <th>
                                রোল
                            </th>

                            <th>
                                নাম
                            </th>

                            <th>
                                উপস্থিত
                            </th>

                            <th>
                                অনুপস্থিত
                            </th>

                            <th>
                                মোট
                            </th>

                        </tr>

                    </thead>

                    <tbody>
        `;


        students.forEach(
            function (
                student,
                index
            ) {

                const records =
                    attendance.filter(
                        function (item) {

                            return (

                                String(
                                    item.year
                                ) ===
                                String(year)

                                &&

                                String(
                                    item.classCode
                                ) ===
                                String(classCode)

                                &&

                                String(
                                    item.studentId
                                ) ===
                                String(
                                    student.studentId
                                )

                            );

                        }
                    );


                let present = 0;
                let absent = 0;


                records.forEach(
                    function (item) {

                        if (
                            item.status ===
                            "present"
                        ) {

                            present++;

                        } else {

                            absent++;

                        }

                    }
                );


                const total =
                    present +
                    absent;


                html += `

                    <tr>

                        <td>
                            ${index + 1}
                        </td>

                        <td>
                            ${escapeHTML(
                                student.studentId ||
                                "-"
                            )}
                        </td>

                        <td>
                            ${escapeHTML(
                                student.roll ||
                                "-"
                            )}
                        </td>

                        <td
                            style="text-align:left;"
                        >
                            ${escapeHTML(
                                student.name ||
                                "-"
                            )}
                        </td>

                        <td
                            class="
                                attendance-present
                            "
                        >
                            ${present}
                        </td>

                        <td
                            class="
                                attendance-absent
                            "
                        >
                            ${absent}
                        </td>

                        <td>
                            ${total}
                        </td>

                    </tr>

                `;

            }
        );


        html += `

                    </tbody>

                </table>

            </div>

        `;


        report.innerHTML =
            html;

    }


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
       OPEN / CLOSE
       ======================================================== */

    function openAttendance() {

        createSection();

        const section =
            document.getElementById(
                "attendanceSection"
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


    function closeAttendance() {

        const section =
            document.getElementById(
                "attendanceSection"
            );

        if (section) {

            section.style.display =
                "none";

        }

    }


    /* ========================================================
       GLOBAL
       ======================================================== */

    window.openAttendance =
        openAttendance;

    window.closeAttendance =
        closeAttendance;


    /* ========================================================
       INIT
       ======================================================== */

    function init() {

        addStyle();

        createSection();

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
