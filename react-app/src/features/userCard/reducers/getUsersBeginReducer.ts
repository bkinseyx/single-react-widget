import { UserState } from '../userSlice';

export const getUsersBeginReducer = (state: UserState): void => {
  state.loading = true;
};
