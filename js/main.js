document.getElementById("grInput").addEventListener("input", function(e) {
let gr = e.target.value;
document.getElementById("clOutput").innerHTML = gr *  0.23809523809;
document.getElementById("lbsOutput").innerHTML = gr *  0.00220462442;
document.getElementById("klOutput").innerHTML = gr * 0.001;
});