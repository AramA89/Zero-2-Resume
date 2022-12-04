document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                const target = el.dataset.target;
                console.log('target', target)
                const $target = document.getElementById(target);
console.log('$target', $target)
console.log('el', el)
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});