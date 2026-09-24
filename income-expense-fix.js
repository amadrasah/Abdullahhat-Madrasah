/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   INCOME & EXPENSE FIX
   ---------------------------------------------------------
   This file is loaded AFTER script(3).js
   Main script remains unchanged.
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       1. CATEGORIES THAT DO NOT REQUIRE STUDENT
    ===================================================== */

    const NON_STUDENT_INCOME_CATEGORIES = [
        "সরকারি অনুদান",
        "বেসরকারি অনুদান",
        "দান",
        "অন্যান্য আয়"
    ];


    /* =====================================================
       2. HELPER
    ===================================================== */

    function getValue(id) {

        const element =
            document.getElementById(id);

        return element
            ? String(element.value || "").trim()
            : "";

    }


    function setValue(id, value) {

        const element =
            document.getElementById(id);

        if (element) {

            element.value =
                value == null ? "" : value;

        }

    }


    function escapeHTML(value) {

        if (
            typeof window.escapeHTML ===
            "function"
        ) {

            return window.escapeHTML(
                String(value == null ? "" : value)
            );

        }

        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       3. CHECK WHETHER CATEGORY IS NON-STUDENT INCOME
    ===================================================== */

    function isNonStudentIncomeCategory(category) {

        return NON_STUDENT_INCOME_CATEGORIES
            .indexOf(category) !== -1;

    }


    /* =====================================================
       4. FIND STUDENT
          YEAR + CLASS + ROLL
    ===================================================== */

    window.findIncomeStudent = function () {

        const year =
            getValue("incomeYear");

        const classId =
            getValue("incomeClass");

        const roll =
            getValue("incomeRoll");

        const nameInput =
            document.getElementById(
                "incomeStudentName"
            );

        const idInput =
            document.getElementById(
                "incomeStudentId"
            );


        if (nameInput) {

            nameInput.value = "";

        }

        if (idInput) {

            idInput.value = "";

        }


        if (!classId || !roll) {

            return;

        }


        if (
            typeof admissionStudents ===
            "undefined"
        ) {

            if (nameInput) {

                nameInput.value =
                    "শিক্ষার্থী পাওয়া যায়নি";

            }

            return;

        }


        const className =
            (
                typeof CLASS_LIST !==
                "undefined"
            )
                ? (
                    CLASS_LIST[classId] ||
                    ""
                )
                : "";


        const student =
            admissionStudents.find(
                function (student) {

                    const sameYear =
                        !year ||
                        String(
                            student.year ||
                            student.admissionYear ||
                            ""
                        ) ===
                        String(year);


                    const sameClass =
                        String(
                            student.classCode ||
                            ""
                        ) ===
                        String(classId)

                        ||

                        String(
                            student.className ||
                            ""
                        ) ===
                        String(className);


                    const sameRoll =
                        String(
                            student.roll ||
                            ""
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
       5. CATEGORY CHANGE
          Student information becomes optional
          for non-student income.
    ===================================================== */

    function updateIncomeStudentRequirement() {

        const category =
            getValue("incomeHead");

        const classInput =
            document.getElementById(
                "incomeClass"
            );

        const rollInput =
            document.getElementById(
                "incomeRoll"
            );


        const optional =
            isNonStudentIncomeCategory(
                category
            );


        if (classInput) {

            classInput.removeAttribute(
                "required"
            );

        }

        if (rollInput) {

            rollInput.removeAttribute(
                "required"
            );

        }


        /*
           For student-related income,
           fields are visually kept as normal.
           Validation is handled in submitIncome().
        */


        if (
            optional &&
            document.getElementById(
                "incomeStudentName"
            )
        ) {

            setValue(
                "incomeStudentName",
                ""
            );

            setValue(
                "incomeStudentId",
                ""
            );

        }

    }


    /* =====================================================
       6. SUBMIT INCOME
    ===================================================== */

    window.submitIncome = function () {

        const year =
            getValue("incomeYear");

        const month =
            getValue("incomeMonth");

        const category =
            getValue("incomeHead");

        const classId =
            getValue("incomeClass");

        const roll =
            getValue("incomeRoll");

        const studentName =
            getValue("incomeStudentName");

        const studentId =
            getValue("incomeStudentId");

        const amount =
            Number(
                document.getElementById(
                    "incomeAmount"
                )?.value || 0
            );


        /* -----------------------------------------------
           BASIC VALIDATION
        ----------------------------------------------- */

        if (!year) {

            alert(
                "সন নির্বাচন করুন।"
            );

            return;

        }


        if (!month) {

            alert(
                "মাস নির্বাচন করুন।"
            );

            return;

        }


        if (!category) {

            alert(
                "আয়ের খাত নির্বাচন করুন।"
            );

            return;

        }


        if (
            !amount ||
            amount <= 0
        ) {

            alert(
                "টাকার পরিমাণ লিখুন।"
            );

            return;

        }


        /* -----------------------------------------------
           STUDENT / NON-STUDENT VALIDATION
        ----------------------------------------------- */

        const nonStudent =
            isNonStudentIncomeCategory(
                category
            );


        if (!nonStudent) {

            if (!classId) {

                alert(
                    "শ্রেণি নির্বাচন করুন।"
                );

                return;

            }


            if (!roll) {

                alert(
                    "রোল নম্বর লিখুন।"
                );

                return;

            }


            if (
                !studentName ||
                studentName ===
                "শিক্ষার্থী পাওয়া যায়নি"
            ) {

                /*
                   Try searching one more time
                   before rejecting.
                */

                window.findIncomeStudent();


                const foundName =
                    getValue(
                        "incomeStudentName"
                    );


                if (
                    !foundName ||
                    foundName ===
                    "শিক্ষার্থী পাওয়া যায়নি"
                ) {

                    alert(
                        "সঠিক শিক্ষার্থী নির্বাচন করুন।"
                    );

                    return;

                }

            }

        }


        /* -----------------------------------------------
           ENTRY
        ----------------------------------------------- */

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
                classId || "",

            className:
                (
                    typeof CLASS_LIST !==
                    "undefined"
                )
                    ? (
                        CLASS_LIST[classId] ||
                        ""
                    )
                    : "",

            roll:
                roll || "",

            studentName:
                nonStudent
                    ? ""
                    : getValue(
                        "incomeStudentName"
                    ),

            studentId:
                nonStudent
                    ? ""
                    : getValue(
                        "incomeStudentId"
                    ),

            amount:
                amount,

            date:
                new Date().toISOString()

        };


        /* -----------------------------------------------
           SAVE
        ----------------------------------------------- */

        if (
            typeof incomeExpenseData ===
            "undefined"
        ) {

            alert(
                "আয়–ব্যয়ের ডাটা পাওয়া যায়নি।"
            );

            return;

        }


        incomeExpenseData.push(
            entry
        );


        if (
            typeof saveIncomeExpenseData ===
            "function"
        ) {

            saveIncomeExpenseData();

        }


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


        alert(
            "আয় সফলভাবে সংরক্ষণ হয়েছে।"
        );


        /*
           Automatically print receipt
        */

        window.printIncomeExpenseReceipt(
            entry.id
        );


        /* -----------------------------------------------
           CLEAR FORM AFTER SAVE
        ----------------------------------------------- */

        if (
            typeof clearIncomeForm ===
            "function"
        ) {

            clearIncomeForm();

        }

    };


    /* =====================================================
       7. FORMAT DATE
    ===================================================== */

    function formatReceiptDate(dateValue) {

        const date =
            new Date(
                dateValue || Date.now()
            );


        if (
            Number.isNaN(
                date.getTime()
            )
        ) {

            return "";

        }


        const day =
            String(
                date.getDate()
            ).padStart(2, "0");


        const month =
            String(
                date.getMonth() + 1
            ).padStart(2, "0");


        const year =
            date.getFullYear();


        return (
            day +
            "-" +
            month +
            "-" +
            year
        );

    }


    /* =====================================================
       8. CREATE RECEIPT HTML
    ===================================================== */

    window.createReceiptHTML = function (item) {

        if (!item) {

            return "";

        }


        const receiptDate =
            formatReceiptDate(
                item.date
            );


        const typeText =
            item.type === "income"
                ? "আয় গ্রহণের রসিদ"
                : "ব্যয় প্রদানের রসিদ";


        const studentRow =
            item.studentName
                ? `
                    <tr>
                        <td>শিক্ষার্থীর নাম</td>
                        <td>
                            ${escapeHTML(
                                item.studentName
                            )}
                        </td>
                    </tr>

                    <tr>
                        <td>Student ID</td>
                        <td>
                            ${escapeHTML(
                                item.studentId || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <td>শ্রেণি</td>
                        <td>
                            ${escapeHTML(
                                item.className || "-"
                            )}
                        </td>
                    </tr>

                    <tr>
                        <td>রোল</td>
                        <td>
                            ${escapeHTML(
                                item.roll || "-"
                            )}
                        </td>
                    </tr>
                `
                : `
                    <tr>
                        <td>প্রতিষ্ঠানিক আয়</td>
                        <td>
                            ${escapeHTML(
                                item.category || ""
                            )}
                        </td>
                    </tr>
                `;


        return `

<!DOCTYPE html>

<html lang="bn">

<head>

<meta charset="UTF-8">

<title>
    ${escapeHTML(typeText)}
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

    font-family:
        "Noto Sans Bengali",
        "SolaimanLipi",
        Arial,
        sans-serif;

}


body {

    background: white;

}


.income-receipt {

    width: 100%;

    min-height: 200mm;

    border: 1px solid #000;

    padding: 8mm;

    position: relative;

}


.receipt-header {

    text-align: center;

    border-bottom:
        1px solid #000;

    padding-bottom: 4mm;

    margin-bottom: 5mm;

}


.receipt-header h2 {

    margin: 0;

    font-size: 18px;

}


.receipt-header h3 {

    margin: 2mm 0 0;

    font-size: 14px;

}


.receipt-header p {

    margin: 1mm 0;

    font-size: 11px;

}


.receipt-title {

    text-align: center;

    margin: 4mm 0;

    font-size: 16px;

    font-weight: bold;

    text-decoration: underline;

}


.receipt-info {

    width: 100%;

    border-collapse: collapse;

    font-size: 12px;

}


.receipt-info td {

    border:
        1px solid #000;

    padding: 2.5mm;

}


.receipt-info td:first-child {

    width: 38%;

    font-weight: bold;

}


.amount-box {

    margin-top: 5mm;

    border:
        1px solid #000;

    padding: 4mm;

    text-align: center;

    font-size: 15px;

    font-weight: bold;

}


.receipt-footer {

    display: flex;

    justify-content:
        space-between;

    align-items: flex-end;

    margin-top: 30mm;

    font-size: 11px;

}


.receipt-date {

    text-align: left;

    min-width: 35mm;

}


.receiver-sign {

    text-align: center;

    min-width: 40mm;

}


.principal-sign {

    text-align: center;

    min-width: 40mm;

}


.signature-line {

    margin-top: 7mm;

    border-top:
        1px solid #000;

    padding-top: 1.5mm;

}


.receipt-copy {

    margin-top: 8mm;

    text-align: center;

    font-size: 9px;

}


</style>

</head>


<body>

<div class="income-receipt">


    <!-- HEADER -->

    <div class="receipt-header">

        <h2>
            Abdullah Hat Islamia
            Fazil (Degree) Madrasah
        </h2>

        <h3>
            আব্দুল্লাহ্ হাট ইসলামীয়া
            ফাজিল (ডিগ্রী) মাদ্রাসা
        </h3>

        <p>
            নাটেশ্বর, সোনাইমুড়ী,
            নোয়াখালী
        </p>

        <p>
            মোবাইল:
            01814-716405
        </p>

    </div>


    <!-- TITLE -->

    <div class="receipt-title">

        ${escapeHTML(typeText)}

    </div>


    <!-- RECEIPT INFORMATION -->

    <table class="receipt-info">

        <tr>

            <td>
                রসিদ নং
            </td>

            <td>
                ${escapeHTML(
                    item.receiptNo ||
                    item.id ||
                    ""
                )}
            </td>

        </tr>


        <tr>

            <td>
                তারিখ
            </td>

            <td>
                ${escapeHTML(
                    receiptDate
                )}
            </td>

        </tr>


        <tr>

            <td>
                সন
            </td>

            <td>
                ${escapeHTML(
                    item.year || ""
                )}
            </td>

        </tr>


        <tr>

            <td>
                মাস
            </td>

            <td>
                ${escapeHTML(
                    item.month || ""
                )}
            </td>

        </tr>


        <tr>

            <td>
                আয়ের খাত
            </td>

            <td>
                ${escapeHTML(
                    item.category || ""
                )}
            </td>

        </tr>


        ${studentRow}

    </table>


    <!-- AMOUNT -->

    <div class="amount-box">

        মোট টাকা:
        ${Number(
            item.amount || 0
        ).toLocaleString("bn-BD")}
        টাকা

    </div>


    <!-- FOOTER -->

    <div class="receipt-footer">


        <div class="receipt-date">

            তারিখ:

            ${escapeHTML(
                receiptDate
            )}

        </div>


        <div class="receiver-sign">

            গ্রহণকারীর স্বাক্ষর

            <div class="signature-line">

                __________________

            </div>

        </div>


        <div class="principal-sign">

            অধ্যক্ষের স্বাক্ষর

            <div class="signature-line">

                __________________

            </div>

        </div>


    </div>


    <div class="receipt-copy">

        সংরক্ষণের জন্য রসিদটি রেখে দিন।

    </div>


</div>

</body>

</html>

`;

    };


    /* =====================================================
       9. PRINT RECEIPT
    ===================================================== */

    window.printIncomeExpenseReceipt = function (id) {

        if (
            typeof incomeExpenseData ===
            "undefined"
        ) {

            alert(
                "আয়–ব্যয়ের ডাটা পাওয়া যায়নি।"
            );

            return;

        }


        const item =
            incomeExpenseData.find(
                function (entry) {

                    return String(
                        entry.id
                    ) ===
                    String(id);

                }
            );


        if (!item) {

            alert(
                "রসিদের তথ্য পাওয়া যায়নি।"
            );

            return;

        }


        /*
           If receipt number does not exist,
           create a simple number.
        */

        if (!item.receiptNo) {

            item.receiptNo =
                String(
                    item.year || ""
                ) +
                "-" +
                String(
                    item.month || ""
                ) +
                "-" +
                String(
                    item.id
                ).slice(-5);


            if (
                typeof saveIncomeExpenseData ===
                "function"
            ) {

                saveIncomeExpenseData();

            }

        }


        const receiptHTML =
            window.createReceiptHTML(
                item
            );


        const printWindow =
            window.open(
                "",
                "_blank",
                "width=700,height=900"
            );


        if (!printWindow) {

            alert(
                "রসিদ প্রিন্ট উইন্ডো খোলা যাচ্ছে না। ব্রাউজারের Pop-up অনুমতি দিন।"
            );

            return;

        }


        printWindow.document.open();

        printWindow.document.write(
            receiptHTML
        );

        printWindow.document.close();


        printWindow.focus();


        setTimeout(
            function () {

                printWindow.print();

            },
            500
        );

    };


    /* =====================================================
       10. EVENT LISTENERS
    ===================================================== */

    function attachIncomeFixEvents() {

        const category =
            document.getElementById(
                "incomeHead"
            );

        const classSelect =
            document.getElementById(
                "incomeClass"
            );

        const rollInput =
            document.getElementById(
                "incomeRoll"
            );

        const yearSelect =
            document.getElementById(
                "incomeYear"
            );


        if (category) {

            category.addEventListener(
                "change",
                function () {

                    updateIncomeStudentRequirement();

                }
            );

        }


        if (classSelect) {

            classSelect.addEventListener(
                "change",
                function () {

                    setValue(
                        "incomeStudentName",
                        ""
                    );

                    setValue(
                        "incomeStudentId",
                        ""
                    );

                }
            );

        }


        if (rollInput) {

            rollInput.addEventListener(
                "change",
                function () {

                    window.findIncomeStudent();

                }
            );


            rollInput.addEventListener(
                "blur",
                function () {

                    window.findIncomeStudent();

                }
            );


            rollInput.addEventListener(
                "keyup",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        window.findIncomeStudent();

                    }

                }
            );

        }


        if (yearSelect) {

            yearSelect.addEventListener(
                "change",
                function () {

                    setValue(
                        "incomeStudentName",
                        ""
                    );

                    setValue(
                        "incomeStudentId",
                        ""
                    );

                }
            );

        }


        updateIncomeStudentRequirement();

    }


    /* =====================================================
       11. WAIT UNTIL PAGE IS READY
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            attachIncomeFixEvents
        );

    } else {

        attachIncomeFixEvents();

    }


})();
