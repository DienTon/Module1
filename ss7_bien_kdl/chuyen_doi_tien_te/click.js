function click() {
    let amount = document.getElementById("value").value;
    let fr = document.getElementById("from").value;
    let t = document.getElementById("to").value;

    if (fr == "vnn" && t == "usd") {
        ketqua = Number(amount) / 23000;
    }
    if (fr == "usdd" && t == "vn") {
        ketqua = Number(amount) * 23000;
    }

    document.getElementById("ketqua").innerHTML = "ket qua: " + ketqua ;
}