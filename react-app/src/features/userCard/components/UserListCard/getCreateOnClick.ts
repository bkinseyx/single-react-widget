import { store } from 'app/store';
import { createUser } from '../../userSlice';

export const getCreateOnClick = () => (): void => {
  store.dispatch(createUser());
};
