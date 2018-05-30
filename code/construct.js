function main() {
    var socket = io.connect('http://localhost:3000');

    function handleSubmit(evt) {
        socket.emit("send message", val);
    }
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
}

window.onload = main;