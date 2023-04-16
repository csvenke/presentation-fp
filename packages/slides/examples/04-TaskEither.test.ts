import { right } from "fp-ts/Either";
import { TaskEither, fromNullable, map } from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { expect, test } from "vitest";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const database = new Map<string, User>()
  .set("1", { id: "1", firstName: "John", lastName: "Doe" })
  .set("2", { id: "2", firstName: "Jane", lastName: "Doe" })
  .set("3", { id: "3", firstName: "Tony", lastName: "Lazuto" });

const fetchUserById = (id: string): TaskEither<Error, User> =>
  pipe(database.get(id), fromNullable(new Error("User does not exist!")));

const fetchFirstNameById = (id: string): TaskEither<Error, string> =>
  pipe(
    fetchUserById(id),
    map((user) => user.firstName)
  );

test("demo", async () => {
  const firstName = await fetchFirstNameById("1")();
  expect(firstName).toEqual(right("John"));
});
