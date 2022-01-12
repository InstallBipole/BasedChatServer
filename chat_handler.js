const WebSocket = require('ws');
var fs = require('fs');
const wss = new WebSocket.Server({ port:8080 })
wss.on("connection", ws=>  {
  console.log("connection established");
  ws.on("message", message => {
    var mesg = JSON.parse(message);
    console.log(message);
    wss.clients.forEach(function each(ews){
      if ((ews.readyState === WebSocket.OPEN) && (ws != ews)){
        ews.send(JSON.stringify(mesg));
      };
    });
  });
})