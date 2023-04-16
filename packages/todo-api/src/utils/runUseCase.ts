import { ReaderTaskEither } from "fp-ts/ReaderTaskEither";
import { pipe } from "fp-ts/function";
import { toPromise } from "./promise";

export const runUseCase = <A, B, C>(usecase: ReaderTaskEither<A, B, C>, context: A) =>
  pipe(usecase(context), toPromise);
