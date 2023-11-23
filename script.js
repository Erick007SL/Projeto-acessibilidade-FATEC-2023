const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("clean", e.target.checked);

});
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".text");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
 
    let currentSize = 2; // Tamanho de fonte inicial em pixels
    const maxSize = 2.5;   // Tamanho máximo de fonte permitido
    const minSize = 1;   // Tamanho mínimo de fonte permitido
 
    // Função para ajustar o tamanho da fonte
    function adjustFontSize(size) {
        textElements.forEach(function (element) {
            element.style.fontSize = size + "rem";
        });
    }
 
    // Função para aumentar a fonte
    increaseBtn.addEventListener("click", function () {
        if (currentSize < maxSize) {
            currentSize += 0.5;
            adjustFontSize(currentSize);
        }
    });
 
    // Função para diminuir a fonte
    decreaseBtn.addEventListener("click", function () {
        if (currentSize > minSize) {
            currentSize -= 0.5;
            adjustFontSize(currentSize);
        }
    });
});