document.addEventListener("DOMContentLoaded", function () {
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        book.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });
        book.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    document.querySelector("button").addEventListener("click", function () {
        scrollToSection("about");
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
