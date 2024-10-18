import css from '../SearchBar/SearchBar.module.css';
import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
	const [inputValue, setInputValue] = useState('');
	
	function onInputChange(e) {
       setInputValue(e.target.value);
	}
	
	function handleSubmit(e) {
	e.preventDefault();
		if (inputValue.trim() === '') {
             toast.error("The field cannot be empty!🛑");
             return;
            }
		onSubmit(inputValue);
		setInputValue('');
            e.target.reset();
	}

	return (
	  <header className={css.header}>
			<form className={css.form} onSubmit={handleSubmit}>
					<div className={css.form__inputEl}>
						<input 
                            className={css.form__input}
                            name="search" // Додано ім'я
                            type="text"
                            placeholder="Search images and photos"
                            onChange={onInputChange}
                            value={inputValue} // Прив'язка до локального стану
						/>
						<button className={css.form__btn} type='submit'>
							<BsSearch className={css.form__btnIcon} size={20} />
						</button>	
					</div>
			</form>
	  </header>
	);
}
