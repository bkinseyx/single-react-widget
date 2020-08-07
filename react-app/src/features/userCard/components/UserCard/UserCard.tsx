import React from 'react';
import { useSelector } from 'react-redux';

import { TopLevelComponent } from 'app/utils/typeUtils';
import { showListSelector } from '../../selectors/showListSelector';
import { UserListCard } from '../UserListCard/UserListCard';
import { UserEditCard } from '../UserEditCard/UserEditCard';

interface UserCardProps {
  reactConfig?: {
    title?: string;
  };
}
export const UserCard: TopLevelComponent<UserCardProps> = ({ reactConfig }) => {
  const showList = useSelector(showListSelector);
  return showList ? <UserListCard /> : <UserEditCard />;
};
export default UserCard;
