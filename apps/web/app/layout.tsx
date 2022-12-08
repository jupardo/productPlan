"use client";
import { PeriodsContextProvider } from "context";
import React, { ReactNode } from "react";
import { SideLayout } from "ui";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PeriodsContextProvider>
      <SideLayout>{children}</SideLayout>
    </PeriodsContextProvider>
  );
}
