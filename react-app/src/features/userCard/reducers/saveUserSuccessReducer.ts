import { UserState } from '../userSlice';

export const saveUserSuccessReducer = (state: UserState): void => {
  console.log('success save');
  state.editForm.data = undefined;
  state.loading = false;
};
