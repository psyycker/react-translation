import reactTranslation from "../index";
import {reset} from "../locale-manager";

describe('Locale Mananger', function () {
  it("Should reset", () => {
    reactTranslation.setTranslationConfig({defaultLocale: "en"})
    expect(reactTranslation.getLocale()).toBe("en");
    reset();
    expect(reactTranslation.getLocale()).toBe("");
  })
});
