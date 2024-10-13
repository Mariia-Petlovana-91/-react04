import css from '../SearchBar/SearchBar.module.css';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { BsSearch } from "react-icons/bs";
import validationSchema from '../../utils/validateSchema';

export default function SearchBar({onSubmit}) {
     
	const INIT__VALUE = {
		search: "",
	}
	
	return (
	  <header>
            <Formik initialValues={INIT__VALUE}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
				<Form className={css.form}>
					<div className={css.form__inputEl}>
						<Field className={css.form__input}
				                  name="search"
					            type="text"
                                          placeholder="Search images and photos"
						/>
						<button className={css.form__btn}
				                  type='submit'>
				                  <BsSearch className={css.form__btnIcon}
					              size={20}
				                  />
			                 </button>	
					</div>
			            <ErrorMessage className={css.form__error}
				           name="search"
				           component="span"
				      />
			</Form>
	     </Formik>
	  </header>

	)
}