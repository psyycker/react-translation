import * as React from "react";
import {useContext, useMemo} from "react";

interface Props {
  children: React.ReactElement;
  namespace?: string;
  namespaces?: string[];
}

interface INamespaceContext {
  namespaces: string[];
}

export const NamespaceContext = React.createContext<INamespaceContext>({
  namespaces: []
})


export default function Namespace({children, namespace, namespaces}: Props): React.ReactElement<Props> {
  const {namespaces: namespacesCtx} = useContext(NamespaceContext);

  const processedNamespaces = useMemo(() => {
    if (namespace) {
      return [namespace, ...namespacesCtx];
    }
    if (namespaces && Array.isArray(namespaces)) {
      return [...namespaces.reverse(), ...namespacesCtx];
    }
    return namespacesCtx;
  }, [namespaces, namespace])

  return <NamespaceContext.Provider value={{namespaces: processedNamespaces}}>{children}</NamespaceContext.Provider>
}
