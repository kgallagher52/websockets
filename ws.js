var myName       = window.prompt("Hi. What's your name?");
var messageInput = document.querySelector("#message-input");
var messageLog   = document.querySelector("#message-log");
var sendButton   = document.querySelector("#send-button");

var logMessage = function (message) {
  var el = document.createElement("div");
  el.innerHTML = message;
  messageLog.appendChild(el);
};

sendButton.onclick = function () {
  var message = messageInput.value;
  var 
  socket.send(myName + " Says: " + message);
};

// Making a websocket My ip ws: is using the websocket protocol
var socket = new WebSocket('ws://144.38.237.164:8080');

// Making an event with a function it is known as event handler
//  events also give you a event object function (event)
socket.onopen = function () {
    alert("connecte3d to server...");
};

socket.onmessage = function (event) {
    console.log("Message Recived", event)
    logMessage(event.data);
}