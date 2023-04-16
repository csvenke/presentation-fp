import { concatAll, struct } from "fp-ts/Monoid";
import { Option, getMonoid, none, some } from "fp-ts/Option";
import { last } from "fp-ts/Semigroup";
import { describe, expect, test } from "vitest";

interface Settings {
  fontFamily: Option<string>;
  fontSize: Option<number>;
  maxColumn: Option<number>;
}

const userSettings: Settings = {
  fontFamily: some("Fira code"),
  fontSize: none,
  maxColumn: some(100),
};

const workspaceSettings: Settings = {
  fontFamily: none,
  fontSize: none,
  maxColumn: some(120),
};

const getLastMonoid = <T>() => getMonoid<T>(last());

const settingsMonoid = struct<Settings>({
  fontFamily: getLastMonoid(),
  fontSize: getLastMonoid(),
  maxColumn: getLastMonoid(),
});

const combineSettings = concatAll(settingsMonoid);

describe("combineSettings", () => {
  test("should return empty settings when all options are None", () => {
    const settings = combineSettings([]);

    expect(settings).toEqual({
      fontFamily: none,
      fontSize: none,
      maxColumn: none,
    });
  });

  test("should return combined settings with values present in the last option", () => {
    const settings = combineSettings([userSettings, workspaceSettings]);

    expect(settings).toEqual({
      fontFamily: some("Fira code"),
      fontSize: none,
      maxColumn: some(120),
    });
  });
});
