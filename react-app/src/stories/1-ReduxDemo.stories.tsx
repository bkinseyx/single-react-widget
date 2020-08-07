import React from 'react';
import { Provider } from 'react-redux';

import ReduxDemo from 'features/reduxDemo/components/ReduxDemo/ReduxDemo';
import { store } from 'app/store';

export default {
  title: 'ReduxDemo',
  component: ReduxDemo,
};

export const ToStorybook = () => (
  <Provider store={store}>
    <ReduxDemo />
  </Provider>
);

ToStorybook.story = {
  name: 'ReduxDemo',
};
