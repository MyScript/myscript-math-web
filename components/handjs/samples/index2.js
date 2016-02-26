el = document.querySelector("div");
pre = document.querySelector("pre");

function log(e) {
    pre.innerHTML = e.type + "\t\t(" + e.clientX + ", " + e.clientY + ");\n" + pre.innerHTML;
}

el.addEventListener("pointerdown", log, false);
el.addEventListener("pointermove", log, false);
el.addEventListener("pointerup", log, false);