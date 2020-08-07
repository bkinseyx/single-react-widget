import { store } from 'app/store';
import {
  promisifiedLiferayService,
  updateUserDummyData,
  createUserDummyData,
  getGroupId,
} from 'app/utils/liferayUtils';
import {
  saveUserBegin,
  saveUserSuccess,
  saveUserFailure,
  User,
} from '../userSlice';
import { getUsersApi } from './getUsersApi';

export const saveUserApi = async (user: User) => {
  if (process.env.NODE_ENV === 'development') {
    store.dispatch(saveUserSuccess());
    return;
  }
  try {
    store.dispatch(saveUserBegin());
    await promisifiedLiferayService(
      user.userId ? '/user/update-user' : '/user/add-user',
      {
        ...(user.userId ? updateUserDummyData : createUserDummyData), // is this the appropriate place to complain that the liferay api is ridiculous?
        companyId: window.Liferay.ThemeDisplay.getCompanyId(),
        groupIds: [getGroupId()],
        ...user,
      },
      'object'
    );
    store.dispatch(saveUserSuccess());
    getUsersApi();
  } catch (error) {
    store.dispatch(saveUserFailure(error));
  }
};
