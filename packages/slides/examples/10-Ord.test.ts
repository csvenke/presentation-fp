import { expect, test } from "vitest";

type Ordering = -1 | 0 | 1;

interface Ord<T> {
  equals(first: T, second: T): boolean;
  compare: (first: T, second: T) => Ordering;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

const userOrd: Ord<User> = {
  equals: (first, second) => first.id === second.id,
  compare: (first, second) => (first.age < second.age ? -1 : first.age > second.age ? 1 : 0),
};

const sort =
  <T>(ord: Ord<T>) =>
  (list: T[]): T[] =>
    list.sort(ord.compare);

test("demo", () => {
  const john: User = { id: "1", firstName: "John", lastName: "Doe", age: 30 };
  const jane: User = { id: "2", firstName: "Jane", lastName: "Doe", age: 28 };

  const sortUsers = sort(userOrd);

  expect(sortUsers([john, jane])).toEqual([jane, john]);
});
