declare module 'react-router-hash-link' {
  import * as React from 'react';
  import { LinkProps } from 'react-router-dom';

  export interface HashLinkProps extends LinkProps {
    scroll?(element: HTMLElement): void;
    smooth?: boolean;
    to: string;
  }

  export const HashLink: React.FC<HashLinkProps>;
}
