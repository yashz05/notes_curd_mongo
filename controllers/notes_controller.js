//created on 20/12/22 22:57:34

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//mongonotesapi

const mongoose = require("../dbconn/connection")
const notes_model = require("../models/notes_model");

const create_note = function (req, res) {
    var new_note = notes_model({
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
        }, function (err, re) {

        })
        res.json({"msg": "Note Updated"});
    } else {
        res.json({"msg": "Note Not found"});
    }
}
const get_single_note = async function (req, res) {
    var id = req.body.id;

    const count = await notes_model.count({"_id": id});
    notes_model.findOne({"_id": id}, function (err, resp) {
        if (err) {
            res.json({"msg": err.msg});
        } else {
            res.json({"msg": resp});
        }
    })

}
const get_all_notes = function (req, res) {
    notes_model.find({}, function (err, resp) {
        if (err) {
            res.json({"msg": err.msg});
        } else {
            res.json(resp);
        }

    })
}

const delete_single_note = async function (req, res) {
    console.log(req.body.id);
    const count = await notes_model.count({"_id": req.body.id});
    if (count > 0) {
        notes_model.findByIdAndRemove({"_id": req.body.id}, function (err, rep) {
            if (err) {
                res.json({"msg": err.msg});
            } else {
                res.json({"msg":"Deleted Successfully !"});
            }
        });
    }
}

exports.notes = {
    create_note,
    update_note,
    get_single_note,
    get_all_notes,
    delete_single_note
};

