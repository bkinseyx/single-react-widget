import { store } from 'app/store';
import { resetEditForm } from '../../userSlice';

export const resetOnClick = () => {
  store.dispatch(resetEditForm());
};
