
//this function provides easier access to DOM elements using their html element id
var $ = function (id) {
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () {

    //lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);
    var floatRadius = parseFloat($("radius").value);
    var floatRectArea;
    var floatRectPerim;
    var floatS;
    var floatTriangleArea;
    var floatTrianglePerim;
    var floatCircleArea;
    var floatCircleCircum;

    //calculate the rectangle area and perimeter
    floatRectArea = floatRectWidth * floatRectHeight;
    floatRectPerim = 2 * floatRectWidth + 2 * floatRectHeight;

    //calculate the triangle area using Heron's formula (don't remember it? look it up...) and perimeter	
    floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3) / 2;
    floatTriangleArea = Math.sqrt((floatS * (floatS - floatTriSide1) * (floatS - floatTriSide2) * (floatS - floatTriSide3)));
    floatTrianglePerim = floatTriSide1 + floatTriSide2 + floatTriSide3;

    //calculate the circle area and circumference using convenient Math Object methods	
    floatCircleArea = Math.PI * Math.pow(floatRadius, 2);
    floatCircleCircum = 2 * Math.PI * floatRadius;

    $("rectArea").value = floatRectArea.toFixed(2);
    $("rectPerim").value = floatRectPerim.toFixed(2);

    $("triArea").value = floatTriangleArea.toFixed(2);
    $("triPerim").value = floatTrianglePerim.toFixed(2);

    $("circleArea").value = floatCircleArea.toFixed(2);
    $("circleCircum").value = floatCircleCircum.toFixed(2);

};

// Rectangle area
var calcRectArea = function () {
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);

    $("rectArea").value = rectArea(floatRectWidth, floatRectHeight);
};
function rectArea(floatRectWidth, floatRectHeight) {
    var floatRectArea = parseFloat(floatRectWidth * floatRectHeight);
    return floatRectArea.toFixed(2);
};

// Rectangle permimiter
var calcRectPerim = function () {
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);

    $("rectPerim").value = rectPerim(floatRectWidth, floatRectHeight);
};
function rectPerim(floatRectWidth, floatRectHeight) {
    var floatRectPerim = parseFloat((2*floatRectWidth) + (2*floatRectHeight));
    return floatRectPerim.toFixed(2);
};

// Triangle area
var calcTriArea = function () {
    var floatTri1 = parseFloat($("tri_side1").value);
    var floatTri2 = parseFloat($("tri_side2").value);
    var floatTri3 = parseFloat($("tri_side3").value);

    $("triArea").value = triArea(floatTri1, floatTri2, floatTri3);
};
function triArea(floatTri1, floatTri2, floatTri3) {
    var floatS = (floatTri1 + floatTri2 + floatTri3) / 2;
    var floatTriArea = Math.sqrt((floatS * (floatS - floatTri1) * (floatS - floatTri2) * (floatS - floatTri3)));
    return floatTriArea.toFixed(2);
};

// Triangle permimiter
var calcTriPerim = function () {
    var floatTri1 = parseFloat($("tri_side1").value);
    var floatTri2 = parseFloat($("tri_side2").value);
    var floatTri3 = parseFloat($("tri_side3").value);

    $("triPerim").value =  triPerim(floatTri1, floatTri2, floatTri3);
};
function triPerim(floatTri1, floatTri2, floatTri3) {
    var floatTriPerim = parseFloat(floatTri1 + floatTri2 + floatTri3);
    return floatTriPerim.toFixed(2);
};

// Cicle area
var calcCircleArea = function () {
    var floatRadius = parseFloat($("radius").value);

    $("circleArea").value = circleArea(floatRadius);
};
function circleArea(floatRadius) {
    var floatAreaC = parseFloat(Math.PI * Math.pow(floatRadius, 2));
    return floatAreaC.toFixed(2);
};

// Cicle circumference
var calcCircleCircum = function () {
    var floatRadius = parseFloat($("radius").value);

    $("circleCircum").value = circleCircum(floatRadius);
};
function circleCircum(floatRadius) {
    var floatCircum = parseFloat(2 * Math.PI * floatRadius);
    return floatCircum.toFixed(2);
};


window.onload = function () {
    //lines 51-56 clear the DOM values..
    $("rect_width").value = "";
    $("rect_height").value = "";
    $("tri_side1").value = "";
    $("tri_side2").value = "";
    $("tri_side3").value = "";
    $("radius").value = "";
    
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked

    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;

    $("calc_tri_area").onclick = calcTriArea;
    $("calc_tri_perim").onclick = calcTriPerim;

    $("calc_circle_area").onclick = calcCircleArea;
    $("calc_circle_circum").onclick = calcCircleCircum;

};