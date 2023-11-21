const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("clean", e.target.checked);

})