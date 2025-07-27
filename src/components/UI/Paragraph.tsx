import React, { type ReactNode } from "react";

const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className='ml-2 mt-2 md:text-[1rem]'>{children}</p>;
};

export default Paragraph;
