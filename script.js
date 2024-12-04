document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    features.forEach((feature) => {
        feature.addEventListener("click", (e) => {
            e.preventDefault();
            const target = feature.getAttribute("href");
            window.location.href = target;
        });
    });
});