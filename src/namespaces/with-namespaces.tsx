import * as React from 'react';
import Namespace from './namespace';

export default function withNamespaces<Type>(
  Component: React.ElementType,
  ...namespaces: string[]
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (props: Type) => <Namespace namespaces={namespaces}><Component {...props} /></Namespace>;
}
