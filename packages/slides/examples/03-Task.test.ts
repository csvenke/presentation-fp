import { pipe } from "fp-ts/function";
import { Task, of, delay, map } from "fp-ts/Task";
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

const fetchUserById = (id: string): Task<User | undefined> => pipe(of(database.get(id)), delay(500));

const fetchFirstNameById = (id: string): Task<string | undefined> =>
  pipe(
    fetchUserById(id),
    map((user) => user?.firstName)
  );

test("demo", async () => {
  const firstName = await fetchFirstNameById("1")();
  expect(firstName).toEqual("John");
});
