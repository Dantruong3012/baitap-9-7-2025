function e() {
  let amount = document.getElementById("k").value;
  let From = document.getElementById("b").value;
  let To = document.getElementById("c").value;
  const rate = 25000;
  let converted = 0;
  let menhgia = "";

  if (From === "USD" && To === "VND") {
    converted = amount * rate;
    menhgia = "VND";
  } else if (From === "VND" && To === "USD") {
    converted = amount / rate;
    menhgia = "USD";
  } else if (From === "VND" && To === "VND") {
    converted = amount;
    menhgia = "VND";
  } else {
    converted = amount;
    menhgia = "USD";
  }
  document.getElementById("d").innerHTML = "Result:" + converted + menhgia;
}
