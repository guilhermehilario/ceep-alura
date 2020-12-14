import "./RegistrationForm.css";

import React, { Component } from "react";

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
        this.category = "Sem Categoria";
        this.state = { categories: [] };

        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.category.register(this._newCategories.bind(this));
    }
    
    componentWillUnmount() {
        this.props.category.unsubscribe(this._newCategories.bind(this));
    }

    _newCategories(categories) {
        this.setState({...this.state, categories})
    }

    _hadleSetCategory(event) {
        event.stopPropagation();
        this.category = event.target.value;
    }

    _hadleSetTitle(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _hadleSetText(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _createCard(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createCard(this.title, this.text, this.category);
    }

    render() {
        return (
            <form
                className="RegistrationForm"
                onSubmit={this._createCard.bind(this)}
            >
                <select
                    className="RegistrationForm_input"
                    onChange={this._hadleSetCategory.bind(this)}
                >
                    <option>Sem Categoria</option>
                    {this.props.category.categories.map((category, index) => {
                        return <option key={index}>{category}</option>;
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="RegistrationForm_input"
                    onChange={this._hadleSetTitle.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="RegistrationForm_input"
                    onChange={this._hadleSetText.bind(this)}
                />
                <button className="RegistrationForm_input RegistrationForm_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}

export default RegistrationForm;
