import React from 'react';
import { User } from '../../userSlice';
import { getUserApi } from 'features/userCard/api/getUserApi';

export const getEditOnClick = (user?: User) => (
  event: React.MouseEvent
): void => {
  /* istanbul ignore next */
  if (!user) {
    return;
  }
  getUserApi(user);
  event.stopPropagation();
};
