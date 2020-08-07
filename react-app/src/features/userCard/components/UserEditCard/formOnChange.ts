import { store } from 'app/store';
import { setFormData } from '../../userSlice';

export const formOnChange = ({ formData }: { formData: any }) => {
  store.dispatch(setFormData(formData));
};
