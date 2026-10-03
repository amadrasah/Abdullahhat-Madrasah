/* ============================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   GUARDIAN WHATSAPP - CLASS WISE BULK MESSAGE
   ------------------------------------------------------------
   এই ফাইল:
   - script(3).js পরিবর্তন করে না
   - attendance.js পরিবর্তন করে না
   - madrasah_students থেকে mobile নেয়
   - attendance থেকে অনুপস্থিত শিক্ষার্থী নেয়
   - due data থেকে বকেয়া শিক্ষার্থী নেয়
   - নির্বাচিত class-এর সবাইকে notice তৈরি করে
   - Meta WhatsApp backend-এর জন্য message queue তৈরি করে
   ============================================================ */

(function () {

    "use strict";


    /* ========================================================
       STORAGE
    ======================================================== */

    const STUDENT_KEY =
        "madrasah_students";

    const ATTENDANCE_KEY =
        "madrasah_attendance";

    const DUE_KEY =
        "madrasah_dues";


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
       STORAGE HELPERS
    ======================================================== */

    function readJSON(key) {

        try {

            const data =
                JSON.parse(
                    localStorage.getItem(key) || "[]"
                );

            return Array.isArray(data)
                ? data
                : [];

        } catch (error) {

            console.error(
                "Storage read error:",
                key,
                error
            );

            return [];

        }

    }


    function getStudents() {

        return readJSON(STUDENT_KEY);

    }


    function getAttendance() {

        return readJSON(ATTENDANCE_KEY);

    }


    function getDues() {

        return readJSON(DUE_KEY);

    }


    /* ========================================================
       HTML ESCAPE
    ======================================================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* ========================================================
       BANGLADESH MOBILE NORMALIZATION
    ======================================================== */

    function normalizeBangladeshMobile(number) {

        let value =
            String(number || "")
                .trim()
                .replace(/[^\d+]/g, "");

        if (!value) {

            return "";

        }


        if (value.startsWith("+880")) {

            value =
                value.substring(1);

        }


        if (value.startsWith("880")) {

            return value;

        }


        if (value.startsWith("01")) {

            return "88" + value;

        }


        if (
            value.startsWith("1") &&
            value.length === 10
        ) {

            return "880" + value;

        }


        return "";

    }


    /* ========================================================
       DATE
    ======================================================== */

    function formatDate(dateValue) {

        if (!dateValue) {

            return "";

        }

        const parts =
            String(dateValue).split("-");

        if (parts.length !== 3) {

            return dateValue;

        }

        return (
            parts[2] +
            "-" +
            parts[1] +
            "-" +
            parts[0]
        );

    }


    /* ========================================================
       STUDENT MATCH
    ======================================================== */

    function sameStudent(student, record) {

        return (

            String(student.studentId || "") ===
            String(record.studentId || "")

            &&

            String(student.year || "") ===
            String(record.year || "")

            &&

            String(student.classCode || "") ===
            String(record.classCode || "")

        );

    }


    /* ========================================================
       CLASS STUDENTS
    ======================================================== */

    function getClassStudents(year, classCode) {

        return getStudents().filter(
            function (student) {

                return (

                    String(student.year || "") ===
                    String(year || "")

                    &&

                    String(student.classCode || "") ===
                    String(classCode || "")

                );

            }
        );

    }


    /* ========================================================
       ABSENT STUDENTS
    ======================================================== */

    function getAbsentStudents(
        year,
        classCode,
        date
    ) {

        const students =
            getClassStudents(
                year,
                classCode
            );

        const attendance =
            getAttendance();

        return students.filter(
            function (student) {

                return attendance.some(
                    function (record) {

                        return (

                            sameStudent(
                                student,
                                record
                            )

                            &&

                            String(record.date || "") ===
                            String(date || "")

                            &&

                            String(record.status || "")
                                .toLowerCase() ===
                            "absent"

                        );

                    }
                );

            }
        );

    }


    /* ========================================================
       DUE AMOUNT
       --------------------------------------------------------
       বিভিন্ন due structure থাকলেও যতটা সম্ভব
       amount/value/dueAmount/totalDue থেকে নেয়।
    ======================================================== */

    function getStudentDue(student) {

        const dues =
            getDues();

        const studentDues =
            dues.filter(
                function (due) {

                    return (

                        String(
                            due.studentId || ""
                        ) ===
                        String(
                            student.studentId || ""
                        )

                        &&

                        (
                            !due.year ||
                            String(due.year) ===
                            String(student.year)
                        )

                    );

                }
            );


        let total = 0;


        studentDues.forEach(
            function (due) {

                const amount =
                    Number(
                        due.amount ??
                        due.dueAmount ??
                        due.totalDue ??
                        due.balance ??
                        0
                    );

                if (
                    Number.isFinite(amount)
                ) {

                    total += amount;

                }

            }
        );


        return total;

    }


    /* ========================================================
       DUE STUDENTS
    ======================================================== */

    function getDueStudents(
        year,
        classCode
    ) {

        const students =
            getClassStudents(
                year,
                classCode
            );

        return students.filter(
            function (student) {

                return (
                    getStudentDue(student) > 0
                );

            }
        );

    }


    /* ========================================================
       MESSAGE
    ======================================================== */

    function buildMessage(
        type,
        student,
        options
    ) {

        const name =
            student.name ||
            student.studentName ||
            "শিক্ষার্থী";

        const roll =
            student.roll ||
            "-";

        const className =
            student.className ||
            CLASS_LIST[
                student.classCode
            ] ||
            "-";

        const date =
            formatDate(
                options.date || ""
            );


        /* -----------------------------------------------
           ABSENT
        ----------------------------------------------- */

        if (type === "absent") {

            return (
                "আসসালামু আলাইকুম।\n\n" +

                "আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল " +
                "(ডিগ্রী) মাদ্রাসা থেকে জানানো যাচ্ছে " +
                "যে, আপনার সন্তান " +

                name +

                " (রোল: " +
                roll +
                ") " +

                className +

                " এর শিক্ষার্থী।\n\n" +

                "আজ " +
                date +
                " তারিখে সে শ্রেণিতে অনুপস্থিত ছিল। " +

                "অনুগ্রহ করে বিষয়টি লক্ষ্য করুন।\n\n" +

                "— মাদ্রাসা কর্তৃপক্ষ"

            );

        }


        /* -----------------------------------------------
           DUE
        ----------------------------------------------- */

        if (type === "due") {

            const due =
                getStudentDue(student);


            return (

                "আসসালামু আলাইকুম।\n\n" +

                "আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল " +
                "(ডিগ্রী) মাদ্রাসা থেকে জানানো যাচ্ছে " +
                "যে, আপনার সন্তান " +

                name +

                " (রোল: " +
                roll +
                ") এর মাদ্রাসার বকেয়া " +

                "৳" +
                due.toLocaleString("bn-BD") +

                "।\n\n" +

                "অনুগ্রহ করে বকেয়া পরিশোধ করার জন্য " +
                "অনুরোধ করা হলো।\n\n" +

                "— মাদ্রাসা কর্তৃপক্ষ"

            );

        }


        /* -----------------------------------------------
           NOTICE
        ----------------------------------------------- */

        if (type === "notice") {

            return (

                "আসসালামু আলাইকুম।\n\n" +

                "আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল " +
                "(ডিগ্রী) মাদ্রাসার " +

                className +

                " এর শিক্ষার্থীদের অভিভাবকদের জন্য " +
                "গুরুত্বপূর্ণ নোটিশ:\n\n" +

                (options.message || "") +

                "\n\n" +

                "— মাদ্রাসা কর্তৃপক্ষ"

            );

        }


        /* -----------------------------------------------
           CUSTOM
        ----------------------------------------------- */

        return (

            "আসসালামু আলাইকুম।\n\n" +

            (options.message || "") +

            "\n\n" +

            "শিক্ষার্থী: " +
            name +

            "\nরোল: " +
            roll +

            "\n\n— মাদ্রাসা কর্তৃপক্ষ"

        );

    }


    /* ========================================================
       CREATE RECIPIENT LIST
    ======================================================== */

    function makeRecipients(
        type,
        year,
        classCode,
        date,
        customMessage
    ) {

        let students = [];


        if (type === "absent") {

            students =
                getAbsentStudents(
                    year,
                    classCode,
                    date
                );

        }

        else if (type === "due") {

            students =
                getDueStudents(
                    year,
                    classCode
                );

        }

        else {

            students =
                getClassStudents(
                    year,
                    classCode
                );

        }


        const recipients = [];


        students.forEach(
            function (student) {

                const mobile =
                    normalizeBangladeshMobile(
                        student.mobile ||
                        student.guardianMobile ||
                        student.phone ||
                        ""
                    );


                const message =
                    buildMessage(
                        type,
                        student,
                        {
                            date:
                                date,

                            message:
                                customMessage
                        }
                    );


                recipients.push({

                    studentId:
                        student.studentId || "",

                    name:
                        student.name ||
                        student.studentName ||
                        "",

                    roll:
                        student.roll || "",

                    mobile:
                        mobile,

                    hasMobile:
                        Boolean(mobile),

                    message:
                        message

                });

            }
        );


        return recipients;

    }


    /* ========================================================
       UI
    ======================================================== */

    function createSection() {

        if (
            document.getElementById(
                "guardianWhatsAppSection"
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
            "guardianWhatsAppSection";


        section.style.cssText = `
            margin-top:25px;
            padding:20px;
            border-radius:15px;
            background:#ffffff;
            box-shadow:0 4px 18px rgba(0,0,0,.10);
            border:1px solid #e5e5e5;
        `;


        section.innerHTML = `

            <h3 style="
                color:#075e3a;
                margin-top:0;
                text-align:center;
            ">
                📱 অভিভাবক WhatsApp যোগাযোগ
            </h3>


            <p style="
                text-align:center;
                color:#555;
            ">
                একই শ্রেণির অনুপস্থিত, বকেয়া
                অথবা নোটিশ একসাথে পাঠানোর ব্যবস্থা
            </p>


            <div style="
                display:grid;
                grid-template-columns:
                    repeat(auto-fit,minmax(180px,1fr));
                gap:10px;
                margin-top:15px;
            ">


                <select id="gwYear">

                    <option value="">
                        সন নির্বাচন করুন
                    </option>

                </select>


                <select id="gwClass">

                    <option value="">
                        শ্রেণি নির্বাচন করুন
                    </option>

                </select>


                <select id="gwType">

                    <option value="">
                        মেসেজের ধরন নির্বাচন করুন
                    </option>

                    <option value="absent">
                        📋 অনুপস্থিতির নোটিশ
                    </option>

                    <option value="due">
                        💰 বকেয়া নোটিশ
                    </option>

                    <option value="notice">
                        📢 শ্রেণির নোটিশ
                    </option>

                    <option value="custom">
                        ✍️ Custom Message
                    </option>

                </select>


                <input
                    type="date"
                    id="gwDate"
                >

            </div>


            <textarea
                id="gwMessage"
                placeholder="নোটিশ / Custom Message লিখুন..."
                style="
                    width:100%;
                    min-height:110px;
                    margin-top:12px;
                    padding:12px;
                    border:1px solid #ccc;
                    border-radius:10px;
                    box-sizing:border-box;
                    display:none;
                "
            ></textarea>


            <div style="
                display:flex;
                gap:10px;
                flex-wrap:wrap;
                margin-top:15px;
            ">

                <button
                    type="button"
                    id="gwPreviewButton"
                    style="
                        background:#075e3a;
                        color:white;
                        border:0;
                        padding:11px 18px;
                        border-radius:8px;
                        cursor:pointer;
                    "
                >
                    👥 প্রাপক দেখুন
                </button>


                <button
                    type="button"
                    id="gwSendButton"
                    style="
                        background:#128c7e;
                        color:white;
                        border:0;
                        padding:11px 18px;
                        border-radius:8px;
                        cursor:pointer;
                    "
                >
                    📲 এক ক্লিকে পাঠান
                </button>

            </div>


            <div
                id="gwSummary"
                style="margin-top:15px;"
            ></div>


            <div
                id="gwPreview"
                style="
                    margin-top:15px;
                    overflow-x:auto;
                "
            ></div>

        `;


        dashboard.appendChild(
            section
        );


        fillYears();
        fillClasses();


        const date =
            document.getElementById(
                "gwDate"
            );

        if (date) {

            date.value =
                new Date()
                    .toISOString()
                    .split("T")[0];

        }


        document
            .getElementById(
                "gwType"
            )
            .addEventListener(
                "change",
                function () {

                    const type =
                        this.value;

                    const message =
                        document.getElementById(
                            "gwMessage"
                        );

                    if (
                        type === "notice" ||
                        type === "custom"
                    ) {

                        message.style.display =
                            "block";

                    } else {

                        message.style.display =
                            "none";

                    }

                }
            );


        document
            .getElementById(
                "gwPreviewButton"
            )
            .addEventListener(
                "click",
                previewRecipients
            );


        document
            .getElementById(
                "gwSendButton"
            )
            .addEventListener(
                "click",
                sendMessages
            );

    }


    /* ========================================================
       YEARS
    ======================================================== */

    function fillYears() {

        const select =
            document.getElementById(
                "gwYear"
            );

        if (!select) {

            return;

        }


        let years = [];


        try {

            years =
                JSON.parse(
                    localStorage.getItem(
                        "madrasah_years"
                    ) || "[]"
                );

        } catch (error) {

            years = [];

        }


        if (!Array.isArray(years) ||
            !years.length) {

            years =
                [2025, 2026, 2027, 2028];

        }


        years.forEach(
            function (year) {

                if (
                    [...select.options]
                        .some(
                            option =>
                                String(option.value) ===
                                String(year)
                        )
                ) {

                    return;

                }


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
                "gwClass"
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
       GET CURRENT RECIPIENTS
    ======================================================== */

    function getCurrentRecipients() {

        const year =
            document.getElementById(
                "gwYear"
            )?.value || "";


        const classCode =
            document.getElementById(
                "gwClass"
            )?.value || "";


        const type =
            document.getElementById(
                "gwType"
            )?.value || "";


        const date =
            document.getElementById(
                "gwDate"
            )?.value || "";


        const message =
            document.getElementById(
                "gwMessage"
            )?.value.trim() || "";


        if (!year) {

            alert(
                "সন নির্বাচন করুন।"
            );

            return null;

        }


        if (!classCode) {

            alert(
                "শ্রেণি নির্বাচন করুন।"
            );

            return null;

        }


        if (!type) {

            alert(
                "মেসেজের ধরন নির্বাচন করুন।"
            );

            return null;

        }


        if (
            type === "absent" &&
            !date
        ) {

            alert(
                "অনুপস্থিতির তারিখ নির্বাচন করুন।"
            );

            return null;

        }


        if (
            (
                type === "notice" ||
                type === "custom"
            )
            &&
            !message
        ) {

            alert(
                "মেসেজ লিখুন।"
            );

            return null;

        }


        return {

            year:
                year,

            classCode:
                classCode,

            type:
                type,

            date:
                date,

            message:
                message,

            recipients:
                makeRecipients(
                    type,
                    year,
                    classCode,
                    date,
                    message
                )

        };

    }


    /* ========================================================
       PREVIEW
    ======================================================== */

    function previewRecipients() {

        const data =
            getCurrentRecipients();

        if (!data) {

            return;

        }


        const total =
            data.recipients.length;


        const withMobile =
            data.recipients.filter(
                item =>
                    item.hasMobile
            ).length;


        const withoutMobile =
            total -
            withMobile;


        const summary =
            document.getElementById(
                "gwSummary"
            );


        summary.innerHTML = `

            <div style="
                padding:12px;
                border-radius:10px;
                background:#f5f8f6;
                line-height:1.8;
            ">

                👥 মোট প্রাপক:
                <strong>${total}</strong>

                <br>

                📱 মোবাইল নম্বর আছে:
                <strong>${withMobile}</strong>

                <br>

                📵 মোবাইল নম্বর নেই:
                <strong>${withoutMobile}</strong>

            </div>

        `;


        let html = `

            <table style="
                width:100%;
                border-collapse:collapse;
                margin-top:10px;
            ">

                <thead>

                    <tr>

                        <th style="
                            border:1px solid #ddd;
                            padding:8px;
                        ">
                            ক্রম
                        </th>

                        <th style="
                            border:1px solid #ddd;
                            padding:8px;
                        ">
                            নাম
                        </th>

                        <th style="
                            border:1px solid #ddd;
                            padding:8px;
                        ">
                            রোল
                        </th>

                        <th style="
                            border:1px solid #ddd;
                            padding:8px;
                        ">
                            মোবাইল
                        </th>

                        <th style="
                            border:1px solid #ddd;
                            padding:8px;
                        ">
                            অবস্থা
                        </th>

                    </tr>

                </thead>

                <tbody>
        `;


        data.recipients.forEach(
            function (item, index) {

                html += `

                    <tr>

                        <td style="
                            border:1px solid #ddd;
                            padding:8px;
                            text-align:center;
                        ">
                            ${index + 1}
                        </td>

                        <td style="
                            border:1px solid #ddd;
                            padding:8px;
                        ">
                            ${escapeHTML(
                                item.name
                            )}
                        </td>

                        <td style="
                            border:1px solid #ddd;
                            padding:8px;
                            text-align:center;
                        ">
                            ${escapeHTML(
                                item.roll
                            )}
                        </td>

                        <td style="
                            border:1px solid #ddd;
                            padding:8px;
                        ">
                            ${
                                item.hasMobile
                                    ? escapeHTML(
                                        item.mobile
                                      )
                                    : "📵 নেই"
                            }
                        </td>

                        <td style="
                            border:1px solid #ddd;
                            padding:8px;
                            text-align:center;
                        ">
                            ${
                                item.hasMobile
                                    ? "✅ প্রস্তুত"
                                    : "❌ নম্বর নেই"
                            }
                        </td>

                    </tr>

                `;

            }
        );


        html += `

                </tbody>

            </table>

        `;


        document.getElementById(
            "gwPreview"
        ).innerHTML = html;

    }


    /* ========================================================
       SEND
       --------------------------------------------------------
       IMPORTANT:
       এখানে এখন backend endpoint ব্যবহার করা হবে।
       endpoint সেট না থাকলে শুধু প্রস্তুত তালিকা দেখাবে।
    ======================================================== */

    async function sendMessages() {

        const data =
            getCurrentRecipients();

        if (!data) {

            return;

        }


        const validRecipients =
            data.recipients.filter(
                item =>
                    item.hasMobile
            );


        if (!validRecipients.length) {

            alert(
                "কোনো বৈধ মোবাইল নম্বর পাওয়া যায়নি।"
            );

            return;

        }


        const confirmed =
            confirm(
                "মোট " +
                validRecipients.length +
                " জন অভিভাবকের কাছে WhatsApp মেসেজ পাঠানোর জন্য প্রস্তুত করা হয়েছে।\n\n" +
                "আপনি কি এগিয়ে যেতে চান?"
            );


        if (!confirmed) {

            return;

        }


        /*
         * -----------------------------------------------------
         * Meta WhatsApp backend endpoint
         *
         * Backend তৈরি হলে এখানে URL বসবে।
         *
         * উদাহরণ:
         *
         * const API_URL =
         *     "https://your-worker.example.workers.dev/send";
         *
         * -----------------------------------------------------
         */

        const API_URL =
            window.GUARDIAN_WHATSAPP_API_URL || "";


        if (!API_URL) {

            alert(

                "WhatsApp Backend এখনো সংযুক্ত হয়নি।\n\n" +

                "প্রাপক তালিকা ঠিকভাবে তৈরি হয়েছে। " +

                "পরবর্তী ধাপে Meta WhatsApp API-এর " +
                "নিরাপদ Backend সংযুক্ত করলে " +

                "এই একই বোতাম থেকেই " +
                "স্বয়ংক্রিয়ভাবে মেসেজ পাঠানো যাবে।"

            );


            console.log(
                "WhatsApp Queue:",
                validRecipients
            );

            return;

        }


        const sendButton =
            document.getElementById(
                "gwSendButton"
            );


        if (sendButton) {

            sendButton.disabled =
                true;

            sendButton.textContent =
                "⏳ মেসেজ পাঠানো হচ্ছে...";

        }


        try {

            const response =
                await fetch(
                    API_URL,
                    {

                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                school:
                                    "Abdullah Hat Islamia Fazil (Degree) Madrasah",

                                year:
                                    data.year,

                                classCode:
                                    data.classCode,

                                type:
                                    data.type,

                                date:
                                    data.date,

                                recipients:
                                    validRecipients

                            })

                    }
                );


            const result =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    result.message ||
                    "WhatsApp API error"
                );

            }


            alert(
                "✅ WhatsApp message sending started.\n\n" +
                "মোট প্রাপক: " +
                validRecipients.length
            );


            console.log(
                "WhatsApp API response:",
                result
            );

        }

        catch (error) {

            console.error(
                "WhatsApp sending error:",
                error
            );


            alert(
                "❌ WhatsApp message পাঠানো যায়নি।\n\n" +
                error.message
            );

        }

        finally {

            if (sendButton) {

                sendButton.disabled =
                    false;

                sendButton.textContent =
                    "📲 এক ক্লিকে পাঠান";

            }

        }

    }


    /* ========================================================
       OPEN FUNCTION
    ======================================================== */

    window.openGuardianWhatsApp =
        function () {

            createSection();

            const section =
                document.getElementById(
                    "guardianWhatsAppSection"
                );

            if (section) {

                section.scrollIntoView({
                    behavior:
                        "smooth",
                    block:
                        "start"
                });

            }

        };


    /* ========================================================
       AUTO INIT
    ======================================================== */

    function init() {

        if (
            document.getElementById(
                "dashboard"
            )
        ) {

            createSection();

            return;

        }


        const observer =
            new MutationObserver(
                function () {

                    if (
                        document.getElementById(
                            "dashboard"
                        )
                    ) {

                        createSection();

                        observer.disconnect();

                    }

                }
            );


        observer.observe(
            document.body,
            {
                childList:
                    true,
                subtree:
                    true
            }
        );

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
