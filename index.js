var express=require('express');
var app=express();
const connection=require("./config/db.config.js");



//Body Parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connection.connect((err) => {
    if (err) { throw err; }
    console.log("connected");

});

//set route
require("./routes/route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


