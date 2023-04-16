import { expect, test } from "vitest";

interface Semigroup<T> {
  concat(first: T, second: T): T;
}

const additionSemigroup: Semigroup<number> = {
  concat: (first, second) => first + second,
};

test("demo", () => {
  expect(additionSemigroup.concat(2, 2)).toEqual(4);
});
