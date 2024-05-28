$(document).ready(function () {
    $('.projects').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showSkillsBtn").addEventListener("click", function () {
        document.getElementById("skillsModal").style.display = "block";
    });

    document.getElementsByClassName("close")[0].addEventListener("click", function () {
        document.getElementById("skillsModal").style.display = "none";
    });

    window.onclick = function (event) {
        var modal = document.getElementById("skillsModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
