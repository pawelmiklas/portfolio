// import "bootstrap";
// require("../style/main.scss ");
// setTimeout(() => {
//     document.querySelector("#loader-wrapper").classList.add("out");
// }, 1000);
const preLoader = (() => {
    window.addEventListener("load", () => {
        document.querySelector("#loader-wrapper").classList.add("out");
    });
})();

document.addEventListener("DOMContentLoaded", () => {
    const slider = (() => {
        const arrowRight = document.querySelector(".fa-angle-right");
        const arrowLeft = document.querySelector(".fa-angle-left");
        const first = document.querySelector("#first-slide");
        const second = document.querySelector("#second-slide");
        const third = document.querySelector("#third-slide");
        const fourth = document.querySelector("#fourth-slide");
        let x = 130;
        arrowRight.addEventListener("click", () => {
            if (x > 390) return;
            first.style.webkitTransform = `translateX(-${x}%)`;
            second.style.webkitTransform = `translateX(-${x - 130}%)`;
            third.style.webkitTransform = `translateX(-${x - 260}%)`;
            fourth.style.webkitTransform = `translateX(-${x - 390}%)`;
            x += 130;
        });
        arrowLeft.addEventListener("click", () => {
            if (x === 130) return;
            x -= 130;
            first.style.webkitTransform = `translateX(${-Math.abs(x) + 130}%)`;
            second.style.webkitTransform = `translateX(${-Math.abs(x) + 260}%)`;
            third.style.webkitTransform = `translateX(${-Math.abs(x) + 390}%)`;
            fourth.style.webkitTransform = `translateX(${-Math.abs(x) + 520}%)`;
        });
    })();

    const slideVertical = (() => {
        const listButton = document.querySelectorAll(".list__button");
        const sectionContent = document.querySelectorAll(".section__content");
        const nameOfContent = [
            "transform-to-home",
            "transform-to-project",
            "transform-to-about"
        ];
        listButton.forEach((list, index) => {
            list.addEventListener("click", () => {
                listButton.forEach((btn) =>
                    btn.classList.remove("list__button--active")
                );
                sectionContent.forEach((section) => {
                    section.className = "section__content";
                    section.classList.add(nameOfContent[index]);
                });
                list.classList.add("list__button--active");
            });
        });
    })();
});
