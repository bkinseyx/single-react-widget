import { UserState } from '../userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

export const getUsersFailureReducer = (
  state: UserState,
  action: PayloadAction<string>
): void => {
  state.error = action.payload;
  state.loading = false;
};
