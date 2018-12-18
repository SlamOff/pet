import React from 'react';
import NotesStore from '../stores/NotesStore';
import NotesAction from '../actions/NotesAction';
import NotesGrid from './NotesGrid.jsx';
import NotesEditor from './NotesEditor.jsx';
import './App.sass';

function getStateFromFlux(){
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}

const App = React.createClass({
    getInitialState(){
        return getStateFromFlux();
    },
    componentWillMount(){
        NotesAction.loadNotes();
    },
    componentDidMount(){
        NotesStore.addChangeListener(this._onChange);
    },
    componentWillUnmount(){
        NotesStore.removeChangeListener(this._onChange);
    },
    handleNoteAdd(data){
        NotesAction.createNote(data);
    },
    handleNoteDelete(note){
        NotesAction.deleteNote(note.id);
    },
    render(){
        return (
            <div className="App">
            <h2 className="App__header">Notesss</h2>
                <NotesEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    },
    _onChange(){
        this.setState(getStateFromFlux());
    }
});

export default App;