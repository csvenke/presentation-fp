import { ReaderTaskEither } from "fp-ts/ReaderTaskEither";
import { Todo } from "../entities/Todo";
import { TodoRepository } from "../storage/repositories";
import { findMany } from "../storage/storage";

export const getManyTodosByIdsUseCase = (ids: string[]): ReaderTaskEither<TodoRepository, Error, Todo[]> =>
  findMany<Todo>(ids.map((id) => ({ id })));
