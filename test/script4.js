var webSocket = $.websocket("ws://52.91.78.255:8080/");
// reconnected listening
webSocket.listen(function(message) {
	console.log(message.text);
});

webSocket.send({ 'text': 'trip' }).done(function() {
// message send
}).fail(function(e) {
   // error sending
});
