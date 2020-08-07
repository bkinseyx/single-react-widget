import { createSlice } from '@reduxjs/toolkit';

import { createUserReducer } from './reducers/createUserReducer';
import { deleteUserReducer } from './reducers/deleteUserReducer';
import { updateUserReducer } from './reducers/updateUserReducer';
import { editUserReducer } from './reducers/setEditUserReducer';
import { getUsersBeginReducer } from './reducers/getUsersBeginReducer';
import { getUsersSuccessReducer } from './reducers/getUsersSuccessReducer';
import { getUsersFailureReducer } from './reducers/getUsersFailureReducer';
import { resetEditFormReducer } from './reducers/resetEditFormReducer';
import { setFormDataReducer } from './reducers/setFormData';
import { cancelEditFormReducer } from './reducers/cancelEditFormReducer';
import { getUserBeginReducer } from './reducers/getUserBeginReducer';
import { getUserSuccessReducer } from './reducers/getUserSuccessReducer';
import { getUserFailureReducer } from './reducers/getUserFailureReducer';
import { saveUserBeginReducer } from './reducers/saveUserBeginReducer';
import { saveUserSuccessReducer } from './reducers/saveUserSuccessReducer';
import { saveUserFailureReducer } from './reducers/saveUserFailureReducer';
import { deleteUserBeginReducer } from './reducers/deleteUserBeginReducer';
import { deleteUserSuccessReducer } from './reducers/deleteUserSuccessReducer';
import { deleteUserFailureReducer } from './reducers/deleteUserFailureReducer';

import { resetReducer } from './reducers/resetReducer';

export interface User {
  userId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  emailAddress?: string;
  screenName?: string;
}

const schema = {
  type: 'object',
  required: ['firstName', 'lastName', 'screenName', 'emailAddress'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First Name',
    },
    lastName: {
      type: 'string',
      title: 'Last Name',
    },
    screenName: {
      type: 'string',
      title: 'Screen Name',
    },
    emailAddress: {
      type: 'string',
      title: 'Email Address',
      format: 'emailAddressFormat',
    },
  },
};

export const createUserSchema = {
  ...schema,
  required: [...schema.required, 'password1', 'password2'],
  properties: {
    ...schema.properties,

    password1: {
      type: 'string',
      title: 'Password',
    },
    password2: {
      type: 'string',
      title: 'Confirm Password',
    },
  },
};

export const updateUserSchema = {
  ...schema,
  properties: {
    ...schema.properties,
    newPassword1: {
      type: 'string',
      title: 'Change Password',
    },
    newPassword2: {
      type: 'string',
      title: 'Confirm Change Password',
    },
  },
};

const uiSchema = {
  firstName: {
    'ui:autofocus': true,
  },
  newPassword1: {
    'ui:widget': 'password',
  },
  newPassword2: {
    'ui:widget': 'password',
  },
};

export interface UserEditForm {
  formKey: number;
  data?: User;
  serverError: null;
  serverSuccessMessage: null;
  submitting: false;
  createUserSchema: {};
  updateUserSchema: {};
  uiSchema: {};
}

export interface UserState {
  users: User[];
  editUser?: User;
  loading: boolean;
  saving: boolean;
  deleting: boolean;
  error: string;
  editForm: UserEditForm;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  saving: false,
  deleting: false,
  error: '',
  editForm: {
    formKey: Date.now(),
    serverError: null,
    serverSuccessMessage: null,
    submitting: false,
    createUserSchema,
    updateUserSchema,
    uiSchema,
  },
};

export const userSlice = createSlice({
  name: 'User',
  initialState: initialState as UserState,
  reducers: {
    createUser: createUserReducer,
    deleteUser: deleteUserReducer,
    updateUser: updateUserReducer,
    editUser: editUserReducer,
    getUsersBegin: getUsersBeginReducer,
    getUsersSuccess: getUsersSuccessReducer,
    getUsersFailure: getUsersFailureReducer,
    getUserBegin: getUserBeginReducer,
    getUserSuccess: getUserSuccessReducer,
    getUserFailure: getUserFailureReducer,
    resetEditForm: resetEditFormReducer,
    cancelEditForm: cancelEditFormReducer,
    setFormData: setFormDataReducer,
    saveUserBegin: saveUserBeginReducer,
    saveUserSuccess: saveUserSuccessReducer,
    saveUserFailure: saveUserFailureReducer,
    deleteUserBegin: deleteUserBeginReducer,
    deleteUserSuccess: deleteUserSuccessReducer,
    deleteUserFailure: deleteUserFailureReducer,
    reset: resetReducer,
  },
});

export const {
  createUser,
  deleteUser,
  updateUser,
  editUser,
  getUsersBegin,
  getUsersSuccess,
  getUsersFailure,
  getUserBegin,
  getUserSuccess,
  getUserFailure,
  resetEditForm,
  cancelEditForm,
  setFormData,
  saveUserBegin,
  saveUserSuccess,
  saveUserFailure,
  deleteUserBegin,
  deleteUserSuccess,
  deleteUserFailure,
  reset,
} = userSlice.actions;

export default userSlice.reducer;
