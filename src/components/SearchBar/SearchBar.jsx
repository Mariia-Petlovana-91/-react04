import css from '../SearchBar/SearchBar.module.css';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { BsSearch } from "react-icons/bs";
import validationSchema from '../../utils/validateSchema';

export default function SearchBar() {
     
	const INIT__VALUE = {
		name: "",
	}

	function onSubmitSearch(values, actions, setValueSerch) {
		
	}

	return (
		<Formik initialValues={INIT__VALUE}
			validationSchema={validationSchema}
		      onSubmit={onSubmitSearch}>
			<Form className={css.form}>
				<Field className={css.input}
				      name="search"
					type="text"
	                  />
			      <ErrorMessage className={css.errorForm}
				      name="search"
				      component="span"
				/>
		       	<button className={css.formBtn}
				      type='submit'>
				   <BsSearch className={css.btnIcon}
					size={20}
				   />
			      </button>
			</Form>
	     </Formik>
	)
}