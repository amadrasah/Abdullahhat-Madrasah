/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   STUDENT SERVICES
   ========================================================= */

(function () {

    "use strict";

    const STUDENT_KEY = "madrasah_students";
    const DUE_KEY = "madrasah_dues";
    const NOTICE_KEY = "madrasah_notifications";

    const CLASS_LIST_FALLBACK = {

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


    let currentStudent = null;
    let currentService = "";


    /* =====================================================
       STORAGE
    ===================================================== */

    function getStudents() {

        try {

            if (
                Array.isArray(window.admissionStudents)
            ) {

                return window.admissionStudents;

            }

        } catch (e) {}

        try {

            const data =
                localStorage.getItem(STUDENT_KEY);

            if (!data) return [];

            const parsed =
                JSON.parse(data);

            return Array.isArray(parsed)
                ? parsed
                : [];

        } catch (error) {

            return [];

        }

    }


    function getDues() {

        try {

            const data =
                localStorage.getItem(DUE_KEY);

            if (!data) return [];

            const parsed =
                JSON.parse(data);

            return Array.isArray(parsed)
                ? parsed
                : [];

        } catch (error) {

            return [];

        }

    }


    function saveDues(data) {

        localStorage.setItem(
            DUE_KEY,
            JSON.stringify(data)
        );

    }


    function getNotifications() {

        try {

            const data =
                localStorage.getItem(NOTICE_KEY);

            if (!data) return [];

            const parsed =
                JSON.parse(data);

            return Array.isArray(parsed)
                ? parsed
                : [];

        } catch (error) {

            return [];

        }

    }


    function saveNotifications(data) {

        localStorage.setItem(
            NOTICE_KEY,
            JSON.stringify(data)
        );

    }


    /* =====================================================
       HELPERS
    ===================================================== */

    function esc(value) {

        return String(
            value == null ? "" : value
        )
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    }


    function className(student) {

        if (!student) return "";

        if (student.className) {

            return student.className;

        }

        const list =
            window.CLASS_LIST ||
            CLASS_LIST_FALLBACK;

        return (
            list[student.classCode] ||
            student.classCode ||
            ""
        );

    }


    function today() {

        const d = new Date();

        return d.toLocaleDateString(
            "bn-BD"
        );

    }


    function getYearOptions() {

        let years = [];

        try {

            const data =
                localStorage.getItem(
                    "madrasah_years"
                );

            if (data) {

                const parsed =
                    JSON.parse(data);

                if (Array.isArray(parsed)) {

                    years = parsed.map(
                        function (item) {

                            if (
                                typeof item ===
                                "object"
                            ) {

                                return (
                                    item.year ||
                                    item.value ||
                                    ""
                                );

                            }

                            return item;

                        }
                    );

                }

            }

        } catch (error) {}


        if (!years.length) {

            years = [
                "2025",
                "2026",
                "2027",
                "2028"
            ];

        }

        return years;

    }


    /* =====================================================
       OVERLAY
    ===================================================== */

    function createOverlay() {

        closeService();

        const div =
            document.createElement("div");

        div.id =
            "studentServicesOverlay";

        div.innerHTML = `

            <div class="student-services-box">

                <button
                    type="button"
                    class="service-close"
                    onclick="closeStudentServices()"
                >
                    ✖
                </button>

                <div id="studentServicesContent"></div>

            </div>

        `;

        document.body.appendChild(div);

        injectStyle();

        return document.getElementById(
            "studentServicesContent"
        );

    }


    function closeService() {

        const old =
            document.getElementById(
                "studentServicesOverlay"
            );

        if (old) {

            old.remove();

        }

    }


    window.closeStudentServices =
        closeService;


    /* =====================================================
       STYLE
    ===================================================== */

    function injectStyle() {

        if (
            document.getElementById(
                "studentServicesStyle"
            )
        ) return;


        const style =
            document.createElement("style");

        style.id =
            "studentServicesStyle";


        style.textContent = `

            #studentServicesOverlay {

                position:fixed;
                inset:0;
                z-index:99999;

                background:rgba(
                    0,
                    0,
                    0,
                    0.65
                );

                overflow:auto;

                padding:20px;

            }


            .student-services-box {

                max-width:900px;

                margin:20px auto;

                background:#fff;

                border-radius:12px;

                padding:20px;

                position:relative;

                box-shadow:
                    0 10px 35px
                    rgba(0,0,0,.30);

            }


            .service-close {

                position:absolute;

                right:12px;
                top:10px;

                border:none;

                background:#c62828;

                color:#fff;

                width:35px;
                height:35px;

                border-radius:50%;

                cursor:pointer;

                font-size:18px;

            }


            .service-title {

                text-align:center;

                color:#075e3a;

                margin-bottom:18px;

            }


            .service-form {

                display:grid;

                grid-template-columns:
                    repeat(
                        2,
                        minmax(0,1fr)
                    );

                gap:12px;

            }


            .service-form input,
            .service-form select,
            .service-form textarea {

                width:100%;

                padding:10px;

                border:1px solid #bbb;

                border-radius:6px;

                box-sizing:border-box;

                font-size:15px;

            }


            .service-form textarea {

                min-height:90px;

                resize:vertical;

            }


            .service-full {

                grid-column:1 / -1;

            }


            .service-button {

                border:none;

                border-radius:6px;

                padding:10px 16px;

                cursor:pointer;

                font-size:15px;

                margin:4px;

            }


            .service-primary {

                background:#075e3a;

                color:#fff;

            }


            .service-secondary {

                background:#d4a017;

                color:#fff;

            }


            .service-danger {

                background:#c62828;

                color:#fff;

            }


            .student-info-card {

                margin-top:18px;

                padding:15px;

                border:1px solid #ddd;

                border-radius:8px;

                background:#f7faf8;

            }


            .student-info-card table {

                width:100%;

                border-collapse:collapse;

            }


            .student-info-card th,
            .student-info-card td {

                border:1px solid #ccc;

                padding:7px;

                text-align:left;

            }


            .service-message {

                margin-top:12px;

                padding:10px;

                border-radius:6px;

                background:#f5f5f5;

            }


            .service-notice {

                border:1px solid #ddd;

                border-radius:8px;

                padding:12px;

                margin-top:10px;

                background:#fafafa;

            }


            @media(max-width:650px) {

                .service-form {

                    grid-template-columns:1fr;

                }

                .service-full {

                    grid-column:auto;

                }

                #studentServicesOverlay {

                    padding:8px;

                }

                .student-services-box {

                    margin:5px auto;

                    padding:15px;

                }

            }

        `;


        document.head.appendChild(style);

    }


    /* =====================================================
       STUDENT SEARCH FORM
    ===================================================== */

    function studentSearchForm(title) {

        return `

            <h2 class="service-title">
                ${title}
            </h2>

            <div class="service-form">

                <select id="serviceYear">

                    <option value="">
                        সন নির্বাচন করুন
                    </option>

                    ${getYearOptions()
                        .map(function (year) {

                            return `
                                <option
                                    value="${esc(year)}"
                                >
                                    ${esc(year)}
                                </option>
                            `;

                        })
                        .join("")}

                </select>


                <select id="serviceClass">

                    <option value="">
                        শ্রেণি নির্বাচন করুন
                    </option>

                    ${Object.keys(
                        CLASS_LIST_FALLBACK
                    )
                    .map(function (key) {

                        return `

                            <option
                                value="${key}"
                            >
                                ${esc(
                                    CLASS_LIST_FALLBACK[key]
                                )}
                            </option>

                        `;

                    })
                    .join("")}

                </select>


                <input
                    type="text"
                    id="serviceRoll"
                    placeholder="রোল লিখুন"
                >


                <button
                    type="button"
                    class="service-button service-primary"
                    onclick="findServiceStudent()"
                >
                    🔍 শিক্ষার্থী খুঁজুন
                </button>

            </div>


            <div id="serviceStudentResult"></div>

        `;

    }


    /* =====================================================
       FIND STUDENT
    ===================================================== */

    window.findServiceStudent =
    function () {

        const year =
            document.getElementById(
                "serviceYear"
            )?.value || "";


        const classCode =
            document.getElementById(
                "serviceClass"
            )?.value || "";


        const roll =
            document.getElementById(
                "serviceRoll"
            )?.value.trim() || "";


        const output =
            document.getElementById(
                "serviceStudentResult"
            );


        if (!year || !classCode || !roll) {

            output.innerHTML = `

                <div class="service-message">
                    ⚠️ সন, শ্রেণি ও রোল দিন।
                </div>

            `;

            return;

        }


        const students =
            getStudents();


        const student =
            students.find(function (item) {

                const sameYear =
                    String(item.year) ===
                    String(year);


                const sameClass =
                    String(
                        item.classCode || ""
                    ) ===
                    String(classCode)
                    ||
                    String(
                        item.className || ""
                    ) ===
                    String(
                        CLASS_LIST_FALLBACK[
                            classCode
                        ] || ""
                    );


                const sameRoll =
                    String(
                        item.roll || ""
                    ) ===
                    String(roll);


                return (
                    sameYear &&
                    sameClass &&
                    sameRoll
                );

            });


        if (!student) {

            currentStudent = null;

            output.innerHTML = `

                <div class="service-message">
                    ❌ এই সন, শ্রেণি ও রোলের
                    কোনো শিক্ষার্থী পাওয়া যায়নি।
                </div>

            `;

            return;

        }


        currentStudent = student;


        output.innerHTML = `

            <div class="student-info-card">

                <h3>
                    👤 শিক্ষার্থীর তথ্য
                </h3>

                <table>

                    <tr>
                        <th>Student ID</th>
                        <td>
                            ${esc(
                                student.studentId || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>নাম</th>
                        <td>
                            ${esc(
                                student.name || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>পিতা</th>
                        <td>
                            ${esc(
                                student.fatherName || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>মাতা</th>
                        <td>
                            ${esc(
                                student.motherName || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>শ্রেণি</th>
                        <td>
                            ${esc(
                                className(student)
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>রোল</th>
                        <td>
                            ${esc(
                                student.roll || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>মোবাইল</th>
                        <td>
                            ${esc(
                                student.mobile || "-"
                            )}
                        </td>
                    </tr>

                </table>

            </div>

        `;


        if (
            currentService === "idcard"
        ) {

            output.innerHTML += `

                <div style="
                    text-align:center;
                    margin-top:15px;
                ">

                    <button
                        type="button"
                        class="service-button service-primary"
                        onclick="printIDCard()"
                    >
                        🖨️ ID Card প্রিন্ট
                    </button>

                </div>

            `;

        }


        if (
            currentService === "certificate"
        ) {

            output.innerHTML += `

                <div
                    class="service-form"
                    style="margin-top:15px;"
                >

                    <select
                        id="certificateType"
                        class="service-full"
                    >

                        <option value="">
                            সনদের ধরন নির্বাচন করুন
                        </option>

                        <option>
                            শিক্ষার্থী সনদ
                        </option>

                        <option>
                            অধ্যয়নরত সনদ
                        </option>

                        <option>
                            চরিত্র সনদ
                        </option>

                        <option>
                            প্রশংসাপত্র
                        </option>

                    </select>


                    <button
                        type="button"
                        class="service-button service-primary service-full"
                        onclick="printCertificate()"
                    >
                        🖨️ Certificate প্রিন্ট
                    </button>

                </div>

            `;

        }


        if (
            currentService === "tc"
        ) {

            output.innerHTML += `

                <div
                    class="service-form"
                    style="margin-top:15px;"
                >

                    <input
                        type="date"
                        id="tcDate"
                    >

                    <input
                        type="text"
                        id="tcReason"
                        placeholder="TC দেওয়ার কারণ"
                    >

                    <textarea
                        id="tcRemarks"
                        class="service-full"
                        placeholder="অতিরিক্ত মন্তব্য"
                    ></textarea>


                    <button
                        type="button"
                        class="service-button service-primary service-full"
                        onclick="printTC()"
                    >
                        🖨️ TC প্রিন্ট
                    </button>

                </div>

            `;

        }


        if (
            currentService === "guardian"
        ) {

            output.innerHTML += `

                <div
                    class="service-form"
                    style="margin-top:15px;"
                >

                    <input
                        type="text"
                        id="guardianMobile"
                        value="${esc(
                            student.mobile || ""
                        )}"
                        placeholder="অভিভাবকের মোবাইল"
                    >

                    <textarea
                        id="guardianMessage"
                        class="service-full"
                        placeholder="SMS লিখুন"
                    >${esc(
                        "প্রিয় অভিভাবক, " +
                        (student.name || "") +
                        " এর বিষয়ে মাদ্রাসার পক্ষ থেকে যোগাযোগ করা হচ্ছে।"
                    )}</textarea>


                    <button
                        type="button"
                        class="service-button service-primary"
                        onclick="sendGuardianSMS()"
                    >
                        📱 SMS পাঠান
                    </button>


                    <button
                        type="button"
                        class="service-button service-secondary"
                        onclick="copyGuardianSMS()"
                    >
                        📋 Copy
                    </button>

                </div>

            `;

        }


        if (
            currentService === "due"
        ) {

            renderDueForm();

        }

    };


    /* =====================================================
       ID CARD
    ===================================================== */

    window.openIDCard =
    function () {

        currentService = "idcard";

        const content =
            createOverlay();

        content.innerHTML =
            studentSearchForm(
                "🪪 Student ID Card"
            );

    };


    window.printIDCard =
    function () {

        if (!currentStudent) {

            alert(
                "প্রথমে শিক্ষার্থী নির্বাচন করুন।"
            );

            return;

        }


        const s =
            currentStudent;


        const photo =
            s.photo
                ? `
                    <img
                        src="${esc(s.photo)}"
                        style="
                            width:85px;
                            height:105px;
                            object-fit:cover;
                            border:1px solid #999;
                        "
                    >
                `
                : `
                    <div style="
                        width:85px;
                        height:105px;
                        border:1px solid #999;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    ">
                        ছবি
                    </div>
                `;


        printHTML(`

            <div class="id-card">

                <div class="header">

                    <h2>
                        আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল (ডিগ্রী) মাদ্রাসা
                    </h2>

                    <h3>
                        Abdullah Hat Islamia Fazil (Degree) Madrasah
                    </h3>

                    <div>
                        নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
                    </div>

                    <strong>
                        STUDENT ID CARD
                    </strong>

                </div>


                <div class="body">

                    <div>
                        ${photo}
                    </div>

                    <table>

                        <tr>
                            <th>Student ID</th>
                            <td>
                                ${esc(
                                    s.studentId || "-"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>Name</th>
                            <td>
                                ${esc(
                                    s.name || "-"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>Class</th>
                            <td>
                                ${esc(
                                    className(s)
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>Roll</th>
                            <td>
                                ${esc(
                                    s.roll || "-"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>Mobile</th>
                            <td>
                                ${esc(
                                    s.mobile || "-"
                                )}
                            </td>
                        </tr>

                    </table>

                </div>


                <div class="sign">

                    <span>
                        শিক্ষার্থীর স্বাক্ষর
                    </span>

                    <span>
                        অধ্যক্ষ
                    </span>

                </div>

            </div>

        `);

    };


    /* =====================================================
       ADMIT CARD
    ===================================================== */

    window.openAdmitCard =
    function () {

        currentService =
            "admitcard";


        const content =
            createOverlay();


        content.innerHTML = `

            ${studentSearchForm(
                "🎫 Student Admit Card"
            )}


            <div
                class="service-form"
                style="margin-top:15px;"
            >

                <select
                    id="admitExam"
                    class="service-full"
                >

                    <option value="">
                        পরীক্ষা নির্বাচন করুন
                    </option>

                    <option>
                        অর্ধবার্ষিক পরীক্ষা
                    </option>

                    <option>
                        প্রাক-নির্বাচনী পরীক্ষা
                    </option>

                    <option>
                        নির্বাচনী পরীক্ষা
                    </option>

                    <option>
                        ১ম টিউটোরিয়াল
                    </option>

                    <option>
                        ২য় টিউটোরিয়াল
                    </option>

                    <option>
                        ৩য় টিউটোরিয়াল
                    </option>

                    <option>
                        বার্ষিক পরীক্ষা
                    </option>

                </select>


                <button
                    type="button"
                    class="service-button service-primary service-full"
                    onclick="printAdmitCard()"
                >
                    🖨️ Admit Card প্রিন্ট
                </button>

            </div>

        `;

    };


    window.printAdmitCard =
    function () {

        if (!currentStudent) {

            alert(
                "প্রথমে শিক্ষার্থী নির্বাচন করুন।"
            );

            return;

        }


        const exam =
            document.getElementById(
                "admitExam"
            )?.value || "";


        if (!exam) {

            alert(
                "পরীক্ষা নির্বাচন করুন।"
            );

            return;

        }


        const s =
            currentStudent;


        printHTML(`

            <div class="admit-card">

                <div class="header">

                    <h2>
                        আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল (ডিগ্রী) মাদ্রাসা
                    </h2>

                    <h3>
                        Abdullah Hat Islamia Fazil (Degree) Madrasah
                    </h3>

                    <div>
                        নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
                    </div>

                    <h2>
                        🎫 ADMIT CARD
                    </h2>

                    <strong>
                        ${esc(exam)}
                    </strong>

                </div>


                <table>

                    <tr>
                        <th>Student ID</th>
                        <td>
                            ${esc(
                                s.studentId || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>নাম</th>
                        <td>
                            ${esc(
                                s.name || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>পিতা</th>
                        <td>
                            ${esc(
                                s.fatherName || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>শ্রেণি</th>
                        <td>
                            ${esc(
                                className(s)
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>রোল</th>
                        <td>
                            ${esc(
                                s.roll || "-"
                            )}
                        </td>
                    </tr>

                </table>


                <div class="sign">

                    <span>
                        শ্রেণি শিক্ষক
                    </span>

                    <span>
                        অধ্যক্ষ
                    </span>

                </div>

            </div>

        `);

    };


    /* =====================================================
       CERTIFICATE
    ===================================================== */

    window.openCertificate =
    function () {

        currentService =
            "certificate";


        const content =
            createOverlay();


        content.innerHTML =
            studentSearchForm(
                "📜 Certificate"
            );

    };


    window.printCertificate =
    function () {

        if (!currentStudent) {

            alert(
                "প্রথমে শিক্ষার্থী নির্বাচন করুন।"
            );

            return;

        }


        const type =
            document.getElementById(
                "certificateType"
            )?.value || "";


        if (!type) {

            alert(
                "সনদের ধরন নির্বাচন করুন।"
            );

            return;

        }


        const s =
            currentStudent;


        printHTML(`

            <div class="certificate">

                <div class="certificate-border">

                    <h2>
                        আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল (ডিগ্রী) মাদ্রাসা
                    </h2>

                    <h3>
                        Abdullah Hat Islamia Fazil (Degree) Madrasah
                    </h3>

                    <div>
                        নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
                    </div>


                    <h1>
                        📜 ${esc(type)}
                    </h1>


                    <p class="certificate-text">

                        এই মর্মে প্রত্যয়ন করা যাচ্ছে যে,

                        <strong>
                            ${esc(
                                s.name || "-"
                            )}
                        </strong>

                        , পিতা:

                        <strong>
                            ${esc(
                                s.fatherName || "-"
                            )}
                        </strong>

                        , মাতা:

                        <strong>
                            ${esc(
                                s.motherName || "-"
                            )}
                        </strong>

                        , শ্রেণি:

                        <strong>
                            ${esc(
                                className(s)
                            )}
                        </strong>

                        , রোল:

                        <strong>
                            ${esc(
                                s.roll || "-"
                            )}
                        </strong>

                        এবং Student ID:

                        <strong>
                            ${esc(
                                s.studentId || "-"
                            )}
                        </strong>

                        ।

                    </p>


                    <p>
                        তার প্রয়োজনীয় কাজে ব্যবহারের জন্য
                        এই সনদ প্রদান করা হলো।
                    </p>


                    <div class="sign">

                        <span>
                            তারিখ: ${today()}
                        </span>

                        <span>
                            অধ্যক্ষ
                        </span>

                    </div>

                </div>

            </div>

        `);

    };


    /* =====================================================
       TRANSFER CERTIFICATE
    ===================================================== */

    window.openTC =
    function () {

        currentService =
            "tc";


        const content =
            createOverlay();


        content.innerHTML =
            studentSearchForm(
                "📄 Transfer Certificate (TC)"
            );

    };


    window.printTC =
    function () {

        if (!currentStudent) {

            alert(
                "প্রথমে শিক্ষার্থী নির্বাচন করুন।"
            );

            return;

        }


        const s =
            currentStudent;


        const date =
            document.getElementById(
                "tcDate"
            )?.value || "";


        const reason =
            document.getElementById(
                "tcReason"
            )?.value || "";


        const remarks =
            document.getElementById(
                "tcRemarks"
            )?.value || "";


        printHTML(`

            <div class="tc">

                <div class="tc-border">

                    <h2>
                        আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল (ডিগ্রী) মাদ্রাসা
                    </h2>

                    <h3>
                        Abdullah Hat Islamia Fazil (Degree) Madrasah
                    </h3>

                    <div>
                        নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
                    </div>


                    <h1>
                        TRANSFER CERTIFICATE
                    </h1>


                    <table>

                        <tr>
                            <th>Student ID</th>
                            <td>
                                ${esc(
                                    s.studentId || "-"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>নাম</th>
                            <td>
                                ${esc(
                                    s.name || "-"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>পিতা</th>
                            <td>
                                ${esc(
                                    s.fatherName || "-"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>মাতা</th>
                            <td>
                                ${esc(
                                    s.motherName || "-"
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>শ্রেণি</th>
                            <td>
                                ${esc(
                                    className(s)
                                )}
                            </td>
                        </tr>

                        <tr>
                            <th>রোল</th>
                            <td>
                                ${esc(
                                    s.roll || "-"
                                )}
                            </td>
                        </tr>

                    </table>


                    <p>
                        TC প্রদানের কারণ:
                        ${esc(reason || "-")}
                    </p>


                    <p>
                        মন্তব্য:
                        ${esc(remarks || "-")}
                    </p>


                    <div class="sign">

                        <span>
                            তারিখ:
                            ${esc(
                                date || today()
                            )}
                        </span>

                        <span>
                            অধ্যক্ষ
                        </span>

                    </div>

                </div>

            </div>

        `);

    };


    /* =====================================================
       GUARDIAN SMS
    ===================================================== */

    window.openGuardianSMS =
    function () {

        currentService =
            "guardian";


        const content =
            createOverlay();


        content.innerHTML =
            studentSearchForm(
                "📱 Guardian Contact / SMS"
            );

    };


    window.sendGuardianSMS =
    function () {

        if (!currentStudent) {

            alert(
                "প্রথমে শিক্ষার্থী নির্বাচন করুন।"
            );

            return;

        }


        const mobile =
            document.getElementById(
                "guardianMobile"
            )?.value.trim() || "";


        const message =
            document.getElementById(
                "guardianMessage"
            )?.value.trim() || "";


        if (!mobile) {

            alert(
                "অভিভাবকের মোবাইল নম্বর দিন।"
            );

            return;

        }


        if (!message) {

            alert(
                "SMS লিখুন।"
            );

            return;

        }


        const smsURL =
            "sms:" +
            encodeURIComponent(
                mobile
            ) +
            "?body=" +
            encodeURIComponent(
                message
            );


        window.location.href =
            smsURL;

    };


    window.copyGuardianSMS =
    async function () {

        const message =
            document.getElementById(
                "guardianMessage"
            )?.value || "";


        if (!message) {

            alert(
                "SMS লিখুন।"
            );

            return;

        }


        try {

            await navigator.clipboard.writeText(
                message
            );

            alert(
                "✅ SMS Copy হয়েছে।"
            );

        } catch (error) {

            alert(
                "SMS Copy করা যায়নি।"
            );

        }

    };


    /* =====================================================
       DUE TRACKING
    ===================================================== */

    window.openDueTracking =
    function () {

        currentService =
            "due";


        const content =
            createOverlay();


        content.innerHTML =
            studentSearchForm(
                "💰 Due Tracking"
            );

    };


    function renderDueForm() {

        const output =
            document.getElementById(
                "serviceStudentResult"
            );


        if (!output) return;


        output.innerHTML += `

            <div class="student-info-card">

                <h3>
                    💰 বকেয়া যোগ করুন
                </h3>

                <div class="service-form">

                    <input
                        type="text"
                        id="dueHead"
                        class="service-full"
                        placeholder="বকেয়ার খাত যেমন: বেতন / ভর্তি ফি"
                    >


                    <input
                        type="number"
                        id="dueTotal"
                        placeholder="মোট নির্ধারিত টাকা"
                    >


                    <input
                        type="number"
                        id="duePaid"
                        placeholder="পরিশোধিত টাকা"
                    >


                    <button
                        type="button"
                        class="service-button service-primary service-full"
                        onclick="saveStudentDue()"
                    >
                        💾 বকেয়া সংরক্ষণ
                    </button>

                </div>


                <div
                    id="dueResult"
                    style="margin-top:15px;"
                ></div>

            </div>

        `;


        renderStudentDues();

    }


    window.saveStudentDue =
    function () {

        if (!currentStudent) {

            alert(
                "প্রথমে শিক্ষার্থী নির্বাচন করুন।"
            );

            return;

        }


        const head =
            document.getElementById(
                "dueHead"
            )?.value.trim() || "";


        const total =
            Number(
                document.getElementById(
                    "dueTotal"
                )?.value || 0
            );


        const paid =
            Number(
                document.getElementById(
                    "duePaid"
                )?.value || 0
            );


        if (!head || total <= 0) {

            alert(
                "বকেয়ার খাত ও মোট টাকা দিন।"
            );

            return;

        }


        const due =
            Math.max(
                0,
                total - paid
            );


        const data =
            getDues();


        data.push({

            id:
                Date.now().toString(),

            year:
                currentStudent.year || "",

            classCode:
                currentStudent.classCode || "",

            className:
                className(currentStudent),

            roll:
                currentStudent.roll || "",

            studentId:
                currentStudent.studentId || "",

            studentName:
                currentStudent.name || "",

            head:
                head,

            total:
                total,

            paid:
                paid,

            due:
                due,

            date:
                new Date().toISOString()

        });


        saveDues(data);


        alert(
            "✅ বকেয়ার তথ্য সংরক্ষণ হয়েছে।"
        );


        renderStudentDues();

    };


    function renderStudentDues() {

        const output =
            document.getElementById(
                "dueResult"
            );


        if (!output || !currentStudent)
            return;


        const data =
            getDues();


        const list =
            data.filter(function (item) {

                return (

                    String(item.year) ===
                    String(currentStudent.year)

                    &&

                    String(item.studentId) ===
                    String(currentStudent.studentId)

                );

            });


        if (!list.length) {

            output.innerHTML = `

                <div class="service-message">
                    বর্তমানে কোনো বকেয়া তথ্য নেই।
                </div>

            `;

            return;

        }


        let html = `

            <table
                style="
                    width:100%;
                    border-collapse:collapse;
                "
            >

                <tr>

                    <th
                        style="
                            border:1px solid #ccc;
                            padding:7px;
                        "
                    >
                        খাত
                    </th>

                    <th
                        style="
                            border:1px solid #ccc;
                            padding:7px;
                        "
                    >
                        মোট
                    </th>

                    <th
                        style="
                            border:1px solid #ccc;
                            padding:7px;
                        "
                    >
                        পরিশোধ
                    </th>

                    <th
                        style="
                            border:1px solid #ccc;
                            padding:7px;
                        "
                    >
                        বকেয়া
                    </th>

                </tr>

        `;


        list.forEach(function (item) {

            html += `

                <tr>

                    <td
                        style="
                            border:1px solid #ccc;
                            padding:7px;
                        "
                    >
                        ${esc(item.head)}
                    </td>

                    <td
                        style="
                            border:1px solid #ccc;
                            padding:7px;
                        "
                    >
                        ${item.total}
                    </td>

                    <td
                        style="
                            border:1px solid #ccc;
                            padding:7px;
                        "
                    >
                        ${item.paid}
                    </td>

                    <td
                        style="
                            border:1px solid #ccc;
                            padding:7px;
                        "
                    >
                        <strong>
                            ${item.due}
                        </strong>
                    </td>

                </tr>

            `;

        });


        html += `</table>`;

        output.innerHTML = html;

    }


    /* =====================================================
       NOTIFICATION
    ===================================================== */

    window.openNotification =
    function () {

        currentService =
            "notification";


        const content =
            createOverlay();


        content.innerHTML = `

            <h2 class="service-title">
                🔔 Notification / Notice
            </h2>


            <div class="service-form">

                <input
                    type="text"
                    id="noticeTitle"
                    class="service-full"
                    placeholder="নোটিশের শিরোনাম"
                >


                <textarea
                    id="noticeText"
                    class="service-full"
                    placeholder="নোটিশ লিখুন"
                ></textarea>


                <button
                    type="button"
                    class="service-button service-primary"
                    onclick="saveNotification()"
                >
                    💾 নোটিশ প্রকাশ
                </button>


                <button
                    type="button"
                    class="service-button service-secondary"
                    onclick="clearNotificationForm()"
                >
                    🧹 পরিষ্কার
                </button>

            </div>


            <div
                id="notificationList"
                style="margin-top:20px;"
            ></div>

        `;


        renderNotifications();

    };


    window.saveNotification =
    function () {

        const title =
            document.getElementById(
                "noticeTitle"
            )?.value.trim() || "";


        const text =
            document.getElementById(
                "noticeText"
            )?.value.trim() || "";


        if (!title || !text) {

            alert(
                "নোটিশের শিরোনাম ও লেখা দিন।"
            );

            return;

        }


        const data =
            getNotifications();


        data.unshift({

            id:
                Date.now().toString(),

            title:
                title,

            text:
                text,

            date:
                new Date().toISOString()

        });


        saveNotifications(data);


        clearNotificationForm();

        renderNotifications();


        alert(
            "✅ নোটিশ প্রকাশ হয়েছে।"
        );

    };


    window.clearNotificationForm =
    function () {

        const title =
            document.getElementById(
                "noticeTitle"
            );

        const text =
            document.getElementById(
                "noticeText"
            );


        if (title) title.value = "";

        if (text) text.value = "";

    };


    function renderNotifications() {

        const output =
            document.getElementById(
                "notificationList"
            );


        if (!output) return;


        const data =
            getNotifications();


        if (!data.length) {

            output.innerHTML = `

                <div class="service-message">
                    এখনো কোনো Notification/Notice নেই।
                </div>

            `;

            return;

        }


        output.innerHTML =
            data.map(function (item) {

                return `

                    <div class="service-notice">

                        <h3>
                            📢
                            ${esc(item.title)}
                        </h3>

                        <div>
                            ${esc(item.text)}
                        </div>

                        <small>
                            📅 ${esc(
                                item.date
                            )}
                        </small>


                        <div
                            style="margin-top:10px;"
                        >

                            <button
                                type="button"
                                class="service-button service-danger"
                                onclick="deleteNotification('${esc(item.id)}')"
                            >
                                🗑️ Delete
                            </button>

                        </div>

                    </div>

                `;

            })
            .join("");

    }


    window.deleteNotification =
    function (id) {

        if (
            !confirm(
                "এই নোটিশটি মুছে ফেলবেন?"
            )
        ) return;


        const data =
            getNotifications()
            .filter(function (item) {

                return String(item.id) !==
                    String(id);

            });


        saveNotifications(data);

        renderNotifications();

    };


    /* =====================================================
       PRINT SYSTEM
    ===================================================== */

    function printHTML(content) {

        const win =
            window.open(
                "",
                "_blank",
                "width=900,height=700"
            );


        if (!win) {

            alert(
                "Print করার জন্য Pop-up অনুমতি দিন।"
            );

            return;

        }


        win.document.write(`

            <!DOCTYPE html>

            <html lang="bn">

            <head>

                <meta charset="UTF-8">

                <title>
                    Abdullah Hat Islamia Fazil (Degree) Madrasah
                </title>

                <style>

                    * {
                        box-sizing:border-box;
                    }


                    body {

                        margin:0;

                        padding:15mm;

                        font-family:
                            Arial,
                            "Noto Sans Bengali",
                            sans-serif;

                        color:#111;

                    }


                    .header {

                        text-align:center;

                        border-bottom:
                            2px solid #075e3a;

                        padding-bottom:10px;

                        margin-bottom:15px;

                    }


                    .header h2,
                    .header h3 {

                        margin:4px 0;

                    }


                    table {

                        width:100%;

                        border-collapse:collapse;

                        margin-top:15px;

                    }


                    th,
                    td {

                        border:1px solid #555;

                        padding:8px;

                    }


                    th {

                        width:30%;

                    }


                    .sign {

                        display:flex;

                        justify-content:
                            space-between;

                        margin-top:45px;

                    }


                    .id-card {

                        width:85mm;

                        min-height:54mm;

                        border:2px solid #075e3a;

                        padding:7mm;

                        margin:auto;

                    }


                    .id-card .body {

                        display:flex;

                        gap:10px;

                        align-items:flex-start;

                    }


                    .id-card table {

                        margin:0;

                        font-size:11px;

                    }


                    .id-card th,
                    .id-card td {

                        padding:3px;

                    }


                    .id-card .sign {

                        margin-top:15px;

                        font-size:11px;

                    }


                    .admit-card {

                        max-width:180mm;

                        margin:auto;

                        border:2px solid #075e3a;

                        padding:12mm;

                    }


                    .certificate {

                        min-height:240mm;

                        padding:8mm;

                        text-align:center;

                    }


                    .certificate-border {

                        min-height:220mm;

                        border:3px double #075e3a;

                        padding:25mm 15mm;

                    }


                    .certificate-text {

                        font-size:18px;

                        line-height:2.1;

                        text-align:justify;

                        margin-top:35px;

                    }


                    .tc {

                        min-height:240mm;

                        padding:5mm;

                    }


                    .tc-border {

                        border:2px solid #075e3a;

                        padding:15mm;

                        min-height:220mm;

                    }


                    @page {

                        margin:10mm;

                    }


                    @media print {

                        body {

                            padding:0;

                        }

                    }

                </style>

            </head>


            <body>

                ${content}

            </body>

            </html>

        `);


        win.document.close();

        win.focus();


        setTimeout(function () {

            win.print();

            win.close();

        }, 500);

    }


})();
