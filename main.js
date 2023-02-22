function isPrime() {
    var num = document.getElementById("num").value;
    var count = 0;
    for (i = 2; i <= num / 2; i++) {
        check = num % i;
        if (check == 0) {
            count++;
            break;
        }
    }
    if (count > 0) {
        document.getElementById("result").innerHTML = num + " es un número compuesto";
    } else {
        document.getElementById("result").innerHTML = num + " es un número primo";
    }
};