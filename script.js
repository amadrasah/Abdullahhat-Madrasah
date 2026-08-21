// Abdullah Hat Islamia Fazil (Degree) Madrasah
// Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // বর্তমান বছর Footer-এ দেখানো
    const footerYear = document.querySelector("footer p");

    if (footerYear) {
        footerYear.innerHTML =
            "© " + new Date().getFullYear() +
            " Abdullah Hat Islamia Fazil (Degree) Madrasah";
    }

    // Navigation link click
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // নোটিশ
    const noticeBox = document.querySelector(".notice");

    if (noticeBox) {
        noticeBox.addEventListener("click", function () {
            alert("মাদ্রাসার সর্বশেষ নোটিশ এখানে প্রকাশ করা হবে।");
        });
    }

    // Result Section
    const resultSection = document.querySelector("#result");

    if (resultSection) {
        resultSection.addEventListener("click", function () {
            console.log("Result section selected");
        });
    }

});
