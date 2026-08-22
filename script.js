// Abdullah Hat Islamia Fazil (Degree) Madrasah
// Website JavaScript


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }

}


// ===============================
// PAGE LOADED
// ===============================

document.addEventListener("DOMContentLoaded", function () {


    // ===============================
    // MENU LINK CLICK
    // ===============================

    const navLinks = document.querySelectorAll("#menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const menu = document.getElementById("menu");

            if (menu) {
                menu.classList.remove("active");
            }

        });

    });


    // ===============================
    // SMOOTH SCROLL
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ===============================
    // NOTICE
    // ===============================

    const noticeBox = document.querySelector(".notice");

    if (noticeBox) {

        noticeBox.addEventListener("click", function () {

            console.log("Notice selected");

        });

    }


    // ===============================
    // RESULT
    // ===============================

    const resultSection = document.querySelector("#results");

    if (resultSection) {

        console.log("Result section loaded");

    }

});
