import * as React from "react";
import { LayoutRoot } from "./SideLayoutStyles";

export function SideLayout({ children }: { children: any }) {
  return <LayoutRoot>{children}</LayoutRoot>;
}
