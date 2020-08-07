import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from '../userSlice';
import { WithRequired } from 'app/utils/typeUtils';

export const updateUserReducer = (
  state: UserState,
  action: PayloadAction<WithRequired<User, 'userId'>>
): void => {
  const user = state.users.find(
    (existingUser) => existingUser.userId === action.payload.userId
  );
  /* istanbul ignore next */
  if (!user) {
    return;
  }
  Object.assign(user, action.payload);
};
