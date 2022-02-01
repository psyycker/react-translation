import * as React from "react";
import reactTranslation from "../../index";
import {render, screen} from "@testing-library/react";

const Translation = reactTranslation.Translation

describe('withNamespaces', function () {
  const DummyComponent = () => {
    return <Translation translationKey="with" defaultValue="default"/>
  }
  it("Should inject the context", () => {
    reactTranslation.registerTranslations({
      "en-US": {
        with: "with"
      }
    })
    const Component = reactTranslation.withNamespaces(DummyComponent, "with");
    render(<Component/>);
    expect(() => screen.getByText("with")).not.toThrow();
  })
});
