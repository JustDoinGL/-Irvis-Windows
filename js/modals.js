const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach((item) => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        close.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        const modal = document.querySelector(selector);
        const modal2 = document.querySelector(".popup_engineer");
        setTimeout(() => {
            if (window.getComputedStyle(modal).display === "none" & window.getComputedStyle(modal2).display === "none") {
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        }, time);
    }

    bindModal(
        ".popup_engineer_btn",
        ".popup_engineer",
        ".popup_engineer .popup_close"
    );
    bindModal(".phone_link", ".popup", ".popup .popup_close");

    showModalByTime(".popup", 2000);
};

export default modals;


