import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDoCard from 'features/toDoCard/components/ToDoCard/ToDoCard';
import { store } from 'app/store';

export default {
  title: 'ToDoCard',
  component: ToDoCard,
};

export const ToStorybook = () => (
  <Provider store={store}>
    <ToDoCard reactConfig={{ title: 'ToDos' }} />
  </Provider>
);

ToStorybook.story = {
  name: 'ToDos',
};
