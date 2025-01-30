// import express module
import express from 'express';

// instantiate an express application
const app = express();

//
const appointments= [];

// serve static files from the 'public' directory
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

// define the port number where our server will listen
const PORT = 3000;


// create a "default" route for our website's home page
//app.get('/', (req, res) => {

  // send the home page as a response to the client
  //res.send('Hello World');
//});

//get 
app.get('/', (req,res) => 
  {
      //Send our home page as a response to the client
      res.sendFile(`${import.meta.dirname}/views/home.html`);
  });

  //post
  app.post('/submit-order', (req, res) =>
    {
        console.log(req.body);
        appointments.push(req.body)
        res.send(`<h1>your appointment is confirmed!</h1>`);
    });

    app.get('/admin/appointments', (req, res) =>
      {
          res.send(appointments);
      });


// Tell the server to listen on our specified port
app.listen(PORT, () => {
  console.log(`Server is running at     
  http://localhost:${PORT}`);
});