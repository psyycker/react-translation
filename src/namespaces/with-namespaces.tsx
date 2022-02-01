import * as React from 'react';
import Namespace from './namespace';

export default function withNamespaces<Type>(
  Component: React.ElementType,
  ...namespaces: string[]
) {
  return function (props: Type) {
    return <Namespace namespaces={namespaces}><Component {...props} /></Namespace>;
  };
}
