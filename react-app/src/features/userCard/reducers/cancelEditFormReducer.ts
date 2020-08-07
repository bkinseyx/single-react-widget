import { UserState } from '../userSlice';

export const cancelEditFormReducer = (state: UserState): void => {
  state.editForm.data = undefined;
};
