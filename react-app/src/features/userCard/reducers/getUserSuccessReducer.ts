import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from '../userSlice';

export const getUserSuccessReducer = (
  state: UserState,
  action: PayloadAction<User>
): void => {
  state.editForm.data = action.payload;
  state.loading = false;
};
