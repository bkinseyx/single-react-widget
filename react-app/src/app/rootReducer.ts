import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../features/reduxDemo/reduxDemoSlice';
import profileReducer from '../features/profileCard/profileSlice';
import toDoReducer from '../features/toDoCard/toDoSlice';
import userReducer from '../features/userCard/userSlice';

export const rootReducer = combineReducers({
  reduxDemo: counterReducer,
  profile: profileReducer,
  toDo: toDoReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
