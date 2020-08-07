import { RootState } from 'app/rootReducer';
import { UserEditForm } from '../userSlice';

export const getUserEditFormSelector = (state: RootState): UserEditForm =>
  state.user.editForm;
