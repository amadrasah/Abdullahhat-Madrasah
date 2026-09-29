/* =========================================================
   ABDULLAH HAT ISLAMIA FAZIL (DEGREE) MADRASAH
   GALLERY MANAGEMENT
   Separate file: gallery.js
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const STORAGE_KEY =
        "madrasah_gallery_images";


    const CATEGORIES = [
        "মাদ্রাসা",
        "শিক্ষক-কর্মচারী",
        "শিক্ষার্থী",
        "অনুষ্ঠান",
        "পুরস্কার",
        "অন্যান্য"
    ];


    /* =====================================================
       STORAGE
    ===================================================== */

    function loadGallery() {

        try {

            const saved =
                localStorage.getItem(
                    STORAGE_KEY
                );

            if (!saved) {
                return [];
            }

            const data =
                JSON.parse(saved);

            return Array.isArray(data)
                ? data
                : [];

        } catch (error) {

            console.error(
                "Gallery load error:",
                error
            );

            return [];
        }
    }


    function saveGallery(images) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(images)
            );

            return true;

        } catch (error) {

            console.error(
                "Gallery save error:",
                error
            );

            alert(
                "ছবিটি সংরক্ষণ করা সম্ভব হয়নি। ছবির সাইজ একটু কমিয়ে আবার চেষ্টা করুন।"
            );

            return false;
        }
    }


    let galleryImages =
        loadGallery();


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(
            value == null ? "" : value
        )
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
       BUILD GALLERY UI
    ===================================================== */

    function buildGalleryUI() {

        const section =
            getElement("gallery");


        if (!section) {

            console.warn(
                "Gallery section (#gallery) পাওয়া যায়নি।"
            );

            return;
        }


        section.innerHTML = `

            <h2 class="section-title">
                🖼️ ছবি / গ্যালারি
            </h2>


            <div
                class="gallery-manager"
            >


                <!-- =====================================
                     ADMIN / UPLOAD BOX
                ====================================== -->

                <div
                    class="gallery-upload-box"
                >

                    <h3>
                        ➕ নতুন ছবি যোগ করুন
                    </h3>


                    <div
                        class="gallery-form-grid"
                    >


                        <div>

                            <label
                                for="galleryTitle"
                            >
                                ছবির নাম
                            </label>

                            <input
                                type="text"
                                id="galleryTitle"
                                placeholder="যেমন: বার্ষিক ক্রীড়া অনুষ্ঠান"
                            >

                        </div>


                        <div>

                            <label
                                for="galleryCategory"
                            >
                                ক্যাটাগরি
                            </label>

                            <select
                                id="galleryCategory"
                            >

                                ${CATEGORIES.map(
                                    function (category) {

                                        return `
                                            <option
                                                value="${escapeHTML(category)}"
                                            >
                                                ${escapeHTML(category)}
                                            </option>
                                        `;

                                    }
                                ).join("")}

                            </select>

                        </div>


                        <div
                            style="grid-column:1/-1;"
                        >

                            <label
                                for="galleryFile"
                            >
                                ছবি নির্বাচন করুন
                            </label>

                            <input
                                type="file"
                                id="galleryFile"
                                accept="image/*"
                            >

                        </div>


                        <div
                            id="galleryPreviewBox"
                            style="
                                display:none;
                                grid-column:1/-1;
                                text-align:center;
                            "
                        >

                            <p>
                                ছবির Preview
                            </p>

                            <img
                                id="galleryPreview"
                                src=""
                                alt="Preview"
                                style="
                                    max-width:100%;
                                    max-height:250px;
                                    border-radius:10px;
                                    border:2px solid #c99b30;
                                    object-fit:contain;
                                "
                            >

                        </div>


                        <div
                            class="gallery-action-row"
                            style="grid-column:1/-1;"
                        >

                            <button
                                type="button"
                                onclick="saveGalleryImage()"
                            >
                                💾 ছবি সংরক্ষণ
                            </button>


                            <button
                                type="button"
                                onclick="resetGalleryForm()"
                            >
                                ♻️ পরিষ্কার
                            </button>

                        </div>


                        <div
                            id="galleryMessage"
                            style="grid-column:1/-1;"
                        ></div>


                    </div>

                </div>


                <!-- =====================================
                     FILTER
                ====================================== -->

                <div
                    class="gallery-filter-box"
                >

                    <h3>
                        🔎 ছবি খুঁজুন
                    </h3>


                    <div
                        class="gallery-filter-grid"
                    >

                        <div>

                            <label
                                for="galleryFilterCategory"
                            >
                                ক্যাটাগরি
                            </label>

                            <select
                                id="galleryFilterCategory"
                            >

                                <option value="">
                                    সব ক্যাটাগরি
                                </option>

                                ${CATEGORIES.map(
                                    function (category) {

                                        return `
                                            <option
                                                value="${escapeHTML(category)}"
                                            >
                                                ${escapeHTML(category)}
                                            </option>
                                        `;

                                    }
                                ).join("")}

                            </select>

                        </div>


                        <div>

                            <label
                                for="gallerySearch"
                            >
                                খুঁজুন
                            </label>

                            <input
                                type="text"
                                id="gallerySearch"
                                placeholder="ছবির নাম লিখুন..."
                            >

                        </div>

                    </div>

                </div>


                <!-- =====================================
                     GALLERY LIST
                ====================================== -->

                <div
                    id="galleryImageList"
                    class="gallery-image-list"
                ></div>


            </div>


            <!-- =========================================
                 IMAGE VIEWER
            ========================================== -->

            <div
                id="galleryLightbox"
                class="gallery-lightbox"
                style="display:none;"
            >

                <div
                    class="gallery-lightbox-overlay"
                    onclick="closeGalleryLightbox()"
                ></div>


                <div
                    class="gallery-lightbox-content"
                >

                    <button
                        type="button"
                        class="gallery-lightbox-close"
                        onclick="closeGalleryLightbox()"
                    >
                        ✕
                    </button>


                    <img
                        id="galleryLightboxImage"
                        src=""
                        alt="Gallery Image"
                    >


                    <h3
                        id="galleryLightboxTitle"
                    ></h3>


                    <p
                        id="galleryLightboxCategory"
                    ></p>

                </div>

            </div>

        `;


        /* ===============================================
           EVENTS
        =============================================== */

        const fileInput =
            getElement("galleryFile");


        if (fileInput) {

            fileInput.addEventListener(
                "change",
                previewGalleryImage
            );

        }


        const categoryFilter =
            getElement(
                "galleryFilterCategory"
            );


        if (categoryFilter) {

            categoryFilter.addEventListener(
                "change",
                renderGallery
            );

        }


        const searchInput =
            getElement("gallerySearch");


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                renderGallery
            );

        }


        renderGallery();

    }


    /* =====================================================
       IMAGE PREVIEW
    ===================================================== */

    function previewGalleryImage() {

        const fileInput =
            getElement("galleryFile");

        const previewBox =
            getElement(
                "galleryPreviewBox"
            );

        const preview =
            getElement(
                "galleryPreview"
            );


        if (
            !fileInput ||
            !fileInput.files ||
            !fileInput.files.length
        ) {

            if (previewBox) {
                previewBox.style.display =
                    "none";
            }

            return;
        }


        const file =
            fileInput.files[0];


        if (
            !file.type.startsWith("image/")
        ) {

            alert(
                "শুধু ছবি নির্বাচন করুন।"
            );

            fileInput.value = "";

            if (previewBox) {
                previewBox.style.display =
                    "none";
            }

            return;
        }


        const reader =
            new FileReader();


        reader.onload =
            function (event) {

                if (preview) {

                    preview.src =
                        event.target.result;

                }


                if (previewBox) {

                    previewBox.style.display =
                        "block";

                }

            };


        reader.readAsDataURL(file);

    }


    /* =====================================================
       SAVE IMAGE
    ===================================================== */

    function saveGalleryImage() {

        const titleInput =
            getElement("galleryTitle");

        const categoryInput =
            getElement("galleryCategory");

        const fileInput =
            getElement("galleryFile");


        const title =
            titleInput
                ? titleInput.value.trim()
                : "";


        const category =
            categoryInput
                ? categoryInput.value
                : "";


        if (!title) {

            alert(
                "ছবির নাম লিখুন।"
            );

            if (titleInput) {
                titleInput.focus();
            }

            return;
        }


        if (!category) {

            alert(
                "ক্যাটাগরি নির্বাচন করুন।"
            );

            return;
        }


        if (
            !fileInput ||
            !fileInput.files ||
            !fileInput.files.length
        ) {

            alert(
                "প্রথমে একটি ছবি নির্বাচন করুন।"
            );

            return;
        }


        const file =
            fileInput.files[0];


        if (
            !file.type.startsWith("image/")
        ) {

            alert(
                "শুধু ছবি নির্বাচন করুন।"
            );

            return;
        }


        /*
           Browser localStorage-এর সীমা মাথায় রেখে
           খুব বড় ছবি হলে সতর্ক করা হচ্ছে।
        */

        if (
            file.size >
            3 * 1024 * 1024
        ) {

            alert(
                "ছবির সাইজ ৩ MB-এর বেশি। দয়া করে ছোট সাইজের ছবি ব্যবহার করুন।"
            );

            return;
        }


        const reader =
            new FileReader();


        reader.onload =
            function (event) {

                const imageData =
                    event.target.result;


                const imageObject = {

                    id:
                        Date.now().toString() +
                        Math.random()
                            .toString(36)
                            .slice(2),

                    title:
                        title,

                    category:
                        category,

                    image:
                        imageData,

                    fileName:
                        file.name,

                    createdAt:
                        new Date().toISOString()

                };


                galleryImages.unshift(
                    imageObject
                );


                const saved =
                    saveGallery(
                        galleryImages
                    );


                if (!saved) {

                    galleryImages =
                        galleryImages.filter(
                            function (item) {

                                return (
                                    item.id !==
                                    imageObject.id
                                );

                            }
                        );

                    return;
                }


                showGalleryMessage(
                    "ছবিটি সফলভাবে গ্যালারিতে যোগ হয়েছে।",
                    "success"
                );


                resetGalleryForm();

                renderGallery();

            };


        reader.onerror =
            function () {

                alert(
                    "ছবিটি পড়া সম্ভব হয়নি। আবার চেষ্টা করুন।"
                );

            };


        reader.readAsDataURL(file);

    }


    /* =====================================================
       MESSAGE
    ===================================================== */

    function showGalleryMessage(
        message,
        type
    ) {

        const box =
            getElement("galleryMessage");


        if (!box) {
            return;
        }


        box.innerHTML = `

            <div
                class="gallery-message ${
                    type === "error"
                        ? "gallery-message-error"
                        : "gallery-message-success"
                }"
            >
                ${escapeHTML(message)}
            </div>

        `;


        setTimeout(
            function () {

                if (box) {
                    box.innerHTML = "";
                }

            },
            3000
        );

    }


    /* =====================================================
       RESET FORM
    ===================================================== */

    function resetGalleryForm() {

        const title =
            getElement("galleryTitle");

        const category =
            getElement("galleryCategory");

        const fileInput =
            getElement("galleryFile");

        const previewBox =
            getElement(
                "galleryPreviewBox"
            );

        const preview =
            getElement(
                "galleryPreview"
            );


        if (title) {
            title.value = "";
        }


        if (category) {
            category.value =
                CATEGORIES[0];
        }


        if (fileInput) {
            fileInput.value = "";
        }


        if (preview) {
            preview.src = "";
        }


        if (previewBox) {
            previewBox.style.display =
                "none";
        }


        const message =
            getElement("galleryMessage");


        if (message) {
            message.innerHTML = "";
        }

    }


    /* =====================================================
       FILTER
    ===================================================== */

    function getFilteredGallery() {

        const category =
            getElement(
                "galleryFilterCategory"
            )?.value || "";


        const search =
            getElement(
                "gallerySearch"
            )?.value
                .trim()
                .toLowerCase() || "";


        return galleryImages.filter(
            function (image) {

                const categoryOK =
                    !category ||
                    image.category ===
                    category;


                const title =
                    String(
                        image.title || ""
                    ).toLowerCase();


                const searchOK =
                    !search ||
                    title.includes(search);


                return (
                    categoryOK &&
                    searchOK
                );

            }
        );

    }


    /* =====================================================
       RENDER GALLERY
    ===================================================== */

    function renderGallery() {

        const container =
            getElement(
                "galleryImageList"
            );


        if (!container) {
            return;
        }


        const images =
            getFilteredGallery();


        if (!images.length) {

            container.innerHTML = `

                <div
                    class="gallery-empty"
                >

                    <div
                        style="
                            font-size:50px;
                        "
                    >
                        🖼️
                    </div>

                    <h3>
                        কোনো ছবি পাওয়া যায়নি
                    </h3>

                    <p>
                        নতুন ছবি যোগ করলে
                        এখানে দেখা যাবে।
                    </p>

                </div>

            `;

            return;
        }


        container.innerHTML =
            images.map(
                function (image) {

                    return `

                        <div
                            class="gallery-photo-card"
                        >

                            <div
                                class="gallery-photo-image"
                                onclick="
                                    openGalleryLightbox(
                                        '${escapeHTML(image.id)}'
                                    )
                                "
                            >

                                <img
                                    src="${image.image}"
                                    alt="${escapeHTML(
                                        image.title
                                    )}"
                                    loading="lazy"
                                >

                            </div>


                            <div
                                class="gallery-photo-info"
                            >

                                <h3>
                                    ${escapeHTML(
                                        image.title
                                    )}
                                </h3>


                                <div
                                    class="gallery-category"
                                >
                                    ${escapeHTML(
                                        image.category
                                    )}
                                </div>


                                <div
                                    class="gallery-photo-actions"
                                >

                                    <button
                                        type="button"
                                        onclick="
                                            openGalleryLightbox(
                                                '${escapeHTML(image.id)}'
                                            )
                                        "
                                    >
                                        🔍 দেখুন
                                    </button>


                                    <button
                                        type="button"
                                        class="gallery-delete-button"
                                        onclick="
                                            deleteGalleryImage(
                                                '${escapeHTML(image.id)}'
                                            )
                                        "
                                    >
                                        🗑️ মুছুন
                                    </button>

                                </div>

                            </div>

                        </div>

                    `;

                }
            ).join("");

    }


    /* =====================================================
       OPEN LIGHTBOX
    ===================================================== */

    function openGalleryLightbox(id) {

        const image =
            galleryImages.find(
                function (item) {

                    return String(item.id) ===
                        String(id);

                }
            );


        if (!image) {
            return;
        }


        const lightbox =
            getElement(
                "galleryLightbox"
            );

        const imageElement =
            getElement(
                "galleryLightboxImage"
            );

        const titleElement =
            getElement(
                "galleryLightboxTitle"
            );

        const categoryElement =
            getElement(
                "galleryLightboxCategory"
            );


        if (imageElement) {

            imageElement.src =
                image.image;

            imageElement.alt =
                image.title || "Gallery Image";

        }


        if (titleElement) {

            titleElement.textContent =
                image.title || "";

        }


        if (categoryElement) {

            categoryElement.textContent =
                image.category || "";

        }


        if (lightbox) {

            lightbox.style.display =
                "flex";

            document.body.style.overflow =
                "hidden";

        }

    }


    /* =====================================================
       CLOSE LIGHTBOX
    ===================================================== */

    function closeGalleryLightbox() {

        const lightbox =
            getElement(
                "galleryLightbox"
            );


        if (lightbox) {

            lightbox.style.display =
                "none";

        }


        document.body.style.overflow =
            "";

    }


    /* =====================================================
       DELETE IMAGE
    ===================================================== */

    function deleteGalleryImage(id) {

        const image =
            galleryImages.find(
                function (item) {

                    return String(item.id) ===
                        String(id);

                }
            );


        if (!image) {

            alert(
                "ছবিটি পাওয়া যায়নি।"
            );

            return;
        }


        const confirmed =
            confirm(
                "আপনি কি এই ছবিটি গ্যালারি থেকে মুছে ফেলতে চান?"
            );


        if (!confirmed) {
            return;
        }


        galleryImages =
            galleryImages.filter(
                function (item) {

                    return String(item.id) !==
                        String(id);

                }
            );


        saveGallery(
            galleryImages
        );


        closeGalleryLightbox();

        renderGallery();


        showGalleryMessage(
            "ছবিটি গ্যালারি থেকে মুছে ফেলা হয়েছে।",
            "success"
        );

    }


    /* =====================================================
       ESC KEY FOR LIGHTBOX
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeGalleryLightbox();

            }

        }
    );


    /* =====================================================
       GLOBAL FUNCTIONS
    ===================================================== */

    window.saveGalleryImage =
        saveGalleryImage;


    window.resetGalleryForm =
        resetGalleryForm;


    window.renderGallery =
        renderGallery;


    window.openGalleryLightbox =
        openGalleryLightbox;


    window.closeGalleryLightbox =
        closeGalleryLightbox;


    window.deleteGalleryImage =
        deleteGalleryImage;


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function initializeGallery() {

        buildGalleryUI();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeGallery
        );

    } else {

        initializeGallery();

    }


})();
