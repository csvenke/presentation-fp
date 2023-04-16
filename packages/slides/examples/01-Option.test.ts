import { Option, fromNullable, map, none, some } from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import { expect, test } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const database = new Map<string, User>()
  .set("1", { id: "1", firstName: "John", lastName: "Doe" })
  .set("2", { id: "2", firstName: "Jane", lastName: "Doe" })
  .set("3", { id: "3", firstName: "Tony", lastName: "Lazuto" });

const getUserById = (id: string): Option<User> => pipe(fromNullable(database.get(id)));

const getFirstNameById = (id: string): Option<string> =>
  pipe(
    getUserById(id),
    map((user) => user.firstName)
  );

test("demo", () => {
  expect(getFirstNameById("1")).toEqual(some("John"));
  expect(getFirstNameById("5")).toEqual(none);
});
