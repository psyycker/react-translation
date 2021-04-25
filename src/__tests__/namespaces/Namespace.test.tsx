import React, {useContext} from "react";
import Namespace, {NamespaceContext} from "../../namespaces/Namespace";
import {render, screen} from "@testing-library/react";

function NamespaceTester() {
  const { namespaces } = useContext(NamespaceContext);

  return <div>{namespaces && namespaces.length > 0 ? namespaces.join(":") : "nothing"}</div>
}

describe('Namespace', function () {
  it("Should have one namespace", () => {
    render(<Namespace namespace="toto"><NamespaceTester/></Namespace>)
    expect(() => screen.getByText("toto")).not.toThrow();
  })

  it("Should have two namespaces by double wrapping in the right order", () => {
    render(<Namespace namespace="toto"><Namespace namespace="tata"><NamespaceTester/></Namespace></Namespace>)
    expect(() => screen.getByText("tata:toto")).not.toThrow();
  })

  it("Should have two namespaces using array", () => {
    render(<Namespace namespaces={["toto", "tata"]}><NamespaceTester/></Namespace>)
    expect(() => screen.getByText("tata:toto")).not.toThrow();
  })

  it("Should not have any namespace", () => {
    render(<Namespace><NamespaceTester/></Namespace>)
    expect(() => screen.getByText("nothing")).not.toThrow();
  })
});
