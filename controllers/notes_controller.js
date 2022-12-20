//created on 20/12/22 22:57:34

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//mongonotesapi

const mongoose = require("../dbconn/connection")
const notes_model = require("../models/notes_model");

const create_note = function (req, res) {
    var new_note =  notes_model({
        title: req.body.title,
        note: req.body.note,
        created_at: Date()
    });
    new_note.save().then(() => {
        res.json({"msg": "ok"});
    })
}
const update_note = async function (req, res) {
    var _id = req.body._id;
    const count = await notes_model.count({"_id": _id});
    console.log(count);
    if (count > 0) {
        notes_model.updateOne({"_id": _id}, {
            title: req.body.title,
            note: req.body.note,
        },function (err,re) {

        })
        res.json({"msg": "Note Updated"});
    } else {
        res.json({"msg": "Note Not found"});
    }
}
exports.notes = {
    create_note,
    update_note
};

