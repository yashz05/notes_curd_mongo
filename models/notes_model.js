//created on 20/12/22 22:55:44

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//mongonotesapi


const mongoose = require("../dbconn/connection");

var notes = new mongoose.model('notes',{
    title: String,
    note: String,
    created_at: String

})

module.exports =notes;