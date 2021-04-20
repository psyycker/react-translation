import {getLocale, setTranslationConfig} from "../index";
import {reset} from "../localeManager";

describe('Locale Mananger', function () {
  it("Should reset", () => {
    setTranslationConfig({defaultLocale: "en"})
    expect(getLocale()).toBe("en");
    reset();
    expect(getLocale()).toBe("");
  })
});
