import * as React from "react";
import {registerTranslations, Translation, withNamespaces} from "../../index";
import {render, screen} from "@testing-library/react";

describe('withNamespaces', function () {
  const DummyComponent = () => {
    return <Translation translationKey="with" defaultValue="default"/>
  }
  it("Should inject the context", () => {
    registerTranslations({
      "en-US": {
        with: "with"
      }
    })
    const Component = withNamespaces(DummyComponent, "with");
    render(<Component/>);
    expect(() => screen.getByText("with")).not.toThrow();
  })
});
