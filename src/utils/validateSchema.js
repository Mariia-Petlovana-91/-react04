import * as Yup from 'yup';

const validationSchema = Yup.object({
    search: Yup.string()
        .required('Поле обов\'язкове')
        .min(2, 'Мінімум 2 символи'),
});
export default validationSchema;