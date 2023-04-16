import { either, taskEither } from "fp-ts";
import { TaskEither } from "fp-ts/TaskEither";

export const fromPromise = <T>(lazy: Promise<T>): TaskEither<Error, T> =>
  taskEither.tryCatch(
    () => lazy,
    (reason) => {
      if (reason instanceof Error) {
        return reason;
      }
      if (typeof reason === "string") {
        return new Error(reason);
      }

      return new Error("Failed to execute task!");
    }
  );

export const toPromise = <T, E>(value: TaskEither<T, E>): Promise<E> =>
  value().then(
    either.fold(
      (reason) => Promise.reject(reason),
      (x) => Promise.resolve(x)
    )
  );
