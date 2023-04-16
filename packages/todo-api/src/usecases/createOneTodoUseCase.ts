import { ReaderTaskEither, chain, fromEither } from "fp-ts/ReaderTaskEither";
import { pipe } from "fp-ts/function";
import { Todo, createTodo } from "../entities/Todo";
import { TodoRepository } from "../storage/repositories";
import { saveOne } from "../storage/storage";

export const createOneTodoUseCase = (content: string): ReaderTaskEither<TodoRepository, Error, Todo> =>
  pipe(fromEither(createTodo({ content })), chain(saveOne));
