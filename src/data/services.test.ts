import { describe, expect, test } from "bun:test";
import gallery from "./gallery.json";
import { getServiceImages } from "./services";

describe("Service gallery destinations", () => {
  test("Polish Faruri includes every headlight photograph", () => {
    expect(getServiceImages("polish")).toEqual(gallery["Reconditionari faruri"]);
    expect(getServiceImages("polish").length).toBeGreaterThan(0);
  });
  test("Window-film services include every window photograph", () => {
    expect(getServiceImages("folie")).toEqual(gallery["Folii geamuri"]);
    expect(getServiceImages("inlocuire")).toEqual(gallery["Folii geamuri"]);
  });
  test("Wrapping shows the Chrome Off photographs", () => {
    expect(getServiceImages("colantare")).toEqual(gallery["Chrome delete"]);
  });
  test("Headlight protection shows the existing headlight collection", () => {
    expect(getServiceImages("protectie")).toEqual(gallery["Reconditionari faruri"]);
  });
});