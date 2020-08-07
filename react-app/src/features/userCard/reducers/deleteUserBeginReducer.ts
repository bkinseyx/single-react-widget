import { UserState } from '../userSlice';

export const deleteUserBeginReducer = (state: UserState): void => {
  state.deleting = true;
};
