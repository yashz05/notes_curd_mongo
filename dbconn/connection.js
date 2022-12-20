//created on 20/12/22 22:49:29

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//mongonotesapi

// getting-started.js
const mon = require('mongoose');

 mon.connect('mongodb://localhost:27017/notes').
    catch(error => console.log(error));

module.exports = mon;