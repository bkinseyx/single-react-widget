declare global {
  interface Window {
    Liferay: any;
  }
}

// This abstracts out most of the error handling and makes invoking api calls
// inside of redux actions very tight, composable with Promise.all and
// amenable to modern async-await syntax inside of thunk actions
export const promisifiedLiferayService = (
  api: string,
  data: {},
  expectedResultType: any
) =>
  new Promise((resolve, reject) => {
    try {
      window.Liferay.Service(api, data, (result: any) => {
        if (typeof result === expectedResultType) {
          resolve(result);
        } else if (expectedResultType === 'array' && Array.isArray(result)) {
          resolve(result);
        } else if (typeof result === 'string') {
          reject(result);
        } else {
          reject('Unexpected error.');
        }
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateUserDummyData = {
  oldPassword: '',
  newPassword1: '',
  newPassword2: '',
  passwordReset: false,
  reminderQueryQuestion: '',
  reminderQueryAnswer: '',
  screenName: 'not_null',
  emailAddress: 'test@example.com',
  facebookId: 0,
  openId: '', // this is weird: only id field here that takes a string instead of an int
  languageId: 0,
  timeZoneId: 0,
  greeting: '',
  comments: '',
  firstName: '',
  middleName: '',
  lastName: '',
  prefixId: 0,
  suffixId: 0,
  birthdayMonth: 1,
  birthdayDay: 1,
  birthdayYear: 1970,
  smsSn: '',
  facebookSn: '',
  jabberSn: '',
  skypeSn: '',
  twitterSn: '',
  jobTitle: '',
  groupIds: null,
  organizationIds: [],
  roleIds: [],
  userGroupRoles: [],
  userGroupIds: [],
};

export const createUserDummyData = {
  autoPassword: false,
  password1: '', //
  password2: '', //
  autoScreenName: false,
  screenName: '', //
  emailAddress: '', //
  facebookId: 0,
  openId: '',
  locale: 'en_US',
  firstName: '', //
  middleName: '', //
  lastName: '', //
  prefixId: 0,
  suffixId: 0,
  male: true,
  birthdayMonth: 1,
  birthdayDay: 1,
  birthdayYear: 1970,
  jobTitle: '',
  groupIds: null,
  organizationIds: null,
  roleIds: null,
  userGroupIds: null,
  sendEmail: false,
  serviceContext: {},
};

export const getGroupId = () => window.Liferay.ThemeDisplay.getScopeGroupId();
