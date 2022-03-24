function solve() {
    var input = document.getElementById("info").value;
    var answer = atob(input);
    document.getElementById("result").innerHTML = `The Wordle gods have gaven you the word "${answer}"`;
}