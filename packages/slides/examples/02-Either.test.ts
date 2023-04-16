import { Either, left, map, right, tryCatch } from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { expect, test } from "vitest";

export interface User {
  name: string;
  age: number;
  email: string;
}

export const user: User = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

const stringifiedUser = JSON.stringify(user);

const parseJson = <T>(text: string): Either<Error, T> =>
  tryCatch(
    () => JSON.parse(text),
    () => new Error("Failed to parse json!")
  );

const isAllowedToDrink = (): Either<Error, boolean> =>
  pipe(
    parseJson<User>(stringifiedUser),
    map((user) => user.age >= 20)
  );

test("demo", () => {
  expect(parseJson(stringifiedUser)).toEqual(right(user));
  expect(parseJson("not valid json")).toEqual(left(new Error("Failed to parse json!")));
  expect(isAllowedToDrink()).toEqual(right(true));
});
