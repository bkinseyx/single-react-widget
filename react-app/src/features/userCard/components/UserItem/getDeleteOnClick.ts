import React from 'react';
import { store } from 'app/store';
import { User } from '../../userSlice';
import { deleteUserApi } from 'features/userCard/api/deleteUserApi';

export const getDeleteOnClick = (user: User) => (
  event: React.MouseEvent
): void => {
  /* istanbul ignore next */
  if (!user) {
    return;
  }
  store.dispatch(deleteUserApi(user));
  event.stopPropagation();
};
