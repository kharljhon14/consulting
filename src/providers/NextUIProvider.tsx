import { NextUIProvider } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

export default function NextProvider({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
