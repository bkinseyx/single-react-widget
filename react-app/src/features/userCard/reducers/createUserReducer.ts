import { UserState } from '../userSlice';
import { emptyUser } from '../helpers/userTemplate';

export const createUserReducer = (state: UserState): void => {
  state.editForm.data = emptyUser;
};
