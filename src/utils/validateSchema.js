import * as Yup from "yup";


const phonePattern = /^\d{3}-\d{2}-\d{2}$/
	
const schemaValidate = Yup.object({
	name: Yup.string()
		.required("The search field cannot be empty.")
		.min(2, "Enter at least 2 letters.")
		.max(15, "A maximum of 20 letters is allowed.")
		
});

export default schemaValidate;