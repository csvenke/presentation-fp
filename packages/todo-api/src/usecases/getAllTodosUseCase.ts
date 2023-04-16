import { sort } from "fp-ts/Array";
import { ReaderTaskEither, ask, chainTaskEitherK, map } from "fp-ts/ReaderTaskEither";
import { pipe } from "fp-ts/function";
import { Todo, ordCreatedAt } from "../entities/Todo";
import { TodoRepository } from "../storage/repositories";
import { findAll } from "../storage/storage";

export const getAllTodosUseCase = (): ReaderTaskEither<TodoRepository, Error, Todo[]> =>
  pipe(ask<TodoRepository>(), chainTaskEitherK(findAll()), map(sort(ordCreatedAt)));
