import { expect, test } from "vitest";

interface Monoid<T> {
  concat(first: T, second: T): T;
  empty: T;
}

const additionMonoid: Monoid<number> = {
  concat: (first, second) => first + second,
  empty: 0,
};

test("demo", () => {
  expect(additionMonoid.empty).toEqual(0);
  expect(additionMonoid.concat(2, 2)).toEqual(4);
});
