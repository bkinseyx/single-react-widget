import { store } from 'app/store';
import { promisifiedLiferayService, getGroupId } from 'app/utils/liferayUtils';
import {
  getUsersBegin,
  getUsersSuccess,
  getUsersFailure,
  User,
} from '../userSlice';

const dummyUserData: User[] = [
  {
    userId: '1',
    firstName: 'Ben',
    middleName: '',
    lastName: 'Kinsey',
  },
];

export const getUsersApi = async () => {
  if (process.env.NODE_ENV === 'development') {
    store.dispatch(getUsersSuccess(dummyUserData));
    return;
  }
  try {
    store.dispatch(getUsersBegin());

    fetch('/api/jsonws/invoke', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        pragma: 'no-cache',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'XMLHttpRequest',
      },
      referrer: 'http://localhost:8080/web/guest/user-admin',
      referrerPolicy: 'no-referrer-when-downgrade',
      body:
        'cmd=' +
        encodeURIComponent('/user/get-group-users":{"groupId":"20124"}}') +
        '&p_auth=Fs4bLSXH',
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then(console.log);

    const users = (await promisifiedLiferayService(
      '/user/get-group-users',
      {
        groupId: getGroupId(),
        // start: 1,
        // end: 2
      },
      'array'
    )) as User[];
    store.dispatch(getUsersSuccess(users));
  } catch (error) {
    store.dispatch(getUsersFailure(error));
  }
};
