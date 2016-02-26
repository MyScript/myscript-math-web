var log;
var pointerDown = {};
var lastPositions = {};
var movingDiv;
var x = 50;
var y = 50;

var onPointerMove = function (evt) {
    if (pointerDown[evt.pointerId]) {
        x -= lastPositions[evt.pointerId].x - evt.clientX;
        y -= lastPositions[evt.pointerId].y - evt.clientY;

        movingDiv.style.left = x + "px";
        movingDiv.style.top = y + "px";
        lastPositions[evt.pointerId] = { x: evt.clientX, y: evt.clientY };

        log.innerHTML = "pointerId:" + evt.pointerId + "<br>Pressure:" + evt.pressure + "<br>Type:" + evt.pointerType;
    }
};

var onPointerOut = function (evt) {
    pointerDown[evt.pointerId] = false;
};

var onPointerUp = function (evt) {
    pointerDown[evt.pointerId] = false;
};

var onPointerDown = function (evt) {
    pointerDown[evt.originalEvent.pointerId] = true;

    lastPositions[evt.originalEvent.pointerId] = { x: evt.originalEvent.clientX, y: evt.originalEvent.clientY };
};

//var onPointerDown = function (evt) {
//    pointerDown[evt.pointerId] = true;

//    lastPositions[evt.pointerId] = { x: evt.clientX, y: evt.clientY };
//};


movingDiv = document.getElementById("movingDiv");
log = document.getElementById("log");


movingDiv.style.left = x + "px";
movingDiv.style.top = y + "px";

$("body").on("pointerdown", "div", onPointerDown);
//movingDiv.addEventListener("PointerDown", onPointerDown, false);
movingDiv.addEventListener("PointerMove", onPointerMove, false);
movingDiv.addEventListener("PointerUp", onPointerUp, false);
movingDiv.addEventListener("PointerOut", onPointerUp, false);