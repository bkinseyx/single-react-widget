import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from '../userSlice';

export const setFormDataReducer = (
  state: UserState,
  action: PayloadAction<User>
): void => {
  console.log('update user reducer');
};
