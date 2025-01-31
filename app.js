// import express module
import express from 'express';

// instantiate an express application
const app = express();

// serve static files from the 'public' directory
app.use(express.static('public'));


app.use(express.urlencoded({extended: true}));

// define the port number where our server will listen
const PORT = 3000;

const appointmentList = [];


// create a "default" route for the appointment scheduler home page
app.get('/', (req,res) => 
  {
      //Send our home page as a response to the client
      res.sendFile(`${import.meta.dirname}/views/home.html`);
  });

// post route to handle form submission
app.post('/confirmation', (req, res) =>
{
  // Get form data from request body
  const appointment = {
    fname: req.body.fname,
    lname: req.body.lname,
    date: req.body.date,
    time: req.body.time,
    timestamp: new Date()
  };

  // Save order to the appointmentList array
  appointmentList.push(appointment)

  // Log the appointmentList array to the console
  console.log(req.body);
  
  //create dynamic confirmation page
  let confirmationHTML = '<h2>Thank you.</h2><p>The following appointment has been scheduled.</p><ul>';
  confirmationHTML += `<li>Name: ${appointment.fname} ${appointment.lname} </li><li>Date:  ${appointment.date}</li><li>Time: ${appointment.time} </li>`;
  confirmationHTML += '</ul>';
  
  // send confirmation page to user
  res.send(confirmationHTML);
  
});


// admin route to view all appointments
app.get('/admin/schedule', (req, res) => {
  
  // create dynamic admin page
  let html = '<h1>Appointment Schedule</h1><ul>';
  for (const appointment of appointmentList) 
  {
    html += `<li>${appointment.fname} ${appointment.lname} - ${appointment.date} - ${appointment.time} - ${appointment.timestamp}</li>`;
  }
  html += '</ul>';
  res.send(html);
});


// Tell the server to listen on our specified port
app.listen(PORT, () => {
  console.log(`Server is running at     
  http://localhost:${PORT}`);
});