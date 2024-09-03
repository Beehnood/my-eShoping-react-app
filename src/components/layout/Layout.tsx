import React from "react";
import Header from "../header/Header";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
