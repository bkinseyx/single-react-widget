import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, initialState } from '../userSlice';

export const resetReducer = (
  _state: UserState,
  _action: PayloadAction
): UserState => initialState;
