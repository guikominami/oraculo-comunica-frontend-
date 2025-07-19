import React, { type ReactNode } from "react";

const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className='ml-4 mt-2'>{children}</p>;
};

export default Paragraph;
