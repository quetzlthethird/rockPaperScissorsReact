Remember to launch both the server and the client

- In root : nodemon run
- In client : npm start

To avoid the same port attempting to be used by client and server, set the server port as 5555 .env 
PORT=5555
To kill the process on the port for unix
fuser -k 5555/tcp