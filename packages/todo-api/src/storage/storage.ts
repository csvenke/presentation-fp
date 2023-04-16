import { map, sequence } from "fp-ts/Array";
import { ApplicativePar, ReaderTaskEither } from "fp-ts/ReaderTaskEither";
import { TaskEither } from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { FindOneOptions, FindOptionsWhere, Repository } from "typeorm";
import { Identifiable } from "../entities/Todo";
import { fromPromise } from "../utils/promise";

export const saveOne =
  <T extends Identifiable>(item: T) =>
  (repository: Repository<T>): TaskEither<Error, T> =>
    fromPromise(repository.save(item));

export const saveMany = <T extends Identifiable>(items: T[]): ReaderTaskEither<Repository<T>, Error, T[]> =>
  pipe(items, map(saveOne), sequence(ApplicativePar));

export const findAll =
  <T extends Identifiable>() =>
  (repository: Repository<T>): TaskEither<Error, T[]> =>
    fromPromise(repository.find());

export const findMany =
  <T extends Identifiable>(where: FindOptionsWhere<T>[]) =>
  (repository: Repository<T>): TaskEither<Error, T[]> =>
    fromPromise(repository.findBy(where));

export const findOne =
  <T extends Identifiable>(options: FindOneOptions<T>) =>
  (repository: Repository<T>): TaskEither<Error, T> =>
    fromPromise(repository.findOneOrFail(options));
