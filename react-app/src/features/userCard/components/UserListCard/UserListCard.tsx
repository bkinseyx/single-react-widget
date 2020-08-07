import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { UserItem } from '../UserItem/UserItem';
import { usersSelector } from '../../selectors/usersSelector';
import { CardFooterWrapper } from 'app/components/CardFooterWrapper/CardFooterWrapper';
import { getCreateOnClick } from './getCreateOnClick';
import { getUsersApi } from 'features/userCard/api/getUsersApi';
import styles from './UserListCard.module.css';

export const UserListCard: React.FC = () => {
  useEffect(() => {
    getUsersApi();
  }, []);

  const userList = useSelector(usersSelector);

  return (
    <div className="card" role="main" aria-label="User Card">
      <div className="card-header">
        <h5 className="card-title">Users</h5>
      </div>
      <div className="card-body">
        <ul className={`list-group ${styles.listGroup}`}>
          {userList.map((user) => (
            <UserItem key={user.userId} user={user}></UserItem>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <CardFooterWrapper>
          <button className="btn btn-primary" onClick={getCreateOnClick()}>
            Create New User
          </button>
        </CardFooterWrapper>
      </div>
    </div>
  );
};
