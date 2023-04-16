import { date, either, eq, ord, string } from "fp-ts";
import { Either } from "fp-ts/Either";
import { createId, isValidId } from "../utils/createId";
import { createDate, isValidDate } from "../utils/createDate";

export interface Identifiable {
  id: string;
}

export interface Todo extends Identifiable {
  createdAt: string;
  updatedAt: string;
  content: string;
  done: boolean;
}

export const eqTodo = eq.contramap((todo: Todo) => todo.id)(string.Eq);

export const ordCreatedAt = ord.contramap((todo: Todo) => new Date(todo.createdAt))(date.Ord);

export const ordUpdatedAt = ord.contramap((todo: Todo) => new Date(todo.updatedAt))(date.Ord);

export const createTodo = ({
  id = createId(),
  createdAt = createDate(),
  updatedAt = createDate(),
  content = "",
  done = false,
}: Partial<Todo>): Either<Error, Todo> => {
  if (!isValidId(id)) {
    return either.left(new Error("Todo.id is not a valid id!"));
  }
  if (!isValidDate(createdAt)) {
    return either.left(new Error("Todo.createdAt is not a valid date!"));
  }
  if (!isValidDate(updatedAt)) {
    return either.left(new Error("Todo.updatedAt is not a valid date!"));
  }

  return either.right({
    id,
    createdAt,
    updatedAt,
    content,
    done,
  });
};

export const updateTodo =
  (changes: Partial<Todo> = {}) =>
  (todo: Todo): Either<Error, Todo> =>
    createTodo({
      ...todo,
      ...changes,
      updatedAt: createDate(),
    });
