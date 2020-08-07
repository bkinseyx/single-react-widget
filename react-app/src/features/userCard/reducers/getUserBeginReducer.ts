import { UserState } from '../userSlice';

export const getUserBeginReducer = (state: UserState): void => {
  state.loading = true;
};
