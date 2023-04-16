import { Reader, ask, map } from "fp-ts/Reader";
import { pipe } from "fp-ts/function";
import { expect, test } from "vitest";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Dependencies {
  database: Map<string, User>;
}

const fetchUserById = (id: string): Reader<Dependencies, User | undefined> =>
  pipe(
    ask<Dependencies>(),
    map(({ database }) => database.get(id))
  );

const fetchFirstNameById = (id: string): Reader<Dependencies, string | undefined> =>
  pipe(
    fetchUserById(id),
    map((user) => user?.firstName)
  );

test("demo", async () => {
  const database = new Map<string, User>()
    .set("1", { id: "1", firstName: "John", lastName: "Doe" })
    .set("2", { id: "2", firstName: "Jane", lastName: "Doe" })
    .set("3", { id: "3", firstName: "Tony", lastName: "Lazuto" });

  const firstName = fetchFirstNameById("1")({ database });
  expect(firstName).toEqual("John");
});
