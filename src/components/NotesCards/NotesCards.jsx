import './NotesCards.css';

import React, { Component } from 'react';

import {ReactComponent as DeleteSVG} from '../../assets/icons/delete.svg';

class NotesCard extends Component {
    delete() {
        const id = this.props.id;
        this.props.deleteNote(id);
    }
    render() { 
        return ( 
            <section className="NotesCards">
                <header className="NotesCards_header">
                <h3 className="NotesCards_title">{this.props.title}</h3>
                <h4 className="NotesCards_category">{this.props.category}</h4>
                </header>
                <p className="NotesCards_text">{this.props.text}</p>
                <DeleteSVG onClick={this.delete.bind(this)}/>
            </section>
        );
    }
}
 
export default NotesCard;