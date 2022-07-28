var ws_uri = "ws://chatroom-c5j33etb7-thebadshave-gmailcom.vercel.app/:9600";
var websocket = new WebSocket(ws_uri);

// on websocket open:
websocket.onopen = function(event) {
	MessageAdd('<div class="message green">You have entered the chat room.</div>');
};

// on websocket close:
websocket.onclose = function(event) {
	MessageAdd('<div class="message blue">You have been disconnected.</div>');
};

// on websocket error:
websocket.onerror = function(event) {
	MessageAdd('<div class="message red">Connection to chat failed.</div>');
};
