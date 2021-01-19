function scrollToID(el) {
    var element = document.getElementById(el);
    element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}