import { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
class Searchbar extends Component {
  render() {
    return (
      <header className={css.Searchbar}>
        <form class={css.SearchForm}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
