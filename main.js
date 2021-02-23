var mouseEvent = "empty";
var last_position_of_X, last_position_of_Y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMousemove);

function myMousemove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.stroke();
    }

    last_position_of_X = current_position_of_mouse_X;
    last_position_of_Y = current_position_of_mouse_Y;
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent = "mouseLeave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}