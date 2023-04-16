import { ReaderTaskEither, ask, chain, fromNullable, map } from "fp-ts/ReaderTaskEither";
import { pipe } from "fp-ts/function";
import { right } from "fp-ts/lib/Either";
import { expect, test } from "vitest";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Dependencies {
  database: Map<string, User>;
}

const fetchUserById = (id: string): ReaderTaskEither<Dependencies, Error, User> =>
  pipe(
    ask<Dependencies>(),
    chain(({ database }) => fromNullable(new Error("User does not exist!"))(database.get(id)))
  );

const fetchFirstNameById = (id: string): ReaderTaskEither<Dependencies, Error, string> =>
  pipe(
    fetchUserById(id),
    map((user) => user?.firstName)
  );

test("demo", async () => {
  const database = new Map<string, User>()
    .set("1", { id: "1", firstName: "John", lastName: "Doe" })
    .set("2", { id: "2", firstName: "Jane", lastName: "Doe" })
    .set("3", { id: "3", firstName: "Tony", lastName: "Lazuto" });

  const firstName = await fetchFirstNameById("1")({ database })();
  expect(firstName).toEqual(right("John"));
});
