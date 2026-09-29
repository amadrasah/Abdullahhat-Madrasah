/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   CALENDAR MANAGEMENT
   Separate calendar.js
   ========================================================= */

(function () {

    "use strict";

    /* =====================================================
       BASIC CONFIGURATION
    ===================================================== */

    const STORAGE_KEY = "madrasah_calendar_events";

    const DEFAULT_YEARS = [
        "2025",
        "2026",
        "2027",
        "2028"
    ];

    const MONTH_NAMES = [
        "জানুয়ারি",
        "ফেব্রুয়ারি",
        "মার্চ",
        "এপ্রিল",
        "মে",
        "জুন",
        "জুলাই",
        "আগস্ট",
        "সেপ্টেম্বর",
        "অক্টোবর",
        "নভেম্বর",
        "ডিসেম্বর"
    ];

    const WEEK_DAYS = [
        "রবি",
        "সোম",
        "মঙ্গল",
        "বুধ",
        "বৃহস্পতি",
        "শুক্র",
        "শনি"
    ];

    const EVENT_TYPES = [
        "পরীক্ষা",
        "ছুটি",
        "ভর্তি",
        "ফলাফল প্রকাশ",
        "সভা",
        "অনুষ্ঠান",
        "গুরুত্বপূর্ণ দিন",
        "অন্যান্য"
    ];


    /* =====================================================
       STORAGE
    ===================================================== */

    function loadCalendarEvents() {

        try {

            const saved =
                localStorage.getItem(STORAGE_KEY);

            if (!saved) {
                return [];
            }

            const data = JSON.parse(saved);

            return Array.isArray(data) ? data : [];

        } catch (error) {

            console.error(
                "Calendar data load error:",
                error
            );

            return [];
        }
    }


    function saveCalendarEvents(events) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(events)
            );

        } catch (error) {

            console.error(
                "Calendar data save error:",
                error
            );

            alert(
                "ক্যালেন্ডারের তথ্য সংরক্ষণ করা সম্ভব হয়নি।"
            );
        }
    }


    let calendarEvents = loadCalendarEvents();


    /* =====================================================
       GET YEARS
    ===================================================== */

    function getCalendarYears() {

        let years = [];

        try {

            const savedYears =
                localStorage.getItem("madrasah_years");

            if (savedYears) {

                const parsed =
                    JSON.parse(savedYears);

                if (Array.isArray(parsed)) {

                    years = parsed.map(function (year) {
                        return String(year);
                    });

                } else if (
                    parsed &&
                    Array.isArray(parsed.years)
                ) {

                    years = parsed.years.map(function (year) {
                        return String(year);
                    });
                }
            }

        } catch (error) {

            console.warn(
                "Year data could not be loaded.",
                error
            );
        }


        DEFAULT_YEARS.forEach(function (year) {

            if (years.indexOf(year) === -1) {
                years.push(year);
            }

        });


        years = years
            .filter(Boolean)
            .map(String);


        years = Array.from(
            new Set(years)
        );


        years.sort(function (a, b) {

            return Number(a) - Number(b);

        });


        return years;
    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =====================================================
       GET ELEMENT
    ===================================================== */

    function getElement(id) {

        return document.getElementById(id);

    }


    /* =====================================================
       BUILD CALENDAR UI
    ===================================================== */

    function buildCalendarUI() {

        const container =
            getElement("calendar");

        if (!container) {

            console.warn(
                "Calendar section (#calendar) পাওয়া যায়নি।"
            );

            return;
        }


        container.innerHTML = `

            <div class="calendar-manager">

                <div class="calendar-form-box">

                    <h3>
                        📅 নতুন ক্যালেন্ডার ইভেন্ট
                    </h3>

                    <div
                        id="calendarForm"
                        class="calendar-form-grid"
                    >

                        <div>

                            <label>
                                সন
                            </label>

                            <select
                                id="calendarYear"
                            ></select>

                        </div>


                        <div>

                            <label>
                                মাস
                            </label>

                            <select
                                id="calendarMonth"
                            ></select>

                        </div>


                        <div>

                            <label>
                                তারিখ
                            </label>

                            <select
                                id="calendarDay"
                            ></select>

                        </div>


                        <div>

                            <label>
                                ইভেন্টের ধরন
                            </label>

                            <select
                                id="calendarType"
                            ></select>

                        </div>


                        <div
                            style="grid-column:1/-1;"
                        >

                            <label>
                                শিরোনাম
                            </label>

                            <input
                                type="text"
                                id="calendarTitle"
                                placeholder="যেমন: বার্ষিক পরীক্ষা"
                            >

                        </div>


                        <div
                            style="grid-column:1/-1;"
                        >

                            <label>
                                বিস্তারিত
                            </label>

                            <textarea
                                id="calendarDescription"
                                rows="3"
                                placeholder="প্রয়োজনে বিস্তারিত লিখুন"
                            ></textarea>

                        </div>


                        <div
                            class="calendar-action-row"
                            style="grid-column:1/-1;"
                        >

                            <button
                                type="button"
                                onclick="addCalendarEvent()"
                            >
                                ➕ ইভেন্ট সংরক্ষণ
                            </button>


                            <button
                                type="button"
                                onclick="resetCalendarForm()"
                            >
                                ♻️ পরিষ্কার
                            </button>

                        </div>

                    </div>

                </div>


                <div class="calendar-filter-box">

                    <h3>
                        🔎 ক্যালেন্ডার দেখুন
                    </h3>


                    <div class="calendar-filter-grid">

                        <div>

                            <label>
                                সন
                            </label>

                            <select
                                id="calendarFilterYear"
                            ></select>

                        </div>


                        <div>

                            <label>
                                মাস
                            </label>

                            <select
                                id="calendarFilterMonth"
                            ></select>

                        </div>

                    </div>


                    <div
                        class="calendar-action-row"
                    >

                        <button
                            type="button"
                            onclick="renderCalendar()"
                        >
                            🔄 দেখুন
                        </button>


                        <button
                            type="button"
                            onclick="printCalendar()"
                        >
                            🖨️ প্রিন্ট
                        </button>

                    </div>

                </div>


                <div
                    id="calendarMonthView"
                    class="calendar-month-view"
                ></div>


                <div
                    id="calendarEventList"
                    class="calendar-event-list"
                ></div>

            </div>

        `;


        populateCalendarControls();

        renderCalendar();

    }


    /* =====================================================
       POPULATE CONTROLS
    ===================================================== */

    function populateCalendarControls() {

        const yearSelect =
            getElement("calendarYear");

        const filterYear =
            getElement("calendarFilterYear");

        const monthSelect =
            getElement("calendarMonth");

        const filterMonth =
            getElement("calendarFilterMonth");

        const daySelect =
            getElement("calendarDay");

        const typeSelect =
            getElement("calendarType");


        const years =
            getCalendarYears();


        if (yearSelect) {

            yearSelect.innerHTML = "";

            years.forEach(function (year) {

                const option =
                    document.createElement("option");

                option.value = year;
                option.textContent = year;

                yearSelect.appendChild(option);

            });

        }


        if (filterYear) {

            filterYear.innerHTML = "";

            years.forEach(function (year) {

                const option =
                    document.createElement("option");

                option.value = year;
                option.textContent = year;

                filterYear.appendChild(option);

            });

        }


        const currentYear =
            String(new Date().getFullYear());


        if (
            yearSelect &&
            years.indexOf(currentYear) !== -1
        ) {

            yearSelect.value =
                currentYear;

        }


        if (
            filterYear &&
            years.indexOf(currentYear) !== -1
        ) {

            filterYear.value =
                currentYear;

        }


        if (monthSelect) {

            monthSelect.innerHTML = "";

            MONTH_NAMES.forEach(
                function (month, index) {

                    const option =
                        document.createElement("option");

                    option.value =
                        String(index + 1);

                    option.textContent =
                        month;

                    monthSelect.appendChild(option);

                }
            );

        }


        if (filterMonth) {

            filterMonth.innerHTML =
                `<option value="">সব মাস</option>`;

            MONTH_NAMES.forEach(
                function (month, index) {

                    const option =
                        document.createElement("option");

                    option.value =
                        String(index + 1);

                    option.textContent =
                        month;

                    filterMonth.appendChild(option);

                }
            );

        }


        const currentMonth =
            new Date().getMonth() + 1;


        if (monthSelect) {

            monthSelect.value =
                String(currentMonth);

        }


        if (filterMonth) {

            filterMonth.value =
                String(currentMonth);

        }


        if (daySelect) {

            populateCalendarDays();

        }


        if (typeSelect) {

            typeSelect.innerHTML = "";

            EVENT_TYPES.forEach(
                function (type) {

                    const option =
                        document.createElement("option");

                    option.value = type;
                    option.textContent = type;

                    typeSelect.appendChild(option);

                }
            );

        }


        if (monthSelect) {

            monthSelect.addEventListener(
                "change",
                populateCalendarDays
            );

        }


        if (yearSelect) {

            yearSelect.addEventListener(
                "change",
                populateCalendarDays
            );

        }


        if (filterYear) {

            filterYear.addEventListener(
                "change",
                renderCalendar
            );

        }


        if (filterMonth) {

            filterMonth.addEventListener(
                "change",
                renderCalendar
            );

        }

    }


    /* =====================================================
       POPULATE DAYS
    ===================================================== */

    function populateCalendarDays() {

        const yearSelect =
            getElement("calendarYear");

        const monthSelect =
            getElement("calendarMonth");

        const daySelect =
            getElement("calendarDay");


        if (
            !yearSelect ||
            !monthSelect ||
            !daySelect
        ) {
            return;
        }


        const year =
            Number(yearSelect.value);

        const month =
            Number(monthSelect.value);


        if (!year || !month) {
            return;
        }


        const daysInMonth =
            new Date(
                year,
                month,
                0
            ).getDate();


        const previousValue =
            daySelect.value;


        daySelect.innerHTML = "";


        for (
            let day = 1;
            day <= daysInMonth;
            day++
        ) {

            const option =
                document.createElement("option");

            option.value =
                String(day);

            option.textContent =
                String(day);

            daySelect.appendChild(option);

        }


        if (
            previousValue &&
            Number(previousValue) <= daysInMonth
        ) {

            daySelect.value =
                previousValue;

        } else {

            daySelect.value = "1";

        }

    }


    /* =====================================================
       ADD EVENT
    ===================================================== */

    function addCalendarEvent() {

        const year =
            getElement("calendarYear")?.value || "";

        const month =
            getElement("calendarMonth")?.value || "";

        const day =
            getElement("calendarDay")?.value || "";

        const type =
            getElement("calendarType")?.value || "";

        const title =
            getElement("calendarTitle")?.value.trim() || "";

        const description =
            getElement("calendarDescription")
                ?.value.trim() || "";


        if (!year) {

            alert("সন নির্বাচন করুন।");
            return;

        }


        if (!month) {

            alert("মাস নির্বাচন করুন।");
            return;

        }


        if (!day) {

            alert("তারিখ নির্বাচন করুন।");
            return;

        }


        if (!type) {

            alert("ইভেন্টের ধরন নির্বাচন করুন।");
            return;

        }


        if (!title) {

            alert("ইভেন্টের শিরোনাম লিখুন।");
            return;

        }


        const event = {

            id:
                Date.now().toString() +
                Math.random()
                    .toString(36)
                    .slice(2),

            year: String(year),

            month: String(month),

            day: String(day),

            type: type,

            title: title,

            description: description,

            createdAt:
                new Date().toISOString()

        };


        calendarEvents.push(event);

        saveCalendarEvents(
            calendarEvents
        );


        alert(
            "ক্যালেন্ডার ইভেন্ট সফলভাবে সংরক্ষণ হয়েছে।"
        );


        resetCalendarForm();

        renderCalendar();

    }


    /* =====================================================
       DELETE EVENT
    ===================================================== */

    function deleteCalendarEvent(id) {

        const event =
            calendarEvents.find(
                function (item) {

                    return String(item.id) ===
                        String(id);

                }
            );


        if (!event) {

            alert(
                "ইভেন্টটি পাওয়া যায়নি।"
            );

            return;

        }


        const confirmed =
            confirm(
                "আপনি কি এই ইভেন্টটি মুছে ফেলতে চান?"
            );


        if (!confirmed) {
            return;
        }


        calendarEvents =
            calendarEvents.filter(
                function (item) {

                    return String(item.id) !==
                        String(id);

                }
            );


        saveCalendarEvents(
            calendarEvents
        );


        renderCalendar();

    }


    /* =====================================================
       RESET FORM
    ===================================================== */

    function resetCalendarForm() {

        const title =
            getElement("calendarTitle");

        const description =
            getElement("calendarDescription");

        const type =
            getElement("calendarType");

        const year =
            getElement("calendarYear");

        const month =
            getElement("calendarMonth");

        const day =
            getElement("calendarDay");


        if (title) {
            title.value = "";
        }


        if (description) {
            description.value = "";
        }


        if (type) {
            type.value =
                EVENT_TYPES[0];
        }


        if (year) {

            const currentYear =
                String(new Date().getFullYear());

            const years =
                getCalendarYears();

            if (
                years.indexOf(currentYear) !== -1
            ) {

                year.value =
                    currentYear;

            }

        }


        if (month) {

            month.value =
                String(
                    new Date().getMonth() + 1
                );

        }


        populateCalendarDays();


        if (day) {
            day.value = "1";
        }

    }


    /* =====================================================
       GET FILTERED EVENTS
    ===================================================== */

    function getFilteredCalendarEvents() {

        const filterYear =
            getElement("calendarFilterYear")
                ?.value || "";

        const filterMonth =
            getElement("calendarFilterMonth")
                ?.value || "";


        return calendarEvents
            .filter(function (event) {

                const sameYear =
                    !filterYear ||
                    String(event.year) ===
                    String(filterYear);


                const sameMonth =
                    !filterMonth ||
                    String(event.month) ===
                    String(filterMonth);


                return sameYear &&
                    sameMonth;

            })
            .sort(function (a, b) {

                if (
                    Number(a.year) !==
                    Number(b.year)
                ) {

                    return (
                        Number(a.year) -
                        Number(b.year)
                    );

                }


                if (
                    Number(a.month) !==
                    Number(b.month)
                ) {

                    return (
                        Number(a.month) -
                        Number(b.month)
                    );

                }


                return (
                    Number(a.day) -
                    Number(b.day)
                );

            });

    }


    /* =====================================================
       RENDER CALENDAR
    ===================================================== */

    function renderCalendar() {

        const filterYear =
            getElement("calendarFilterYear")
                ?.value || "";

        const filterMonth =
            getElement("calendarFilterMonth")
                ?.value || "";


        if (!filterYear) {
            return;
        }


        renderMonthCalendar(
            filterYear,
            filterMonth
        );


        renderCalendarEventList(
            filterYear,
            filterMonth
        );

    }


    /* =====================================================
       MONTH CALENDAR VIEW
    ===================================================== */

    function renderMonthCalendar(
        year,
        month
    ) {

        const container =
            getElement("calendarMonthView");


        if (!container) {
            return;
        }


        if (!month) {

            const yearEvents =
                calendarEvents.filter(
                    function (event) {

                        return String(event.year) ===
                            String(year);

                    }
                );


            container.innerHTML = `

                <div class="calendar-month-title">

                    📅 ${escapeHTML(year)} সালের
                    ক্যালেন্ডার

                </div>

                <div class="calendar-grid">

                    ${MONTH_NAMES.map(
                        function (monthName, index) {

                            const monthNumber =
                                index + 1;

                            const count =
                                yearEvents.filter(
                                    function (event) {

                                        return Number(
                                            event.month
                                        ) === monthNumber;

                                    }
                                ).length;


                            return `

                                <div
                                    class="calendar-event-card"
                                    style="cursor:pointer;"
                                    onclick="
                                        document.getElementById(
                                            'calendarFilterMonth'
                                        ).value='${monthNumber}';
                                        renderCalendar();
                                    "
                                >

                                    <strong>
                                        ${escapeHTML(monthName)}
                                    </strong>

                                    <div>
                                        মোট ইভেন্ট:
                                        ${count}
                                    </div>

                                </div>

                            `;

                        }
                    ).join("")}

                </div>

            `;

            return;
        }


        const monthNumber =
            Number(month);


        const firstDay =
            new Date(
                Number(year),
                monthNumber - 1,
                1
            ).getDay();


        const daysInMonth =
            new Date(
                Number(year),
                monthNumber,
                0
            ).getDate();


        const monthEvents =
            calendarEvents.filter(
                function (event) {

                    return (
                        String(event.year) ===
                        String(year) &&

                        Number(event.month) ===
                        monthNumber
                    );

                }
            );


        let html = `

            <div class="calendar-month-title">

                📅 ${escapeHTML(year)} সালের
                ${escapeHTML(
                    MONTH_NAMES[monthNumber - 1]
                )}

            </div>

            <div class="calendar-grid">

        `;


        WEEK_DAYS.forEach(
            function (dayName) {

                html += `

                    <div
                        class="calendar-weekday"
                    >
                        ${dayName}
                    </div>

                `;

            }
        );


        for (
            let blank = 0;
            blank < firstDay;
            blank++
        ) {

            html += `

                <div
                    class="calendar-day calendar-day-empty"
                ></div>

            `;

        }


        for (
            let day = 1;
            day <= daysInMonth;
            day++
        ) {

            const dayEvents =
                monthEvents.filter(
                    function (event) {

                        return Number(
                            event.day
                        ) === day;

                    }
                );


            html += `

                <div class="calendar-day">

                    <div
                        class="calendar-day-number"
                    >
                        ${day}
                    </div>

                    ${dayEvents.map(
                        function (event) {

                            return `

                                <div
                                    class="calendar-day-event"
                                    title="${escapeHTML(
                                        event.description || ""
                                    )}"
                                >

                                    <strong>
                                        ${escapeHTML(
                                            event.type
                                        )}
                                    </strong>

                                    <br>

                                    ${escapeHTML(
                                        event.title
                                    )}

                                </div>

                            `;

                        }
                    ).join("")}

                </div>

            `;

        }


        html += `
            </div>
        `;


        container.innerHTML =
            html;

    }


    /* =====================================================
       EVENT LIST
    ===================================================== */

    function renderCalendarEventList(
        year,
        month
    ) {

        const container =
            getElement("calendarEventList");


        if (!container) {
            return;
        }


        const events =
            getFilteredCalendarEvents();


        if (!events.length) {

            container.innerHTML = `

                <div class="calendar-empty">

                    📭 এই সময়ের জন্য কোনো
                    ক্যালেন্ডার ইভেন্ট নেই।

                </div>

            `;

            return;
        }


        let html = `

            <h3>
                📋 নির্ধারিত ইভেন্টসমূহ
            </h3>

        `;


        events.forEach(
            function (event) {

                const monthName =
                    MONTH_NAMES[
                        Number(event.month) - 1
                    ] || "";


                html += `

                    <div
                        class="calendar-event-card"
                    >

                        <div>

                            <strong>
                                ${escapeHTML(
                                    event.day
                                )} ${escapeHTML(
                                    monthName
                                )} ${escapeHTML(
                                    event.year
                                )}
                            </strong>

                        </div>


                        <div
                            style="margin-top:5px;"
                        >

                            <strong>
                                ${escapeHTML(
                                    event.type
                                )}
                            </strong>

                            —
                            ${escapeHTML(
                                event.title
                            )}

                        </div>


                        ${
                            event.description
                                ? `
                                    <div
                                        style="
                                            margin-top:5px;
                                        "
                                    >
                                        ${escapeHTML(
                                            event.description
                                        )}
                                    </div>
                                  `
                                : ""
                        }


                        <div
                            style="
                                margin-top:10px;
                            "
                        >

                            <button
                                type="button"
                                class="calendar-delete-btn"
                                onclick="
                                    deleteCalendarEvent(
                                        '${escapeHTML(event.id)}'
                                    )
                                "
                            >
                                🗑️ মুছে ফেলুন
                            </button>

                        </div>

                    </div>

                `;

            }
        );


        container.innerHTML =
            html;

    }


    /* =====================================================
       PRINT CALENDAR
    ===================================================== */

    function printCalendar() {

        const filterYear =
            getElement("calendarFilterYear")
                ?.value || "";

        const filterMonth =
            getElement("calendarFilterMonth")
                ?.value || "";


        if (!filterYear) {

            alert(
                "প্রথমে সন নির্বাচন করুন।"
            );

            return;
        }


        const events =
            getFilteredCalendarEvents();


        const monthTitle =
            filterMonth
                ? MONTH_NAMES[
                    Number(filterMonth) - 1
                ]
                : "পুরো বছর";


        let rows = "";


        if (!events.length) {

            rows = `

                <tr>

                    <td
                        colspan="6"
                        style="text-align:center;"
                    >
                        কোনো ইভেন্ট পাওয়া যায়নি।
                    </td>

                </tr>

            `;

        } else {

            events.forEach(
                function (event, index) {

                    const monthName =
                        MONTH_NAMES[
                            Number(event.month) - 1
                        ] || "";


                    rows += `

                        <tr>

                            <td>
                                ${index + 1}
                            </td>

                            <td>
                                ${escapeHTML(
                                    event.year
                                )}
                            </td>

                            <td>
                                ${escapeHTML(
                                    event.day
                                )}
                                ${escapeHTML(
                                    monthName
                                )}
                            </td>

                            <td>
                                ${escapeHTML(
                                    event.type
                                )}
                            </td>

                            <td>
                                ${escapeHTML(
                                    event.title
                                )}
                            </td>

                            <td>
                                ${escapeHTML(
                                    event.description || ""
                                )}
                            </td>

                        </tr>

                    `;

                }
            );

        }


        const win =
            window.open(
                "",
                "_blank",
                "width=1000,height=800"
            );


        if (!win) {

            alert(
                "প্রিন্ট করার জন্য Pop-up অনুমতি দিন।"
            );

            return;
        }


        win.document.write(`

            <!DOCTYPE html>

            <html lang="bn">

            <head>

                <meta charset="UTF-8">

                <title>
                    Calendar - ${escapeHTML(filterYear)}
                </title>


                <style>

                    * {
                        box-sizing:border-box;
                    }


                    body {

                        margin:0;

                        padding:20px;

                        font-family:
                            Arial,
                            "Noto Sans Bengali",
                            sans-serif;

                        color:#111;

                        background:#fff;

                    }


                    h1 {

                        text-align:center;

                        margin:0;

                        font-size:22px;

                    }


                    .address {

                        text-align:center;

                        margin-top:5px;

                        font-size:14px;

                    }


                    .title {

                        text-align:center;

                        margin-top:10px;

                        font-size:18px;

                        font-weight:bold;

                    }


                    table {

                        width:100%;

                        border-collapse:collapse;

                        margin-top:20px;

                    }


                    th,
                    td {

                        border:1px solid #444;

                        padding:7px;

                        text-align:left;

                        vertical-align:top;

                    }


                    th {

                        text-align:center;

                    }


                    @media print {

                        body {

                            padding:10mm;

                        }

                    }

                </style>

            </head>


            <body>

                <h1>
                    Abdullah Hat Islamia
                    Fazil (Degree) Madrasah
                </h1>


                <div class="address">
                    নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
                </div>


                <div class="title">

                    📅 ${escapeHTML(filterYear)}
                    সালের
                    ${escapeHTML(monthTitle)}
                    ক্যালেন্ডার

                </div>


                <table>

                    <thead>

                        <tr>

                            <th>
                                ক্রম
                            </th>

                            <th>
                                সন
                            </th>

                            <th>
                                তারিখ
                            </th>

                            <th>
                                ধরন
                            </th>

                            <th>
                                শিরোনাম
                            </th>

                            <th>
                                বিস্তারিত
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${rows}

                    </tbody>

                </table>

            </body>

            </html>

        `);


        win.document.close();

        win.focus();


        setTimeout(
            function () {

                win.print();

                win.close();

            },
            500
        );

    }


    /* =====================================================
       REFRESH YEARS
       অন্য জায়গা থেকে বছর যোগ হলে ক্যালেন্ডারেও আসবে
    ===================================================== */

    function refreshCalendarYears() {

        const currentYear =
            getElement("calendarYear")
                ?.value || "";

        const currentFilterYear =
            getElement("calendarFilterYear")
                ?.value || "";


        populateCalendarControls();


        const yearSelect =
            getElement("calendarYear");

        const filterYear =
            getElement("calendarFilterYear");


        if (
            yearSelect &&
            currentYear
        ) {

            const optionExists =
                Array.from(
                    yearSelect.options
                ).some(
                    function (option) {

                        return option.value ===
                            String(currentYear);

                    }
                );


            if (optionExists) {

                yearSelect.value =
                    currentYear;

            }

        }


        if (
            filterYear &&
            currentFilterYear
        ) {

            const optionExists =
                Array.from(
                    filterYear.options
                ).some(
                    function (option) {

                        return option.value ===
                            String(currentFilterYear);

                    }
                );


            if (optionExists) {

                filterYear.value =
                    currentFilterYear;

            }

        }


        renderCalendar();

    }


    /* =====================================================
       GLOBAL FUNCTIONS
    ===================================================== */

    window.addCalendarEvent =
        addCalendarEvent;


    window.deleteCalendarEvent =
        deleteCalendarEvent;


    window.resetCalendarForm =
        resetCalendarForm;


    window.renderCalendar =
        renderCalendar;


    window.printCalendar =
        printCalendar;


    window.refreshCalendarYears =
        refreshCalendarYears;


    window.populateCalendarDays =
        populateCalendarDays;


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function initializeCalendar() {

        buildCalendarUI();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeCalendar
        );

    } else {

        initializeCalendar();

    }

})();
