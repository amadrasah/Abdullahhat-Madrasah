/* ============================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   MADRASAH INFORMATION MODULE
   ------------------------------------------------------------
   আলাদা ফাইল — script(3).js পরিবর্তন করবে না
   ============================================================ */

(function () {

    "use strict";

    /* ========================================================
       1. STORAGE
    ======================================================== */

    const STORAGE_KEY = "madrasah_institution_info";


    /* ========================================================
       2. DEFAULT INFORMATION
       --------------------------------------------------------
       যেসব তথ্য এখন জানা নেই সেগুলো খালি রাখা হয়েছে।
       পরে সম্পাদনা অপশন থেকে যোগ করা যাবে।
       ======================================================== */

    const DEFAULT_INFO = {

        /* মাদ্রাসার নাম */
        nameBangla:
            "আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল (ডিগ্রী) মাদ্রাসা",

        nameEnglish:
            "Abdullah Hat Islamia Fazil (Degree) Madrasah",


        /* ঠিকানা */
        address:
            "নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী",


        /* অন্যান্য তথ্য */
        establishmentYear: "",
        founder: "",

        eiin: "",
        madrasahCode: "",

        principal: "",

        phone: "",
        email: "",


        /* বিস্তারিত পরিচিতি */
        history: "",

        education:
            "",

        mission:
            "",

        achievements:
            "",

        otherInfo:
            "",


        /* মাদ্রাসার ছবি */
        photo: ""

    };


    /* ========================================================
       3. LOAD INFORMATION
       ======================================================== */

    function loadInfo() {

        try {

            const saved =
                localStorage.getItem(STORAGE_KEY);

            if (!saved) {

                return Object.assign(
                    {},
                    DEFAULT_INFO
                );

            }

            const data =
                JSON.parse(saved);

            return Object.assign(
                {},
                DEFAULT_INFO,
                data
            );

        } catch (error) {

            console.error(
                "Madrasah information load error:",
                error
            );

            return Object.assign(
                {},
                DEFAULT_INFO
            );
        }
    }


    /* ========================================================
       4. SAVE INFORMATION
       ======================================================== */

    function saveInfo(info) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(info)
            );

            return true;

        } catch (error) {

            console.error(
                "Madrasah information save error:",
                error
            );

            alert(
                "তথ্য সংরক্ষণ করা যায়নি।"
            );

            return false;
        }
    }


    /* ========================================================
       5. HTML ESCAPE
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
       6. ADD MODULE STYLE
       --------------------------------------------------------
       style.css পরিবর্তন করার প্রয়োজন নেই।
       ======================================================== */

    function addModuleStyle() {

        if (
            document.getElementById(
                "madrasahInfoModuleStyle"
            )
        ) {
            return;
        }

        const style =
            document.createElement("style");

        style.id =
            "madrasahInfoModuleStyle";

        style.textContent = `

        /* ==================================================
           MADRASAH INFORMATION
           ================================================== */

        .madrasah-info-wrapper {
            max-width:1100px;
            margin:0 auto;
        }

        .madrasah-info-card {
            background:#fff;
            border:1px solid #ddd;
            border-radius:12px;
            padding:20px;
            margin-bottom:20px;
            box-shadow:0 3px 12px rgba(0,0,0,.06);
        }

        .madrasah-info-header {
            display:flex;
            align-items:center;
            gap:20px;
            margin-bottom:20px;
            padding-bottom:15px;
            border-bottom:2px solid #d4a017;
        }

        .madrasah-info-logo {
            width:100px;
            height:100px;
            object-fit:contain;
            border-radius:10px;
            border:1px solid #ddd;
            background:#fff;
        }

        .madrasah-info-title-bn {
            color:#075e3a;
            margin:0 0 6px 0;
            font-size:24px;
        }

        .madrasah-info-title-en {
            margin:0;
            font-size:17px;
            color:#555;
            font-weight:600;
        }

        .madrasah-info-address {
            margin-top:8px;
            color:#666;
        }

        .madrasah-info-grid {
            display:grid;
            grid-template-columns:
                repeat(2, minmax(0,1fr));
            gap:15px;
        }

        .madrasah-info-item {
            background:#fafafa;
            border:1px solid #e2e2e2;
            border-radius:8px;
            padding:13px;
        }

        .madrasah-info-item strong {
            display:block;
            color:#075e3a;
            margin-bottom:5px;
        }

        .madrasah-info-text {
            white-space:pre-line;
            line-height:1.8;
            color:#444;
        }

        .madrasah-info-section-title {
            color:#075e3a;
            margin:22px 0 10px 0;
            padding-bottom:6px;
            border-bottom:1px solid #ddd;
        }

        .madrasah-info-actions {
            display:flex;
            gap:10px;
            flex-wrap:wrap;
            margin-top:20px;
        }

        .madrasah-info-btn {
            border:none;
            border-radius:7px;
            padding:10px 18px;
            cursor:pointer;
            font-size:15px;
        }

        .madrasah-info-edit-btn {
            background:#075e3a;
            color:#fff;
        }

        .madrasah-info-reset-btn {
            background:#eee;
            color:#333;
        }

        .madrasah-info-modal {
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.65);
            display:none;
            align-items:center;
            justify-content:center;
            z-index:99999;
            padding:15px;
        }

        .madrasah-info-modal-box {
            width:100%;
            max-width:800px;
            max-height:92vh;
            overflow-y:auto;
            background:#fff;
            border-radius:12px;
            padding:20px;
        }

        .madrasah-info-form-grid {
            display:grid;
            grid-template-columns:
                repeat(2, minmax(0,1fr));
            gap:12px;
        }

        .madrasah-info-field {
            display:flex;
            flex-direction:column;
            gap:5px;
        }

        .madrasah-info-field.full {
            grid-column:1 / -1;
        }

        .madrasah-info-field label {
            font-weight:bold;
            color:#333;
        }

        .madrasah-info-field input,
        .madrasah-info-field textarea {
            width:100%;
            box-sizing:border-box;
            padding:10px;
            border:1px solid #ccc;
            border-radius:6px;
            font-family:inherit;
            font-size:14px;
        }

        .madrasah-info-field textarea {
            min-height:100px;
            resize:vertical;
        }

        .madrasah-info-form-buttons {
            display:flex;
            justify-content:flex-end;
            gap:10px;
            margin-top:18px;
        }

        .madrasah-info-preview {
            width:120px;
            height:120px;
            object-fit:contain;
            border:1px solid #ddd;
            border-radius:8px;
            margin-top:8px;
        }

        .madrasah-info-empty {
            color:#888;
            font-style:italic;
        }

        @media(max-width:700px) {

            .madrasah-info-grid {
                grid-template-columns:1fr;
            }

            .madrasah-info-form-grid {
                grid-template-columns:1fr;
            }

            .madrasah-info-field.full {
                grid-column:auto;
            }

            .madrasah-info-header {
                flex-direction:column;
                text-align:center;
            }

            .madrasah-info-title-bn {
                font-size:20px;
            }

            .madrasah-info-title-en {
                font-size:15px;
            }

        }

        `;

        document.head.appendChild(style);
    }


    /* ========================================================
       7. VALUE OR DASH
       ======================================================== */

    function showValue(value) {

        if (
            value === undefined ||
            value === null ||
            String(value).trim() === ""
        ) {

            return `
                <span class="madrasah-info-empty">
                    তথ্য পরে যোগ করা যাবে
                </span>
            `;
        }

        return escapeHTML(value);
    }


    /* ========================================================
       8. RENDER ABOUT SECTION
       ======================================================== */

    function renderMadrasahInfo() {

        const section =
            document.getElementById("about");

        if (!section) {
            return;
        }

        const info =
            loadInfo();

        let photoHTML = "";

        if (info.photo) {

            photoHTML = `
                <img
                    src="${info.photo}"
                    class="madrasah-info-logo"
                    alt="মাদ্রাসার ছবি"
                >
            `;

        } else {

            photoHTML = `
                <div
                    class="madrasah-info-logo"
                    style="
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:45px;
                    "
                >
                    🕌
                </div>
            `;
        }


        section.innerHTML = `

            <h2 class="section-title">
                🏫 মাদ্রাসার পরিচিতি
            </h2>

            <div class="madrasah-info-wrapper">

                <!-- ================================
                     HEADER
                     ================================= -->

                <div class="madrasah-info-card">

                    <div class="madrasah-info-header">

                        ${photoHTML}

                        <div>

                            <h3
                                class="madrasah-info-title-bn"
                            >
                                ${showValue(
                                    info.nameBangla
                                )}
                            </h3>

                            <p
                                class="madrasah-info-title-en"
                            >
                                ${showValue(
                                    info.nameEnglish
                                )}
                            </p>

                            <div
                                class="madrasah-info-address"
                            >
                                📍 ${showValue(
                                    info.address
                                )}
                            </div>

                        </div>

                    </div>


                    <!-- ============================
                         BASIC INFORMATION
                         ============================= -->

                    <h3
                        class="madrasah-info-section-title"
                    >
                        📋 প্রাথমিক তথ্য
                    </h3>

                    <div class="madrasah-info-grid">

                        <div class="madrasah-info-item">

                            <strong>
                                🏫 প্রতিষ্ঠার সাল
                            </strong>

                            ${showValue(
                                info.establishmentYear
                            )}

                        </div>


                        <div class="madrasah-info-item">

                            <strong>
                                👤 প্রতিষ্ঠাতা
                            </strong>

                            ${showValue(
                                info.founder
                            )}

                        </div>


                        <div class="madrasah-info-item">

                            <strong>
                                🆔 EIIN
                            </strong>

                            ${showValue(
                                info.eiin
                            )}

                        </div>


                        <div class="madrasah-info-item">

                            <strong>
                                🆔 Madrasah Code
                            </strong>

                            ${showValue(
                                info.madrasahCode
                            )}

                        </div>


                        <div class="madrasah-info-item">

                            <strong>
                                👨‍💼 অধ্যক্ষের নাম
                            </strong>

                            ${showValue(
                                info.principal
                            )}

                        </div>


                        <div class="madrasah-info-item">

                            <strong>
                                📞 মোবাইল
                            </strong>

                            ${showValue(
                                info.phone
                            )}

                        </div>


                        <div class="madrasah-info-item">

                            <strong>
                                📧 ই-মেইল
                            </strong>

                            ${showValue(
                                info.email
                            )}

                        </div>


                        <div class="madrasah-info-item">

                            <strong>
                                📍 ঠিকানা
                            </strong>

                            ${showValue(
                                info.address
                            )}

                        </div>

                    </div>


                    <!-- ============================
                         HISTORY
                         ============================= -->

                    <h3
                        class="madrasah-info-section-title"
                    >
                        📖 প্রতিষ্ঠানের ইতিহাস
                    </h3>

                    <div class="madrasah-info-text">
                        ${showValue(info.history)}
                    </div>


                    <!-- ============================
                         EDUCATION
                         ============================= -->

                    <h3
                        class="madrasah-info-section-title"
                    >
                        📚 শিক্ষা কার্যক্রম
                    </h3>

                    <div class="madrasah-info-text">
                        ${showValue(info.education)}
                    </div>


                    <!-- ============================
                         MISSION
                         ============================= -->

                    <h3
                        class="madrasah-info-section-title"
                    >
                        🎯 লক্ষ্য ও উদ্দেশ্য
                    </h3>

                    <div class="madrasah-info-text">
                        ${showValue(info.mission)}
                    </div>


                    <!-- ============================
                         ACHIEVEMENTS
                         ============================= -->

                    <h3
                        class="madrasah-info-section-title"
                    >
                        🏆 বিশেষ অর্জন
                    </h3>

                    <div class="madrasah-info-text">
                        ${showValue(info.achievements)}
                    </div>


                    <!-- ============================
                         OTHER
                         ============================= -->

                    <h3
                        class="madrasah-info-section-title"
                    >
                        📝 অন্যান্য তথ্য
                    </h3>

                    <div class="madrasah-info-text">
                        ${showValue(info.otherInfo)}
                    </div>


                    <!-- ============================
                         BUTTONS
                         ============================= -->

                    <div
                        class="madrasah-info-actions"
                    >

                        <button
                            type="button"
                            class="
                                madrasah-info-btn
                                madrasah-info-edit-btn
                            "
                            onclick="
                                window.openMadrasahInfoEditor()
                            "
                        >
                            ✏️ তথ্য সম্পাদনা
                        </button>

                    </div>

                </div>

            </div>

        `;


        createEditorModal();
    }


    /* ========================================================
       9. CREATE EDITOR MODAL
       ======================================================== */

    function createEditorModal() {

        let modal =
            document.getElementById(
                "madrasahInfoEditorModal"
            );

        if (modal) {
            return;
        }

        modal =
            document.createElement("div");

        modal.id =
            "madrasahInfoEditorModal";

        modal.className =
            "madrasah-info-modal";


        modal.innerHTML = `

            <div
                class="madrasah-info-modal-box"
            >

                <h2
                    style="
                        margin-top:0;
                        color:#075e3a;
                    "
                >
                    ✏️ মাদ্রাসার পরিচিতি সম্পাদনা
                </h2>


                <p
                    style="
                        color:#777;
                        margin-bottom:18px;
                    "
                >
                    প্রয়োজনীয় তথ্য লিখে সংরক্ষণ করুন।
                    যেসব তথ্য এখন নেই সেগুলো খালি রাখতে
                    পারবেন।
                </p>


                <form
                    id="madrasahInfoEditForm"
                >

                    <div
                        class="
                            madrasah-info-form-grid
                        "
                    >

                        <!-- বাংলা নাম -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                মাদ্রাসার নাম — বাংলা
                            </label>

                            <input
                                type="text"
                                id="mi_nameBangla"
                            >

                        </div>


                        <!-- ইংরেজি নাম -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                Madrasah Name — English
                            </label>

                            <input
                                type="text"
                                id="mi_nameEnglish"
                            >

                        </div>


                        <!-- ঠিকানা -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                ঠিকানা
                            </label>

                            <input
                                type="text"
                                id="mi_address"
                            >

                        </div>


                        <!-- প্রতিষ্ঠার সাল -->

                        <div
                            class="madrasah-info-field"
                        >

                            <label>
                                প্রতিষ্ঠার সাল
                            </label>

                            <input
                                type="text"
                                id="mi_establishmentYear"
                            >

                        </div>


                        <!-- প্রতিষ্ঠাতা -->

                        <div
                            class="madrasah-info-field"
                        >

                            <label>
                                প্রতিষ্ঠাতা
                            </label>

                            <input
                                type="text"
                                id="mi_founder"
                            >

                        </div>


                        <!-- EIIN -->

                        <div
                            class="madrasah-info-field"
                        >

                            <label>
                                EIIN
                            </label>

                            <input
                                type="text"
                                id="mi_eiin"
                            >

                        </div>


                        <!-- Madrasah Code -->

                        <div
                            class="madrasah-info-field"
                        >

                            <label>
                                Madrasah Code
                            </label>

                            <input
                                type="text"
                                id="mi_madrasahCode"
                            >

                        </div>


                        <!-- অধ্যক্ষ -->

                        <div
                            class="madrasah-info-field"
                        >

                            <label>
                                অধ্যক্ষের নাম
                            </label>

                            <input
                                type="text"
                                id="mi_principal"
                            >

                        </div>


                        <!-- মোবাইল -->

                        <div
                            class="madrasah-info-field"
                        >

                            <label>
                                মোবাইল
                            </label>

                            <input
                                type="text"
                                id="mi_phone"
                            >

                        </div>


                        <!-- ইমেইল -->

                        <div
                            class="madrasah-info-field"
                        >

                            <label>
                                ই-মেইল
                            </label>

                            <input
                                type="email"
                                id="mi_email"
                            >

                        </div>


                        <!-- ইতিহাস -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                প্রতিষ্ঠানের ইতিহাস
                            </label>

                            <textarea
                                id="mi_history"
                            ></textarea>

                        </div>


                        <!-- শিক্ষা কার্যক্রম -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                শিক্ষা কার্যক্রম
                            </label>

                            <textarea
                                id="mi_education"
                            ></textarea>

                        </div>


                        <!-- লক্ষ্য উদ্দেশ্য -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                লক্ষ্য ও উদ্দেশ্য
                            </label>

                            <textarea
                                id="mi_mission"
                            ></textarea>

                        </div>


                        <!-- অর্জন -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                বিশেষ অর্জন
                            </label>

                            <textarea
                                id="mi_achievements"
                            ></textarea>

                        </div>


                        <!-- অন্যান্য -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                অন্যান্য তথ্য
                            </label>

                            <textarea
                                id="mi_otherInfo"
                            ></textarea>

                        </div>


                        <!-- ছবি -->

                        <div
                            class="
                                madrasah-info-field
                                full
                            "
                        >

                            <label>
                                🖼️ মাদ্রাসার ছবি
                            </label>

                            <input
                                type="file"
                                id="mi_photoFile"
                                accept="image/*"
                            >

                            <img
                                id="mi_photoPreview"
                                class="
                                    madrasah-info-preview
                                "
                                style="display:none;"
                                alt="ছবির প্রিভিউ"
                            >

                            <small
                                style="color:#777;"
                            >
                                নতুন ছবি না দিলে আগের ছবিই
                                থাকবে।
                            </small>

                        </div>

                    </div>


                    <!-- BUTTONS -->

                    <div
                        class="
                            madrasah-info-form-buttons
                        "
                    >

                        <button
                            type="button"
                            class="
                                madrasah-info-btn
                                madrasah-info-reset-btn
                            "
                            onclick="
                                window.closeMadrasahInfoEditor()
                            "
                        >
                            বাতিল
                        </button>


                        <button
                            type="submit"
                            class="
                                madrasah-info-btn
                                madrasah-info-edit-btn
                            "
                        >
                            💾 তথ্য সংরক্ষণ
                        </button>

                    </div>

                </form>

            </div>

        `;


        document.body.appendChild(modal);


        /* ================================
           FORM SUBMIT
           ================================= */

        document
            .getElementById(
                "madrasahInfoEditForm"
            )
            .addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();

                    saveEditorData();

                }
            );


        /* ================================
           IMAGE PREVIEW
           ================================= */

        const fileInput =
            document.getElementById(
                "mi_photoFile"
            );

        fileInput.addEventListener(
            "change",
            function () {

                const file =
                    this.files &&
                    this.files[0];

                if (!file) {
                    return;
                }


                if (
                    !file.type.startsWith(
                        "image/"
                    )
                ) {

                    alert(
                        "শুধু ছবি নির্বাচন করুন।"
                    );

                    this.value = "";

                    return;
                }


                /* 3 MB */

                if (
                    file.size >
                    3 * 1024 * 1024
                ) {

                    alert(
                        "ছবির সাইজ ৩ MB-এর মধ্যে রাখুন।"
                    );

                    this.value = "";

                    return;
                }


                const reader =
                    new FileReader();

                reader.onload =
                    function (event) {

                        const preview =
                            document.getElementById(
                                "mi_photoPreview"
                            );

                        preview.src =
                            event.target.result;

                        preview.style.display =
                            "block";

                    };

                reader.readAsDataURL(file);

            }
        );


        /* ================================
           CLOSE OUTSIDE CLICK
           ================================= */

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    closeMadrasahInfoEditor();

                }

            }
        );

    }


    /* ========================================================
       10. OPEN EDITOR
       ======================================================== */

    function openMadrasahInfoEditor() {

        createEditorModal();

        const info =
            loadInfo();


        const fields = {

            mi_nameBangla:
                info.nameBangla,

            mi_nameEnglish:
                info.nameEnglish,

            mi_address:
                info.address,

            mi_establishmentYear:
                info.establishmentYear,

            mi_founder:
                info.founder,

            mi_eiin:
                info.eiin,

            mi_madrasahCode:
                info.madrasahCode,

            mi_principal:
                info.principal,

            mi_phone:
                info.phone,

            mi_email:
                info.email,

            mi_history:
                info.history,

            mi_education:
                info.education,

            mi_mission:
                info.mission,

            mi_achievements:
                info.achievements,

            mi_otherInfo:
                info.otherInfo

        };


        Object.keys(fields).forEach(
            function (id) {

                const element =
                    document.getElementById(id);

                if (element) {

                    element.value =
                        fields[id] || "";

                }

            }
        );


        const preview =
            document.getElementById(
                "mi_photoPreview"
            );

        if (info.photo) {

            preview.src =
                info.photo;

            preview.style.display =
                "block";

        } else {

            preview.src = "";

            preview.style.display =
                "none";

        }


        const fileInput =
            document.getElementById(
                "mi_photoFile"
            );

        if (fileInput) {
            fileInput.value = "";
        }


        const modal =
            document.getElementById(
                "madrasahInfoEditorModal"
            );

        modal.style.display =
            "flex";

        document.body.style.overflow =
            "hidden";
    }


    /* ========================================================
       11. CLOSE EDITOR
       ======================================================== */

    function closeMadrasahInfoEditor() {

        const modal =
            document.getElementById(
                "madrasahInfoEditorModal"
            );

        if (modal) {

            modal.style.display =
                "none";

        }

        document.body.style.overflow =
            "";
    }


    /* ========================================================
       12. SAVE EDITOR DATA
       ======================================================== */

    function saveEditorData() {

        const oldInfo =
            loadInfo();


        const get =
            function (id) {

                const element =
                    document.getElementById(id);

                return element
                    ? element.value.trim()
                    : "";

            };


        const newInfo = {

            nameBangla:
                get("mi_nameBangla"),

            nameEnglish:
                get("mi_nameEnglish"),

            address:
                get("mi_address"),

            establishmentYear:
                get("mi_establishmentYear"),

            founder:
                get("mi_founder"),

            eiin:
                get("mi_eiin"),

            madrasahCode:
                get("mi_madrasahCode"),

            principal:
                get("mi_principal"),

            phone:
                get("mi_phone"),

            email:
                get("mi_email"),

            history:
                get("mi_history"),

            education:
                get("mi_education"),

            mission:
                get("mi_mission"),

            achievements:
                get("mi_achievements"),

            otherInfo:
                get("mi_otherInfo"),


            /* ছবি */

            photo:
                oldInfo.photo || ""

        };


        /* ====================================================
           NEW PHOTO
           ==================================================== */

        const fileInput =
            document.getElementById(
                "mi_photoFile"
            );

        const file =
            fileInput &&
            fileInput.files &&
            fileInput.files[0];


        if (file) {

            const reader =
                new FileReader();

            reader.onload =
                function (event) {

                    newInfo.photo =
                        event.target.result;

                    finishSaveInfo(
                        newInfo
                    );

                };

            reader.onerror =
                function () {

                    alert(
                        "ছবি সংরক্ষণ করা যায়নি।"
                    );

                };

            reader.readAsDataURL(file);

            return;
        }


        finishSaveInfo(
            newInfo
        );
    }


    /* ========================================================
       13. FINISH SAVE
       ======================================================== */

    function finishSaveInfo(info) {

        const success =
            saveInfo(info);

        if (!success) {
            return;
        }


        closeMadrasahInfoEditor();

        renderMadrasahInfo();

        alert(
            "মাদ্রাসার পরিচিতির তথ্য সফলভাবে সংরক্ষণ হয়েছে।"
        );
    }


    /* ========================================================
       14. RESET INFORMATION
       ======================================================== */

    function resetMadrasahInfo() {

        const confirmReset =
            confirm(
                "মাদ্রাসার পরিচিতির তথ্য ডিফল্ট অবস্থায় ফিরিয়ে আনবেন?"
            );

        if (!confirmReset) {
            return;
        }


        saveInfo(
            Object.assign(
                {},
                DEFAULT_INFO
            )
        );


        closeMadrasahInfoEditor();

        renderMadrasahInfo();


        alert(
            "তথ্য ডিফল্ট অবস্থায় ফিরে গেছে।"
        );
    }


    /* ========================================================
       15. KEYBOARD ESCAPE
       ======================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeMadrasahInfoEditor();

            }

        }
    );


    /* ========================================================
       16. GLOBAL FUNCTIONS
       ======================================================== */

    window.openMadrasahInfoEditor =
        openMadrasahInfoEditor;

    window.closeMadrasahInfoEditor =
        closeMadrasahInfoEditor;

    window.resetMadrasahInfo =
        resetMadrasahInfo;

    window.renderMadrasahInfo =
        renderMadrasahInfo;


    /* ========================================================
       17. START
       ======================================================== */

    function initMadrasahInfo() {

        addModuleStyle();

        renderMadrasahInfo();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initMadrasahInfo
        );

    } else {

        initMadrasahInfo();

    }

})();
