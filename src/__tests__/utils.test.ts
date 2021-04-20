import {getTranslationWithKey} from "../utils";

describe('Utils', function () {
  it("Should get null translation", () => {
    expect(getTranslationWithKey({}, "common", "toto.tata")).toBeNull();
  })
});
