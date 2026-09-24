/* =========================================================
   INCOME–EXPENSE FIX
   Abdullah Hat Islamia Fazil (Degree) Madrasah

   IMPORTANT:
   This file is an ADD-ON.
   Do NOT delete or replace script(3).js
========================================================= */

(function () {

    /* =====================================================
       1. NON-STUDENT INCOME CATEGORIES
       এগুলোর জন্য শিক্ষার্থীর তথ্য বাধ্যতামূলক নয়
    ===================================================== */

    const NON_STUDENT_INCOME_CATEGORIES = new Set([
        "সরকারি অনুদান",
        "বেসরকারি অনুদান",
        "দান",
        "অন্যান্য আয়"
    ]);


    /* =====================================================
       2. STUDENT LOOKUP
       সন + শ্রেণি + রোল দিয়ে শিক্ষার্থী খুঁজবে
    ===================================================== */

    window.findIncomeStudent = function () {

        const year =
            document.getElementById("incomeYear")?.value || "";

        const classId =
            document.getElementById("incomeClass")?.value || "";

        const roll =
            document.getElementById("incomeRoll")?.value.trim() || "";

        const nameInput =
            document.getElementById("incomeStudentName");

        const idInput =
            document.getElementById("incomeStudentId");


        if (nameInput) nameInput.value = "";
        if (idInput) idInput.value = "";


        if (!year || !classId || !roll) {
            return;
        }


        let students = [];

        if (typeof admissionStudents !== "undefined") {
            students = admissionStudents || [];
        }


        const className =
            typeof CLASS_LIST !== "undefined"
                ? (CLASS_LIST[classId] || "")
                : "";


        const student = students.find(function (student) {

            const sameYear =
                String(student.year || "") ===
                String(year);

            const sameClass =
                String(student.classCode || "") ===
                    String(classId)
                ||
                String(student.className || "") ===
                    String(className);

            const sameRoll =
                String(student.roll || "") ===
                String(roll);


            return (
                sameYear &&
                sameClass &&
                sameRoll
            );

        });


        if (!student) {

            if (nameInput) {
                nameInput.value =
                    "শিক্ষার্থী পাওয়া যায়নি";
            }

            return;
        }


        if (nameInput) {
            nameInput.value =
                student.name || "";
        }


        if (idInput) {
            idInput.value =
                student.studentId ||
                student.id ||
                "";
        }

    };


    /* =====================================================
       3. CATEGORY CHANGE
       শিক্ষার্থী-সংক্রান্ত খাত হলে তথ্য নেওয়া যাবে।
       কিন্তু অনুদান/দান/অন্যান্য আয়ে বাধ্যতামূলক নয়।
    ===================================================== */

    window.updateIncomeStudentRequirement = function () {

        const category =
            document.getElementById("incomeHead")?.value || "";

        const classInput =
            document.getElementById("incomeClass");

        const rollInput =
            document.getElementById("incomeRoll");

        const nameInput =
            document.getElementById("incomeStudentName");

        const idInput =
            document.getElementById("incomeStudentId");


        const optional =
            NON_STUDENT_INCOME_CATEGORIES.has(category);


        if (optional) {

            /*
             * শিক্ষার্থীর তথ্য OPTIONAL
             */

            if (classInput) {
                classInput.removeAttribute("required");
            }

            if (rollInput) {
                rollInput.removeAttribute("required");
            }

            if (nameInput) {
                nameInput.removeAttribute("required");
            }

            if (idInput) {
                idInput.removeAttribute("required");
            }


            /*
             * placeholder পরিবর্তন
             */

            if (classInput) {
                classInput.title =
                    "এই আয়ের ক্ষেত্রে শ্রেণি দেওয়া বাধ্যতামূলক নয়";
            }

            if (rollInput) {
                rollInput.placeholder =
                    "রোল নম্বর (ঐচ্ছিক)";
            }

        } else {

            /*
             * শিক্ষার্থী-ভিত্তিক আয়
             */

            if (classInput) {
                classInput.setAttribute("required", "required");
                classInput.title =
                    "শিক্ষার্থী-ভিত্তিক আয়ের জন্য শ্রেণি নির্বাচন করুন";
            }

            if (rollInput) {
                rollInput.setAttribute("required", "required");
                rollInput.placeholder =
                    "রোল নম্বর লিখুন";
            }

        }

    };


    /* =====================================================
       4. SUBMIT INCOME
       নতুন সংরক্ষণ ব্যবস্থা
    ===================================================== */

    window.submitIncome = function () {

        const year =
            document.getElementById("incomeYear")?.value || "";

        const month =
            document.getElementById("incomeMonth")?.value || "";

        const category =
            document.getElementById("incomeHead")?.value || "";

        const classId =
            document.getElementById("incomeClass")?.value || "";

        const roll =
            document.getElementById("incomeRoll")?.value.trim() || "";

        const nameInput =
            document.getElementById("incomeStudentName");

        const idInput =
            document.getElementById("incomeStudentId");

        const amount =
            Number(
                document.getElementById("incomeAmount")?.value || 0
            );


        let studentName =
            nameInput?.value || "";

        let studentId =
            idInput?.value || "";


        /* ---------------------------------------------
           BASIC VALIDATION
        --------------------------------------------- */

        if (!year) {
            alert("সন নির্বাচন করুন।");
            return;
        }


        if (!month) {
            alert("মাস নির্বাচন করুন।");
            return;
        }


        if (!category) {
            alert("আয়ের খাত নির্বাচন করুন।");
            return;
        }


        if (!amount || amount <= 0) {
            alert("টাকার পরিমাণ লিখুন।");
            return;
        }


        /* ---------------------------------------------
           STUDENT REQUIRED OR OPTIONAL?
        --------------------------------------------- */

        const studentOptional =
            NON_STUDENT_INCOME_CATEGORIES.has(category);


        /*
         * যদি শিক্ষার্থী-ভিত্তিক আয় হয়
         */

        if (!studentOptional) {

            if (!classId) {
                alert("শ্রেণি নির্বাচন করুন।");
                return;
            }


            if (!roll) {
                alert("রোল নম্বর লিখুন।");
                return;
            }


            /*
             * আবার সরাসরি database থেকে lookup
             */

            let students = [];

            if (typeof admissionStudents !== "undefined") {
                students = admissionStudents || [];
            }


            const className =
                typeof CLASS_LIST !== "undefined"
                    ? (CLASS_LIST[classId] || "")
                    : "";


            const student =
                students.find(function (s) {

                    const sameYear =
                        String(s.year || "") ===
                        String(year);

                    const sameClass =
                        String(s.classCode || "") ===
                            String(classId)
                        ||
                        String(s.className || "") ===
                            String(className);

                    const sameRoll =
                        String(s.roll || "") ===
                        String(roll);


                    return (
                        sameYear &&
                        sameClass &&
                        sameRoll
                    );

                });


            if (!student) {

                alert(
                    "সন, শ্রেণি ও রোল অনুযায়ী শিক্ষার্থী পাওয়া যায়নি।"
                );

                return;
            }


            studentName =
                student.name || "";

            studentId =
                student.studentId ||
                student.id ||
                "";


            if (!studentName) {
                alert("শিক্ষার্থীর নাম পাওয়া যায়নি।");
                return;
            }


            if (!studentId) {
                alert("Student ID পাওয়া যায়নি।");
                return;
            }

        }


        /* ---------------------------------------------
           OPTIONAL INCOME
           যেমন অনুদান/দান/অন্যান্য আয়

           যদি শ্রেণি + রোল দেওয়া থাকে,
           তাহলে শিক্ষার্থীকেও যুক্ত করা হবে।
           না দিলে সমস্যা নেই।
        --------------------------------------------- */

        if (
            studentOptional &&
            classId &&
            roll
        ) {

            let students = [];

            if (typeof admissionStudents !== "undefined") {
                students = admissionStudents || [];
            }


            const className =
                typeof CLASS_LIST !== "undefined"
                    ? (CLASS_LIST[classId] || "")
                    : "";


            const student =
                students.find(function (s) {

                    return (
                        String(s.year || "") === String(year) &&
                        (
                            String(s.classCode || "") ===
                                String(classId)
                            ||
                            String(s.className || "") ===
                                String(className)
                        ) &&
                        String(s.roll || "") ===
                            String(roll)
                    );

                });


            if (student) {

                studentName =
                    student.name || "";

                studentId =
                    student.studentId ||
                    student.id ||
                    "";

            }

        }


        /* ---------------------------------------------
           RECEIPT NUMBER
        --------------------------------------------- */

        let receiptNo = "";

        if (
            typeof getNextIncomeExpenseReceiptNo ===
            "function"
        ) {

            receiptNo =
                getNextIncomeExpenseReceiptNo(
                    year,
                    month
                );

        } else {

            receiptNo =
                "INC-" +
                Date.now();

        }


        /* ---------------------------------------------
           ENTRY
        --------------------------------------------- */

        const entry = {

            id:
                Date.now().toString(),

            type:
                "income",

            year:
                year,

            month:
                month,

            category:
                category,

            classCode:
                classId,

            className:
                typeof CLASS_LIST !== "undefined"
                    ? (CLASS_LIST[classId] || "")
                    : "",

            roll:
                roll,

            studentName:
                studentName,

            studentId:
                studentId,

            amount:
                amount,

            receiptNo:
                receiptNo,

            date:
                new Date().toISOString()

        };


        /* ---------------------------------------------
           SAVE
        --------------------------------------------- */

        if (
            typeof incomeExpenseData ===
            "undefined"
        ) {

            alert(
                "আয়-ব্যয়ের ডাটা সিস্টেম পাওয়া যায়নি।"
            );

            return;
        }


        incomeExpenseData.push(entry);


        if (
            typeof saveIncomeExpenseData ===
            "function"
        ) {
            saveIncomeExpenseData();
        }


        /* ---------------------------------------------
           SUCCESS
        --------------------------------------------- */

        alert(
            "আয় সফলভাবে সংরক্ষণ হয়েছে।\n\n" +
            "রসিদ নং: " +
            receiptNo
        );


        /*
         * Summary/Table refresh
         */

        if (
            typeof renderIncomeExpenseSummary ===
            "function"
        ) {
            renderIncomeExpenseSummary();
        }


        if (
            typeof renderIncomeExpenseTable ===
            "function"
        ) {
            renderIncomeExpenseTable();
        }


        /*
         * রসিদ সরাসরি প্রিন্ট
         */

        if (
            typeof printIncomeExpenseReceipt ===
            "function"
        ) {

            setTimeout(function () {

                printIncomeExpenseReceipt(
                    entry.id
                );

            }, 300);

        }


        /* ---------------------------------------------
           FORM CLEAR
        --------------------------------------------- */

        if (
            typeof clearIncomeForm ===
            "function"
        ) {

            setTimeout(function () {

                clearIncomeForm();

            }, 500);

        }

    };


    /* =====================================================
       5. EVENT LISTENERS
    ===================================================== */

    function attachIncomeFixEvents() {

        const head =
            document.getElementById("incomeHead");

        const year =
            document.getElementById("incomeYear");

        const classInput =
            document.getElementById("incomeClass");

        const rollInput =
            document.getElementById("incomeRoll");


        if (head) {

            head.addEventListener(
                "change",
                function () {

                    updateIncomeStudentRequirement();

                }
            );

        }


        if (year) {

            year.addEventListener(
                "change",
                function () {

                    const name =
                        document.getElementById(
                            "incomeStudentName"
                        );

                    const id =
                        document.getElementById(
                            "incomeStudentId"
                        );

                    if (name) name.value = "";
                    if (id) id.value = "";

                    findIncomeStudent();

                }
            );

        }


        if (classInput) {

            classInput.addEventListener(
                "change",
                function () {

                    findIncomeStudent();

                }
            );

        }


        if (rollInput) {

            rollInput.addEventListener(
                "input",
                function () {

                    findIncomeStudent();

                }
            );

        }


        updateIncomeStudentRequirement();

    }


    /* =====================================================
       6. A5 RECEIPT PRINT FIX

       A4-এর অর্ধেক = A5
       148mm × 210mm
    ===================================================== */

    window.printIncomeExpenseReceipt =
        function (id) {

            let data = [];

            if (
                typeof incomeExpenseData !==
                "undefined"
            ) {
                data = incomeExpenseData || [];
            }


            const item =
                data.find(function (record) {

                    return String(record.id) ===
                        String(id);

                });


            if (!item) {

                alert(
                    "রসিদের তথ্য পাওয়া যায়নি।"
                );

                return;
            }


            const win =
                window.open(
                    "",
                    "_blank",
                    "width=700,height=900"
                );


            if (!win) {

                alert(
                    "রসিদ প্রিন্ট করার জন্য Pop-up অনুমতি দিন।"
                );

                return;
            }


            const safe =
                function (value) {

                    if (
                        typeof escapeHTML ===
                        "function"
                    ) {
                        return escapeHTML(
                            String(value || "")
                        );
                    }

                    return String(value || "")
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                        .replace(/"/g, "&quot;")
                        .replace(/'/g, "&#039;");

                };


            const studentPart =
                item.studentName
                    ? `
                        <tr>
                            <th>শিক্ষার্থীর নাম</th>
                            <td>${safe(item.studentName)}</td>
                        </tr>

                        <tr>
                            <th>শ্রেণি</th>
                            <td>${safe(item.className)}</td>
                        </tr>

                        <tr>
                            <th>রোল</th>
                            <td>${safe(item.roll)}</td>
                        </tr>

                        <tr>
                            <th>Student ID</th>
                            <td>${safe(item.studentId)}</td>
                        </tr>
                    `
                    : `
                        <tr>
                            <th>লেনদেনের ধরন</th>
                            <td>প্রাতিষ্ঠানিক আয়</td>
                        </tr>
                    `;


            win.document.write(`

<!DOCTYPE html>

<html lang="bn">

<head>

<meta charset="UTF-8">

<title>
আয় রসিদ - ${safe(item.receiptNo)}
</title>

<style>

@page {
    size: A5 portrait;
    margin: 5mm;
}

* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
    width: 148mm;
    min-height: 210mm;
}

body {
    font-family:
        Arial,
        "Noto Sans Bengali",
        sans-serif;

    background: #fff;
}

.receipt {

    width: 148mm;

    min-height: 200mm;

    padding: 8mm;

    border:
        1.5px solid
        #075e3a;

}

.header {

    text-align: center;

    border-bottom:
        1px solid
        #777;

    padding-bottom: 6px;

    margin-bottom: 10px;

}

.header h2 {

    margin:
        0 0 4px 0;

    font-size: 19px;

}

.header h3 {

    margin:
        0 0 3px 0;

    font-size: 15px;

}

.header p {

    margin: 2px 0;

    font-size: 11px;

}

.receipt-title {

    text-align: center;

    font-size: 16px;

    font-weight: bold;

    margin:
        8px 0;

}

.info {

    display: flex;

    justify-content:
        space-between;

    font-size: 11px;

    margin-bottom: 8px;

}

table {

    width: 100%;

    border-collapse:
        collapse;

    font-size: 12px;

}

th,
td {

    border:
        1px solid
        #777;

    padding: 6px;

}

th {

    width: 35%;

    text-align: left;

}

.amount {

    font-size: 16px;

    font-weight: bold;

    text-align: right;

    margin-top: 10px;

}

.signatures {

    display: flex;

    justify-content:
        space-between;

    margin-top: 35mm;

    font-size: 11px;

}

@media print {

    body {
        width: 148mm;
    }

    .receipt {
        page-break-after: avoid;
    }

}

</style>

</head>

<body>

<div class="receipt">

    <div class="header">

        <h2>
            Abdullah Hat Islamia Fazil (Degree) Madrasah
        </h2>

        <h3>
            আব্দুল্লাহ্ হাট ইসলামীয়া ফাজিল (ডিগ্রী) মাদ্রাসা
        </h3>

        <p>
            নাটেশ্বর, সোনাইমুড়ী, নোয়াখালী
        </p>

    </div>


    <div class="receipt-title">
        💰 আয় গ্রহণের রসিদ
    </div>


    <div class="info">

        <span>
            রসিদ নং:
            <b>${safe(item.receiptNo)}</b>
        </span>

        <span>
            সন:
            <b>${safe(item.year)}</b>
        </span>

    </div>


    <table>

        <tr>

            <th>মাস</th>

            <td>
                ${safe(item.month)}
            </td>

        </tr>


        <tr>

            <th>আয়ের খাত</th>

            <td>
                ${safe(item.category)}
            </td>

        </tr>


        ${studentPart}


        <tr>

            <th>টাকার পরিমাণ</th>

            <td>
                ${safe(item.amount)} টাকা
            </td>

        </tr>

    </table>


    <div class="amount">

        মোট গ্রহণ:
        ${safe(item.amount)}
        টাকা

    </div>


    <div class="signatures">

        <span>
            গ্রহণকারীর স্বাক্ষর
            <br><br>
            __________________
        </span>

        <span>
            প্রদানকারীর স্বাক্ষর
            <br><br>
            __________________
        </span>

    </div>

</div>

</body>

</html>

            `);


            win.document.close();

            win.focus();


            setTimeout(function () {

                win.print();

                /*
                 * কিছু ব্রাউজারে print dialog
                 * শেষ হওয়ার আগেই close করলে সমস্যা হয়।
                 * তাই সরাসরি close করছি না।
                 */

            }, 500);

        };


    /* =====================================================
       7. PAGE LOAD
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                setTimeout(
                    attachIncomeFixEvents,
                    300
                );

            }
        );

    } else {

        setTimeout(
            attachIncomeFixEvents,
            300
        );

    }


})();
