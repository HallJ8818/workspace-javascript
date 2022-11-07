//event
// var messageE = document.getElementById('message');

$('#message').keyup(showKey);
document.addEventListener('mousemove',showPosition);
document.addEventListener('keydown', checkKey)


function showKey(e) {
    console.log(e.key);
    document.getElementById('lastKey').textContent="The key is" + e.key;
}

function showPosition(e) {
    console.log("The position is "+ e.pageX+","+e.pageY+" ");
}

// testing on the canvas
const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);