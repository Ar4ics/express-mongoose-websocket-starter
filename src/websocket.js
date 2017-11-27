const url = require('url');

module.exports = function (wss) {
    wss.on('connection', (ws) => {
        console.log('Client connected');
        setInterval(() => {
            wss.clients.forEach((client) => {
                client.send(Date.now());
            });
        }, 100);
        ws.on('close', () => console.log('Client disconnected'));
    });
}