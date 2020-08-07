import { ToDo } from '../toDoSlice';
import { WithRequired, WithOptional } from 'app/utils/typeUtils';

type ToDoTemplateFields = 'isComplete';

export type EmptyToDo = WithRequired<ToDo, ToDoTemplateFields>;

export const emptyToDo: EmptyToDo = {
  isComplete: false,
};

export type PartialToDo = WithOptional<
  Omit<ToDo, 'toDoId'>,
  ToDoTemplateFields
>;
