/// <reference types="vite/client" />

declare module "*.svg?react" {
  import * as React from "react";

  type CSSModuleClasses = { readonly [key: string]: string };

  interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
    className?: string | CSSModuleClasses;
  }
  export const ReactComponent: React.FC<SVGComponentProps>;

  const src: string;
  export default src;
}
