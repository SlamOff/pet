import React from 'react';
import './NotesEditor.sass';

const NotesEditor = React.createClass({
    getInitialState(){
        return {
            title: '',
            text: '',
            color: '#fff'
        };
    },
    handleTextChange(e){
        this.setState({
            text: e.target.value
        });
    },
    handleTitleChange(e){
        this.setState({
            title: e.target.value
        });
    },
    handleNoteAdd(){
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            text: '',
            title: '',
            color: '#fff'
        });
    },
    render(){
        return (
            <div className="NoteEditor">
                <input type="text" className="NoteEditor__title" placeholder="Enter Title" value={this.state.title} onChange={this.handleTitleChange} />
                <textarea rows={5} className="NoteEditor__text" placeholder="Enter Text" value={this.state.text} onChange={this.handleTextChange} />
                <div className="NoteEditor__footer">
                    <button className="NoteEditor__button" onClick={this.handleNoteAdd} disabled={!this.state.text}>Add</button>
                </div>
            </div>
        );
    }
});

export default NotesEditor;