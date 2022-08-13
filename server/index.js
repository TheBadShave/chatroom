const WebSocket =  require("ws");

//WSS refers to the entire server
//WS refers to a single connection
const wss = new WebSocket.Server({port: 8082});

wss.on("connection", ws => {
    //Send message to console for each new connection
    console.log("A New Client Connected");

    //Function with in this connection to tell server a client has left
    ws.on("close", () => {
        console.log("A Client Has Disconnected");
    });

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        wss.clients.forEach(function each(client){
          console.log('Sending' + message +' to '+ client);
          client.send(message);
        })
      });
    
});



//wss.on("message", data => {
  //  console.log('Client a client has sent: ${data}');
 //   wss.clients.forEach(
 //       wss.send(data)
//    );
//});