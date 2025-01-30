// import express module
import express from 'express';

// instantiate an express application
const app = express();

// serve static files from the 'public' directory
app.use(express.static('public'));

// define the port number where our server will listen
const PORT = 3000;


// create a "default" route for our website's home page
app.get('/', (req, res) => {

  // send the home page as a response to the client
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});



// Tell the server to listen on our specified port
app.listen(PORT, () => {
  console.log(`Server is running at     
  http://localhost:${PORT}`);
});