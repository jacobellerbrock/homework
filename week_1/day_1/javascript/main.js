const input = document.querySelector("input")
input.addEventListener("input", paste);

function paste(e) {
    if (document.getElementById("radiobox").checked)
    document.getElementById("output").innerText = e.target.value;
    if (document.getElementById("togglecolor").checked)
    document.getElementById("output").style.color = "white";
    else
    document.getElementById("output").style.color = "black";
}