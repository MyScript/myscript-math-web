var context;
var plainCanvas;
var log;
var pointerDown = {};
var lastPositions = {};
var colors = ["rgb(100, 255, 100)", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(0, 255, 100)", "rgb(10, 255, 255)", "rgb(255, 0, 100)"];

var onPointerMove = function(evt) {
    if (pointerDown[evt.pointerId]) {

        var color = colors[evt.pointerId % colors.length];

        context.strokeStyle = color;

        context.beginPath();
        context.lineWidth = 2;
        context.moveTo(lastPositions[evt.pointerId].x, lastPositions[evt.pointerId].y);
        context.lineTo(evt.clientX, evt.clientY);
        context.closePath();
        context.stroke();

        lastPositions[evt.pointerId] = { x: evt.clientX, y: evt.clientY };
    }
};

var pointerLog = function (evt) {
    var pre = document.querySelector("pre");

    pre.innerHTML = evt.type + "\t\t(" + evt.clientX + ", " + evt.clientY + ")\n" + pre.innerHTML;
};

var onPointerUp = function (evt) {
    pointerDown[evt.pointerId] = false;
    pointerLog(evt);
};

var onPointerDown = function (evt) {
    pointerDown[evt.pointerId] = true;

    lastPositions[evt.pointerId] = { x: evt.clientX, y: evt.clientY };
    pointerLog(evt);
};

var onPointerEnter = function (evt) {
    pointerLog(evt);
};

var onPointerLeave = function (evt) {
    pointerLog(evt);
};

var onPointerOver = function (evt) {
    pointerLog(evt);
};

var onload = function() {
    plainCanvas = document.getElementById("plainCanvas");
    log = document.getElementById("log");

    plainCanvas.width = plainCanvas.clientWidth;
    plainCanvas.height = plainCanvas.clientHeight;

    context = plainCanvas.getContext("2d");

    context.fillStyle = "rgba(50, 50, 50, 1)";
    context.fillRect(0, 0, plainCanvas.width, plainCanvas.height);

    //$("body").on("pointerdown", "canvas", onPointerDown);
    plainCanvas.addEventListener("pointerdown", onPointerDown, false);
    plainCanvas.addEventListener("pointermove", onPointerMove, false);
    plainCanvas.addEventListener("pointerup", onPointerUp, false);
    plainCanvas.addEventListener("pointerout", onPointerUp, false);
    plainCanvas.addEventListener("pointerenter", onPointerEnter, false);
    plainCanvas.addEventListener("pointerleave", onPointerLeave, false);
    plainCanvas.addEventListener("pointerover", onPointerOver, false);

    //plainCanvas.removeEventListener("pointerdown", onPointerDown);
    //plainCanvas.removeEventListener("PointerMove", onPointerMove);
    //plainCanvas.removeEventListener("PointerUp", onPointerUp);
    //plainCanvas.removeEventListener("PointerOut", onPointerUp);
};

if (document.addEventListener !== undefined) {
    document.addEventListener("DOMContentLoaded", onload, false);
}
;