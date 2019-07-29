var movie = Array();
var i = 0;

function get() {
    var n = document.getElementById("name").value;
    movie[i] = n;
    i++;
    var res = "";
    for (var ii = 0; ii < movie.length; ii++) {
        res += movie[ii] + "<br>";
    }
    document.getElementById("result").innerHTML = res;
}