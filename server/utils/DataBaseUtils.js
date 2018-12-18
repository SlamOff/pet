import mongoose from 'mongoose';
import '../models/Note';
import config from '../../etc/config.json';
let Note = mongoose.model('Note');

export function setUpConnection(){
    mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name);
}
export function listNotes(){
    return Note.find();
}
export function createNote(data){
    let note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        date: new Date()
    });
    return note.save();
}
export function deleteNote(id){
    return Note.findById(id).remove();
}