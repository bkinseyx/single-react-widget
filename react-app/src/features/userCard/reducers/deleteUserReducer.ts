import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from '../userSlice';

/** only used in development */
export const deleteUserReducer = (
  state: UserState,
  action: PayloadAction<User>
): void => {
  const index = state.users.findIndex(
    (user) => user.userId === action.payload.userId
  );
  state.users.splice(index, 1);
};
