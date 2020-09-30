import * as React from "react";
import { render as renderReact } from "@testing-library/react";
import { render as renderRN } from "@testing-library/react-native";
import {generateRNComponent, TranslationComponentWeb} from "../TranslationComponent";
import { Text } from "react-native";
import {registerTranslations, setTranslationConfig} from "../index";

const TranslationComponentRN = generateRNComponent(Text);

describe('Translation component', function () {

  beforeAll(() => {
    setTranslationConfig({
      defaultLocale: "en-US"
    })
    registerTranslations({
      "en-US": {
        "component": {
          "title": "myTranslation"
        }
      }
    });
  })

  describe('React', function () {
    it("Should do the translation", () => {
      const { asFragment, findByText } = renderReact(<TranslationComponentWeb translationKey="component.title" defaultValue="test" />)
      expect(asFragment()).toMatchSnapshot();
      expect(() => findByText("myTranslation")).not.toThrow();
    })
  });

  // Find a solution to that
  describe.skip('React Native', function () {
    it("Should do the translation", () => {
      const { findByText } = renderRN(<TranslationComponentRN translationKey="component.title" defaultValue="test" />)
      expect(() => findByText("myTranslation")).not.toThrow();
    })
  });
});
