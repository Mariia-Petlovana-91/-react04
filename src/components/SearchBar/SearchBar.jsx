import css from '../SearchBar/SearchBar.module.css';
import { BsSearch } from "react-icons/bs";

export default function SearchBar({ onSubmit, setSearchTerm}) {
  const updateSearchValue = (e) => {
    setSearchTerm(e.target.value);
  };
	return (
	  <header className={css.header}>
			<form className={css.form}
			      onSubmit={onSubmit}>
					<div className={css.form__inputEl}>
						<input className={css.form__input}
				                  name="search"
					            type="text"
						      placeholder="Search images and photos"
						      onChange={updateSearchValue}
						/>
						<button className={css.form__btn}
				                  type='submit'>
				                  <BsSearch className={css.form__btnIcon}
					              size={20}
							/>
			                 </button>	
					</div>
			</form>
	  </header>

	)
}