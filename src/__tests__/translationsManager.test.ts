import { registerTranslations, getTranslations } from "../translationsManager";
import {TranslationObject} from "../Types";

describe("translation manager", () => {
  describe('Register translations', () => {
    it("Should register the translation in common for french and english", () => {
      const translations = {
        "french": {
          key: "traduction"
        },
        "english": {
          key: "translation"
        }
      }
      registerTranslations(translations);
      const result = getTranslations();
      expect((result as TranslationObject)["french"]).not.toBeUndefined();
      expect((result as TranslationObject)["english"]).not.toBeUndefined();
      expect(((result as TranslationObject)["french"] as TranslationObject)["common"]).not.toBeUndefined();
      expect(((result as TranslationObject)["english"] as TranslationObject)["common"]).not.toBeUndefined();
      expect((((result as TranslationObject)["french"] as TranslationObject)["common"] as TranslationObject)["key"]).toBe("traduction")
      expect((((result as TranslationObject)["english"] as TranslationObject)["common"] as TranslationObject)["key"]).toBe("translation")
    })

    it("Should merge translations", () => {
      const translations = {
        "french": {
          key: "traduction"
        },
        "english": {
          key: "translation"
        }
      }

      const translations2 = {
        "french": {
          key2: "traduction2"
        },
        "english": {
          key2: "translation2"
        }
      }
      registerTranslations(translations);
      registerTranslations(translations2);
      const result = getTranslations();
      expect((result as TranslationObject)["french"]).not.toBeUndefined();
      expect((result as TranslationObject)["english"]).not.toBeUndefined();
      expect(((result as TranslationObject)["french"] as TranslationObject)["common"]).not.toBeUndefined();
      expect(((result as TranslationObject)["english"] as TranslationObject)["common"]).not.toBeUndefined();
      expect((((result as TranslationObject)["french"] as TranslationObject)["common"] as TranslationObject)["key"]).toBe("traduction")
      expect((((result as TranslationObject)["english"] as TranslationObject)["common"] as TranslationObject)["key"]).toBe("translation")
      expect((((result as TranslationObject)["french"] as TranslationObject)["common"] as TranslationObject)["key2"]).toBe("traduction2")
      expect((((result as TranslationObject)["english"] as TranslationObject)["common"] as TranslationObject)["key2"]).toBe("translation2")
    })


    it("Should register the translation not in common for french and english", () => {
      const translations = {
        "french": {
          key: "traduction"
        },
        "english": {
          key: "translation"
        }
      }
      registerTranslations(translations, "test");
      const result = getTranslations();
      expect((result as TranslationObject)["french"]).not.toBeUndefined();
      expect((result as TranslationObject)["english"]).not.toBeUndefined();
      expect(((result as TranslationObject)["french"] as TranslationObject)["test"]).not.toBeUndefined();
      expect(((result as TranslationObject)["english"] as TranslationObject)["test"]).not.toBeUndefined();
      expect((((result as TranslationObject)["french"] as TranslationObject)["test"] as TranslationObject)["key"]).toBe("traduction")
      expect((((result as TranslationObject)["english"] as TranslationObject)["test"] as TranslationObject)["key"]).toBe("translation")
    })
  });
})
