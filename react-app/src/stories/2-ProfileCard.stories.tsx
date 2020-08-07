import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProfileCard from 'features/profileCard/components/ProfileCard/ProfileCard';
import { store } from 'app/store';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
};

export const ToStorybook = () => (
  <Provider store={store}>
    <ProfileCard reactConfig={{ title: 'Profiles' }} />
  </Provider>
);

ToStorybook.story = {
  name: 'Profiles',
};
