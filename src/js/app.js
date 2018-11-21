// import "bootstrap";
// require("../style/main.scss ");
const listButton = document.querySelectorAll(".list__button");
const sectionContent = document.querySelectorAll(".section__content");
const nameOfContent = [
    "transform-to-home",
    "transform-to-project",
    "transform-to-about"
];
let x = false;

function scrollToSection(index) {
    sectionContent.forEach((section) => {
        section.className = "section__content";
        section.classList.add(nameOfContent[index]);
    });
}

listButton.forEach((list, index) => {
    list.addEventListener("click", () => {
        listButton.forEach((btn) =>
            btn.classList.remove("list__button--active")
        );
        // list.classList.remove("list__button--active");
        scrollToSection(index);
        list.classList.add("list__button--active");
    });
});
