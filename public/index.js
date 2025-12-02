const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static('public'));

// Start server
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('placeBet', (data) => {
    console.log('Bet placed:', data);
    // Later, calculate winnings here
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
