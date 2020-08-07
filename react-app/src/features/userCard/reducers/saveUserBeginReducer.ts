import { UserState } from '../userSlice';

export const saveUserBeginReducer = (state: UserState): void => {
  state.saving = true;
};
