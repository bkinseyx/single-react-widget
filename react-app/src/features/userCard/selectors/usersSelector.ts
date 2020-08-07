import { RootState } from 'app/rootReducer';
import { UserState } from '../userSlice';

export const usersSelector = (state: RootState): UserState['users'] =>
  state.user.users;
