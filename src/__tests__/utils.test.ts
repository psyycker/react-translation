import {getTranslationWithKey} from "../utils/translation-utils";

describe('Utils', function () {
  it("Should get null translation", () => {
    expect(getTranslationWithKey({}, "common", "toto.tata")).toBeNull();
  })
});
