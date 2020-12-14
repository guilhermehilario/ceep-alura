import "./CategoryList.css";
import React, { Component } from "react";

class CategoryList extends Component {

    constructor() {
        super();
        this.state = {categories:[]}
        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount(){
        this.props.category.register(this._newCategories);
    }

    componentWillUnmount() {
        this.props.category.register(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({...this.state,categories})
    }

    _handleEventInput(event) {
        if (event.key === "Enter") {
            let valueCategory = event.target.value;
            this.props.addCategory(valueCategory);
        }
    }

    render() {
        return (
        <section className="CategoryList">
            <ul className="CategoryList_list">
            {this.state.categories.map((category, index) => {
                return (
                    <li key={index} className="CategoryList_list__item">
                        {category}
                    </li>
                );
            })}
            </ul>

            <input
                type="text"
                className="CategoryList_input"
                placeholder="Adicionar Categoria"
                onKeyUp={this._handleEventInput.bind(this)}
            />
        </section>
        );
    }
}

export default CategoryList;
