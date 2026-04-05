// Box component
"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  handleClick: (index: number) => void;
  index: number;
}

const Box = ({ children, handleClick, index }: Props) => {
  return (
    <section className="box border-2" onClick={() => handleClick(index)}>
      {children}
    </section>
  );
};

export { Box };
