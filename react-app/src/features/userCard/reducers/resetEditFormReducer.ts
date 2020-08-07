import { UserState } from '../userSlice';
import { emptyUser } from '../helpers/userTemplate';

export const resetEditFormReducer = (state: UserState): void => {
  state.editForm.data = state.editForm.data?.userId
    ? state?.users.find((u) => u.userId === state.editForm.data?.userId) ??
      emptyUser
    : emptyUser;
};
