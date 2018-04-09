var myName       = window.prompt("Hi. What's your name?");
var messageInput = document.querySelector("#message-input");
var messageLog   = document.querySelector("#message-log");
var sendButton   = document.querySelector("#send-button");
var video        = document.querySelector("#video");

var createVideo  = function (message) {
  
  console.log('CREATE VIDEO FUNCTION RAN');
  var test = createElement("message");
  video.appendChild(test);

  // var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  // var match = message.match(regExp);

  // if (match && match[2].length == 11) {
  //   console.log(message, regExp, "CreateVideo fired");
  //     return match[2];
      
  // } else {
  //   console.log(message, regExp, "CreateVideo fired error");

  //     return 'error';
  // }
  // var el = document.createElement("iframe");
  // video.appendChild(el);
  // el.style.width  = "420";
  // el.style.height = "315";
  // el.src = message;
  
  // document.getElementById('video').src = message;
};

// function getId(url) {
//   var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//   var match = url.match(regExp);

//   if (match && match[2].length == 11) {
//       return match[2];
//   } else {
//       return 'error';
//   }
// }

// var videoId = getId('http://www.youtube.com/watch?v=zbYf5_S7oJo');

// var iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
//   + videoId + '" frameborder="0" allowfullscreen></iframe>';

var logMessage = function (message) {
  var el = document.createElement("div");
  el.innerHTML = message;
  messageLog.appendChild(el);
};

sendButton.onclick = function () {
  var message = messageInput.value;
  console.log("send button fired");
  socket.send(message);
  // socket.send(myName + " Says: " + message);

};

// Making a websocket My ip ws: is using the websocket protocol
var socket = new WebSocket('ws://144.38.237.164:8080');


// Making an event with a function it is known as event handler
//  events also give you a event object function (event)
socket.onopen = function () {
      
    // alert("connecte3d to server...");
};

socket.onmessage = function (event) {
  console.log("message fired")
    console.log("Message Recived", event)
    createVideo(event.data);
}