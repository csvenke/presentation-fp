import { expect, test } from "vitest";

interface Eq<T> {
  equals(first: T, second: T): boolean;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

const userEq: Eq<User> = {
  equals: (first, second) => first.id === second.id,
};

test("demo", () => {
  const john: User = { id: "1", firstName: "John", lastName: "Doe", age: 30 };
  const jane: User = { id: "2", firstName: "Jane", lastName: "Doe", age: 28 };

  expect(userEq.equals(john, jane)).toEqual(false);
});
