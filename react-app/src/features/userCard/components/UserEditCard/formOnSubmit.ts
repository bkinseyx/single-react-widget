import { User } from '../../userSlice';
import { saveUserApi } from 'features/userCard/api/saveUserApi';

export const formOnSubmit = ({ formData }: { formData: User }) => {
  console.log('submitted successfully');
  saveUserApi(formData);
};
