let sidebar = document.getElementById("sidebar");
let layer = document.getElementById("layer");

function openMenu(){
    sidebar.style.left = "0";
    layer.style.width = "100%";
}

function closeMenu() {
    sidebar.style.left = "-9999px";
    layer.style.width = "0";
}