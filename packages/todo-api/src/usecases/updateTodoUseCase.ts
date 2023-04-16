import { ReaderTaskEither, chain, chainEitherK } from "fp-ts/ReaderTaskEither";
import { pipe } from "fp-ts/function";
import { FindOneOptions } from "typeorm";
import { Identifiable, Todo, updateTodo } from "../entities/Todo";
import { TodoRepository } from "../storage/repositories";
import { findOne, saveOne } from "../storage/storage";

type UpdateTodoInput = Partial<Todo> & Identifiable;

export const updateTodoUseCase = (input: UpdateTodoInput): ReaderTaskEither<TodoRepository, Error, Todo> =>
  pipe(findByIdOptions(input), findOne, chainEitherK(updateTodo(input)), chain(saveOne));

const findByIdOptions = (input: UpdateTodoInput): FindOneOptions<Todo> => ({ where: { id: input.id } });
