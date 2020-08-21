document.addEventListener("change", function () {
    let vol = document.getElementById('vol').value;
    let root = document.documentElement;
    root.style.setProperty('--clar-width', vol + "px");
});