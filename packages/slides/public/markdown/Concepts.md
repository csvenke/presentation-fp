### Composition

```ts [|1|3-5|7-13]
const pipe = (initialValue, ...fns) => fns.reduce((acc, fn) => fn(acc), initialValue);

const increment = (value: number) => value + 1;
const double = (value: number) => value * 2;
const square = (value: number) => value * value;

const program = pipe(0, increment, double, double, square);
```

---

### Higher order functions

```ts [|1|3]
const list = [1, 2, 3].map((value) => value + 1);

const addition = (x: number) => (y: number) => x + y;
```

---

### Partial application

```ts [|1|3-5|7-10]
const addition = (x: number) => (y: number): number => x + y;

const increment = addition(1);
const incrementByTwo = addition(2);
const incrementByThree = addition(2);

const list = [1, 2, 3]
    .map(increment)
    .map(incrementByTwo)
    .map(incrementByThree)
```

---

### Pure functions

Unpure

```ts
const double = (value: number): number => value * 2;

const input: number[] = [1, 2, 3];
const output = [];

function doubleItemsInList(): void {
  for (let i = 0; i <= input.length; i++) {
    output.push(double(list[i]));
  }
}
```

Pure

```ts
const double = (value: number): number => value * 2;
const doubleItemsInList = (items: number[]): number[] => items.map(double);

const input: number[] = [1, 2, 3];
const output = doubleItemsInList(input);
```
