import React, { Component } from 'react';
import css from "./Searchbar.module.css"

export class Searchbar extends Component {
    state = {
        search: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.search===""){
            alert("Введіть текст")
            return
        }
        this.props.onSubmit(this.state.search);
        this.setState({ search: "" });
    }

    handleChange = (event) => {
        this.setState({ search: event.target.value.toLowerCase() });
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.SearchForm__button}>
                        <span className={css.SearchForm_button_label}>Search</span>
                    </button>
                    <input
                        name="searchInput"
                        className={css.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value={this.state.search}
                        onChange={this.handleChange}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}
