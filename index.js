//created on 20/12/22 22:38:00

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//mongonotesapi


const express = require('express');
const mongoose = require("./dbconn/connection");
const  app = express();
const newnotes = require("./controllers/notes_controller")
const notes_model = require("./models/notes_model");
const port  = 8090
app.use(express.json());

app.post('/newnote', newnotes.notes.create_note);
app.post('/update_note', newnotes.notes.update_note);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})