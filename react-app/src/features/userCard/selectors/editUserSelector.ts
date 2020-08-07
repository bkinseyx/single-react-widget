import { RootState } from 'app/rootReducer';
import { User } from '../userSlice';

export const editUserSelector = (state: RootState): User | undefined =>
  state.user.editUser;
