function addn(x, y) {
    var e = x + y;
    return e;
}

function muln(x, y) {
    var e = x * y;
    return e;
}

function subn(x, y) {
    var e = x - y;
    return e;
}

function divn(x, y) {
    var e = x / y;
    return e;
}

function getn() {
    var n1 = document.getElementById("na1").value;
    var a = parseInt(n1);
    var n2 = document.getElementById("na2").value;
    var b = parseInt(n2);
    var n3 = document.getElementById("funn").value;

    if (n3 == "add") {
        var n4 = addn(a, b);
        document.getElementById("result").innerHTML = n4;
    } else {
        if (n3 == "mul") {
            var n4 = muln(a, b);
        } else if (n3 == "sub") {
            var n4 = subn(a, b);
            document.getElementById("result").innerHTML = n4;
        } else {
            var n4 = divn(a, b);
        }
    }
    document.getElementById("result").innerHTML = n4;
}