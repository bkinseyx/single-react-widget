import { UserState } from '../userSlice';

export const deleteUserSuccessReducer = (state: UserState): void => {
  state.deleting = false;
};
