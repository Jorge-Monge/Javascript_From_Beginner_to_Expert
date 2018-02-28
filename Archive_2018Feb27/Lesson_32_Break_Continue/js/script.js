var total = 0;
for (var i = 0; i < 1000; i++) {
    total += i;
    if (i == 56) {
        document.getElementById("result").innerHTML += "<strong> ************** " + total + "</strong><br>";
        continue
    }
    document.getElementById("result").innerHTML += "<strong>" + total + "</strong><br>";
    if (i == 100) {
        break
    }
}