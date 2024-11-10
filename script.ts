// regenerate
document.addEventListener("DOMContentLoaded", () => {
  const regenerateButton = document.getElementById("regenerateButton") as HTMLButtonElement | null;
  if (regenerateButton) {
    regenerateButton.addEventListener("click", () => {
      window.location.reload();
    });
  }
});

// print
document.addEventListener("DOMContentLoaded", () => {
  const printButton = document.getElementById("printResumeButton") as HTMLButtonElement | null;
  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }
});

//  left side color 
document.addEventListener("DOMContentLoaded", () => {
  const colorSwatches = document.querySelectorAll(".color-swatch1");
  const leftColumn = document.querySelector(".left-column") as HTMLElement;

  colorSwatches.forEach(swatch => {
    swatch.addEventListener("click", () => {
      const color = (swatch as HTMLElement).getAttribute("data-color");
      if (color && leftColumn) {
        leftColumn.style.backgroundColor = color;
      }
    });
  });
});
// rght side color 
document.addEventListener("DOMContentLoaded", () => {
  const colorSwatches = document.querySelectorAll(".color-swatch2");
  const rightColumn = document.querySelector(".right-column") as HTMLElement;

  colorSwatches.forEach(swatch => {
    swatch.addEventListener("click", () => {
      const color = (swatch as HTMLElement).getAttribute("data-color");
      if (color && rightColumn) {
        rightColumn.style.backgroundColor = color;
      }
    });
  });
});
