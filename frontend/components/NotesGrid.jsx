import React from 'react';
import Masonry from 'react-masonry-component';
import Note from './Note.jsx';
import './NotesGrid.sass';

const NotesGrid = React.createClass({
    render(){
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        // this.props.notes = {
        //     id: 123,
        //     title:
        // }
        console.log(this.props.notes);
        return (
            <Masonry className="NotesGrid" options={masonryOptions}>
                {
                    this.props.notes.map(note =>
                        <Note key={note.id} title={note.title} onDelete={this.props.onNoteDelete.bind(null, note)} color={note.color}>
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
});

export default NotesGrid;