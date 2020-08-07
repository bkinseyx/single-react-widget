import React from 'react';

import { User } from 'features/userCard/userSlice';
import { emptyUser } from 'features/userCard/helpers/userTemplate';
import { getDeleteOnClick } from './getDeleteOnClick';
import { getEditOnClick } from './getEditOnClick';
import styles from './UserItem.module.css';

interface UserProps {
  user: User;
}

export const UserItem: React.FC<UserProps> = ({ user = emptyUser }) => (
  <li className={`list-group-item ${styles.item}`}>
    <div>
      Name: {user.firstName} {user.middleName} {user.lastName}
    </div>
    <div>Screen name: {user.screenName ?? '<none>'}</div>
    <div>Email Address: {user.emailAddress ?? '<none>'}</div>
    <div className={`flex-grow ${styles.buttonsWrapper}`}>
      <button className="btn btn-primary" onClick={getEditOnClick(user)}>
        Edit
      </button>
      <button className="btn btn-danger" onClick={getDeleteOnClick(user)}>
        Delete
      </button>
    </div>
  </li>
);
