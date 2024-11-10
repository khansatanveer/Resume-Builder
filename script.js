// regenerate
document.addEventListener("DOMContentLoaded", function () {
    var regenerateButton = document.getElementById("regenerateButton");
    if (regenerateButton) {
        regenerateButton.addEventListener("click", function () {
            window.location.reload();
        });
    }
});
// print
document.addEventListener("DOMContentLoaded", function () {
    var printButton = document.getElementById("printResumeButton");
    if (printButton) {
        printButton.addEventListener("click", function () {
            window.print();
        });
    }
});
//  left side color 
document.addEventListener("DOMContentLoaded", function () {
    var colorSwatches = document.querySelectorAll(".color-swatch1");
    var leftColumn = document.querySelector(".left-column");
    colorSwatches.forEach(function (swatch) {
        swatch.addEventListener("click", function () {
            var color = swatch.getAttribute("data-color");
            if (color && leftColumn) {
                leftColumn.style.backgroundColor = color;
            }
        });
    });
});
// rght side color 
document.addEventListener("DOMContentLoaded", function () {
    var colorSwatches = document.querySelectorAll(".color-swatch2");
    var rightColumn = document.querySelector(".right-column");
    colorSwatches.forEach(function (swatch) {
        swatch.addEventListener("click", function () {
            var color = swatch.getAttribute("data-color");
            if (color && rightColumn) {
                rightColumn.style.backgroundColor = color;
            }
        });
    });
});
