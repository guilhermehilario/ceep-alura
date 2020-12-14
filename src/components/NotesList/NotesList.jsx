import "./NotesList.css";

import React, { Component } from "react";

import NotesCard from "../NotesCards";

class NotesList extends Component {
    constructor() {
        super();
        this.state = { notes: [] };
        this._newNotes = this._newNotes.bind(this);
    }
    componentDidMount() {
        this.props.register(this._newNotes);
    }

    componentWillUnmount() {
        this.props.notes.register(this._newNotes);
    }

    _newNotes(notes) {
        this.setState({ ...this.state, notes });
    }

    render() {
        return (
            <ul className="NotesList">
                {this.state.notes.map((note, index) => {
                    return (
                        <li className="NotesList_item" key={index}>
                            <NotesCard
                                id={index}
                                deleteNote={this.props.deleteNote}
                                title={note.title}
                                text={note.text}
                                category={note.category}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NotesList;
