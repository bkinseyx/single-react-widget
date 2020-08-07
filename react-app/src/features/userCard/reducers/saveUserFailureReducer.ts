import { UserState } from '../userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

export const saveUserFailureReducer = (
  state: UserState,
  action: PayloadAction<string>
): void => {
  state.error = action.payload;
  state.saving = false;
};
