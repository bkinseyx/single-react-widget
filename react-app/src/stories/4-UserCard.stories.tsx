import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

import UserCard from 'features/userCard/components/UserCard/UserCard';
import { store } from 'app/store';

export default {
  title: 'UserCard',
  component: UserCard,
};

export const ToStorybook = () => (
  <Provider store={store}>
    <UserCard reactConfig={{ title: 'Users' }} />
  </Provider>
);

ToStorybook.story = {
  name: 'Users',
};
