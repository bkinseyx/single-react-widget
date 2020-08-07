import { store } from 'app/store';
import { cancelEditForm } from '../../userSlice';

export const cancelOnClick = (): void => {
  store.dispatch(cancelEditForm());
};
