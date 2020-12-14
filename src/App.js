import "./assets/App.css";

import React, { Component } from "react";
import NotesList from "./components/NotesList";
import RegistrationForm from "./components/RegistrationForm";
import CategoryList from "./components/CategoryList";
import Categories from "./databese/Categorys";
import NotesListArray from "./databese/Notes";

class App extends Component {
    constructor() {
        super();
        this.categories = new Categories();
        this.notes = new NotesListArray();
    }

    render() {
        return (
            <section className="content">
                <RegistrationForm
                    category={this.categories}
                    createCard={this.notes.createNote.bind(this.notes)}
                />

                <main className="main-content">
                    <CategoryList
                        addCategory={this.categories.addCategory.bind(
                            this.categories
                        )}
                        category={this.categories}
                    />
                    <NotesList
                        deleteNote={this.notes.deleteNote.bind(this.notes)}
                        register={this.notes.register}
                        notes={this.notes.notes}
                    />
                </main>
            </section>
        );
    }
}

export default App;
