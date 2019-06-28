var r = 0;
var xo = 0;
var yo = 0;
var xp = 0;
var yp = 0;

function func(theta) {
    var rcos = r * Math.cos(theta);
    var rsin = r * Math.sin(theta);
    return (xp - xo - rcos) * rcos + (yp - yo - rsin) * rsin;
}

function df(theta) {
    var dt = 1e-3;
    return (func(theta + dt) - func(theta - dt)) / (2.0 * dt);
}

function newtonRaphson(init) {
    var theta = init;
    var maxIter = 10000;
    var iter = 0;
    var eps = 1e-12;
    for (; iter < maxIter; iter++) {
        newTheta = theta - func(theta) / df(theta)
        if (Math.abs(newTheta - theta) < eps) break;

        theta = newTheta;
    }

    if (iter == maxIter) return "undefined"
    else return theta
}

function solve() {
    r = document.getElementById("r").value;
    xo = document.getElementById("xo").value;
    yo = document.getElementById("yo").value;
    xp = document.getElementById("xp").value;
    yp = document.getElementById("yp").value;
    document.getElementById("inputs").innerHTML
        = "r=" + r
        + ", x<sub>o</sub>=" + xo
        + ", y<sub>o</sub>=" + yo
        + ", x<sub>p</sub>=" + xp
        + ", y<sub>p</sub>=" + yp;


    var interAngle = Math.atan2(yp - yo, xp - xo);
    var soln1 = newtonRaphson(interAngle + 45.0 * Math.PI / 180);
    var soln2 = newtonRaphson(interAngle - 45.0 * Math.PI / 180);
    document.getElementById("result").innerHTML
        = "&theta;<sub>1</sub> = " + (soln1 * 180.0 / Math.PI).toFixed(4) + " <br>"
        + "&theta;<sub>2</sub> = " + (soln2 * 180.0 / Math.PI).toFixed(4);


    var xt1 = (Math.cos(soln1) * r + 1.0 * xo).toFixed(4);
    var yt1 = (Math.sin(soln1) * r + 1.0 * yo).toFixed(4);
    var xt2 = (Math.cos(soln2) * r + 1.0 * xo).toFixed(4);
    var yt2 = (Math.sin(soln2) * r + 1.0 * yo).toFixed(4);
    document.getElementById("position").innerHTML 
    = "T<sub>1</sub> = (" + xt1 + ", " + yt1 + ") <br>" 
    + "T<sub>2</sub> = (" + xt2 + ", " + yt2 + ")";
}