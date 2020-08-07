import React from 'react';
import { useSelector } from 'react-redux';

import { ToDoItem } from '../ToDoItem/ToDoItem';
import { toDoListSelector } from '../../selectors/toDoListSelector';
import { activeProfileSelector } from '../../selectors/activeProfileSelector';
import { ToDoCardFooter } from './ToDoCardFooter';
import { TopLevelComponent } from 'app/utils/typeUtils';

interface ToDoCardProps {
  reactConfig?: {
    title?: string;
  };
}

export const ToDoCard: TopLevelComponent<ToDoCardProps> = ({ reactConfig }) => {
  const toDoList = useSelector(toDoListSelector);
  const activeProfile = useSelector(activeProfileSelector);
  return (
    <div className="card" role="complementary" aria-label="ToDo Card">
      <div className="card-header">
        <h5 className="card-title">
          {reactConfig?.title}{' '}
          {activeProfile?.name && `for ${activeProfile?.name}`}
        </h5>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {toDoList.map((toDo) => (
            <ToDoItem key={toDo.toDoId} toDo={toDo}></ToDoItem>
          ))}
        </ul>
      </div>
      <ToDoCardFooter></ToDoCardFooter>
    </div>
  );
};
export default ToDoCard;
