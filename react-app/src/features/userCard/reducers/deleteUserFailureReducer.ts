import { UserState } from '../userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

export const deleteUserFailureReducer = (
  state: UserState,
  action: PayloadAction<string>
): void => {
  state.error = action.payload;
  state.deleting = false;
};
